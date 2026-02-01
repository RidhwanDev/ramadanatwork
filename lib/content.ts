import { z } from "zod";

import siteData from "@/content/site.json";
import rolesData from "@/content/roles.json";
import scriptsData from "@/content/scripts.json";
import faqData from "@/content/faq.json";
import resourcesData from "@/content/resources.json";
import diveDeeperData from "@/content/dive-deeper.json";

// Schemas
const SiteSchema = z.object({
  name: z.string(),
  tagline: z.string(),
  lastUpdated: z.string(),
  disclaimer: z.string(),
  meta: z.object({
    title: z.string(),
    description: z.string(),
  }),
  hero: z.object({
    h1: z.string(),
    subhead: z.string(),
    helperText: z.string(),
    rolePrompt: z.string(),
  }),
  essentials: z.object({
    title: z.string(),
    bullets: z.array(z.string()),
    cta: z.string(),
  }),
  prayerTimes: z.object({
    title: z.string(),
    helperText: z.string(),
    cityPlaceholder: z.string(),
    countryPlaceholder: z.string(),
    methodLabel: z.string(),
    fajrLabel: z.string(),
    maghribLabel: z.string(),
    footnote: z.string(),
  }),
  roleIntro: z.string(),
  notFasting: z.object({
    title: z.string(),
    body: z.string(),
    rules: z.array(z.string()),
    scripts: z.array(z.object({
      label: z.string(),
      text: z.string(),
    })),
  }),
  diveDeeper: z.object({
    title: z.string(),
    intro: z.string(),
  }),
  resources: z.object({
    title: z.string(),
    body: z.string(),
    printButton: z.string(),
    copyButton: z.string(),
    supportEmail: z.string(),
  }),
  workplacePack: z.object({
    title: z.string(),
    body: z.string(),
    button: z.string(),
  }),
  donation: z.object({
    title: z.string(),
    body: z.string(),
    button: z.string(),
  }),
  toasts: z.object({
    copied: z.string(),
    linkCopied: z.string(),
    copyError: z.string(),
  }),
  errors: z.object({
    prayerTimes: z.string(),
  }),
});

const RoleSchema = z.object({
  id: z.string(),
  label: z.string(),
  ogTitle: z.string(),
  title: z.string(),
  intro: z.string().optional(),
  supportivePoints: z.array(z.string()).optional(),
  dos: z.array(z.string()).optional(),
  donts: z.array(z.string()).optional(),
  checklist: z.array(z.string()),
});

const RolesSchema = z.object({
  roles: z.array(RoleSchema),
});

const ScriptsSchema = z.object({
  title: z.string(),
  intro: z.string(),
  categories: z.array(z.object({
    id: z.string(),
    title: z.string(),
    isNegative: z.boolean().optional(),
    scripts: z.array(z.string()),
  })),
});

const FAQSchema = z.object({
  title: z.string(),
  items: z.array(z.object({
    question: z.string(),
    answer: z.string(),
  })),
});

const ResourcesSchema = z.object({
  lastUpdated: z.string(),
  intro: z.string(),
  categories: z.array(z.object({
    title: z.string(),
    sources: z.array(z.object({
      name: z.string(),
      url: z.string(),
    })),
  })),
  supportEmail: z.string(),
});

const DiveDeeperSchema = z.object({
  sections: z.array(z.object({
    id: z.string(),
    title: z.string(),
    summary: z.string(),
    content: z.record(z.unknown()),
  })),
});

// Type exports
export type Site = z.infer<typeof SiteSchema>;
export type Role = z.infer<typeof RoleSchema>;
export type Scripts = z.infer<typeof ScriptsSchema>;
export type FAQ = z.infer<typeof FAQSchema>;
export type Resources = z.infer<typeof ResourcesSchema>;
export type DiveDeeper = z.infer<typeof DiveDeeperSchema>;

// Validated content exports
export const site = SiteSchema.parse(siteData);
export const roles = RolesSchema.parse(rolesData).roles;
export const scripts = ScriptsSchema.parse(scriptsData);
export const faq = FAQSchema.parse(faqData);
export const resources = ResourcesSchema.parse(resourcesData);
export const diveDeeper = DiveDeeperSchema.parse(diveDeeperData);

// Helper functions
export function getRoleById(id: string): Role | undefined {
  return roles.find((role) => role.id === id);
}

export function getRoleOgTitle(roleId: string | null): string {
  if (!roleId) return site.meta.title;
  const role = getRoleById(roleId);
  return role?.ogTitle || site.meta.title;
}
