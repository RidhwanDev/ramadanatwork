import { site } from "@/lib/content";
import { CopyButton } from "./CopyButton";

export function NotFastingSection() {
  return (
    <section id="not-fasting" className="section-spacing scroll-mt-20">
      <div className="section-container">
        <div className="card p-6 sm:p-8 lg:p-10 border-2 border-dusk-200 bg-gradient-to-br from-dusk-50/50 to-sand-50">
          <div className="flex items-start gap-4 mb-6">
            <span className="w-12 h-12 rounded-full bg-dusk-100 flex items-center justify-center flex-shrink-0">
              <span className="text-2xl">🤫</span>
            </span>
            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-night-800 mb-2">
                {site.notFasting.title}
              </h2>
              <p className="text-night-600 text-lg">
                {site.notFasting.body}
              </p>
            </div>
          </div>

          {/* Rules */}
          <div className="bg-white/70 rounded-xl p-5">
            <ul className="space-y-3">
              {site.notFasting.rules.map((rule, i) => (
                <li key={i} className="flex gap-3 items-start text-night-800 font-medium">
                  <span className="text-red-500 flex-shrink-0">✗</span>
                  {rule}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
