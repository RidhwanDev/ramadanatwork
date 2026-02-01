# RamadanAtWork.com — Build Instructions (for Opus 4.5)

## 0) Product decision (what we’re building)
A fast, web-based “Non-Fasting Companion” for Ramadan — designed primarily for UK workplaces (but globally usable). It behaves like a calm, practical guidance hub:
- First screen: “What should I do differently today?” (60-second essentials)
- Next: role-based guidance (Colleague / Manager / HR-DEI / Friend-Partner / Not fasting)
- Then: a “Dive deeper” knowledge layer (early days vs last 10 nights, prayer, sleep, social dynamics)
- Finally: “Print / Share / Sources” for workplace distribution

This must be:
- extremely scannable (plain language, short sections)
- respectful and non-assumptive (explicitly states variation and privacy)
- accessible (WCAG 2.2 AA target; proper ARIA patterns for tabs/accordions)
- SEO-optimised for high-intent searches like “Ramadan at work”, “support colleagues Ramadan”, etc.
- shareable in Slack/Teams/WhatsApp/LinkedIn with strong OpenGraph previews

Primary audiences:
1) Non-Muslim colleagues (etiquette + practical tips)
2) Line managers (scheduling + supporting without assumptions)
3) HR/DEI (policy-aligned pack + templates)
4) Friends/partners (social support + planning evenings)
5) Muslims who are not fasting (validation + privacy + boundary scripts)

## 1) Monetisation decision (best model)
Use a “public-good freemium” model:
- Core guide: free (keeps trust high and maximises sharing internally)
- Paid add-on: “Workplace Pack” (one-time purchase) containing downloadable templates:
  - editable manager briefing doc
  - printable poster(s)
  - HR checklist + email templates
  - short slide deck for DEI (optional)
- Optional: donation button (“Support the guide”) as secondary monetisation

Implementation detail:
- Use Stripe Payment Links (fastest) + webhook to provision access.
- After purchase, user receives an email with a unique download link (token).
- Donations can also be Stripe Payment Link.

Pricing suggestion:
- Individual Workplace Pack: £19
- Team licence: £49 (or “pay what you want” slider if desired later)
Keep pricing simple at launch.

## 2) Tech stack & approach (make it easy to ship + scale)
- Framework: Next.js (App Router) + TypeScript
- Styling: Tailwind CSS
- UI primitives for accessible tabs/accordions: Radix UI
- Content: MDX for longform copy + a structured JSON “content model” for role sections and scripts
- Hosting: Vercel (fast deploy, OG images, edge-friendly)
- Analytics: Plausible OR Vercel Analytics (keep privacy-friendly)
- Email (for paid pack links): Resend (simple)

Dynamic features:
1) Role selector tabs, persists choice in localStorage
2) “Copy” buttons on scripts + “Copy link to this section”
3) Printable view (/print) with print CSS + “Print one-pager”
4) Optional location-based fasting window (approx) using AlAdhan API
   - detect location via city input or browser locale (do NOT auto-geolocate without user action)
   - allow calculation method selection (explains why times differ)
   - cache API results server-side for 12h
5) OpenGraph previews + social share buttons
6) SEO: sitemap.xml, robots.txt, JSON-LD structured data, clean headings, internal linking, FAQ schema

Important disclaimers:
- Dates can vary by moon sighting & community methods
- Prayer/fast timings are approximate; check local mosque timetable
- This site is guidance, not medical/legal advice
- Do not interrogate individuals about fasting/non-fasting

## 3) Information architecture (routes)
/
  - Main hub page: essentials, role tabs, dive deeper, share/print, FAQ, resources
/print
  - A condensed workplace one-pager layout (same content source)
/workplace-pack
  - Sales page (what’s included, previews, Stripe link)
/workplace-pack/success
  - Post-purchase instructions (also emailed)
/download/[token]
  - Secure download page for paid assets
/about
  - Purpose + neutrality + how to use + author note
/sources
  - Citations list and “last updated”
/privacy
/terms

Optional later:
/translate/[lang] (only after launch)

## 4) SEO plan (must implement)
### Target keyword clusters
Cluster A (primary):
- “Ramadan at work”
- “support colleagues during Ramadan”
- “Ramadan workplace guidance”
- “managing Ramadan at work”
- “Ramadan etiquette workplace”

Cluster B (manager / HR):
- “Ramadan adjustments for employees”
- “reasonable adjustments Ramadan”
- “managing fasting employees”
- “Ramadan DEI guidance”
- “Ramadan prayer breaks at work”

Cluster C (non-fasting / not fasting):
- “Ramadan not fasting advice”
- “why are Muslims not fasting Ramadan”
- “can I eat in front of someone fasting Ramadan”
- “what to say during Ramadan”

Cluster D (deep content):
- “last ten nights Ramadan workplace”
- “taraweeh and sleep Ramadan”
- “Ramadan sleep schedule”

### On-page SEO requirements
- One H1 only per page.
- Clear H2/H3 structure (matches “brief vs deep” model).
- FAQ section with FAQPage JSON-LD.
- Internal anchor links: /#role-manager, /#dive-deeper-last-10-nights, etc.
- Meta title <= 60 chars; meta description 150–160 chars.
- OpenGraph + Twitter cards.
- Generate /sitemap.xml (next-sitemap or custom route).
- robots.txt.

### Suggested Home meta
Title: “Ramadan at Work: A practical guide for colleagues, managers & HR”
Description: “A calm, practical guide to support colleagues during Ramadan — etiquette, scheduling tips, what to say, and deeper context on sleep, prayer, and the last ten nights.”

## 5) UX principles (non-negotiable)
- Above the fold answers: “What is Ramadan, what changes at work, what should I do?”
- Never assume every Muslim fasts.
- Include a dedicated “Not fasting” section near the top (not buried).
- Progressive disclosure: essentials always visible; deep content in accordions.
- Keep “Do / Don’t” lists short (6–10 bullets).
- Provide copyable scripts (reduces awkwardness).
- Provide print + share affordances (workplace distribution is the growth engine).

## 6) Data/content model (implement as JSON + MDX)
Create a content system that allows:
- short summaries
- role-based lists
- scripts with variants
- “Dive deeper” articles
- resources list + citations

### Files
/content/site.json
/content/roles.json
/content/scripts.json
/content/faq.json
/content/resources.json
/content/dive-deeper/*.mdx
/content/legal/*.mdx (privacy, terms)

Site-wide metadata includes “lastUpdated” date string.

## 7) Build steps (section-by-section implementation)

### Step 1 — Project scaffolding
1) Create Next.js app with TS, App Router, Tailwind
2) Add dependencies:
   - @radix-ui/react-tabs
   - @radix-ui/react-accordion
   - classnames (or clsx) + tailwind-merge
   - next-sitemap (or implement custom sitemap route)
   - zod (for validating content JSON at build)
   - react-use (optional)
   - @vercel/og (for OG image)
   - stripe
   - resend
3) Setup ESLint + Prettier.

### Step 2 — Layout, theme, and base components
Implement:
- <Header /> minimal: logo text “Ramadan at Work”
- <TopNotice /> optional: “Dates vary by moon sighting. This guide is non-judgmental and practical.”
- <StickyNav /> for section jump links (Essentials, By role, Not fasting, Dive deeper, FAQ, Print)
- <RoleTabs /> with:
  - tabs
  - URL query param ?role=manager
  - localStorage persistence
  - “View all” toggle for HR users
- <DisclosureAccordion /> (Radix) for Dive deeper
- <CopyButton /> (copies text + toast)
- <CopyLinkButton /> (copies current section URL with hash)
- <ShareButtons /> (copy link + native share where available)

Accessibility:
- All tabs/accordion must be keyboard navigable and correctly labelled.
- Ensure headings are real <h2>/<h3> not divs.

### Step 3 — Home page composition (/)
Order (important):
1) Hero + one-line promise
2) “In 60 seconds” essentials
3) Role selector (tabs)
4) “For people not fasting” (prominent)
5) Dive deeper hub
6) FAQ
7) Resources + Sources link
8) CTA: Workplace Pack + Donation

### Step 4 — Dynamic “Fasting window (approx)” module
Create a module that appears in Essentials:
- Input: City (text), Country (optional), Calculation method dropdown (default: “Muslim World League”)
- Output: Today’s approximate fast start (Fajr) and end (Maghrib) + warning “approx”
- API: AlAdhan prayer times endpoint
- Caching:
  - create /api/prayer-times?city=&country=&method=
  - server fetch + cache in memory (or Vercel KV if desired), TTL 12 hours
- UX:
  - show skeleton while loading
  - graceful error copy
  - “Times vary. Check your local mosque timetable.”

### Step 5 — Print view (/print)
Create a condensed layout:
- Purpose + essentials
- Do/Don’t for colleagues
- Manager checklist
- “Don’t ask why someone is eating/drinking”
- Where to learn more (QR + short URL)

Add print CSS:
- remove nav
- adjust font sizes
- ensure page breaks cleanly

### Step 6 — Workplace Pack sales (/workplace-pack)
Sales page sections:
- What’s included (bullets + previews images)
- Who it’s for
- How it helps
- Pricing + Stripe buy button
- FAQ about licensing
- “If your organisation can’t pay, request sponsored access” (email link)

### Step 7 — Payments + gated downloads
Implement:
- Stripe payment link redirects to /workplace-pack/success?session_id=...
- Webhook /api/stripe/webhook:
  - verify signature
  - on payment success: create a token (random, stored)
  - email user via Resend with download link /download/[token]
- Storage:
  - simplest: Vercel KV or Postgres (Neon) for tokens
- /download/[token]:
  - validate token
  - show download buttons for assets
Assets:
- store files in private blob storage or in repo but gated behind token route streaming.

### Step 8 — SEO + OG + schema
- Implement metadata in layout.tsx
- Home JSON-LD:
  - WebSite
  - FAQPage
- Add OG image route: /api/og?title=...
- Generate sitemap.xml + robots.txt
- Implement canonical URLs
- Add “last updated” on /sources.

---

## 8) COMPLETE COPY (use exactly; adjust only if legally required)

### 8.1 Global UI copy
Site name: Ramadan at Work
Tagline: “A practical guide to support colleagues, friends, and family during Ramadan.”
Top disclaimer strip:
“Dates and practices can vary by community. This guide is practical and non-judgmental — and it never assumes who is or isn’t fasting.”

Primary buttons:
- “Jump to my role”
- “Print one-pager”
- “Copy link”
- “Dive deeper”
- “Get the Workplace Pack”

Toast messages:
- “Copied.”
- “Link copied.”
- “Couldn’t copy — try manually.”
Error states:
- Prayer times module error: “Couldn’t load times right now. Try again, or check your local mosque timetable.”

### 8.2 Hero section (Home)
H1: Ramadan at Work
Subhead:
“A calm, practical guide for colleagues, managers, HR, and friends — with quick etiquette and deeper context on how Ramadan changes daily life.”

Small helper text:
“You don’t need to be an expert to be supportive. A bit of awareness goes a long way.”

Role prompt label:
“Who are you here as?”
Tabs:
- Colleague
- Manager
- HR / DEI
- Friend / Partner
- Not fasting

### 8.3 “In 60 seconds” essentials (always visible)
Title: In 60 seconds
Bullets:
- “Ramadan is a month of fasting, worship, reflection, and charity for Muslims.”
- “Many people fast from dawn to sunset — no food or drink (including water) during fasting hours.”
- “Not everyone fasts. Some people are exempt or choose not to fast — don’t ask why.”
- “Energy can dip late afternoon. Evenings can be busy with iftar (breaking the fast) and extra night prayers.”
- “The first few days can feel like an adjustment; the last ten nights often involve increased worship and later nights.”

Micro-CTA:
“Want the practical do’s and don’ts? Pick your role below.”

### 8.4 Optional module: “Today’s fasting window (approx)”
Title: Approximate fasting window (optional)
Helper text:
“Useful for planning meetings and socials. Times vary by method — always defer to local mosque timetables.”
Inputs:
- City placeholder: “e.g., London”
- Country placeholder: “e.g., United Kingdom”
- Method label: “Calculation method”
Output labels:
- “Fast begins (Fajr):”
- “Fast ends (Maghrib):”
Footnote:
“Approximate. Community timetables may differ.”

### 8.5 Section: “Helpful do’s and don’ts” (role-specific)
Common section intro:
“Small, respectful adjustments beat big gestures. The key is to offer flexibility without singling anyone out.”

#### Colleague tab
Title: What helps as a colleague
Do:
- “Do keep things normal — a quick ‘Ramadan Mubarak’ is kind, but not required.”
- “Do schedule team coffees/lunches with awareness (and don’t pressure anyone to join).”
- “Do offer simple flexibility: ‘Want to move this earlier?’”
- “Do be mindful late afternoon can be harder for some people.”
- “Do include people in social plans — they might still want to come, even if they’re not eating.”
Don’t:
- “Don’t repeatedly offer food or water.”
- “Don’t ask ‘Are you fasting?’ or ‘Why aren’t you fasting?’”
- “Don’t comment on performance, weight, or willpower.”
- “Don’t assume everyone follows the same routine or prayer schedule.”

#### Manager tab
Title: What helps as a manager
Do:
- “Do ask privately, early: ‘Is there anything that would help during Ramadan?’”
- “Do consider shifting demanding work earlier in the day where possible.”
- “Do offer temporary flexibility (start earlier, shorter lunch, finish earlier).”
- “Do avoid defaulting to working lunches.”
- “Do plan for the last ten nights — some people may request leave or lighter evenings.”
Don’t:
- “Don’t assume reduced capability — let the person tell you what they need.”
- “Don’t make Ramadan support a public announcement about one person.”
- “Don’t schedule mandatory team meals at sunset without alternatives.”

#### HR / DEI tab
Title: What helps as HR / DEI
Do:
- “Do provide a short manager briefing: what Ramadan is, what changes, what not to assume.”
- “Do ensure prayer/quiet space guidance is clear (and how to request it).”
- “Do remind teams: not everyone fasts — privacy matters.”
- “Do encourage reversible, light-touch adjustments.”
- “Do make print/share resources easy to circulate internally.”
Don’t:
- “Don’t create one-size-fits-all rules — enable conversations instead.”
- “Don’t require disclosure of health reasons for not fasting.”

#### Friend / Partner tab
Title: What helps at home or socially
Do:
- “Do expect evenings to be full (iftar, family, prayer) and energy to be lower late day.”
- “Do plan key tasks earlier and keep late nights realistic.”
- “Do ask what support looks like: ‘More quiet time? Help with chores? Less social stuff?’”
- “Do join iftars — fasting isn’t required to share a meal.”
Don’t:
- “Don’t police what someone eats at iftar.”
- “Don’t treat tiredness as a moral failure.”
- “Don’t assume every day feels the same across the month.”

#### Not fasting tab (this is ALSO repeated as its own prominent section)
Title: If you’re Muslim and not fasting
Intro:
“You don’t owe anyone an explanation. Some people are exempt, some choose not to fast, and it’s nobody’s business.”
Supportive points:
- “You can still take part in Ramadan in other ways — worship, charity, reflection, community.”
- “People may assume. You’re allowed to set boundaries.”

### 8.6 Prominent section: “For people not fasting (privacy-first)”
Title: Not everyone fasts — and it’s not a conversation topic
Body:
“Some Muslims won’t fast for personal, health, or other reasons. Some will fast some days and not others. A respectful workplace doesn’t interrogate it.”

Bold rules:
- “Don’t ask why someone is eating or drinking.”
- “Don’t quiz people on who is ‘really’ fasting.”
- “Don’t treat non-fasting as something to justify.”

Boundary scripts (with Copy buttons):
1) Short:
“Appreciate you checking — I’m not discussing my fasting.”
2) Friendly:
“Thanks — Ramadan looks different for everyone. I’m good, don’t worry.”
3) Direct:
“I’d rather not talk about it.”

### 8.7 Section: “What to say (and what to avoid)” (script library)
Title: What to say (and what to avoid)
Intro:
“If you’re unsure, keep it simple. Offer options, not pressure.”

Cards (each has 2–3 variants + “Copy” button):
A) Checking in (colleague/manager)
- “Hope Ramadan’s going well — anything you want me to be aware of?”
- “Want to move this meeting earlier?”
- “No pressure either way — just tell me what helps.”

B) Food situations
- “We’re ordering lunch — want us to include something for later, or skip you this time?”
- “No worries at all if you’re not joining — we’ll catch you after.”

C) Social invites (iftar)
- “We’re doing an iftar — you’re welcome. Fasting isn’t required.”
- “Come even if you just want to hang out — totally up to you.”

D) What to avoid (list)
- “Are you fasting?”
- “Why aren’t you fasting?”
- “That must be so hard — I could never.”
- “So you can’t even drink water??”
- “You seem tired today…”

### 8.8 Section: “Support by role” (expanded checklists)
Title: Role checklists (save this)
Each role gets a short checklist + “Copy checklist” button.

Colleague checklist:
- “Avoid repeated food offers.”
- “Be flexible with timing.”
- “Don’t ask who’s fasting.”
- “Keep invites inclusive.”

Manager checklist:
- “Private check-in early.”
- “Schedule heavier work earlier where possible.”
- “Avoid working lunches.”
- “Plan for last ten nights.”

HR/DEI checklist:
- “Share manager briefing.”
- “Confirm prayer/quiet space access.”
- “Remind teams about privacy + non-assumptions.”
- “Provide printable one-pager.”

Friend/Partner checklist:
- “Plan evenings realistically.”
- “Help protect sleep.”
- “Ask what support looks like.”
- “Join iftar without pressure.”

Not fasting checklist:
- “You don’t owe explanations.”
- “Choose boundaries that feel safe.”
- “You can still participate in Ramadan in other ways.”

### 8.9 “Dive deeper” hub (accordion sections)
Title: Dive deeper
Intro:
“If you only read one thing: routines shift. The first days can be an adjustment, and the last ten nights can be later and more intense for worship. Everyone’s Ramadan looks different.”

Accordion 1: How the month changes (early vs middle vs last ten)
Short (visible summary):
“Early days often feel like adjustment. Mid-month tends to stabilise. The last ten nights often involve later nights and increased worship.”
Deep content:
- Early days:
  - “People may be adapting to a new rhythm: earlier wake-ups for suhoor, reduced caffeine, and daytime fasting.”
  - “Headaches or tiredness can happen early on for some, especially with caffeine changes.”
- Mid-month:
  - “Many people settle into a routine: timing, meals, work patterns.”
- Last ten nights:
  - “Many Muslims increase worship and may stay up later, seeking Laylat al-Qadr.”
  - “This can increase late-night demand and lead to more leave requests or earlier finishes.”

Accordion 2: Night prayers (taraweeh) and sleep
Short:
“Taraweeh is an extra night prayer in Ramadan. Combined with suhoor, sleep can compress.”
Deep content:
- “Some people attend taraweeh in congregation; length varies widely.”
- “When bedtime shifts later and wake-up shifts earlier, sleep can be shorter.”
- Practical takeaway:
  - “Earlier meetings can help.”
  - “Be careful with late-day high-stakes tasks where possible.”

Accordion 3: Why Muslims fast (non-preachy)
Short:
“Fasting is about self-discipline, worship, reflection, and compassion — not just food.”
Deep content:
- “Ramadan emphasises spiritual focus, charity, gratitude, and community.”
- “For many people, behaviour and character matter as much as the fast itself.”

Accordion 4: Social dynamics (what’s actually awkward)
Short:
“Most awkward moments come from assumptions — not from eating in front of someone.”
Deep content:
- “It’s okay for others to eat; repeated offering can be uncomfortable.”
- “Some people don’t want attention at work.”
- “Non-fasting Muslims often face intrusive questions — privacy matters.”

Accordion 5: Health and safety notes (non-medical)
Short:
“This is not medical advice. If someone has health concerns, they should seek professional guidance.”
Deep content:
- “Some roles are safety-critical; individuals may make different decisions.”
- “Employers can support by enabling temporary adjustments and breaks.”

### 8.10 FAQ (use these Q&As)
Title: FAQ
1) “Do I need to avoid eating in front of someone fasting?”
Answer: “No. You don’t need to hide eating or drinking. Just avoid repeatedly offering food or making it a big deal.”
2) “Can I say ‘Ramadan Mubarak’?”
Answer: “Yes — it’s a kind greeting. Keep it simple and don’t force a conversation.”
3) “Why are some Muslims not fasting?”
Answer: “Ramadan looks different for different people. Some are exempt, some choose not to fast, some fast some days. Don’t ask for personal reasons.”
4) “What time of day is hardest?”
Answer: “It varies, but late afternoon can feel harder for some. If you can, schedule heavy work earlier.”
5) “What are the last ten nights?”
Answer: “Many Muslims increase worship in the last ten nights and may stay up later. Planning flexibility during this period can help.”
6) “Are prayer breaks allowed at work?”
Answer: “Many workplaces accommodate this via flexible breaks or a quiet space. The best approach is a private, respectful conversation based on role needs.”

### 8.11 Resources CTA + credibility
Title: Want something you can send to your team?
Body:
“Use the print one-pager, or share a role-specific link.”
Buttons:
- “Print one-pager”
- “Copy link to my role”

Workplace Pack teaser:
Title: Workplace Pack (paid)
Body:
“Ready-to-use templates for managers and HR: a short briefing, checklists, and printable posters.”
Button: “Get the Workplace Pack”

Donation:
Title: Support the guide
Body:
“If this helped your team, you can support ongoing updates.”
Button: “Donate”

### 8.12 About page copy (/about)
H1: About Ramadan at Work
Body:
“This site exists to make Ramadan support feel simple and respectful — especially in workplaces. It is not a religious authority, and it avoids assumptions about individual practice.”
Bullets:
- “Practical, non-judgmental guidance”
- “Privacy-first: never ask why someone is or isn’t fasting”
- “Designed for easy sharing and printing”
CTA:
“See sources and last updated →”

### 8.13 Sources page copy (/sources)
H1: Sources & updates
Body:
“This guide is built from reputable workplace and public resources, plus research on sleep and routine changes during Ramadan. It prioritises practical guidance and avoids overgeneralising.”
Show:
- “Last updated: {date}”
- Categorised citations list
Footer note:
“If you spot an issue or want to suggest an improvement, email {support email}.”

### 8.14 Privacy + Terms (short, plain)
Privacy essentials:
- what analytics used
- cookies (if any)
- payment provider (Stripe) if used
- email provider (Resend) if used
- no selling data

---

## 9) Content-driven dynamic routing requirements
- Support links like /?role=manager#scripts
- Each major section must have a stable id
- “Copy link to this section” uses that id
- OG tags should reflect role selection if shared:
  - If role param exists, set og:title = “Ramadan at Work — Manager guide” etc.
  - Implement via Next metadata generation reading searchParams

Role-specific OG titles:
- Colleague: “Ramadan at Work — Colleague guide”
- Manager: “Ramadan at Work — Manager guide”
- HR: “Ramadan at Work — HR/DEI guide”
- Friend: “Ramadan at Work — Friend/partner guide”
- Not fasting: “Ramadan at Work — Not fasting & privacy guide”

---

## 10) Exact components to implement (file map)
app/
  layout.tsx
  page.tsx
  print/page.tsx
  workplace-pack/page.tsx
  workplace-pack/success/page.tsx
  download/[token]/page.tsx
  about/page.tsx
  sources/page.tsx
  privacy/page.tsx
  terms/page.tsx
  api/
    prayer-times/route.ts
    og/route.tsx
    stripe/webhook/route.ts
components/
  Header.tsx
  Footer.tsx
  RoleTabs.tsx
  Essentials.tsx
  DoDont.tsx
  Scripts.tsx
  NotFastingSection.tsx
  DiveDeeper.tsx
  FAQ.tsx
  ShareBar.tsx
  CopyButton.tsx
  CopyLinkButton.tsx
  PrayerTimesWidget.tsx
  PrintCTA.tsx
  WorkplacePackCTA.tsx
content/
  site.json
  roles.json
  scripts.json
  faq.json
  resources.json
  dive-deeper/
    month-evolution.mdx
    taraweeh-sleep.mdx
    why-fast.mdx
    social-dynamics.mdx
    health-safety.mdx
lib/
  content.ts (load + zod validate)
  seo.ts (helpers)
  prayerTimes.ts (fetch + cache)
  stripe.ts
  tokens.ts (create/validate tokens)
styles/
  globals.css
  print.css

---

## 11) Acceptance checklist (definition of done)
- Lighthouse: Performance 90+, Accessibility 95+ on home page
- Role tabs fully keyboard accessible
- Accordions follow ARIA pattern, no focus traps
- /print prints cleanly to 1–2 pages
- OG previews render correctly when pasted in Slack/WhatsApp
- sitemap.xml + robots.txt present
- JSON-LD valid (FAQPage + WebSite)
- Prayer times module works and is clearly labelled “approx”
- Paid pack flow works end-to-end (Stripe -> webhook -> email -> download)
- Every section has copy and no placeholder text remains
