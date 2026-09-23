import Link from "next/link";
import type { ArticleMeta } from "../types";

/**
 * JOURNAL — Carb to EFI Conversion: Is It Worth It on an Alberta Classic?
 * What a self-tuning throttle-body system changes, why cold starts and
 * shoulder seasons make the case here, the 58 psi fuel system it needs, and
 * CAD ranges built from Holley's list price and the Bank of Canada rate.
 * Links down into performance and engine services, the carb, cold-start,
 * ethanol, ignition and wiring articles, the exhaust article, and quote.
 */

export const meta: ArticleMeta = {
  slug: "carb-to-efi-conversion-alberta",
  title: "Carb to EFI Conversion: Is It Worth It on an Alberta Classic?",
  accent: "Worth It",
  metaTitle: "Is a Carb to EFI Conversion Worth It?",
  description:
    "What a throttle-body EFI conversion changes on an Alberta classic — cold starts, altitude, the 58 psi fuel system it needs, and typical all-in costs in CAD.",
  datePublished: "2026-09-22",
  dateModified: "2026-09-22",
  author: "2240 Speed Shop",
  category: "Restomods",
  targetKeywords: [
    "carb to efi conversion worth it",
    "efi conversion cost canada",
    "throttle body efi classic car",
    "holley sniper cold start",
    "efi conversion edmonton",
  ],
  faq: [
    {
      q: "Is converting a carburetor to EFI worth it?",
      a: "For a classic that actually gets driven, usually yes. A self-tuning throttle-body system handles cold starts, hot restarts, and the change in air from July to October on its own, where a carburetor needs a choke and a jetting compromise. It is not worth it on a numbers-matching show car where originality is the value, or on an engine with worn rings or bad valves, which injection will not fix.",
    },
    {
      q: "How much does an EFI conversion cost in Canada?",
      a: "As a planning range, a self-tuning throttle-body kit runs about $2,000 to $3,000 CAD at September 2026 exchange rates, an EFI-rated fuel system $600 to $1,500, and installation 8 to 20 hours of labour. All-in, a properly done throttle-body conversion on a healthy engine typically lands between $4,000 and $8,000 CAD. Multi-port conversions run higher. These are planning ranges, not quotes.",
    },
    {
      q: "Does EFI help a classic start in the cold?",
      a: "Yes. The computer adds fuel based on the coolant temperature and controls idle air until the engine is warm, so there is no choke to set and no pumping the pedal. It cannot fix a weak battery, a tired ignition, or oil that is too thick, and below roughly minus fifteen a block heater still makes every start easier.",
    },
    {
      q: "Do I need a new fuel pump for EFI?",
      a: "Yes. A carburetor runs on a few psi; a Sniper-type throttle body wants 58 psi from a pump rated for high pressure, with a bypass regulator and a return line or an in-tank module. Holley recommends an in-tank pump for quieter, cooler running. Carb-era rubber hose is not rated for that pressure, and a rusty tank will clog the filters, so the tank gets inspected too.",
    },
    {
      q: "Will an EFI conversion hurt my classic's value?",
      a: "It depends on the car. On a numbers-matching or show car, originality is the value, so keep the original carburetor and intake bagged and labelled and make the conversion reversible. On a driver or a restomod, what matters is a tidy, documented install that the next owner can understand.",
    },
  ],
  citations: [
    {
      name: "“Sniper EFI Installation Instructions — Quickstart Manual (550-867, 550-868, 550-869),” Holley Performance Products technical library",
      url: "https://documents.holley.com/techlibrary_199r11367.pdf",
    },
    {
      name: "“Renewable Fuels Standard,” Government of Alberta",
      url: "https://www.alberta.ca/renewable-fuels-standard",
    },
    {
      name: "“Holley Sniper 2 EFI - Black, part 550-511-3XX,” Holley Performance Products (advertised price checked September 22, 2026)",
      url: "https://www.holley.com/products/fuel_systems/fuel_injection/sniper_efi/sniper_2_efi/parts/550-511-3XX",
    },
    {
      name: "“Daily exchange rates,” Bank of Canada (USD/CAD 1.4064 on September 22, 2026)",
      url: "https://www.bankofcanada.ca/rates/exchange/daily-exchange-rates/",
    },
  ],
  internalLinks: [
    "/services/classic-performance-tuning",
    "/services/engine-swaps-builds",
    "/blog/carburetor-rebuild-signs",
    "/blog/do-classics-need-block-heaters",
    "/blog/ethanol-fuel-classic-cars-canada",
    "/blog/electronic-ignition-conversion-classics",
    "/blog/restomod-wiring-harness",
    "/blog/custom-exhaust-cost-canada",
    "/quote",
  ],
  readingMinutes: 8,
};

/**
 * Two engines side by side in section. Left: a four-barrel carburetor with a
 * choke plate and a float bowl. Right: a throttle body with injectors, a
 * coolant sensor, a MAP sensor, and an O2 sensor downstream, fed by a 58 psi
 * loop — in-tank pump, filter, throttle body, bypass regulator, return.
 * Editorial plate.
 */
export function Illustration() {
  return (
    <svg
      viewBox="0 0 1200 660"
      role="img"
      aria-label="Side-by-side technical diagram: on the left a carburetor with its choke plate and float bowl; on the right a throttle-body fuel injection unit with injectors, a coolant temperature sensor, a manifold pressure sensor and an oxygen sensor in the exhaust, fed by a high-pressure fuel loop running from an in-tank pump through a filter and a bypass regulator and back to the tank"
      className="h-auto w-full"
    >
      <title>Carburetor versus throttle-body injection</title>
      <defs>
        <radialGradient id="efi-pool" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffb066" stopOpacity="0.1" />
          <stop offset="60%" stopColor="#ffb066" stopOpacity="0.04" />
          <stop offset="100%" stopColor="#ffb066" stopOpacity="0" />
        </radialGradient>
      </defs>

      <ellipse cx="600" cy="572" rx="470" ry="26" fill="url(#efi-pool)" />

      {/* divider */}
      <line x1="600" y1="96" x2="600" y2="520" stroke="#9a9ca0" strokeOpacity="0.25" strokeDasharray="3 6" />

      {/* LEFT — carburetor */}
      <g fill="none" stroke="#9a9ca0" strokeWidth="1.8" strokeLinejoin="round">
        {/* air horn + body */}
        <rect x="190" y="150" width="200" height="190" rx="6" />
        {/* venturis */}
        <path d="M 225 175 Q 245 245 225 315" />
        <path d="M 275 175 Q 255 245 275 315" />
        <path d="M 305 175 Q 325 245 305 315" />
        <path d="M 355 175 Q 335 245 355 315" />
        {/* float bowl */}
        <rect x="390" y="210" width="80" height="120" rx="4" />
        <path d="M 400 280 L 460 280" strokeWidth="1" strokeOpacity="0.6" />
        <ellipse cx="430" cy="272" rx="18" ry="8" strokeWidth="1.2" />
        {/* manifold */}
        <path d="M 170 340 L 410 340 L 440 400 L 140 400 Z" strokeWidth="1.5" />
      </g>
      {/* choke plate */}
      <g stroke="#ffb066" strokeWidth="2" fill="none">
        <line x1="205" y1="140" x2="375" y2="118" />
        <circle cx="290" cy="129" r="4" fill="#ffb066" />
      </g>
      {/* fuel level shimmer */}
      <g stroke="#ffb066" strokeWidth="1" strokeDasharray="3 4" fill="none" strokeOpacity="0.8">
        <path d="M 395 300 Q 430 292 465 300" />
      </g>

      {/* RIGHT — throttle body EFI */}
      <g fill="none" stroke="#9a9ca0" strokeWidth="1.8" strokeLinejoin="round">
        <rect x="760" y="180" width="200" height="160" rx="6" />
        {/* injectors */}
        <rect x="790" y="150" width="22" height="46" rx="4" />
        <rect x="838" y="150" width="22" height="46" rx="4" />
        <rect x="886" y="150" width="22" height="46" rx="4" />
        {/* throttle blades */}
        <line x1="790" y1="300" x2="840" y2="290" strokeWidth="1.3" />
        <line x1="880" y1="300" x2="930" y2="290" strokeWidth="1.3" />
        {/* manifold */}
        <path d="M 740 340 L 980 340 L 1010 400 L 710 400 Z" strokeWidth="1.5" />
        {/* ECU box on the throttle body */}
        <rect x="968" y="200" width="54" height="80" rx="4" strokeWidth="1.3" />
        {/* coolant sensor */}
        <circle cx="720" cy="420" r="10" strokeWidth="1.3" />
        {/* MAP */}
        <rect x="690" y="226" width="40" height="26" rx="3" strokeWidth="1.3" />
        {/* exhaust pipe with O2 */}
        <path d="M 1010 400 L 1080 470 L 1150 470" strokeWidth="1.5" />
        <line x1="1110" y1="470" x2="1110" y2="446" strokeWidth="1.8" />
      </g>
      {/* spray from injectors */}
      <g stroke="#ffd9ad" strokeWidth="1" strokeOpacity="0.7" fill="none">
        <path d="M 801 200 L 792 240 M 801 200 L 810 240" />
        <path d="M 849 200 L 840 240 M 849 200 L 858 240" />
        <path d="M 897 200 L 888 240 M 897 200 L 906 240" />
      </g>
      {/* 58 psi fuel loop */}
      <g fill="none" stroke="#ffb066" strokeWidth="1.6">
        <rect x="690" y="560" width="120" height="44" rx="6" strokeOpacity="0.9" />
        <path d="M 760 560 L 760 520 L 700 520 L 700 172 L 790 172" />
        <path d="M 908 172 L 1050 172 L 1050 520 L 790 520" strokeDasharray="6 5" />
        <circle cx="1050" cy="330" r="12" />
      </g>
      <text x="750" y="588" textAnchor="middle" fontFamily="var(--font-plex-mono), ui-monospace, monospace" fontSize="10" letterSpacing="0.16em" fill="#ffd9ad">
        IN-TANK PUMP
      </text>

      <g stroke="#ffb066" strokeWidth="0.75" strokeOpacity="0.5" fill="none">
        <path d="M 90 128 L 205 138" />
        <path d="M 90 300 L 395 296" />
        <path d="M 1150 330 L 1062 330" />
        <path d="M 1150 150 L 912 160" />
        <path d="M 640 420 L 710 420" />
        <path d="M 1150 430 L 1110 446" />
      </g>

      <g fontFamily="var(--font-plex-mono), ui-monospace, monospace" letterSpacing="0.08em">
        {[
          { x: 205, y: 138, n: "1" },
          { x: 395, y: 296, n: "2" },
          { x: 1050, y: 330, n: "3" },
          { x: 710, y: 420, n: "4" },
          { x: 1110, y: 446, n: "5" },
        ].map((p) => (
          <g key={p.n}>
            <circle cx={p.x} cy={p.y} r="12.5" fill="#0a0a0b" stroke="#ffb066" strokeWidth="1.2" />
            <text x={p.x} y={p.y + 4} textAnchor="middle" fontSize="11" fill="#ffd9ad">
              {p.n}
            </text>
          </g>
        ))}
      </g>

      <g fontFamily="var(--font-plex-mono), ui-monospace, monospace" fontSize="10.5" letterSpacing="0.16em">
        <text x="40" y="112" fill="#ffb066">
          1 · CHOKE — A GUESS AT MINUS TWENTY
        </text>
        <text x="40" y="284" fill="#ffb066">
          2 · FLOAT BOWL — BOILS ON A HOT RESTART
        </text>
        <text x="1160" y="318" textAnchor="end" fill="#ffb066">
          3 · BYPASS REGULATOR — 58 PSI LOOP
        </text>
        <text x="630" y="446" textAnchor="end" fill="#ffb066">
          4 · COOLANT SENSOR — ENRICHES UNTIL WARM
        </text>
        <text x="1160" y="412" textAnchor="end" fill="#ffb066">
          5 · O2 SENSOR — CLOSED-LOOP CORRECTION
        </text>
        <text x="290" y="440" textAnchor="middle" fill="#9a9ca0">
          CARBURETOR
        </text>
        <text x="860" y="440" textAnchor="middle" fill="#9a9ca0">
          THROTTLE-BODY EFI
        </text>
      </g>

      <text
        x="600"
        y="640"
        textAnchor="middle"
        fontFamily="var(--font-plex-mono), ui-monospace, monospace"
        fontSize="10"
        letterSpacing="0.18em"
        fill="#9a9ca0"
        fillOpacity="0.55"
      >
        FIG. A — WHAT A THROTTLE BODY TAKES OVER FROM THE CHOKE AND THE FLOAT
      </text>
    </svg>
  );
}

export function Body() {
  return (
    <>
      <p>
        For a classic that actually gets driven in Alberta, usually yes. A self-tuning
        throttle-body kit replaces the choke and the float bowl with a computer that meters fuel
        from coolant temperature and air density, so cold starts, hot restarts, and altitude stop
        being tuning problems. Plan on roughly $4,000 to $8,000 CAD, installed properly.
      </p>

      <h2>What does an EFI conversion actually change?</h2>
      <p>
        A carburetor meters fuel with vacuum across a venturi and a set of fixed jets. It is
        simple and it can be excellent, but its calibration is a compromise frozen on the day
        somebody tuned it. A throttle-body system looks like a carburetor on the manifold and
        works nothing like one: injectors spray fuel above the throttle blades, and a small
        computer decides how long they stay open from a coolant temperature sensor, a manifold
        pressure sensor, the throttle position, and an oxygen sensor in the exhaust.
      </p>
      <p>
        That oxygen sensor is the part that makes these kits &ldquo;self-tuning.&rdquo;
        Holley&rsquo;s installation manual for its Sniper system describes closed-loop operation
        most of the time, with the computer learning corrections into its base fuel map once the
        coolant is above 160 °F.
        <a href="#src-1" className="cite-ref">[1]</a> The same manual notes that the manifold
        pressure reading drops at high elevation — the computer sees thinner air directly instead
        of waiting for somebody to change jets.
        <a href="#src-1" className="cite-ref">[1]</a>
      </p>

      <h2>Why does it matter more on an Alberta car?</h2>
      <p>
        Because the conditions move and a carburetor does not. A car tuned on a warm July
        evening is running a different mixture on a frosty October morning, and the choke that
        was fine in May is a guess at minus twenty. With a throttle body, warm-up enrichment
        comes from the coolant sensor and idle air is handled automatically; Holley&rsquo;s
        manual shows coolant enrichment tapering to nothing as the engine reaches temperature.
        <a href="#src-1" className="cite-ref">[1]</a> No choke to set, no pumping the pedal, no
        flooded start in the driveway.
      </p>
      <p>
        Fuel is the second reason. Alberta&rsquo;s Renewable Fuels Standard requires fuel
        suppliers to average at least 5 percent renewable alcohol in gasoline.
        <a href="#src-2" className="cite-ref">[2]</a> Ethanol blends and an open float bowl that
        sits for weeks are not friends, which is the whole story of the{" "}
        <Link href="/blog/ethanol-fuel-classic-cars-canada">ethanol article</Link>. A sealed,
        pressurized system with fuel circulating back to the tank does not leave a bowl of blend
        evaporating on top of the intake.
      </p>
      <blockquote>
        <p>EFI meters fuel. It does not rebuild engines.</p>
      </blockquote>
      <p>
        That is also the honest limit. Holley&rsquo;s own manual says a conversion won&rsquo;t
        cure bad valves, damaged head gaskets, worn rings, or leaking vacuum lines, and it asks
        for a clean switched 12-volt source that stays live while cranking.
        <a href="#src-1" className="cite-ref">[1]</a> A tired engine gets a compression test before
        it gets injectors, and a points distributor usually gets the{" "}
        <Link href="/blog/electronic-ignition-conversion-classics">electronic ignition</Link>{" "}
        treatment at the same time. Below about minus fifteen, a{" "}
        <Link href="/blog/do-classics-need-block-heaters">block heater</Link> still makes every
        start easier, injected or not.
      </p>

      <div className="stat-plate">
        <div>
          <span className="stat-v">$4K–$8K</span>
          <span className="stat-l">Throttle-body conversion, all-in, CAD planning range</span>
        </div>
        <div>
          <span className="stat-v">58 psi</span>
          <span className="stat-l">Fuel pressure a Sniper-type throttle body is fed</span>
        </div>
        <div>
          <span className="stat-v">160 °F</span>
          <span className="stat-l">Coolant temperature before self-tuning starts learning</span>
        </div>
        <div>
          <span className="stat-v">8–20 hrs</span>
          <span className="stat-l">Typical install labour, depending on the fuel system</span>
        </div>
      </div>

      <h2>What does a carb-to-EFI conversion cost in Canada?</h2>
      <p>
        Start with the kit, because it is the one number you can check. Holley lists the Sniper 2
        base kit at US$1,449.95 before options,
        <a href="#src-3" className="cite-ref">[3]</a> and the Bank of Canada had the US dollar at
        1.4064 Canadian on September 22, 2026.
        <a href="#src-4" className="cite-ref">[4]</a> That is about $2,040 CAD before shipping,
        brokerage, and GST, and the display and ignition options move it from there. Everything
        else depends on the car.
      </p>
      <div className="table-bleed">
        <table>
          <caption className="sr-only">
            Typical Canadian dollar planning ranges for a carburetor to throttle-body fuel
            injection conversion on a classic V8, by line item, with a multi-port conversion for
            comparison
          </caption>
          <thead>
            <tr>
              <th scope="col">Line item</th>
              <th scope="col">What it covers</th>
              <th scope="col">Typical CAD</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Throttle-body kit</th>
              <td>Self-tuning unit, harness, sensors, handheld or dash display</td>
              <td className="num">$2,000 – $3,000</td>
            </tr>
            <tr>
              <th scope="row">EFI fuel system</th>
              <td>High-pressure pump or in-tank module, regulator, filters, rated hose, return</td>
              <td className="num">$600 – $1,500</td>
            </tr>
            <tr>
              <th scope="row">Timing control (optional)</th>
              <td>Distributor the computer can control, instead of a fixed advance curve</td>
              <td className="num">$500 – $1,000</td>
            </tr>
            <tr>
              <th scope="row">Sundries</th>
              <td>O2 sensor bung, fittings, wiring, filters, gaskets</td>
              <td className="num">$200 – $500</td>
            </tr>
            <tr>
              <th scope="row">Labour</th>
              <td>8 to 20 hours at $100 to $165 an hour, mostly fuel system and wiring</td>
              <td className="num">$800 – $3,300</td>
            </tr>
            <tr>
              <th scope="row">All-in, throttle body</th>
              <td>A healthy engine, done properly, first drive included</td>
              <td className="num">$4,000 – $8,000</td>
            </tr>
            <tr>
              <th scope="row">Multi-port, for comparison</th>
              <td>New intake, rails, eight injectors, standalone computer</td>
              <td className="num">$8,000 – $15,000+</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Those are planning ranges, not quotes. The line that moves most is the fuel system: a car
        with a clean tank and room for an in-tank module is a different day from one with a
        rotted tank, a mechanical pump, and hard lines that were never meant to see high
        pressure.
      </p>

      <h2>What does the fuel system need?</h2>
      <p>
        A carburetor lives on a few psi. Holley&rsquo;s manual calls for a high-pressure pump
        capable of 60 psi, feeding the throttle body at 58 psi through a bypass regulator, and it
        strongly recommends an in-tank pump for quieter running, less cavitation, and a cooler
        pump.
        <a href="#src-1" className="cite-ref">[1]</a> In practice that means:
      </p>
      <ul>
        <li>
          <strong>A pump rated for pressure.</strong> The mechanical pump on the block comes off
          or gets blocked off. An inline electric pump works; an in-tank module is quieter and
          keeps the pump cool.
        </li>
        <li>
          <strong>Lines and hose rated for EFI.</strong> Carb-era rubber hose is not built for 58
          psi, and a pinhole leak at that pressure is a fire, not a drip.
        </li>
        <li>
          <strong>A clean tank.</strong> Rust flakes and varnish end up in the filters within
          days. Old tanks get inspected, cleaned, or replaced before the pump goes in.
        </li>
        <li>
          <strong>A return path.</strong> Either a return line to the tank or a returnless module
          with the regulator in the tank. Heat-soaked fuel keeps moving instead of boiling in a
          bowl.
        </li>
        <li>
          <strong>An oxygen sensor in the right place.</strong> Close to the engine where it reads
          all the cylinders on one bank — 1 to 10 inches after the collector on long-tube
          headers, with at least 18 inches of pipe after it, and never in the bottom of the pipe
          where condensation collects.
          <a href="#src-1" className="cite-ref">[1]</a> That bung is part of the{" "}
          <Link href="/blog/custom-exhaust-cost-canada">exhaust plan</Link>, so decide it before
          the pipes are bent.
        </li>
      </ul>
      <p>
        The wiring is the other half. A clean switched ignition feed, solid grounds, and a
        harness that is not spliced into forty-year-old cloth wire are the difference between a
        conversion that just works and one that stalls at a light. If the car&rsquo;s wiring is
        already suspect, the{" "}
        <Link href="/blog/restomod-wiring-harness">new-harness conversation</Link> belongs in the
        same budget.
      </p>

      <h2>When should you keep the carburetor?</h2>
      <p>
        When originality is the point. A numbers-matching car, a show car judged on correctness,
        or a period build where the carburetor is part of the story should keep it — and a
        well-rebuilt, correctly jetted carb is a perfectly good summer engine. If yours floods,
        hesitates, or will not hold a tune, the{" "}
        <Link href="/blog/carburetor-rebuild-signs">eight signs of a tired carburetor</Link> will
        tell you whether it needs a rebuild or a replacement.
      </p>
      <p>
        If the car is a driver or a restomod, the calculation changes. Shoulder-season starts,
        hot restarts at the gas station, and a mixture that follows the weather are exactly the
        things a throttle body does well. Either way, keep the original carburetor and intake
        bagged and labelled. A reversible conversion keeps every door open.
      </p>

      <h2>How should you decide on your car?</h2>
      <p>
        In this order. First, is the engine healthy — compression, leak-down, no vacuum leaks,
        ignition sorted? If not, fix that first; injection will not. Second, how will the car be
        used — summer shows only, or real miles from April to October? Third, is the fuel system
        salvageable, or is this a tank-and-lines job anyway? Answer those three and the choice is
        usually obvious.
      </p>
      <p>
        EFI conversions, fuel systems, and the ignition and wiring work around them sit under{" "}
        <Link href="/services/classic-performance-tuning">performance and tuning</Link> and{" "}
        <Link href="/services/engine-swaps-builds">engine swaps and builds</Link>. Send photos of
        the engine bay, the tank, and the fuel lines through the{" "}
        <Link href="/quote#form">quote page</Link> and you will get a straight answer on whether
        your car wants a rebuilt carburetor or a throttle body — and what the fuel system will
        really take.
      </p>
    </>
  );
}
