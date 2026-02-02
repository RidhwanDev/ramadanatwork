"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { cn } from "@/lib/utils";
import { site, diveDeeper } from "@/lib/content";

export function DiveDeeper() {
  return (
    <section id="dive-deeper" className="section-spacing scroll-mt-20 bg-night-900 text-sand-50">
      <div className="section-container">
        <div className="text-center mb-10">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-sand-50 mb-3">
            {site.diveDeeper.title}
          </h2>
          <p className="text-sand-300 max-w-2xl mx-auto">
            {site.diveDeeper.intro}
          </p>
        </div>

        <Accordion.Root type="single" collapsible className="space-y-3">
          {diveDeeper.sections.map((section) => (
            <Accordion.Item
              key={section.id}
              value={section.id}
              className="bg-night-800/50 rounded-xl border border-night-700"
            >
              <Accordion.Header className="overflow-hidden rounded-xl">
                <Accordion.Trigger
                  className={cn(
                    "w-full flex items-center justify-between gap-4 p-5 text-left rounded-t-xl",
                    "hover:bg-night-700/50 transition-colors duration-200",
                    "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-crescent-500 focus:ring-offset-night-900",
                    "group-data-[state=closed]:rounded-xl",
                    "group"
                  )}
                >
                  <div>
                    <h3 className="font-display text-lg font-semibold text-sand-50 mb-1">
                      {section.title}
                    </h3>
                    <p className="text-sand-400 text-sm">
                      {section.summary}
                    </p>
                  </div>
                  <span className="w-8 h-8 rounded-full bg-night-700 flex items-center justify-center flex-shrink-0 group-data-[state=open]:rotate-180 transition-transform duration-200">
                    <svg className="w-5 h-5 text-sand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="overflow-hidden rounded-b-xl data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
                <div className="px-5 pb-5 pt-2 border-t border-night-700">
                  <AccordionContent section={section} />
                </div>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}

function AccordionContent({ section }: { section: typeof diveDeeper.sections[0] }) {
  const content = section.content as Record<string, unknown>;

  // Month evolution section
  if (section.id === "month-evolution") {
    const data = content as {
      earlyDays: string[];
      midMonth: string[];
      lastTenNights: string[];
    };
    return (
      <div className="space-y-4">
        <div>
          <h4 className="text-crescent-400 font-semibold mb-2">Early days</h4>
          <ul className="space-y-2">
            {data.earlyDays.map((point, i) => (
              <li key={i} className="flex gap-2 text-sand-300">
                <span className="text-sand-500">•</span>
                {point}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-crescent-400 font-semibold mb-2">Mid-month</h4>
          <ul className="space-y-2">
            {data.midMonth.map((point, i) => (
              <li key={i} className="flex gap-2 text-sand-300">
                <span className="text-sand-500">•</span>
                {point}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-crescent-400 font-semibold mb-2">Last ten nights</h4>
          <ul className="space-y-2">
            {data.lastTenNights.map((point, i) => (
              <li key={i} className="flex gap-2 text-sand-300">
                <span className="text-sand-500">•</span>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  // Taraweeh section
  if (section.id === "taraweeh-sleep") {
    const data = content as { points: string[]; takeaways: string[] };
    return (
      <div className="space-y-4">
        <ul className="space-y-2">
          {data.points.map((point, i) => (
            <li key={i} className="flex gap-2 text-sand-300">
              <span className="text-sand-500">•</span>
              {point}
            </li>
          ))}
        </ul>
        <div className="bg-night-700/50 rounded-lg p-4">
          <h4 className="text-crescent-400 font-semibold mb-2">Practical takeaways</h4>
          <ul className="space-y-2">
            {data.takeaways.map((point, i) => (
              <li key={i} className="flex gap-2 text-sand-300">
                <span className="text-crescent-500">→</span>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  // Default: sections with just points
  const data = content as { points: string[] };
  if (data.points) {
    return (
      <ul className="space-y-2">
        {data.points.map((point, i) => (
          <li key={i} className="flex gap-2 text-sand-300">
            <span className="text-sand-500">•</span>
            {point}
          </li>
        ))}
      </ul>
    );
  }

  return null;
}
