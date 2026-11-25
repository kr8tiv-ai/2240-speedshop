import Link from "next/link";
import type { ArticleMeta } from "../types";

/**
 * JOURNAL — Classic Car Overheating: What to Tell Your Shop.
 * Published 2026-11-08. Copy fact-checked against the cited manufacturer /
 * publisher documents; no shop policies, prices or first-person claims added.
 */

export const meta: ArticleMeta = {
  slug: "classic-car-overheating-diagnosis-edmonton",
  title: "Classic Car Overheating: What to Tell Your Shop",
  accent: "Overheating",
  metaTitle: "Classic Overheating: What to Tell a Shop",
  description: "Classic car running hot? Record when it happens, what changed and what the gauge shows before booking cooling-system diagnosis in Edmonton.",
  datePublished: "2026-11-08",
  dateModified: "2026-11-08",
  author: "2240 Speed Shop",
  category: "Classic service",
  targetKeywords: [
    "classic car overheating Edmonton",
    "restomod cooling diagnosis",
    "classic car running hot",
    "radiator cap classic car",
  ],
  faq: [
    {
      q: "What should I write down when my classic car overheats?",
      a: "When the temperature rose, what the gauge showed, the driving situation (idle, on the road, after shutdown or soon after a cold start), whether the air conditioning was on, any steam or leak you already saw, and what changed on the car before the problem began. Record observations, not a guess at the failed part.",
    },
    {
      q: "Should I keep driving my classic to see when it overheats?",
      a: "No. Do not deliberately recreate an overheating event to collect evidence. If the car is overheating, stop somewhere safe, switch the engine off and arrange assistance. Only record what you have already observed.",
    },
    {
      q: "Can I open the radiator cap to check the coolant?",
      a: "Not while the engine is hot. Gates warns against opening a hot cooling system. Let the engine cool before anyone inspects it.",
    },
    {
      q: "Does the radiator cap matter on a classic car?",
      a: "Yes. Gates explains that the cap helps maintain the specified system pressure and recommends checking its rating against the vehicle specification and testing it with professional equipment. Include any cap details in your records and leave changes until the system has been assessed.",
    },
    {
      q: "What cooling history should I bring for an engine-swapped classic?",
      a: "List the engine, radiator, fan, shroud and fan controller if known, plus recent coolant, hose, electrical or engine-installation work. Write unknown where you do not know a part, and mark any part number you are unsure of as unverified.",
    },
  ],
  citations: [
    {
      name: "“Performance Engine Cooling Manual,” Gates",
      url: "https://images.carid.com/gates/radiators-fans-cooling-system/pdf/cooling-system-troubleshooting-manual.pdf",
    },
    {
      name: "“Radiator Cap Function Test,” Gates Tech Zone",
      url: "https://www.gatestechzone.com/gb/en/technical-section/cooling-guide/radiator-cap-function-test.html",
    },
  ],
  internalLinks: [
    "/services/engine-swaps-builds",
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
      aria-label="Technical line diagram of a classic engine bay cooling system: radiator, fan and shroud, radiator cap and upper hose in steel line art, with numbered tungsten callouts for the temperature gauge, the cap that must never be opened hot, the cooling parts to list, when the temperature rose and recent changes"
      className="h-auto w-full"
    >
      <title>What to record before the shop sees it</title>
      <defs>
        <radialGradient id="cla-pool" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffb066" stopOpacity="0.1" />
          <stop offset="60%" stopColor="#ffb066" stopOpacity="0.04" />
          <stop offset="100%" stopColor="#ffb066" stopOpacity="0" />
        </radialGradient>
      </defs>

      <ellipse cx="560" cy="580" rx="380" ry="28" fill="url(#cla-pool)" />

      <g fill="none" stroke="#9a9ca0" strokeWidth="1.8" strokeLinejoin="round">
        <rect x="180" y="150" width="300" height="340" rx="6" />
        <g strokeWidth="1" strokeOpacity="0.45"><line x1="200" y1="190" x2="460" y2="190" /><line x1="200" y1="250" x2="460" y2="250" /><line x1="200" y1="310" x2="460" y2="310" /><line x1="200" y1="370" x2="460" y2="370" /><line x1="200" y1="430" x2="460" y2="430" /></g>
        <circle cx="660" cy="320" r="150" />
        <circle cx="660" cy="320" r="40" />
        <path d="M 660 170 L 660 280 M 660 360 L 660 470 M 510 320 L 620 320 M 700 320 L 810 320" strokeWidth="1.2" strokeOpacity="0.6" />
        <rect x="300" y="110" width="60" height="40" rx="4" />
        <path d="M 480 200 C 560 200 560 120 860 150" strokeWidth="2.4" />
        <rect x="900" y="380" width="200" height="130" rx="8" />
        <path d="M 930 480 A 70 70 0 0 1 1070 480" />
      </g>

      <g fill="none" stroke="#ffb066" strokeWidth="1.4" strokeDasharray="4 5" strokeLinecap="round">
        <path d="M 330 110 L 330 70" /><path d="M 180 520 L 480 520" />
      </g>

      <g fontFamily="var(--font-plex-mono), ui-monospace, monospace" letterSpacing="0.08em">
        {[
          { x: 1000, y: 445, n: "1" },
          { x: 330, y: 130, n: "2" },
          { x: 330, y: 320, n: "3" },
          { x: 660, y: 320, n: "4" },
          { x: 860, y: 150, n: "5" },
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
          1 · GAUGE — READING OR NEEDLE POSITION
        </text>
        <text x="40" y="108" fill="#ffb066">
          2 · CAP — NEVER OPEN HOT
        </text>
        <text x="40" y="132" fill="#ffb066">
          3 · RADIATOR, FAN, SHROUD — LIST THEM
        </text>
        <text x="1160" y="84" textAnchor="end" fill="#ffb066">
          4 · WHEN IT HAPPENED
        </text>
        <text x="1160" y="108" textAnchor="end" fill="#ffb066">
          5 · WHAT CHANGED RECENTLY
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
        FIG. A — WHAT TO RECORD BEFORE THE SHOP SEES IT
      </text>
    </svg>
  );
}

export function Body() {
  return (
    <>
      <p>If your classic is running hot, write down when the temperature rises, what the gauge shows and what changed before the problem began. That gives the shop more to work with than “it overheats sometimes.”</p>
      <p>This is a preparation guide, not a roadside repair procedure. Do not keep driving to collect evidence. If the car is overheating, stop somewhere safe, switch the engine off and arrange assistance rather than testing it again. Never remove a radiator or expansion-tank cap while the engine is hot: Gates warns against opening a hot system. Let it cool before anyone inspects it.<a className="cite-ref" href="#src-1">[1]</a></p>
      <h2>Describe the situation, not the suspected part</h2>
      <p>“It needs a water pump” is a conclusion. “The gauge climbs while I am stopped, then changes when I get moving” is an observation. Give the shop the observation even if you already have a theory.</p>
      <p>Write down whether it happened at idle, on the road, after shutdown or soon after a cold start. Note whether the air conditioning was on, whether there was steam or a visible leak, and whether the gauge returned to its usual reading. Only record what you already observed; do not deliberately recreate an overheating event.</p>
      <h2>Say what the gauge means</h2>
      <p>Does the car have the original gauge, a numbered aftermarket gauge or a warning light? Record the reading or where the needle sat. A photograph taken while safely parked is more useful than trying to remember whether it was “almost red.”</p>
      <p>Do not use someone else&rsquo;s temperature target as a pass/fail test for your build. Bring the engine, thermostat and cooling-system specifications if you have them, and ask the technician to establish what is appropriate for that combination.</p>
      <h2>Bring the history of the cooling system</h2>
      <p>For a swapped car, list the engine, radiator, fan, shroud and controller if known. Include recent work: coolant replacement, hose changes, electrical changes or an engine installation. If you do not know a part, write “unknown.” If you have a part number but are unsure it is right, include it and mark it unverified.</p>
      <p>The radiator cap belongs in that history too. Gates explains that the cap helps maintain the specified system pressure and recommends checking its rating against the vehicle specification and testing it with professional equipment.<a className="cite-ref" href="#src-2">[2]</a> Include any cap specifications in your existing records. Leave any change of cap until the system has been assessed.</p>
      <h2>A note you can copy before calling</h2>
      <ul>
      <li>Vehicle, engine and known cooling-system parts.</li>
      <li>Exact symptom and gauge reading, if available.</li>
      <li>Driving situation when it happened.</li>
      <li>Visible leaks or steam already observed.</li>
      <li>Recent repairs and when the symptom first appeared.</li>
      <li>Whether the vehicle is currently safe to move; ask about transport rather than assuming.</li>
      </ul>
      <p>A cooling complaint after an engine conversion also belongs in the wider <Link href="/services/engine-swaps-builds">engine-swap discussion</Link>. The parts list and installation history matter more than a guess based on one symptom.</p>
      <p>With the symptoms and installation history in one place, the next conversation can start with what actually happened. To discuss the car with 2240 Speed Shop in Edmonton, <Link href="/quote#form">send 2240 Speed Shop the vehicle details and symptoms</Link> to start the conversation.</p>
    </>
  );
}
