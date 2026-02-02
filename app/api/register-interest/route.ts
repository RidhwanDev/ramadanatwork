import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { name, email } = await request.json();

    // Validate input
    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Send email notification
    const { data, error } = await resend.emails.send({
      from: "Ramadan at Work <noreply@ramadanatwork.com>",
      to: "ridhwan.developer@gmail.com",
      subject: "New Workplace Pack Interest Registration",
      html: `
        <h2>New Interest Registration</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Date:</strong> ${new Date().toLocaleString("en-GB", { timeZone: "Europe/London" })}</p>
      `,
      text: `
        New Interest Registration
        
        Name: ${name}
        Email: ${email}
        Date: ${new Date().toLocaleString("en-GB", { timeZone: "Europe/London" })}
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send notification email" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, messageId: data?.id });
  } catch (error) {
    console.error("Register interest error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
