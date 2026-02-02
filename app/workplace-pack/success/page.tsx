import { resources } from "@/lib/content";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Purchase Successful",
  description: "Thank you for purchasing the Workplace Pack.",
};

export default function SuccessPage() {
  return (
    <div className="section-spacing">
      <div className="section-container max-w-2xl">
        <div className="card p-8 text-center">
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          
          <h1 className="font-display text-3xl font-semibold text-night-800 mb-4">
            Thank you for your purchase!
          </h1>
          
          <p className="text-night-600 mb-6">
            Your Workplace Pack download link has been sent to your email address.
            Please check your inbox (and spam folder) for the email with your download instructions.
          </p>

          <div className="bg-sand-100 rounded-lg p-4 mb-6 text-left">
            <h2 className="font-semibold text-night-800 mb-2">What happens next?</h2>
            <ol className="space-y-2 text-sm text-night-600 list-decimal list-inside">
              <li>Check your email for the download link</li>
              <li>Click the link to access your files</li>
              <li>Download and customize the templates for your organization</li>
            </ol>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="btn-primary">
              Back to main guide
            </Link>
            <a
              href={`mailto:${resources.supportEmail}?subject=Workplace Pack Download Issue`}
              className="btn-secondary"
            >
              Need help?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
