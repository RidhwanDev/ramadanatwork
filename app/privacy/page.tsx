import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Ramadan at Work.",
};

export default function PrivacyPage() {
  return (
    <div className="section-spacing">
      <div className="section-container max-w-3xl">
        <h1 className="font-display text-4xl font-bold text-night-800 mb-6">
          Privacy Policy
        </h1>

        <div className="prose prose-lg max-w-none">
          <div className="card p-8 space-y-6">
            <section>
              <h2 className="font-display text-xl font-semibold text-night-800 mb-3">
                Last Updated
              </h2>
              <p className="text-night-600">February 2026</p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-night-800 mb-3">
                Information We Collect
              </h2>
              <p className="text-night-600 mb-3">
                We collect minimal information to provide and improve our service:
              </p>
              <ul className="space-y-2 text-night-600 list-disc list-inside">
                <li>Usage data through privacy-friendly analytics (no personal identification)</li>
                <li>Email addresses when you purchase the Workplace Pack (processed by Stripe)</li>
                <li>Payment information (handled securely by Stripe, not stored by us)</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-night-800 mb-3">
                Analytics
              </h2>
              <p className="text-night-600">
                We use privacy-friendly analytics (such as Vercel Analytics or Plausible) that do not 
                use cookies or track individuals. We only see aggregated, anonymized data about page views.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-night-800 mb-3">
                Payment Processing
              </h2>
              <p className="text-night-600 mb-3">
                Payments are processed by Stripe. We receive:
              </p>
              <ul className="space-y-2 text-night-600 list-disc list-inside">
                <li>Your email address (to send download links)</li>
                <li>Payment status and transaction details (for fulfillment)</li>
              </ul>
              <p className="text-night-600 mt-3">
                We do not store or have access to your full payment details. Stripe&apos;s privacy 
                policy applies to payment data:{" "}
                <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer" className="link">
                  stripe.com/privacy
                </a>
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-night-800 mb-3">
                Email Communications
              </h2>
              <p className="text-night-600">
                We use Resend to send download links for purchased Workplace Packs. We only email you 
                to fulfill your purchase. We do not send marketing emails or share your email with third parties.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-night-800 mb-3">
                Data Sharing
              </h2>
              <p className="text-night-600">
                We do not sell, rent, or share your personal information with third parties except as 
                necessary to provide our service (Stripe for payments, Resend for emails).
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-night-800 mb-3">
                Your Rights
              </h2>
              <p className="text-night-600 mb-3">
                You have the right to:
              </p>
              <ul className="space-y-2 text-night-600 list-disc list-inside">
                <li>Request access to your personal data</li>
                <li>Request correction or deletion of your data</li>
                <li>Opt out of analytics (via browser settings or extensions)</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-night-800 mb-3">
                Contact
              </h2>
              <p className="text-night-600">
                For privacy questions or requests, contact us at:{" "}
                <a href="mailto:hello@ramadanatwork.com" className="link">
                  hello@ramadanatwork.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
