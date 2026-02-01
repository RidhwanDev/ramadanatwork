import { Suspense } from "react";
import { site, faq } from "@/lib/content";
import { generateFAQSchema, generateWebsiteSchema } from "@/lib/seo";
import { Essentials } from "@/components/Essentials";
import { RoleTabs } from "@/components/RoleTabs";
import { NotFastingSection } from "@/components/NotFastingSection";
import { Scripts } from "@/components/Scripts";
import { DiveDeeper } from "@/components/DiveDeeper";
import { FAQ } from "@/components/FAQ";
import { PrayerTimesWidget } from "@/components/PrayerTimesWidget";
import { PrintCTA } from "@/components/PrintCTA";
import { WorkplacePackCTA } from "@/components/WorkplacePackCTA";

export default function HomePage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateWebsiteSchema()),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQSchema(faq.items)),
        }}
      />

      {/* Top Notice */}
      <div className="bg-night-800 text-sand-200 py-3">
        <div className="section-container">
          <p className="text-sm text-center">
            {site.disclaimer}
          </p>
        </div>
      </div>

      {/* Hero */}
      <section className="section-spacing pb-8">
        <div className="section-container text-center">
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-gradient mb-6 animate-fade-in">
            {site.hero.h1}
          </h1>
          <p className="text-xl sm:text-2xl text-night-600 max-w-3xl mx-auto mb-6 animate-slide-up opacity-0 stagger-1" style={{ animationFillMode: "forwards" }}>
            {site.hero.subhead}
          </p>
          <p className="text-night-500 max-w-xl mx-auto animate-slide-up opacity-0 stagger-2" style={{ animationFillMode: "forwards" }}>
            {site.hero.helperText}
          </p>
        </div>
      </section>

      {/* Essentials */}
      <Essentials />

      {/* Prayer Times Widget */}
      <section className="pb-8">
        <div className="section-container">
          <div className="max-w-xl mx-auto">
            <PrayerTimesWidget />
          </div>
        </div>
      </section>

      {/* Role Tabs */}
      <Suspense fallback={
        <div className="section-spacing">
          <div className="section-container">
            <div className="animate-pulse">
              <div className="h-12 bg-sand-200 rounded-xl mb-6 max-w-2xl mx-auto" />
              <div className="h-96 bg-sand-100 rounded-2xl" />
            </div>
          </div>
        </div>
      }>
        <RoleTabs />
      </Suspense>

      {/* Not Fasting Section */}
      <NotFastingSection />

      {/* Scripts */}
      <Scripts />

      {/* Print CTA */}
      <PrintCTA />

      {/* Dive Deeper */}
      <DiveDeeper />

      {/* FAQ */}
      <FAQ />

      {/* Workplace Pack & Donation CTAs */}
      <WorkplacePackCTA />
    </>
  );
}
