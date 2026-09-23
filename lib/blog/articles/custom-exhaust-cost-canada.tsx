import Link from "next/link";
import type { ArticleMeta } from "../types";

/**
 * JOURNAL — Custom Exhaust Cost in Canada: Catback vs. Full Custom, and Why
 * Material Matters in Edmonton. CAD planning ranges by system type, aluminized
 * versus 409 versus 304 stainless in a chloride city (Reliance Foundry, Global
 * News 2019), the labour drivers including O2 bung placement for EFI (Holley),
 * and Alberta's muffler rule (Vehicle Equipment Regulation s 61). Links into
 * performance services, the noise-law, road-salt, EFI and storage articles.
 */

export const meta: ArticleMeta = {
  slug: "custom-exhaust-cost-canada",
  title: "Custom Exhaust Cost in Canada: Catback vs. Full Custom, and Why Material Matters in Edmonton",
  accent: "Material",
  metaTitle: "Custom Exhaust Cost in Canada",
  description:
    "What bolt-on, custom-bent, and TIG-welded stainless exhausts typically cost in CAD, why stainless outlasts aluminized in Edmonton, and Alberta's muffler rule.",
  datePublished: "2026-09-22",
  dateModified: "2026-09-22",
  author: "2240 Speed Shop",
  category: "Costs & Pricing",
  targetKeywords: [
    "custom exhaust cost canada",
    "custom exhaust edmonton",
    "stainless vs aluminized exhaust",
    "classic car dual exhaust cost",
    "mandrel bent exhaust price",
  ],
  faq: [
    {
      q: "How much does a custom exhaust cost in Canada?",
      a: "As planning ranges in CAD, installed: a pre-bent bolt-on system for a classic V8 typically runs $1,500 to $3,000, a custom-bent 409 stainless dual system $2,000 to $4,000, and a TIG-welded 304 stainless system from about $3,500 to $7,000 or more. Headers add roughly $1,000 to $3,500 installed. These are planning ranges, not quotes; the car and the material decide the number.",
    },
    {
      q: "Is stainless steel exhaust worth it in Edmonton?",
      a: "For a car that ever sees winter roads, usually yes. Aluminized steel is carbon steel protected by an aluminum coating, and once that coating is scraped the steel underneath rusts. 409 stainless outlasts aluminized even though it shows surface rust, and 304 stainless resists corrosion far better again. Chloride from road treatment is exactly what finds a scraped pipe.",
    },
    {
      q: "What is the difference between 409 and 304 stainless exhaust?",
      a: "409 is a ferritic stainless with less chromium and very little nickel. It is cheaper, it holds its strength, and it shows surface rust sooner. 304 is an austenitic stainless with about 18 percent chromium and 8 percent nickel; it resists corrosion much better and turns a golden-brown where it gets hot. For heavy de-icing exposure there is also 316, which costs substantially more.",
    },
    {
      q: "Is a louder exhaust legal in Alberta?",
      a: "Alberta's Vehicle Equipment Regulation requires a muffler that expels exhaust without excessive noise and without flames or sparks, prohibits driving with a widened muffler outlet, and prohibits devices that increase the noise. Edmonton adds its own noise bylaw and fines. A well-built system can sound good and still sit on the right side of that line.",
    },
    {
      q: "What does mandrel-bent mean, and do I need it?",
      a: "A mandrel bender supports the tube from the inside while it bends, so the pipe keeps its full diameter through the curve. A crush bend squeezes the tube and narrows it at every bend. On a mild engine the difference is small; on a performance build, or anywhere the pipe snakes around a crossmember, mandrel bends keep the flow you paid for.",
    },
  ],
  citations: [
    {
      name: "“City of Edmonton says what calcium chloride may do to your vehicle is your responsibility,” Global News, June 2019",
      url: "https://globalnews.ca/news/5436112/edmonton-vehicle-calcium-chloride-winter-roads/",
    },
    {
      name: "David Hilscher, “304 Stainless Steel versus 409 Stainless Steel,” Reliance Foundry, October 2019",
      url: "https://www.reliance-foundry.com/blog/304-vs-409-stainless-steel",
    },
    {
      name: "“Sniper EFI Installation Instructions — Quickstart Manual (550-867, 550-868, 550-869),” Holley Performance Products technical library",
      url: "https://documents.holley.com/techlibrary_199r11367.pdf",
    },
    {
      name: "Vehicle Equipment Regulation, Alta Reg 122/2009, s 61, Alberta King’s Printer",
      url: "https://kings-printer.alberta.ca/documents/Regs/2009_122.pdf",
    },
  ],
  internalLinks: [
    "/services/classic-performance-tuning",
    "/blog/alberta-road-salt-rust-prevention",
    "/blog/carb-to-efi-conversion-alberta",
    "/blog/alberta-exhaust-noise-laws",
    "/blog/classic-car-winter-storage-alberta",
    "/quote",
  ],
  readingMinutes: 7,
};

/**
 * A classic V8 dual exhaust in side elevation as steel line art: manifolds or
 * headers, an H-pipe crossover, two mufflers, tailpipes arching over the rear
 * axle. A dashed spray zone under the car marks where chloride hits first,
 * and three pipe sections are tagged aluminized, 409, and 304. Editorial plate.
 */
export function Illustration() {
  return (
    <svg
      viewBox="0 0 1200 660"
      role="img"
      aria-label="Side-elevation line drawing of a classic V8 dual exhaust: headers, an H-pipe crossover, two mufflers, and tailpipes arching over the rear axle, with a dashed spray zone underneath marking where road chloride hits first and pipe sections tagged aluminized steel, 409 stainless and 304 stainless"
      className="h-auto w-full"
    >
      <title>Where an exhaust meets the brine</title>
      <defs>
        <radialGradient id="ex-pool" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffb066" stopOpacity="0.1" />
          <stop offset="60%" stopColor="#ffb066" stopOpacity="0.04" />
          <stop offset="100%" stopColor="#ffb066" stopOpacity="0" />
        </radialGradient>
      </defs>

      <ellipse cx="600" cy="500" rx="480" ry="26" fill="url(#ex-pool)" />

      {/* ghost body + wheels */}
      <g fill="none" stroke="#9a9ca0" strokeWidth="1.2" strokeOpacity="0.35">
        <path d="M 120 250 L 130 210 L 420 196 L 520 140 L 760 140 L 880 196 L 1080 206 L 1090 250" />
        <circle cx="270" cy="330" r="62" />
        <circle cx="930" cy="330" r="62" />
        <line x1="880" y1="330" x2="980" y2="330" />
      </g>

      {/* exhaust */}
      <g fill="none" stroke="#9a9ca0" strokeWidth="2.2" strokeLinejoin="round" strokeLinecap="round">
        {/* headers */}
        <path d="M 330 250 C 350 300 360 340 400 356" />
        <path d="M 350 250 C 368 296 378 330 410 346" />
        <path d="M 370 250 C 386 292 396 322 420 338" />
        {/* collector + pipe */}
        <path d="M 405 350 L 560 356" />
        {/* H-pipe */}
        <path d="M 520 356 L 520 336" strokeWidth="1.6" />
        {/* muffler */}
        <rect x="600" y="340" width="130" height="34" rx="12" />
        {/* over-axle tailpipe */}
        <path d="M 730 357 L 820 357 Q 870 357 890 300 Q 910 250 960 262 L 1040 290 L 1110 290" />
      </g>

      {/* chloride spray zone */}
      <g fill="none" stroke="#ffb066" strokeWidth="1.2" strokeDasharray="3 5" strokeOpacity="0.8">
        <path d="M 360 470 Q 380 420 400 400" />
        <path d="M 470 470 Q 480 420 500 392" />
        <path d="M 600 470 Q 620 420 650 392" />
        <path d="M 740 470 Q 760 420 790 384" />
      </g>

      {/* material tags */}
      <g fontFamily="var(--font-plex-mono), ui-monospace, monospace" fontSize="10" letterSpacing="0.14em">
        <rect x="444" y="372" width="118" height="22" fill="#0a0a0b" stroke="#9a9ca0" strokeOpacity="0.6" />
        <text x="503" y="387" textAnchor="middle" fill="#9a9ca0">ALUMINIZED</text>
        <rect x="608" y="300" width="60" height="22" fill="#0a0a0b" stroke="#ffb066" strokeOpacity="0.7" />
        <text x="638" y="315" textAnchor="middle" fill="#ffb066">409</text>
        <rect x="992" y="300" width="60" height="22" fill="#0a0a0b" stroke="#ffd9ad" strokeOpacity="0.8" />
        <text x="1022" y="315" textAnchor="middle" fill="#ffd9ad">304</text>
      </g>

      <g stroke="#ffb066" strokeWidth="0.75" strokeOpacity="0.5" fill="none">
        <path d="M 350 250 L 330 150" />
        <path d="M 520 336 L 540 180" />
        <path d="M 665 340 L 700 150" />
        <path d="M 890 300 L 930 150" />
        <path d="M 560 470 L 560 540" />
      </g>
      <g fontFamily="var(--font-plex-mono), ui-monospace, monospace" letterSpacing="0.08em">
        {[
          { x: 330, y: 150, n: "1" },
          { x: 540, y: 180, n: "2" },
          { x: 700, y: 150, n: "3" },
          { x: 930, y: 150, n: "4" },
          { x: 560, y: 540, n: "5" },
        ].map((p) => (
          <g key={p.n}>
            <circle cx={p.x} cy={p.y} r="12.5" fill="#0a0a0b" stroke="#ffb066" strokeWidth="1.2" />
            <text x={p.x} y={p.y + 4} textAnchor="middle" fontSize="11" fill="#ffd9ad">
              {p.n}
            </text>
          </g>
        ))}
      </g>
      <g fontFamily="var(--font-plex-mono), ui-monospace, monospace" fontSize="10.5" letterSpacing="0.16em" fill="#ffb066">
        <text x="330" y="124" textAnchor="middle">1 · HEADERS</text>
        <text x="540" y="154" textAnchor="middle">2 · H-PIPE</text>
        <text x="700" y="124" textAnchor="middle">3 · MUFFLER — THE LAW</text>
        <text x="930" y="124" textAnchor="middle">4 · OVER THE AXLE</text>
        <text x="584" y="572" textAnchor="start">5 · CHLORIDE HITS HERE FIRST</text>
      </g>

      <text
        x="600"
        y="630"
        textAnchor="middle"
        fontFamily="var(--font-plex-mono), ui-monospace, monospace"
        fontSize="10"
        letterSpacing="0.18em"
        fill="#9a9ca0"
        fillOpacity="0.55"
      >
        FIG. A — THE SOUND IS THE SHAPE; THE LIFESPAN IS THE METAL
      </text>
    </svg>
  );
}

export function Body() {
  return (
    <>
      <p>
        A pre-bent bolt-on system for a classic V8 typically lands between $1,500 and $3,000 CAD
        installed, a custom-bent 409 stainless dual system between $2,000 and $4,000, and
        TIG-welded 304 stainless from about $3,500 up. In Edmonton the metal matters as much as
        the sound, because chloride finds a scraped aluminized pipe first.
      </p>

      <h2>What does a custom exhaust cost in Canada?</h2>
      <p>
        The shape of the job sets the price more than the brand on the muffler. A catalogue
        system that bolts to a common car is mostly parts; a system bent to fit a car nobody
        makes a kit for is mostly hours. These are typical installed ranges for a classic V8 at
        Alberta shop rates.
      </p>
      <div className="table-bleed">
        <table>
          <caption className="sr-only">
            Typical Canadian dollar installed price ranges for exhaust work on a classic V8, from
            a pre-bent bolt-on system to a TIG-welded 304 stainless system, with headers and a
            drone fix
          </caption>
          <thead>
            <tr>
              <th scope="col">Option</th>
              <th scope="col">What you get</th>
              <th scope="col">Typical CAD, installed</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Pre-bent bolt-on system</th>
              <td>Catalogue pipes and mufflers for a common chassis, aluminized or 409</td>
              <td className="num">$1,500 – $3,000</td>
            </tr>
            <tr>
              <th scope="row">Custom-bent 409 dual</th>
              <td>Mandrel-bent to the car, crossover, two mufflers, hangers</td>
              <td className="num">$2,000 – $4,000</td>
            </tr>
            <tr>
              <th scope="row">TIG-welded 304 stainless</th>
              <td>Show-quality welds, the best corrosion resistance, the most hours</td>
              <td className="num">$3,500 – $7,000+</td>
            </tr>
            <tr>
              <th scope="row">Headers</th>
              <td>Supplied and fitted, often the fussiest part of a classic install</td>
              <td className="num">$1,000 – $3,500</td>
            </tr>
            <tr>
              <th scope="row">Drone fix</th>
              <td>Resonator or muffler change on an existing system</td>
              <td className="num">$300 – $900</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Planning ranges, not quotes. A lowered car, a swapped engine, or a chassis with no
        catalogue support moves a job toward the top of its row; a stock-height car with an
        off-the-shelf kit sits near the bottom.
      </p>

      <h2>Why does material matter more in Edmonton?</h2>
      <p>
        Because the underside of a car spends five months in chloride. When Edmonton&rsquo;s
        calcium chloride program was in the news in 2019, a local technician told Global News he
        had watched customers&rsquo; cars deteriorate noticeably faster, and the City&rsquo;s
        answer was that maintaining the vehicle is the owner&rsquo;s responsibility.
        <a href="#src-1" className="cite-ref">[1]</a> The{" "}
        <Link href="/blog/alberta-road-salt-rust-prevention">road salt article</Link> has the
        longer story. For an exhaust, it means the material decides how long the system lives:
      </p>
      <ul>
        <li>
          <strong>Aluminized steel.</strong> Ordinary carbon steel hot-dipped in an aluminum alloy.
          The coating seals out rust until a ding or scrape exposes the steel, and then the pipe
          rusts from there.
          <a href="#src-2" className="cite-ref">[2]</a> It is the cheapest option and the first to
          go on a car that sees winter.
        </li>
        <li>
          <strong>409 stainless.</strong> A ferritic stainless with less chromium and very little
          nickel. It shows surface rust sooner than 304 while keeping its structural integrity,
          and it outlasts OEM-style aluminized systems.
          <a href="#src-2" className="cite-ref">[2]</a> With 304, it is one of the two stainless
          grades most car exhausts are made from.
        </li>
        <li>
          <strong>304 stainless.</strong> The 18/8 grade — about 18 percent chromium and 8
          percent nickel — with much higher corrosion resistance. It turns golden-brown where it
          runs hot.
          <a href="#src-2" className="cite-ref">[2]</a>
        </li>
        <li>
          <strong>316 stainless.</strong> A premium grade with added molybdenum, offered for
          heavy de-icing exposure, at substantially more money than 304.
          <a href="#src-2" className="cite-ref">[2]</a>
        </li>
      </ul>

      <div className="stat-plate">
        <div>
          <span className="stat-v">$1.5K–$7K</span>
          <span className="stat-l">Typical installed range, classic V8 system, CAD</span>
        </div>
        <div>
          <span className="stat-v">18 / 8</span>
          <span className="stat-l">Chromium and nickel percentages in 304 stainless</span>
        </div>
        <div>
          <span className="stat-v">409</span>
          <span className="stat-l">Ferritic stainless: outlasts aluminized, shows surface rust</span>
        </div>
        <div>
          <span className="stat-v">s. 61</span>
          <span className="stat-l">Alberta&rsquo;s muffler rule, the line every build respects</span>
        </div>
      </div>

      <h2>Catback, axle-back, or full custom — what is the difference?</h2>
      <p>
        A catback replaces everything behind the catalytic converter; an axle-back replaces only
        the mufflers and tips behind the rear axle. Many classics predate catalytic converters,
        so on those &ldquo;catback&rdquo; really means everything after the manifolds or headers.
        A full custom system is bent to the car from the engine back: pipe diameter chosen for
        the engine, an H-pipe or X-pipe crossover, the mufflers chosen for the sound, and
        tailpipes routed over or around the axle.
      </p>
      <blockquote>
        <p>The sound is the shape of the system. The lifespan is the metal it is made from.</p>
      </blockquote>

      <h2>What drives the labour on a custom system?</h2>
      <ul>
        <li>
          <strong>Clearance.</strong> Lowered cars, swapped engines, and aftermarket crossmembers
          leave less room, and every extra bend is time.
        </li>
        <li>
          <strong>Heat.</strong> Pipes routed near fuel lines, brake lines, and floor pans need
          space or shielding.
        </li>
        <li>
          <strong>Hangers.</strong> Isolated hangers keep the system quiet and stop it from
          cracking at the joints. Rattles are usually hanger problems.
        </li>
        <li>
          <strong>Welding.</strong> MIG is quick and strong; TIG on 304 is slower and cleaner,
          which is why show-quality stainless costs more.
        </li>
        <li>
          <strong>An oxygen sensor bung, if the car is going EFI.</strong> Holley&rsquo;s manual
          wants the sensor close to the engine after the cylinders merge — 1 to 10 inches past the
          collector on long-tube headers — with at least 18 inches of pipe after it, and never in
          the bottom of the pipe.
          <a href="#src-3" className="cite-ref">[3]</a> If a{" "}
          <Link href="/blog/carb-to-efi-conversion-alberta">throttle-body conversion</Link> is
          anywhere in the plan, weld the bung in while the pipes are being built.
        </li>
      </ul>

      <h2>Where is the legal line in Alberta?</h2>
      <p>
        Alberta&rsquo;s Vehicle Equipment Regulation is short on this. Section 61 requires a
        muffler that cools and expels the exhaust without excessive noise and without producing
        flames or sparks, prohibits driving with a widened muffler outlet, and prohibits any
        device on the exhaust or muffler that increases the noise or lets a flame ignite from the
        system.
        <a href="#src-4" className="cite-ref">[4]</a> Edmonton layers its own noise bylaw and fines
        on top; the{" "}
        <Link href="/blog/alberta-exhaust-noise-laws">exhaust noise law article</Link> covers the
        city rules and the enforcement.
      </p>
      <p>
        The practical rule: build for the note, not the volume. A good crossover and the right
        mufflers make a V8 sound like a V8 without making it the loudest thing on the street, and
        a resonator can take out highway drone without taking out the character.
      </p>

      <h2>How do you make an exhaust last on an Alberta car?</h2>
      <ul>
        <li>
          <strong>Pick the metal for the car&rsquo;s life.</strong> A summer-only show car can live
          with aluminized; anything that meets winter roads earns 409 or 304.
        </li>
        <li>
          <strong>Rinse it.</strong> Salt can affect even 304, so wipe or rinse deposits off, and
          do not scrub stainless with steel brushes or pads, which leave iron behind and invite
          rust.
          <a href="#src-2" className="cite-ref">[2]</a>
        </li>
        <li>
          <strong>Fix hangers early.</strong> A sagging pipe gets scraped, and a scraped
          aluminized pipe starts rusting at the scrape.
        </li>
        <li>
          <strong>Block the tailpipes for storage.</strong> Mice love a warm, dry pipe; the{" "}
          <Link href="/blog/classic-car-winter-storage-alberta">winter storage guide</Link>{" "}
          covers the rest of the put-away.
        </li>
      </ul>
      <p>
        Exhaust design and fabrication sit under{" "}
        <Link href="/services/classic-performance-tuning">performance and tuning</Link>. Send
        photos of the underside, the engine, and anything already bolted to it through the{" "}
        <Link href="/quote#form">quote page</Link>, say how the car is driven and what you want it
        to sound like, and you will get a straight range for the material and the build that
        fit.
      </p>
    </>
  );
}
