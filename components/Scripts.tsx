import { scripts } from "@/lib/content";
import { CopyButton } from "./CopyButton";

export function Scripts() {
  return (
    <section id="scripts" className="section-spacing scroll-mt-20 bg-sand-100/50">
      <div className="section-container">
        <div className="text-center mb-10">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-night-800 mb-3">
            {scripts.title}
          </h2>
          <p className="text-night-600 max-w-xl mx-auto">
            {scripts.intro}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {scripts.categories.map((category) => (
            <div
              key={category.id}
              className={`card p-6 ${
                category.isNegative 
                  ? "border-red-200 bg-red-50/50" 
                  : ""
              }`}
            >
              <h3 className={`font-display text-lg font-semibold mb-4 ${
                category.isNegative ? "text-red-700" : "text-night-800"
              }`}>
                {category.title}
              </h3>

              <ul className="space-y-3">
                {category.scripts.map((script, i) => (
                  <li
                    key={i}
                    className={`flex items-start justify-between gap-3 p-3 rounded-lg ${
                      category.isNegative
                        ? "bg-red-100/50 text-red-800"
                        : "bg-sand-50 text-night-700"
                    }`}
                  >
                    <span className="flex gap-2 items-start">
                      {category.isNegative ? (
                        <span className="text-red-400 flex-shrink-0">✗</span>
                      ) : (
                        <span className="text-dusk-400 flex-shrink-0">&ldquo;</span>
                      )}
                      <span className={category.isNegative ? "" : "italic"}>
                        {script}
                      </span>
                      {!category.isNegative && (
                        <span className="text-dusk-400 flex-shrink-0">&rdquo;</span>
                      )}
                    </span>
                    {!category.isNegative && (
                      <CopyButton text={script} variant="compact" />
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
