import Link from "next/link";
import type { ArticleMeta } from "../types";

/**
 * JOURNAL — Restomod Wheel Fitment: Check Brake Clearance First.
 * Published 2026-11-08. Copy fact-checked against the cited manufacturer /
 * publisher documents; no shop policies, prices or first-person claims added.
 */

export const meta: ArticleMeta = {
  slug: "restomod-wheel-brake-clearance",
  title: "Restomod Wheel Fitment: Check Brake Clearance First",
  accent: "Brake Clearance",
  metaTitle: "Restomod Wheels: Check Brake Clearance",
  description: "Before buying restomod wheels or a brake kit, check the exact caliper template, wheel profile and chassis combination. A practical fitment brief.",
  datePublished: "2026-11-08",
  dateModified: "2026-11-08",
  author: "2240 Speed Shop",
  category: "Restomods",
  targetKeywords: [
    "restomod wheel fitment",
    "brake caliper clearance",
    "classic car wheels Edmonton",
    "wheel clearance template",
  ],
  faq: [
    {
      q: "Will my restomod wheels clear a big brake kit?",
      a: "Wheel diameter alone does not prove it. Identify the exact brake kit and wheel, get the kit manufacturer's clearance drawing for that kit and check the combination. A matching bolt pattern is not the whole fitment decision.",
    },
    {
      q: "How do I use a brake wheel-clearance template?",
      a: "Follow the drawing for your exact kit. Wilwood's instructions call for printing the template at true 1:1 scale, verifying both printed axes with a ruler, supporting it on cardboard and testing it inside the wheel. Wilwood also says actual parts may vary and the drawing is a guideline, not a substitute for checking the real parts.",
    },
    {
      q: "How much clearance is needed between a wheel and a brake caliper?",
      a: "Use the figure on the drawing for your own kit. The Wilwood DS1625 drawing specifies a minimum of 0.080 inches between the wheel and caliper in all areas, but that is the requirement on that drawing, not a universal specification for every brand or kit.",
    },
    {
      q: "Can I use a brake clearance diagram to design custom wheels?",
      a: "Wilwood warns not to use its general clearance diagram to design custom wheels and directs the wheel company to request a 3D model of the brake kit.",
    },
    {
      q: "Is a caliper-template check enough to approve wheel fitment?",
      a: "No. Ask the installer to assess the full package: wheel and tire suitability, suspension and body clearance, steering movement, fastener engagement and the final ride-height plan.",
    },
  ],
  citations: [
    {
      name: "“Wheel Clearance Drawing DS1625,” Wilwood Engineering",
      url: "https://www.wilwood.com/Images/BrakeKits/WCD_Drawings/WCD_dwg-Large/ds1625_wcd.pdf",
    },
    {
      name: "“Installation Instructions DS1676,” Wilwood Engineering",
      url: "https://www.wilwood.com/PDF/DataSheets/ds1676.pdf",
    },
  ],
  internalLinks: [
    "/blog/disc-brake-conversion-cost-canada",
    "/services/restomods-custom-builds",
    "/quote",
  ],
  readingMinutes: 3,
};

/** Editorial plate: steel line art, tungsten callouts. */
export function Illustration() {
  return (
    <svg
      viewBox="0 0 1200 660"
      role="img"
      aria-label="Technical line diagram of a wheel section over a brake rotor and caliper in steel line art, with a dashed tungsten clearance gap between caliper and wheel barrel, a cardboard-backed paper template with ruler marks on both axes, and numbered callouts for the exact kit drawing, clearance, scale check, wheel part number and full-package fitment"
      className="h-auto w-full"
    >
      <title>Check the exact kit, at true scale</title>
      <defs>
        <radialGradient id="res-pool" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffb066" stopOpacity="0.1" />
          <stop offset="60%" stopColor="#ffb066" stopOpacity="0.04" />
          <stop offset="100%" stopColor="#ffb066" stopOpacity="0" />
        </radialGradient>
      </defs>

      <ellipse cx="560" cy="580" rx="380" ry="28" fill="url(#res-pool)" />

      <g fill="none" stroke="#9a9ca0" strokeWidth="1.8" strokeLinejoin="round">
        <circle cx="520" cy="330" r="230" />
        <circle cx="520" cy="330" r="200" strokeOpacity="0.6" />
        <circle cx="520" cy="330" r="150" />
        <circle cx="520" cy="330" r="34" />
        <path d="M 400 220 A 165 165 0 0 1 640 220 L 620 250 A 130 130 0 0 0 420 250 Z" strokeWidth="2.2" />
        <rect x="870" y="160" width="260" height="320" rx="2" />
        <path d="M 890 450 L 1110 450 M 890 180 L 890 450" strokeWidth="1" />
      </g>

      <g fill="none" stroke="#ffb066" strokeWidth="1.4" strokeDasharray="4 5" strokeLinecap="round">
        <path d="M 395 205 A 185 185 0 0 1 645 205" /><g strokeWidth="1"><line x1="890" y1="200" x2="1110" y2="200" /><line x1="1110" y1="200" x2="1110" y2="450" /></g>
      </g>

      <g fontFamily="var(--font-plex-mono), ui-monospace, monospace" letterSpacing="0.08em">
        {[
          { x: 520, y: 235, n: "1" },
          { x: 520, y: 205, n: "2" },
          { x: 1000, y: 320, n: "3" },
          { x: 520, y: 560, n: "4" },
          { x: 745, y: 330, n: "5" },
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
          1 · CALIPER — EXACT KIT, EXACT DRAWING
        </text>
        <text x="40" y="108" fill="#ffb066">
          2 · CLEARANCE — PER THAT DRAWING
        </text>
        <text x="40" y="132" fill="#ffb066">
          3 · TEMPLATE — VERIFY 1:1 BOTH AXES
        </text>
        <text x="1160" y="84" textAnchor="end" fill="#ffb066">
          4 · WHEEL — MAKE AND PART NUMBER
        </text>
        <text x="1160" y="108" textAnchor="end" fill="#ffb066">
          5 · FULL PACKAGE — NOT JUST THE CALIPER
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
        FIG. A — CHECK THE EXACT KIT, AT TRUE SCALE
      </text>
    </svg>
  );
}

export function Body() {
  return (
    <>
      <p>Wheel diameter alone does not prove that a wheel will clear a brake conversion. Before buying wheels or brakes for your restomod, identify the exact kit and wheel, obtain the kit manufacturer&rsquo;s clearance drawing and check the combination. A matching bolt pattern is not the whole fitment decision.</p>
      <p>Wilwood&rsquo;s wheel-clearance instructions call for checking a printed template at true 1:1 scale, supporting it on cardboard and testing it inside the wheel. The manufacturer also says actual parts may vary and that the drawing is a guideline, not a substitute for checking the real parts.<a className="cite-ref" href="#src-1">[1]</a></p>
      <h2>Start with the parts that are actually on the car</h2>
      <p>Write down the year and model, but do not stop there. Has someone changed the spindles, hubs or rear axle? Which brake kit is proposed? What is the wheel&rsquo;s manufacturer and part number? Give the installer the known information and mark the rest as unknown.</p>
      <p>Wilwood&rsquo;s installation instructions require the purchaser and installer to verify component suitability and fitment for the application.<a className="cite-ref" href="#src-2">[2]</a> A kit catalogue entry is the beginning of that check, not its completion.</p>
      <h2>Ask for the drawing for your exact brake kit</h2>
      <p>Do not borrow a template for a similar-looking caliper. Ask the brake supplier for the correct drawing and revision for the complete kit. Then follow that drawing&rsquo;s instructions, including its required clearance.</p>
      <p>The Wilwood DS1625 drawing cited here specifies a minimum of 0.080 inches between the wheel and caliper in all areas.<a className="cite-ref" href="#src-1">[1]</a> That is the requirement on that drawing, not a universal specification for every brake brand or kit. Use the instructions for your own parts.</p>
      <h2>Check print scale before checking the wheel</h2>
      <p>A template printed with “fit to page” may not be the right size. Wilwood explicitly calls for verifying both printed axes with a ruler before proceeding.<a className="cite-ref" href="#src-1">[1]</a> If the scale is wrong, stop and correct it. Check both axes again before testing the wheel.</p>
      <p>Keep the wheel part number, brake-kit number, drawing revision and the result together. If you are ordering custom wheels, Wilwood warns not to use its general clearance diagram to design them; it directs the wheel company to request a 3D model of the brake kit.<a className="cite-ref" href="#src-1">[1]</a></p>
      <h2>Caliper clearance is only one question</h2>
      <p>Ask the installer to assess the full package: wheel and tire suitability, suspension and body clearance, steering movement, fastener engagement and the final ride-height plan. Do not treat a successful caliper-template check as approval for the complete vehicle.</p>
      <p>For the broader project, read the <Link href="/blog/disc-brake-conversion-cost-canada">disc-brake conversion cost guide</Link> alongside the <Link href="/services/restomods-custom-builds">restomod service overview</Link>. Plan the wheel and brake decisions together rather than buying one and trying to rescue the other later.</p>
      <p>If you already have wheels you want to keep, make that part of the brief. <Link href="/quote#form">Send the vehicle details and wheel information to 2240 Speed Shop</Link> before ordering the next set of parts. Include the wheel manufacturer and part number so those details are part of the fitment discussion.</p>
    </>
  );
}
