import { Suspense } from "react";
import Link from "next/link";
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
      <section className="section-spacing py-10">
        <div className="section-container text-center">
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-gradient mb-6 animate-fade-in">
            {site.hero.h1}
          </h1>
          <p className="text-xl sm:text-2xl text-night-600 max-w-3xl mx-auto mb-6 animate-slide-up opacity-0 stagger-1" style={{ animationFillMode: "forwards" }}>
            {site.hero.subhead}
          </p>
          <p className="text-night-500 max-w-xl mx-auto mb-8 animate-slide-up opacity-0 stagger-2" style={{ animationFillMode: "forwards" }}>
            {site.hero.helperText}
          </p>
          
          {/* Hero CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up opacity-0 stagger-3" style={{ animationFillMode: "forwards" }}>
            <Link href="/print" className="btn-primary">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
              </svg>
              Print one-pager
            </Link>
            <Link href="/workplace-pack" className="btn-secondary">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              Get Workplace Pack
            </Link>
          </div>
        </div>
      </section>

      {/* Essentials */}
      <Essentials />

      {/* Prayer Times Widget */}
      {/* <section className="pb-8">
        <div className="section-container">
          <div className="max-w-xl mx-auto">
            <PrayerTimesWidget />
          </div>
        </div>
      </section> */}

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

      {/* Scripts */}
      <Scripts />
      
      {/* Not Fasting Section */}
      <NotFastingSection />


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
