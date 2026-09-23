<div align="center">

# 2240 SPEED SHOP — *Midnight Garage*

### Most shop websites list services. This one turns the lights on and walks you through the bay.

The live website of [2240 Speed Shop](https://2240speedshop.com) — Terry Harmider's customs-and-classics garage at 4507 82 Ave NW, just off the Sherwood Park Freeway in east Edmonton, Alberta. A scroll-driven 3D night garage rendered in React Three Fiber, wrapped around **75 prerendered pages** — services, Edmonton-area pages, three guide pillars, and a 45-article Journal — engineered so every high-value keyword in the Edmonton market has exactly one owning page.

**This repository is the source of truth for the site.** Production is a static export published to Hostinger.

> **The art never holds the SEO hostage.** No AI crawler except Googlebot executes JavaScript — so every word, every table, and every line of JSON-LD ships in the server payload. The WebGL is `aria-hidden` decoration over a photograph. Kill the canvas and the site still ranks.

[![Next.js](https://img.shields.io/badge/Next.js-16.2-f2f0ec?style=flat-square&labelColor=0b0b0d)](https://nextjs.org)
[![React Three Fiber](https://img.shields.io/badge/R3F-9.x-e04545?style=flat-square&labelColor=0b0b0d)](https://r3f.docs.pmnd.rs)
[![Pages](https://img.shields.io/badge/pages-75_prerendered-c7c9cc?style=flat-square&labelColor=0b0b0d)](#the-sitemap--one-keyword-one-owner)
[![Schema](https://img.shields.io/badge/schema-AutoRepair_+_FAQ_+_Service-ffb066?style=flat-square&labelColor=0b0b0d)](#the-machine-readable-layer)
[![Build](https://img.shields.io/badge/build-passing-a02d2d?style=flat-square&labelColor=0b0b0d)](#running-it)

[The concept](#the-concept) · [Why it's built this way](#why-its-built-this-way) · [Sitemap](#the-sitemap--one-keyword-one-owner) · [Research](#the-research-behind-it) · [Run it](#running-it) · [Deploy](#deploying)

</div>

---

## The concept

**Midnight Garage** was chosen from five written directions. The others — *Rust & Chrome*, *The Showroom Floor*, *Night Shift*, *The Build Sheet* — live in the research repo and were raided for parts.

The homepage is a scroll-driven film in three acts: a 2015 Dodge Challenger turning on a showroom table under one tungsten lamp, a 1972 coupe with the hood up one bay over, and a pre-war hot-rod donor in moonlight through the bay door. Between the acts, the camera walks a seven-station tour of the shop. Each station is a service section, and each section deep-links to the page that owns its keyword.

Every design decision traces to something real about the shop:

| Element | Where it came from |
|---|---|
| `#a02d2d` speed red | The live site's own PWA manifest `theme_color` — their actual brand colour |
| The steel badge | Their physical laser-cut, rusted-steel storefront sign. No digital logo existed anywhere |
| The D100 hero | A passing photographer pulled over mid-drive to shoot the light patch on its hood |
| Classic-rock energy | Terry's reels are scored to Metallica, AC/DC, Guns N' Roses |
| "Revive your ride" | Their own tagline, with the typos fixed |
| Copy voice | Terse gearhead. *"Rust dies here."* Not "innovative automotive solutions" |

## Why it's built this way

**The canvas is decoration. The HTML is the product.** The hero still is the LCP element — preloaded, dimensioned, graded. The WebGL scenes (`HeroScene`, `ShopWorld`) mount client-side only, `aria-hidden`, fading in behind it. Zero CLS. Phones, throttled connections, `prefers-reduced-motion` users, and every AI crawler get the photograph and the full copy.

**One keyword, one owner.** Research found the Edmonton market wide open — *"restomod Edmonton"* and *"LS swap Edmonton"* have **no ranking local shop at all**; forum threads beg for recommendations. Every cluster maps to exactly one page. No cannibalisation, no orphans, no page without a job.

**Answer-first everything.** Each page opens with a 40–60 word paragraph that directly answers what it is — the shape AI engines actually quote. Question-form H2s. Real tables. FAQ answers live in the HTML, not behind JS.

**Honest by construction.** [`lib/site.ts`](lib/site.ts) is the single source of truth for every business fact, and it carries only what was verified from live sources. No invented certifications, no fake years-in-business, no fabricated reviews, no aggregateRating gaming. Pricing appears as clearly-labelled indicative ranges — a market gap, since not one competitor publishes any.

## The sitemap — one keyword, one owner

```
/                                    speed shop Edmonton · custom car shop Edmonton
/services/                           classic car shop Edmonton
  ├─ classic-car-restoration/        classic car restoration Edmonton      <- #1 target
  ├─ restomods-custom-builds/        restomod Edmonton · hot rod shop      <- unclaimed
  ├─ engine-swaps-builds/            LS swap Edmonton · engine swap        <- no local shop ranks
  ├─ classic-performance-tuning/     carburetor rebuild Edmonton
  ├─ body-paint-metalwork/           classic car rust repair Alberta
  └─ classic-interiors-service/      classic car interior restoration Edmonton
/builds/                             custom car builds Edmonton
  └─ 1960s-dodge-d100/ + 4 more      one vehicle keyword each
/edmonton/                           classic car restoration near me
  └─ sherwood-park · st-albert · leduc-nisku · spruce-grove · fort-saskatchewan
/guides/                             the content pillars
  ├─ costs/                          classic car restoration cost Canada   <- zero Canadian content exists
  ├─ alberta-laws/                   modified car laws Alberta
  └─ winter/                         winter storage classic cars Alberta   <- the -40 moat
/blog/                               The Shop Journal — 45 articles, one question each
/about · /reviews · /faq · /quote · /contact
/llms.txt · /llms-full.txt · /f.rss · /f.atom · /f.json
```

## The machine-readable layer

- **`AutoRepair` JSON-LD** with a stable `@id`, full `openingHoursSpecification`, `geo`, `areaServed`, `knowsAbout`, `sameAs`, and a `makesOffer` graph — every other node references the one entity.
- **`Service`, `FAQPage`, `BreadcrumbList`, `Person`** schema per page, from [`lib/schema.tsx`](lib/schema.tsx).
- **`BlogPosting`** per Journal article, with its sources as `citation` and a visible FAQ that matches its `FAQPage` JSON-LD word for word.
- **`robots.ts`** names search engines, AI retrieval agents (`OAI-SearchBot`, `PerplexityBot`, `Claude-SearchBot` …), and AI training agents (`GPTBot`, `ClaudeBot`, `Google-Extended`, `CCBot` …) and allows them all. We *want* the citation.
- **`llms.txt` + `llms-full.txt`** stating the facts, and the answers, an engine should quote.
- **`sitemap.ts`** enumerating all 75 routes, plus RSS, Atom, and JSON feeds for the Journal.

## The stack

| | |
|---|---|
| **Framework** | Next.js 16.2 App Router, static export, TypeScript strict |
| **3D** | three.js r185 · @react-three/fiber 9 · drei · postprocessing |
| **Motion** | GSAP · Lenis smooth scroll |
| **Styling** | Tailwind v4 with `@theme` design tokens |
| **Fonts** | Anton · Archivo · IBM Plex Mono · Instrument Serif, self-hosted via `next/font` |

The cars and the shop are glTF models served from content-addressed desktop and mobile shelves with Brotli twins, loaded behind the server-rendered page. Adaptive DPR, lighter shelves on phones, and a full static path under `prefers-reduced-motion`.

## Running it

```bash
pnpm install && pnpm dev
```

Then open <http://localhost:3117>. Production build:

```bash
pnpm build && pnpm start
```

## Deploying

Production is a static export. One script does the whole release:

```bash
pwsh scripts/deploy-combined.ps1 -Repo <deploy checkout> -Message "..."
```

It precompresses the model twins, builds with `EXPORT=1`, content-addresses the model shelves, stamps a unique release id into every page, and commits the export to the deploy repository that Hostinger's Git integration publishes to 2240speedshop.com. It then waits until the live site serves that exact release and checks the critical assets. `-PrepareOnly` builds and stages without publishing.

## The research behind it

The site started as the second half of a two-part deliverable. The first half — competitor teardowns, the Edmonton keyword universe, an AI-SEO playbook, a 50-post content plan, and five written creative concepts — is what every design decision above is drawn from.

Headline findings that shaped the build:

- The previous site was a two-page GoDaddy template with **zero schema, zero analytics**, typos in its own tagline, and a call-to-action that linked to itself.
- The shop's **real service taxonomy** (14 lines, including LS/diesel conversions) was recovered from their dead `garagecar.ca` domain via the Wayback Machine — the live site mentions almost none of it.
- **Reputation is the emergency**, not the design: 2.7 stars from 7 Google reviews, and a directory listing falsely flagging the business **permanently closed**.
- Three of the closest vintage-niche competitors have published **two blog posts between them** across roughly fifty years of trading.

---

<div align="center">

**A [kr8tiv](https://kr8tiv.io) build.**

<sub>Photography and brand marks belong to 2240 Speed Shop.</sub>

</div>
