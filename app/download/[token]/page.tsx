import { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Download Workplace Pack",
  description: "Download your purchased Workplace Pack files.",
};

// In production, this would validate the token against a database.
// For local development, we allow a special \"dev\" token so you can
// preview the download page and files without Stripe hooked up.
async function validateToken(token: string): Promise<boolean> {
  // Allow a fixed token in non-production environments for testing
  if (process.env.NODE_ENV !== "production" && token === "dev") {
    return true;
  }

  // TODO: Implement real token validation with database or KV store
  return false;
}

export default async function DownloadPage({
  params,
}: {
  params: { token: string };
}) {
  const isValid = await validateToken(params.token);

  if (!isValid) {
    notFound();
  }

  return (
    <div className="section-spacing">
      <div className="section-container max-w-3xl">
        <div className="card p-8">
          <h1 className="font-display text-3xl font-semibold text-night-800 mb-6">
            Download Your Workplace Pack
          </h1>

          <div className="space-y-4 mb-8">
            <div className="flex items-center justify-between p-4 bg-sand-50 rounded-lg border border-sand-200">
              <div className="flex items-center gap-3">
                <span className="text-2xl">📄</span>
                <div>
                  <h3 className="font-semibold text-night-800">
                    Manager Briefing Document
                  </h3>
                  <p className="text-sm text-night-600">
                    Sample text file (represents Word/PDF in production)
                  </p>
                </div>
              </div>
              <a
                href="/dev-workplace-pack/manager-briefing-sample.txt"
                download
                className="btn-primary"
              >
                Download sample
              </a>
            </div>

            <div className="flex items-center justify-between p-4 bg-sand-50 rounded-lg border border-sand-200 opacity-60">
              <div className="flex items-center gap-3">
                <span className="text-2xl">📋</span>
                <div>
                  <h3 className="font-semibold text-night-800">
                    HR Checklist + Email Templates
                  </h3>
                  <p className="text-sm text-night-600">
                    Preview coming soon — will be similar downloadable files.
                  </p>
                </div>
              </div>
              <button className="btn-secondary" disabled>
                Coming soon
              </button>
            </div>

            <div className="flex items-center justify-between p-4 bg-sand-50 rounded-lg border border-sand-200 opacity-60">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🖼️</span>
                <div>
                  <h3 className="font-semibold text-night-800">
                    Printable Posters
                  </h3>
                  <p className="text-sm text-night-600">
                    Preview coming soon — will include print‑ready PDFs.
                  </p>
                </div>
              </div>
              <button className="btn-secondary" disabled>
                Coming soon
              </button>
            </div>

            <div className="flex items-center justify-between p-4 bg-sand-50 rounded-lg border border-sand-200 opacity-60">
              <div className="flex items-center gap-3">
                <span className="text-2xl">📊</span>
                <div>
                  <h3 className="font-semibold text-night-800">
                    DEI Slide Deck
                  </h3>
                  <p className="text-sm text-night-600">
                    Preview coming soon — will be a PowerPoint or PDF deck.
                  </p>
                </div>
              </div>
              <button className="btn-secondary" disabled>
                Coming soon
              </button>
            </div>
          </div>

          <div className="bg-dusk-50 rounded-lg p-4 border border-dusk-200">
            <p className="text-sm text-night-600">
              <strong>Note:</strong> These files are for your organization&apos;s
              use only. Redistribution or resale is not permitted.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

