import Link from "next/link";
import type { ArticleMeta } from "../types";

/**
 * JOURNAL — What to Bring to a Classic Car Restoration Consultation.
 * Published 2026-11-08. Copy fact-checked against the cited manufacturer /
 * publisher documents; no shop policies, prices or first-person claims added.
 */

export const meta: ArticleMeta = {
  slug: "classic-car-restoration-consultation-edmonton",
  title: "What to Bring to a Classic Car Restoration Consultation",
  accent: "Consultation",
  metaTitle: "What to Bring to a Restoration Consult",
  description: "Prepare for a classic-car restoration consultation with useful photos, a project history and a clear brief. Know what to ask before approving work.",
  datePublished: "2026-11-08",
  dateModified: "2026-11-08",
  author: "2240 Speed Shop",
  category: "Restoration",
  targetKeywords: [
    "classic car restoration consultation Edmonton",
    "restoration project planning",
    "classic car restoration brief",
    "restoration scope questions",
  ],
  faq: [
    {
      q: "What should I bring to a classic car restoration consultation?",
      a: "A clear description of how you want to use the car, recent photographs of its present condition and an honest account of the work already done, including invoices, part numbers and earlier estimates you have. You do not need a finished build plan.",
    },
    {
      q: "What photos are useful for a restoration consultation?",
      a: "Each side, the interior, the engine bay and any accessible problem areas, plus close-ups of rust, unfinished repairs or missing pieces you already know about. Photograph only what you can reach safely and leave lifting and dismantling to someone equipped to do it.",
    },
    {
      q: "How do I explain what I want from a restoration?",
      a: "Write one plain sentence about how you will use the car, then separate what you will not compromise on from ideas you are still considering. Hagerty's restoration guidance recommends defining the intended outcome and keeping a scrapbook of ideas, parts and pictures.",
    },
    {
      q: "What should I ask before approving restoration work?",
      a: "Ask what the proposed scope includes and excludes, how changes will be approved, how parts purchases will be handled, how progress will be communicated, which dates are estimates and which decisions are still outstanding. Agree these with the shop rather than assuming them.",
    },
  ],
  citations: [
    {
      name: "“General Restoration Tips,” Hagerty Media",
      url: "https://www.hagerty.com/media/maintenance-and-tech/general-restoration-tips/",
    },
  ],
  internalLinks: [
    "/blog/frame-off-vs-rolling-restoration",
    "/guides/costs",
    "/quote",
  ],
  readingMinutes: 4,
};

/** Editorial plate: steel line art, tungsten callouts. */
export function Illustration() {
  return (
    <svg
      viewBox="0 0 1200 660"
      role="img"
      aria-label="Technical line drawing of a classic coupe in side profile in steel line art beside a one-page project brief, a stack of photographs and a folder of invoices, with numbered tungsten callouts for intended use, condition photos, known rust and unfinished work, the paper trail and a written scope"
      className="h-auto w-full"
    >
      <title>One page, the photos, and the paper trail</title>
      <defs>
        <radialGradient id="cla-pool" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffb066" stopOpacity="0.1" />
          <stop offset="60%" stopColor="#ffb066" stopOpacity="0.04" />
          <stop offset="100%" stopColor="#ffb066" stopOpacity="0" />
        </radialGradient>
      </defs>

      <ellipse cx="560" cy="580" rx="380" ry="28" fill="url(#cla-pool)" />

      <g fill="none" stroke="#9a9ca0" strokeWidth="1.8" strokeLinejoin="round">
        <path d="M 90 430 L 120 360 L 230 340 L 300 270 L 470 260 L 560 330 L 680 345 L 700 430 Z" strokeWidth="1.8" />
        <circle cx="210" cy="440" r="48" />
        <circle cx="600" cy="440" r="48" />
        <rect x="820" y="140" width="190" height="250" rx="3" />
        <g strokeWidth="1" strokeOpacity="0.45"><line x1="845" y1="190" x2="985" y2="190" /><line x1="845" y1="230" x2="985" y2="230" /><line x1="845" y1="270" x2="985" y2="270" /><line x1="845" y1="310" x2="960" y2="310" /></g>
        <rect x="1030" y="200" width="120" height="90" rx="3" />
        <rect x="1040" y="210" width="120" height="90" rx="3" />
        <rect x="900" y="420" width="220" height="110" rx="4" />
      </g>

      <g fill="none" stroke="#ffb066" strokeWidth="1.4" strokeDasharray="4 5" strokeLinecap="round">
        <path d="M 470 260 L 560 330 L 680 345" /><circle cx="560" cy="380" r="22" />
      </g>

      <g fontFamily="var(--font-plex-mono), ui-monospace, monospace" letterSpacing="0.08em">
        {[
          { x: 915, y: 265, n: "1" },
          { x: 1095, y: 250, n: "2" },
          { x: 560, y: 380, n: "3" },
          { x: 1010, y: 475, n: "4" },
          { x: 400, y: 150, n: "5" },
        ].map((p) => (
          <g key={p.n}>
            <circle cx={p.x} cy={p.y} r="12.5" fill="#0a0a0b" stroke="#ffb066" strokeWidth="1.2" />
            <text x={p.x} y={p.y + 4} textAnchor="middle" fontSize="11" fill="#ffd9ad">
              {p.n}
            </text>
          </g>
        ))}
      </g>

      <g
        fontFamily="var(--font-plex-mono), ui-monospace, monospace"
        fontSize="10.5"
        letterSpacing="0.16em"
      >
        <text x="40" y="84" fill="#ffb066">
          1 · HOW YOU WILL DRIVE IT
        </text>
        <text x="40" y="108" fill="#ffb066">
          2 · PHOTOS — EACH SIDE, BAY, INTERIOR
        </text>
        <text x="40" y="132" fill="#ffb066">
          3 · KNOWN RUST AND UNFINISHED WORK
        </text>
        <text x="1160" y="84" textAnchor="end" fill="#ffb066">
          4 · INVOICES AND PART NUMBERS
        </text>
        <text x="1160" y="108" textAnchor="end" fill="#ffb066">
          5 · SCOPE IN WRITING
        </text>
      </g>

      <text
        x="600"
        y="636"
        textAnchor="middle"
        fontFamily="var(--font-plex-mono), ui-monospace, monospace"
        fontSize="10"
        letterSpacing="0.18em"
        fill="#9a9ca0"
        fillOpacity="0.55"
      >
        FIG. A — ONE PAGE, THE PHOTOS, AND THE PAPER TRAIL
      </text>
    </svg>
  );
}

export function Body() {
  return (
    <>
      <p>For a useful restoration conversation, bring three things: a clear description of how you want to use the car, photographs of its present condition and an honest account of the work already done. You do not need a finished build plan. You need enough information to explain the starting point and the result you actually want.</p>
      <p>This is a preparation checklist, not a promise of a quote, booking date or a particular shop process. The inspection and the agreed scope still have to happen.</p>
      <h2>Describe the car you want to drive</h2>
      <p>Write one plain sentence: “I want a reliable summer driver with the original appearance,” or “I want a restored interior and body while keeping the existing drivetrain.” If you are going to take longer highway trips, say so. If the car is mainly for local events, say that instead.</p>
      <p>Separate the things you will not compromise on from the ideas you are still considering. Original colour might be essential; a particular wheel might only be a reference. Hagerty&rsquo;s restoration guidance recommends defining the intended outcome and keeping a project scrapbook of ideas, parts and pictures to communicate the plan.<a className="cite-ref" href="#src-1">[1]</a></p>
      <h2>Show the present car, not just the inspiration</h2>
      <p>Bring recent photographs of each side, the interior, engine bay and any accessible problem areas. Include close-ups of rust, unfinished repairs or missing pieces that you already know about. Photograph only what you can reach safely; leave lifting and dismantling to someone equipped to do it.</p>
      <p>Inspiration pictures are useful when you explain what you like about them. Is it the stance, paint finish, upholstery or simply the overall restraint? A picture without that explanation leaves too much room for interpretation.</p>
      <h2>Give the unfinished work a paper trail</h2>
      <p>Collect invoices, part numbers, previous estimates and photographs from earlier work. List loose parts and label what you know about them. If an engine or axle has been changed, include the details you have rather than assuming the original specification still applies.</p>
      <p>Be direct about the unknowns. “The previous owner said it was rebuilt, but I have no invoice” is useful. It keeps a story from turning into an assumption in the project brief.</p>
      <h2>Talk about priorities before individual upgrades</h2>
      <p>Put your priorities in order and discuss a spending limit you are comfortable with. Ask what can be assessed initially, what remains unknown and what would need further investigation before a scope can be agreed.</p>
      <p>For background, compare <Link href="/blog/frame-off-vs-rolling-restoration">frame-off and rolling restoration</Link> and read the <Link href="/guides/costs">restoration cost guide</Link>. Use them to frame questions, not as a quote for an unseen vehicle.</p>
      <h2>Ask for the scope in writing before approving work</h2>
      <p>Before approving work, ask what the proposed scope includes and excludes, how changes will be approved, how parts purchases will be handled and how progress will be communicated. Ask which dates are estimates and what decisions are still outstanding. These are questions to agree with the shop, not policies to assume.</p>
      <p>Bring one page with the vehicle details, current condition, how you want to drive it, the points you will not compromise on, budget priorities and the work you already know about. Keep it with the photographs and records so the next conversation starts from the same facts.</p>
      <p>If you are ready to discuss a classic in Edmonton, <Link href="/quote#form">send 2240 Speed Shop your vehicle details and project goals</Link>. Include the photographs and your short description of how you want to use the car.</p>
    </>
  );
}
