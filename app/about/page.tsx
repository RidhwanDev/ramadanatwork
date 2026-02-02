import { Metadata } from "next";
import Link from "next/link";
import { resources, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Ramadan at Work and our mission to make Ramadan support simple and respectful.",
};

export default function AboutPage() {
  return (
    <div className="section-spacing">
      <div className="section-container max-w-3xl">
        <h1 className="font-display text-4xl font-bold text-night-800 mb-6">
          About Ramadan at Work
        </h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-night-600 mb-8 leading-relaxed">
            {site.tagline}
          </p>

          <div className="card p-8 mb-8">
            <p className="text-night-700 leading-relaxed mb-6">
              This site exists to make Ramadan support feel simple and respectful — especially in workplaces. 
              It is not a religious authority, and it avoids assumptions about individual practice.
            </p>

            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="text-crescent-500 flex-shrink-0">✦</span>
                <span className="text-night-700">
                  <strong>Practical, non-judgmental guidance</strong> — We focus on what actually helps, 
                  without preaching or making assumptions.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-crescent-500 flex-shrink-0">✦</span>
                <span className="text-night-700">
                  <strong>Privacy-first</strong> — We never ask why someone is or isn&apos;t fasting. 
                  That&apos;s nobody&apos;s business.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-crescent-500 flex-shrink-0">✦</span>
                <span className="text-night-700">
                  <strong>Designed for easy sharing and printing</strong> — Because the best way to 
                  spread respectful support is to make it easy to share.
                </span>
              </li>
            </ul>
          </div>

          <div className="card p-8 bg-sand-50">
            <h2 className="font-display text-xl font-semibold text-night-800 mb-4">
              How to use this guide
            </h2>
            <p className="text-night-600 mb-4">
              This guide is designed to be:
            </p>
            <ul className="space-y-2 text-night-600">
              <li>• Shared with colleagues, managers, and HR teams</li>
              <li>• Printed as a one-pager for workplace distribution</li>
              <li>• Used as a reference when planning meetings, socials, or team events</li>
              <li>• Referenced when you&apos;re not sure what to say or do</li>
            </ul>
          </div>

          <div className="card p-8 mt-8 bg-dusk-50 border-dusk-200">
          <h2 className="font-display text-lg font-semibold text-night-800 mb-3">
            Feedback & Suggestions
          </h2>
          <p className="text-night-600 mb-4">
            If you spot an issue or want to suggest an improvement, we&apos;d love to hear from you.
          </p>
          <a
            href={`mailto:${resources.supportEmail}?subject=About Ramadan at Work`}
            className="link font-medium"
          >
            {resources.supportEmail}
          </a>
        </div>
          <div className="mt-8 text-center">
            <Link href="/sources" className="btn-primary">
              See sources and last updated →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
