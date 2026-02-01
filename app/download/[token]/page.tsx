import { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Download Workplace Pack",
  description: "Download your purchased Workplace Pack files.",
};

// In production, this would validate the token against a database
// For now, this is a placeholder structure
async function validateToken(token: string): Promise<boolean> {
  // TODO: Implement token validation with database
  // This should check if the token exists and is valid
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
                  <h3 className="font-semibold text-night-800">Manager Briefing Document</h3>
                  <p className="text-sm text-night-600">Word & PDF formats</p>
                </div>
              </div>
              <button className="btn-primary">
                Download
              </button>
            </div>

            <div className="flex items-center justify-between p-4 bg-sand-50 rounded-lg border border-sand-200">
              <div className="flex items-center gap-3">
                <span className="text-2xl">📋</span>
                <div>
                  <h3 className="font-semibold text-night-800">HR Checklist + Email Templates</h3>
                  <p className="text-sm text-night-600">Word & PDF formats</p>
                </div>
              </div>
              <button className="btn-primary">
                Download
              </button>
            </div>

            <div className="flex items-center justify-between p-4 bg-sand-50 rounded-lg border border-sand-200">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🖼️</span>
                <div>
                  <h3 className="font-semibold text-night-800">Printable Posters</h3>
                  <p className="text-sm text-night-600">A4 & A3 formats</p>
                </div>
              </div>
              <button className="btn-primary">
                Download
              </button>
            </div>

            <div className="flex items-center justify-between p-4 bg-sand-50 rounded-lg border border-sand-200">
              <div className="flex items-center gap-3">
                <span className="text-2xl">📊</span>
                <div>
                  <h3 className="font-semibold text-night-800">DEI Slide Deck</h3>
                  <p className="text-sm text-night-600">PowerPoint format</p>
                </div>
              </div>
              <button className="btn-primary">
                Download
              </button>
            </div>
          </div>

          <div className="bg-dusk-50 rounded-lg p-4 border border-dusk-200">
            <p className="text-sm text-night-600">
              <strong>Note:</strong> These files are for your organization&apos;s use only. 
              Redistribution or resale is not permitted.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
