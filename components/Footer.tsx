import Link from "next/link";
import { site } from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-night-900 text-sand-200 mt-auto">
      <div className="section-container py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl text-crescent-500">☽</span>
              <span className="font-display text-lg font-semibold text-sand-50">
                {site.name}
              </span>
            </div>
            <p className="text-sm text-sand-400 leading-relaxed">
              {site.tagline}
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-display font-semibold text-sand-50 mb-4">
              Quick links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-sand-400 hover:text-sand-200 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/print" className="text-sand-400 hover:text-sand-200 transition-colors">
                  Print one-pager
                </Link>
              </li>
              <li>
                <Link href="/workplace-pack" className="text-sand-400 hover:text-sand-200 transition-colors">
                  Workplace Pack
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sand-400 hover:text-sand-200 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/sources" className="text-sand-400 hover:text-sand-200 transition-colors">
                  Sources
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-display font-semibold text-sand-50 mb-4">
              Legal
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="text-sand-400 hover:text-sand-200 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sand-400 hover:text-sand-200 transition-colors">
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-night-700 mt-10 pt-6 text-center text-sm text-sand-500">
          <p>Last updated: {site.lastUpdated}</p>
          <p className="mt-1">
            Built with care. Not medical or legal advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
