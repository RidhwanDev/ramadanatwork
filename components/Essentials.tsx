import { site } from "@/lib/content";

export function Essentials() {
  return (
    <section id="essentials" className="section-spacing scroll-mt-20">
      <div className="section-container">
        <div className="card p-6 sm:p-8 lg:p-10">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-night-800 mb-6">
            {site.essentials.title}
          </h2>

          <ul className="space-y-4">
            {site.essentials.bullets.map((bullet, i) => (
              <li 
                key={i} 
                className="flex gap-4 items-start animate-slide-up opacity-0"
                style={{ animationDelay: `${i * 0.1}s`, animationFillMode: "forwards" }}
              >
                <span className="w-8 h-8 rounded-full bg-crescent-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-crescent-600 font-semibold text-sm">{i + 1}</span>
                </span>
                <p className="text-night-700 text-lg leading-relaxed">
                  {bullet}
                </p>
              </li>
            ))}
          </ul>

          <p className="mt-8 text-center text-night-600 font-medium">
            {site.essentials.cta}
          </p>
        </div>
      </div>
    </section>
  );
}
