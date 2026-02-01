import { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Workplace Pack",
  description: "Ready-to-use templates for managers and HR: a short briefing, checklists, and printable posters.",
};

export default function WorkplacePackPage() {
  return (
    <div className="section-spacing">
      <div className="section-container max-w-4xl">
        {/* Hero */}
        <div className="text-center mb-12">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-night-800 mb-4">
            {site.workplacePack.title}
          </h1>
          <p className="text-xl text-night-600 max-w-2xl mx-auto">
            {site.workplacePack.body}
          </p>
        </div>

        {/* What's Included */}
        <section className="card p-8 mb-8">
          <h2 className="font-display text-2xl font-semibold text-night-800 mb-6">
            What&apos;s included
          </h2>
          <ul className="space-y-4">
            <li className="flex gap-4">
              <span className="w-8 h-8 rounded-full bg-dusk-100 flex items-center justify-center flex-shrink-0">
                <span className="text-dusk-600">📄</span>
              </span>
              <div>
                <h3 className="font-semibold text-night-800 mb-1">Editable Manager Briefing Document</h3>
                <p className="text-night-600">A concise, professional document explaining Ramadan basics, what changes at work, and how to support without assumptions. Fully editable Word/PDF format.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="w-8 h-8 rounded-full bg-dusk-100 flex items-center justify-center flex-shrink-0">
                <span className="text-dusk-600">📋</span>
              </span>
              <div>
                <h3 className="font-semibold text-night-800 mb-1">HR Checklist + Email Templates</h3>
                <p className="text-night-600">Ready-to-use checklists for HR teams and email templates for internal communications. Customizable for your organization.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="w-8 h-8 rounded-full bg-dusk-100 flex items-center justify-center flex-shrink-0">
                <span className="text-dusk-600">🖼️</span>
              </span>
              <div>
                <h3 className="font-semibold text-night-800 mb-1">Printable Posters</h3>
                <p className="text-night-600">Professional, workplace-appropriate posters summarizing key points. Print-ready in A4 and A3 formats.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="w-8 h-8 rounded-full bg-dusk-100 flex items-center justify-center flex-shrink-0">
                <span className="text-dusk-600">📊</span>
              </span>
              <div>
                <h3 className="font-semibold text-night-800 mb-1">Short Slide Deck (Optional)</h3>
                <p className="text-night-600">A brief presentation deck for DEI teams to share with leadership or in team meetings.</p>
              </div>
            </li>
          </ul>
        </section>

        {/* Who It's For */}
        <section className="card p-8 mb-8">
          <h2 className="font-display text-2xl font-semibold text-night-800 mb-4">
            Who it&apos;s for
          </h2>
          <ul className="space-y-3 text-night-600">
            <li className="flex gap-3">
              <span className="text-dusk-500">•</span>
              <span>HR and DEI teams looking for ready-to-use resources</span>
            </li>
            <li className="flex gap-3">
              <span className="text-dusk-500">•</span>
              <span>Line managers who want to support their teams effectively</span>
            </li>
            <li className="flex gap-3">
              <span className="text-dusk-500">•</span>
              <span>Organizations committed to inclusive workplace practices</span>
            </li>
            <li className="flex gap-3">
              <span className="text-dusk-500">•</span>
              <span>Anyone who wants to share professional, respectful guidance</span>
            </li>
          </ul>
        </section>

        {/* Pricing */}
        <section className="card p-8 mb-8 bg-gradient-to-br from-dusk-50 to-sand-50 border-dusk-200">
          <h2 className="font-display text-2xl font-semibold text-night-800 mb-6">
            Pricing
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 border border-sand-200">
              <h3 className="font-display text-xl font-semibold text-night-800 mb-2">Individual</h3>
              <p className="text-3xl font-bold text-dusk-600 mb-4">£19</p>
              <p className="text-night-600 text-sm mb-4">One-time purchase for a single workplace or team.</p>
              <button className="btn-primary w-full">
                Buy Individual Pack
              </button>
            </div>
            <div className="bg-white rounded-xl p-6 border-2 border-dusk-300">
              <div className="inline-block bg-dusk-600 text-white text-xs font-semibold px-3 py-1 rounded-full mb-2">
                POPULAR
              </div>
              <h3 className="font-display text-xl font-semibold text-night-800 mb-2">Team License</h3>
              <p className="text-3xl font-bold text-dusk-600 mb-4">£49</p>
              <p className="text-night-600 text-sm mb-4">For organizations with multiple teams or departments.</p>
              <button className="btn-primary w-full">
                Buy Team License
              </button>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="card p-8 mb-8">
          <h2 className="font-display text-2xl font-semibold text-night-800 mb-6">
            FAQ
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-night-800 mb-2">What format are the files?</h3>
              <p className="text-night-600">Files are provided in both editable formats (Word, PowerPoint) and print-ready PDFs.</p>
            </div>
            <div>
              <h3 className="font-semibold text-night-800 mb-2">Can I customize the templates?</h3>
              <p className="text-night-600">Yes, all templates are fully editable. You can add your organization&apos;s branding, adjust content, and modify as needed.</p>
            </div>
            <div>
              <h3 className="font-semibold text-night-800 mb-2">What&apos;s the license?</h3>
              <p className="text-night-600">You can use the templates within your organization. Redistribution or resale is not permitted.</p>
            </div>
            <div>
              <h3 className="font-semibold text-night-800 mb-2">What if my organization can&apos;t pay?</h3>
              <p className="text-night-600">
                We offer sponsored access for organizations that cannot afford the pack.{" "}
                <a href={`mailto:${site.resources.supportEmail}?subject=Sponsored Workplace Pack Request`} className="link">
                  Email us
                </a>{" "}
                to request sponsored access.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center">
          <Link href="/" className="link">
            ← Back to main guide
          </Link>
        </div>
      </div>
    </div>
  );
}
