"use client";

import Link from "next/link";
import { site } from "@/lib/content";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-sand-50/95 backdrop-blur-md border-b border-sand-200/50">
      <div className="section-container">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-2xl" aria-hidden="true">
              ☽
            </span>
            <span className="font-display text-xl font-semibold text-night-800 group-hover:text-dusk-600 transition-colors">
              {site.name}
            </span>
          </Link>

          <nav className="hidden sm:flex items-center gap-6">
            <Link href="/#essentials" className="text-sm font-medium text-night-600 hover:text-night-800 transition-colors">
              Essentials
            </Link>
            <Link href="/#roles" className="text-sm font-medium text-night-600 hover:text-night-800 transition-colors">
              By role
            </Link>
            <Link href="/#dive-deeper" className="text-sm font-medium text-night-600 hover:text-night-800 transition-colors">
              Dive deeper
            </Link>
            <Link href="/print" className="btn-ghost text-sm">
              Print
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
