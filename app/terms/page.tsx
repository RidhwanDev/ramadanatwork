import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of use for Ramadan at Work.",
};

export default function TermsPage() {
  return (
    <div className="section-spacing">
      <div className="section-container max-w-3xl">
        <h1 className="font-display text-4xl font-bold text-night-800 mb-6">
          Terms of Use
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
                Use of This Site
              </h2>
              <p className="text-night-600">
                This website provides practical guidance about supporting colleagues during Ramadan. 
                The content is for informational purposes only and is not medical, legal, or religious advice.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-night-800 mb-3">
                Not Medical or Legal Advice
              </h2>
              <p className="text-night-600">
                This guide is not a substitute for professional medical, legal, or religious guidance. 
                If you have health concerns, legal questions, or religious questions, please consult 
                appropriate professionals.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-night-800 mb-3">
                Free Content
              </h2>
              <p className="text-night-600">
                The main guide on this website is free to use, share, and print for personal and 
                workplace purposes. You may:
              </p>
              <ul className="space-y-2 text-night-600 list-disc list-inside mt-3">
                <li>Share links to this website</li>
                <li>Print pages for internal workplace use</li>
                <li>Reference this content in your own materials (with attribution)</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-night-800 mb-3">
                Workplace Pack License
              </h2>
              <p className="text-night-600 mb-3">
                When you purchase the Workplace Pack, you receive a license to:
              </p>
              <ul className="space-y-2 text-night-600 list-disc list-inside">
                <li>Use the templates within your organization</li>
                <li>Customize and edit the templates for your needs</li>
                <li>Share the customized versions internally</li>
              </ul>
              <p className="text-night-600 mt-3">
                You may not:
              </p>
              <ul className="space-y-2 text-night-600 list-disc list-inside">
                <li>Resell or redistribute the templates</li>
                <li>Share the original templates with other organizations</li>
                <li>Use the templates to create competing products</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-night-800 mb-3">
                Refunds
              </h2>
              <p className="text-night-600">
                Due to the digital nature of the Workplace Pack, we do not offer refunds. If you 
                experience technical issues accessing your purchase, please contact us and we&apos;ll help resolve it.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-night-800 mb-3">
                Disclaimer of Warranties
              </h2>
              <p className="text-night-600">
                This website and its content are provided &quot;as is&quot; without warranties of any kind. 
                We do not guarantee accuracy, completeness, or suitability for any particular purpose.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-night-800 mb-3">
                Contact
              </h2>
              <p className="text-night-600">
                For questions about these terms, contact us at:{" "}
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
