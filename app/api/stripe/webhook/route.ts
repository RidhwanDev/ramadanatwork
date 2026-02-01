import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
  apiVersion: "2024-12-18.acacia",
});

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET || "";

export async function POST(request: NextRequest) {
  const body = await request.text();
  const signature = request.headers.get("stripe-signature");

  if (!signature) {
    return NextResponse.json(
      { error: "No signature" },
      { status: 400 }
    );
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch (err) {
    console.error("Webhook signature verification failed:", err);
    return NextResponse.json(
      { error: "Invalid signature" },
      { status: 400 }
    );
  }

  // Handle the event
  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    
    // TODO: Implement token generation and email sending
    // 1. Generate a unique token
    // 2. Store token in database (Vercel KV or Postgres)
    // 3. Send email via Resend with download link
    
    console.log("Payment successful:", session.id);
    console.log("Customer email:", session.customer_email);
    
    // Placeholder for actual implementation:
    // const token = generateToken();
    // await storeToken(token, session.id);
    // await sendDownloadEmail(session.customer_email, token);
  }

  return NextResponse.json({ received: true });
}
