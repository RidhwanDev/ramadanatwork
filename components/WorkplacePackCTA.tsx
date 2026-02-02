import Link from "next/link";
import { site } from "@/lib/content";

export function WorkplacePackCTA() {
  return (
    <section className="section-spacing">
      <div className="section-container">
        <div className="grid md:grid-cols-1 gap-6">
          {/* Workplace Pack */}
          <div className="card p-6 sm:p-8 bg-gradient-to-br from-dusk-100/50 to-sand-50 border-dusk-200">
            <div className="flex items-start gap-4 mb-4">
              <span className="w-12 h-12 rounded-xl bg-dusk-200 flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">📦</span>
              </span>
              <div>
                <h3 className="font-display text-xl font-semibold text-night-800 mb-1">
                  {site.workplacePack.title}
                </h3>
                <p className="text-night-600">
                  {site.workplacePack.body}
                </p>
              </div>
            </div>
            <Link href="/workplace-pack" className="btn-primary w-full text-center">
              {site.workplacePack.button}
            </Link>
          </div>

          {/* Donation */}
          {/* <div className="card p-6 sm:p-8 bg-gradient-to-br from-crescent-500/10 to-sand-50 border-crescent-300/50">
            <div className="flex items-start gap-4 mb-4">
              <span className="w-12 h-12 rounded-xl bg-crescent-100 flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">💛</span>
              </span>
              <div>
                <h3 className="font-display text-xl font-semibold text-night-800 mb-1">
                  {site.donation.title}
                </h3>
                <p className="text-night-600">
                  {site.donation.body}
                </p>
              </div>
            </div>
            <a
              href="#donate"
              className="btn-secondary w-full text-center"
            >
              {site.donation.button}
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
}
