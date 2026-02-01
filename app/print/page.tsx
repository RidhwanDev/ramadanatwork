import { Metadata } from "next";
import { site, roles } from "@/lib/content";
import { PrintButton } from "@/components/PrintButton";

export const metadata: Metadata = {
  title: "Print One-Pager",
  description: "A printable one-page guide to supporting colleagues during Ramadan.",
};

export default function PrintPage() {
  const colleagueRole = roles.find(r => r.id === "colleague");
  const managerRole = roles.find(r => r.id === "manager");

  return (
    <div className="max-w-3xl mx-auto px-8 py-12 print:px-0 print:py-0">
      {/* Print Header */}
      <div className="print-header hidden print:block mb-8">
        <h1 className="font-display text-3xl font-bold">{site.name}</h1>
        <p className="text-night-600">{site.tagline}</p>
      </div>

      {/* Screen Header */}
      <div className="print:hidden mb-8 text-center">
        <h1 className="font-display text-3xl font-bold text-night-800 mb-4">{site.name}</h1>
        <p className="text-night-600 mb-6">{site.tagline}</p>
        <PrintButton />
      </div>

      {/* In 60 Seconds */}
      <section className="mb-8">
        <h2 className="font-display text-xl font-semibold text-night-800 mb-3 border-b border-sand-300 pb-2">
          {site.essentials.title}
        </h2>
        <ul className="space-y-2 text-sm">
          {site.essentials.bullets.map((bullet, i) => (
            <li key={i} className="flex gap-2">
              <span className="text-crescent-600 font-semibold">{i + 1}.</span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* For Colleagues */}
      {colleagueRole && (
        <section className="mb-8">
          <h2 className="font-display text-xl font-semibold text-night-800 mb-3 border-b border-sand-300 pb-2">
            For Colleagues
          </h2>
          <div className="grid grid-cols-2 gap-6 text-sm">
            <div>
              <h3 className="font-semibold text-green-700 mb-2">Do</h3>
              <ul className="space-y-1">
                {colleagueRole.dos?.slice(0, 4).map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-green-600">✓</span>
                    <span>{item.replace(/^Do /, "")}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-red-700 mb-2">Don&apos;t</h3>
              <ul className="space-y-1">
                {colleagueRole.donts?.map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-red-500">✗</span>
                    <span>{item.replace(/^Don't /, "")}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* For Managers */}
      {managerRole && (
        <section className="mb-8">
          <h2 className="font-display text-xl font-semibold text-night-800 mb-3 border-b border-sand-300 pb-2">
            For Managers
          </h2>
          <div className="grid grid-cols-2 gap-6 text-sm">
            <div>
              <h3 className="font-semibold text-green-700 mb-2">Do</h3>
              <ul className="space-y-1">
                {managerRole.dos?.map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-green-600">✓</span>
                    <span>{item.replace(/^Do /, "")}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-red-700 mb-2">Don&apos;t</h3>
              <ul className="space-y-1">
                {managerRole.donts?.map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-red-500">✗</span>
                    <span>{item.replace(/^Don't /, "")}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* Learn More */}
      <section className="text-center border-t border-sand-300 pt-6">
        <p className="text-sm text-night-600 mb-2">
          Full guide with scripts, FAQs, and deeper context:
        </p>
        <p className="font-display font-semibold text-night-800">
          ramadanatwork.com
        </p>
      </section>

      {/* Print Footer */}
      <div className="print-footer hidden print:block">
        <p>ramadanatwork.com · Last updated: {site.lastUpdated}</p>
      </div>
    </div>
  );
}
