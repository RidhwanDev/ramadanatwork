"use client";

import { useEffect, useState, useCallback } from "react";
import * as Tabs from "@radix-ui/react-tabs";
import { useRouter, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
import { roles, site } from "@/lib/content";
import { DoDont } from "./DoDont";
import { CopyLinkButton } from "./CopyLinkButton";

const STORAGE_KEY = "ramadan-role";

export function RoleTabs() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [activeRole, setActiveRole] = useState<string>("colleague");
  const [mounted, setMounted] = useState(false);

  // Initialize from URL or localStorage
  useEffect(() => {
    const urlRole = searchParams.get("role");
    const storedRole = typeof window !== "undefined" ? localStorage.getItem(STORAGE_KEY) : null;
    
    const initialRole = urlRole || storedRole || "colleague";
    if (roles.some(r => r.id === initialRole)) {
      setActiveRole(initialRole);
    }
    setMounted(true);
  }, [searchParams]);

  // Handle role change
  const handleRoleChange = useCallback((value: string) => {
    setActiveRole(value);
    
    // Persist to localStorage
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, value);
    }
    
    // Update URL without full navigation
    const params = new URLSearchParams(searchParams.toString());
    params.set("role", value);
    router.push(`?${params.toString()}`, { scroll: false });
  }, [router, searchParams]);

  if (!mounted) {
    return (
      <div className="animate-pulse">
        <div className="h-12 bg-sand-200 rounded-xl mb-6" />
        <div className="h-64 bg-sand-100 rounded-2xl" />
      </div>
    );
  }

  return (
    <section id="roles" className="section-spacing scroll-mt-20">
      <div className="section-container">
        <div className="text-center mb-8">
          <p className="text-lg text-night-600 mb-2">{site.hero.rolePrompt}</p>
        </div>

        <Tabs.Root value={activeRole} onValueChange={handleRoleChange}>
          <Tabs.List
            className="flex flex-wrap justify-center gap-2 p-1.5 bg-sand-100 rounded-xl mb-8"
            aria-label="Select your role"
          >
            {roles.map((role) => (
              <Tabs.Trigger
                key={role.id}
                value={role.id}
                className={cn(
                  "px-4 py-2.5 rounded-lg font-medium text-sm transition-all duration-200",
                  "focus:outline-none focus:ring-2 focus:ring-dusk-400 focus:ring-offset-2",
                  "data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:text-night-800",
                  "data-[state=inactive]:text-night-500 data-[state=inactive]:hover:text-night-700 data-[state=inactive]:hover:bg-sand-200/50"
                )}
              >
                {role.label}
              </Tabs.Trigger>
            ))}
          </Tabs.List>

          <p className="text-center text-night-600 mb-8 max-w-2xl mx-auto">
            {site.roleIntro}
          </p>

          {roles.map((role) => (
            <Tabs.Content
              key={role.id}
              value={role.id}
              className="animate-fade-in focus:outline-none"
            >
              <div className="card p-6 sm:p-8">
                <div className="flex items-start justify-between gap-4 mb-6">
                  <h2 className="font-display text-2xl font-semibold text-night-800">
                    {role.title}
                  </h2>
                  <CopyLinkButton sectionId={`role-${role.id}`} />
                </div>

                {role.intro && (
                  <p className="text-night-600 mb-6 text-lg">
                    {role.intro}
                  </p>
                )}

                {role.supportivePoints && (
                  <ul className="space-y-3 mb-6">
                    {role.supportivePoints.map((point, i) => (
                      <li key={i} className="flex gap-3 text-night-700">
                        <span className="text-crescent-500 flex-shrink-0">✦</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                )}

                {(role.dos || role.donts) && (
                  <DoDont dos={role.dos} donts={role.donts} />
                )}

                {/* Checklist */}
                <div className="mt-8 pt-6 border-t border-sand-200">
                  <h3 className="font-display text-lg font-semibold text-night-800 mb-4">
                    Quick checklist
                  </h3>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {role.checklist.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-night-700">
                        <span className="w-5 h-5 rounded border-2 border-sand-300 flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Tabs.Content>
          ))}
        </Tabs.Root>
      </div>
    </section>
  );
}
