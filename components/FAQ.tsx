"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { cn } from "@/lib/utils";
import { faq } from "@/lib/content";

export function FAQ() {
  return (
    <section id="faq" className="section-spacing scroll-mt-20">
      <div className="section-container">
        <div className="text-center mb-10">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-night-800 mb-3">
            {faq.title}
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion.Root type="single" collapsible className="space-y-3">
            {faq.items.map((item, index) => (
              <Accordion.Item
                key={index}
                value={`faq-${index}`}
                className="card rounded-xl border"
              >
                <Accordion.Header className="overflow-hidden rounded-xl">
                  <Accordion.Trigger
                    className={cn(
                      "w-full flex items-center justify-between gap-4 p-5 text-left rounded-t-xl",
                      "hover:bg-sand-50 transition-colors duration-200",
                      "group-data-[state=closed]:rounded-xl",
                      "group"
                    )}
                  >
                    <h3 className="font-display text-lg font-medium text-night-800">
                      {item.question}
                    </h3>
                    <span className="w-6 h-6 rounded-full bg-sand-100 flex items-center justify-center flex-shrink-0 group-data-[state=open]:rotate-180 transition-transform duration-200">
                      <svg className="w-4 h-4 text-night-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden rounded-b-xl data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
                  <div className="px-5 pb-5 pt-0">
                    <p 
                      className="text-night-600 leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: item.answer }}
                    />
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
      </div>
    </section>
  );
}
