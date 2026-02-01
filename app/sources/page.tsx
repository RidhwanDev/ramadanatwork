import { Metadata } from "next";
import { resources } from "@/lib/content";

export const metadata: Metadata = {
  title: "Sources & Updates",
  description: "Citations and sources for the Ramadan at Work guide.",
};

export default function SourcesPage() {
  return (
    <div className="section-spacing">
      <div className="section-container max-w-3xl">
        <h1 className="font-display text-4xl font-bold text-night-800 mb-6">
          Sources & Updates
        </h1>

        <div className="card p-8 mb-8">
          <p className="text-night-600 mb-6 leading-relaxed">
            {resources.intro}
          </p>

          <div className="bg-sand-50 rounded-lg p-4 mb-8 border border-sand-200">
            <p className="text-sm font-semibold text-night-800 mb-1">Last updated</p>
            <p className="text-lg text-night-700">{resources.lastUpdated}</p>
          </div>
        </div>

        <div className="space-y-8">
          {resources.categories.map((category, i) => (
            <div key={i} className="card p-8">
              <h2 className="font-display text-xl font-semibold text-night-800 mb-4">
                {category.title}
              </h2>
              <ul className="space-y-3">
                {category.sources.map((source, j) => (
                  <li key={j}>
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link text-night-700 hover:text-dusk-600"
                    >
                      {source.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="card p-8 mt-8 bg-dusk-50 border-dusk-200">
          <h2 className="font-display text-lg font-semibold text-night-800 mb-3">
            Feedback & Suggestions
          </h2>
          <p className="text-night-600 mb-4">
            If you spot an issue or want to suggest an improvement, we&apos;d love to hear from you.
          </p>
          <a
            href={`mailto:${resources.supportEmail}?subject=Feedback on Ramadan at Work`}
            className="link font-medium"
          >
            {resources.supportEmail}
          </a>
        </div>
      </div>
    </div>
  );
}
