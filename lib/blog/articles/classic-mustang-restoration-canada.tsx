import Link from "next/link";
import type { ArticleMeta } from "../types";

/**
 * JOURNAL — Classic Mustang Restoration in Canada: Which Year, Where They
 * Rust, What It Costs. First-generation (1964½–1973) generations and what
 * changed (Hagerty 1965–73 guide), the unibody rust map and authenticity
 * checks (Hagerty 1965–66 guide), complete reproduction bodies at their US
 * list price (National Parts Depot) converted at the Bank of Canada rate, and
 * CAD tiers that match the site's restoration cost guide.
 */

export const meta: ArticleMeta = {
  slug: "classic-mustang-restoration-canada",
  title: "Classic Mustang Restoration in Canada: Which Year, Where They Rust, What It Costs",
  accent: "Mustang",
  metaTitle: "Classic Mustang Restoration in Canada",
  description:
    "Which first-generation Mustang to buy, where 1965–73 cars rust, why parts are easy and new bodies are not cheap, and what a Mustang restoration costs in CAD.",
  datePublished: "2026-09-22",
  dateModified: "2026-09-22",
  author: "2240 Speed Shop",
  category: "Buying & Building",
  targetKeywords: [
    "classic mustang restoration",
    "mustang restoration edmonton",
    "first gen mustang rust spots",
    "1965 mustang restoration cost canada",
    "classic mustang buyers guide canada",
  ],
  faq: [
    {
      q: "Which classic Mustang is best to restore?",
      a: "For most people, a 1965–66 or 1967–68 hardtop: they are the most common, the best supported by reproduction parts, and the cheapest way into the car. Fastbacks and convertibles cost more to buy. K-code, Shelby, Boss, and Cobra Jet cars are a different market where authenticity is the whole value, so they need documents before money changes hands.",
    },
    {
      q: "Where do first-generation Mustangs rust?",
      a: "They are unibody cars, so rust in structural places decides the budget. Check the floors, the frame rails, the lower doors, the trunk lid, the cowl vent under the windshield, the area around the rear window, the battery tray, and the lower shock towers. Look out for fibreglass patches and thick filler hiding old repairs.",
    },
    {
      q: "How much does a classic Mustang restoration cost in Canada?",
      a: "As planning ranges in CAD: a mechanical refresh that keeps a driver on the road is roughly $4,000 to $15,000; rust repair in the floors, rails, and cowl alone can run $8,000 to $40,000 or more; a professional driver-quality restoration of the whole car typically lands between $60,000 and $150,000, and show quality from $150,000 up. Parts are plentiful; labour sets the number.",
    },
    {
      q: "Is a reproduction Mustang body shell worth it?",
      a: "Sometimes, when the original structure is mostly gone. National Parts Depot lists complete new shells for 1965–68 fastbacks and convertibles, and 1969–70 fastbacks, at US$20,900 to US$23,900, which is about $29,000 to $34,000 CAD at September 2026 exchange rates before freight, brokerage, and GST. Talk to a registry agent about how the registration and VIN will be handled before you buy one.",
    },
    {
      q: "Should I buy a Mustang in the US and bring it to Alberta?",
      a: "It can make sense for a rust-free car, but the exchange rate, shipping, duty and GST at the border, and the Alberta out-of-province inspection all add up. Price the whole import before you fall in love with the photos, and get a pre-purchase inspection if you cannot see the car in person.",
    },
  ],
  citations: [
    {
      name: "Sajeev Mehta, “Your handy 1965–73 Ford Mustang buyer’s guide,” Hagerty Media, April 2020",
      url: "https://www.hagerty.com/media/buying-and-selling/your-handy-1965-73-ford-mustang-buyers-guide/",
    },
    {
      name: "Sajeev Mehta, “Your handy 1965–66 Ford Mustang buyer’s guide,” Hagerty Media, January 2021",
      url: "https://www.hagerty.com/media/buying-and-selling/1965-66-ford-mustang-buyers-guide/",
    },
    {
      name: "“1965–1973 Mustang Complete Body Shell,” National Parts Depot (list prices checked September 22, 2026)",
      url: "https://www.npdlink.com/1965-1973-mustang/body-exterior/body-parts-and-sheet-metal/complete-body-shell-by-dynacorn",
    },
    {
      name: "“Daily exchange rates,” Bank of Canada (USD/CAD 1.4064 on September 22, 2026)",
      url: "https://www.bankofcanada.ca/rates/exchange/daily-exchange-rates/",
    },
  ],
  internalLinks: [
    "/services/classic-car-restoration",
    "/blog/classic-car-pre-purchase-inspection",
    "/blog/rust-repair-cost-canada",
    "/blog/alberta-road-salt-rust-prevention",
    "/blog/classic-car-restoration-cost-canada",
    "/blog/what-is-a-restomod",
    "/blog/disc-brake-conversion-cost-canada",
    "/blog/importing-classic-car-from-us",
    "/blog/restoration-estimate-how-shops-charge",
    "/quote",
  ],
  readingMinutes: 7,
};

/**
 * A 1965–66 fastback in side elevation as steel line art, with the unibody
 * rust points numbered: cowl vent, rear window channel, trunk lid, lower door,
 * floor pans and rails, shock tower, battery tray. Editorial plate.
 */
export function Illustration() {
  return (
    <svg
      viewBox="0 0 1200 660"
      role="img"
      aria-label="Side-elevation line drawing of a 1960s Mustang fastback with its unibody rust points numbered: the cowl vent under the windshield, the rear window channel, the trunk lid, the bottoms of the doors, the floor pans and frame rails, the front shock tower, and the battery tray"
      className="h-auto w-full"
    >
      <title>Where a first-generation Mustang rusts</title>
      <defs>
        <radialGradient id="mus-pool" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffb066" stopOpacity="0.1" />
          <stop offset="60%" stopColor="#ffb066" stopOpacity="0.04" />
          <stop offset="100%" stopColor="#ffb066" stopOpacity="0" />
        </radialGradient>
      </defs>

      <ellipse cx="600" cy="486" rx="440" ry="26" fill="url(#mus-pool)" />

      {/* body */}
      <g fill="none" stroke="#9a9ca0" strokeWidth="1.8" strokeLinejoin="round">
        {/* outline: long hood, short deck, fastback roof */}
        <path d="M 190 360 L 196 322 Q 204 300 238 296 L 470 284 L 560 214 Q 590 196 640 196 L 700 198 Q 760 204 850 284 L 960 296 Q 1000 300 1008 322 L 1012 360 Z" />
        {/* beltline */}
        <path d="M 238 312 L 960 312" strokeWidth="1" strokeOpacity="0.5" />
        {/* windshield + side glass */}
        <path d="M 478 284 L 566 222 L 640 214 L 640 284" strokeWidth="1.3" />
        <path d="M 656 214 Q 700 214 740 238 L 790 284 L 656 284 Z" strokeWidth="1.3" />
        {/* door */}
        <path d="M 470 290 L 470 356 M 700 290 L 700 356" strokeWidth="1.2" strokeOpacity="0.8" />
        {/* side scoop */}
        <path d="M 760 318 L 800 318 L 790 336 Z" strokeWidth="1.1" />
        {/* rocker */}
        <path d="M 330 360 L 880 360" />
        {/* wheels */}
        <circle cx="330" cy="370" r="54" />
        <circle cx="330" cy="370" r="30" strokeWidth="1" strokeOpacity="0.6" />
        <circle cx="880" cy="370" r="54" />
        <circle cx="880" cy="370" r="30" strokeWidth="1" strokeOpacity="0.6" />
        {/* shock tower ghost */}
        <path d="M 300 330 L 300 300 Q 330 284 360 300 L 360 330" strokeDasharray="4 4" strokeOpacity="0.7" />
        {/* battery tray ghost */}
        <rect x="222" y="318" width="44" height="22" strokeDasharray="4 4" strokeOpacity="0.7" />
        {/* floor pan + rail ghost */}
        <path d="M 400 350 L 800 350" strokeDasharray="6 5" strokeOpacity="0.7" />
      </g>

      {/* rust halos */}
      <g fill="none" stroke="#ffb066" strokeWidth="1.3" strokeDasharray="3 4">
        <ellipse cx="520" cy="270" rx="36" ry="12" />
        <ellipse cx="820" cy="262" rx="30" ry="12" />
        <ellipse cx="930" cy="292" rx="36" ry="10" />
        <ellipse cx="585" cy="352" rx="120" ry="12" />
        <ellipse cx="330" cy="304" rx="40" ry="16" />
        <ellipse cx="244" cy="330" rx="34" ry="16" />
      </g>

      <g stroke="#ffb066" strokeWidth="0.75" strokeOpacity="0.5" fill="none">
        <path d="M 520 258 L 470 150" />
        <path d="M 820 250 L 860 150" />
        <path d="M 930 282 L 1060 190" />
        <path d="M 585 364 L 585 450" />
        <path d="M 330 288 L 300 150" />
        <path d="M 244 314 L 140 220" />
      </g>
      <g fontFamily="var(--font-plex-mono), ui-monospace, monospace" letterSpacing="0.08em">
        {[
          { x: 470, y: 150, n: "1" },
          { x: 860, y: 150, n: "2" },
          { x: 1060, y: 190, n: "3" },
          { x: 585, y: 450, n: "4" },
          { x: 300, y: 150, n: "5" },
          { x: 140, y: 220, n: "6" },
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
        <text x="470" y="124" textAnchor="middle">1 · COWL VENT</text>
        <text x="860" y="124" textAnchor="middle">2 · REAR WINDOW</text>
        <text x="1060" y="164" textAnchor="middle">3 · TRUNK LID</text>
        <text x="585" y="482" textAnchor="middle">4 · FLOORS, RAILS, DOOR BOTTOMS</text>
        <text x="300" y="124" textAnchor="middle">5 · SHOCK TOWER</text>
        <text x="140" y="194" textAnchor="middle">6 · BATTERY TRAY</text>
      </g>

      <text
        x="600"
        y="620"
        textAnchor="middle"
        fontFamily="var(--font-plex-mono), ui-monospace, monospace"
        fontSize="10"
        letterSpacing="0.18em"
        fill="#9a9ca0"
        fillOpacity="0.55"
      >
        FIG. A — A UNIBODY: THE RUST IS THE STRUCTURE
      </text>
    </svg>
  );
}

export function Body() {
  return (
    <>
      <p>
        Start with the most common, best-supported Mustang you can afford — usually a 1965–66 or
        1967–68 hardtop — and buy the straightest structure, not the shiniest paint. First-generation
        Mustangs are unibodies, so rust in the floors, rails, cowl, and shock towers decides the
        budget. Parts are easy to find. Hours are not.
      </p>

      <h2>Which first-generation Mustang should you buy?</h2>
      <p>
        The first generation runs from the 1964½ launch to 1973, and it is really four cars.
        Hagerty&rsquo;s buyer&rsquo;s guide puts the scale in perspective: 121,538 built in 1964
        and 559,451 in the full 1965 model year, from a base price of $2,368 US — which is why
        early cars are everywhere and why nearly everything for them is reproduced.
        <a href="#src-1" className="cite-ref">[1]</a>
      </p>
      <div className="table-bleed">
        <table>
          <caption className="sr-only">
            First-generation Ford Mustang years compared by body styles, notable engines, and what
            to know before buying one to restore
          </caption>
          <thead>
            <tr>
              <th scope="col">Years</th>
              <th scope="col">What changed</th>
              <th scope="col">What to know</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1964½–1966</th>
              <td>
                Hardtop and convertible from launch, fastback from the full 1965 year; six-cylinder
                or 260/289 V8, with the 271 hp K-code at the top
              </td>
              <td>The most common, best-supported, cheapest way in; K-codes need proof</td>
            </tr>
            <tr>
              <th scope="row">1967–1968</th>
              <td>
                New, longer body and a wider track to fit the 390 V8; the 428 Cobra Jet arrived
                for 1968
              </td>
              <td>Still well supported; fastbacks carry a premium</td>
            </tr>
            <tr>
              <th scope="row">1969–1970</th>
              <td>Bigger again, with the Mach 1, Boss 302, and Boss 429</td>
              <td>Performance models are an authenticity market first</td>
            </tr>
            <tr>
              <th scope="row">1971–1973</th>
              <td>The largest and heaviest of the generation</td>
              <td>Often the cheapest to buy; check the parts you need exist</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Every year in that table came as a hardtop, a fastback, and a convertible once the
        fastback arrived.
        <a href="#src-1" className="cite-ref">[1]</a> For a driver, the hardtop is the value
        play; the other two cost more to buy but not much more to restore.
      </p>

      <h2>Where do first-generation Mustangs rust?</h2>
      <p>
        Everywhere that matters structurally, because there is no separate frame to fall back
        on. Hagerty&rsquo;s 1965–66 guide lists the places to look: the floors, the frame rails,
        the lower parts of the doors, the trunk lid, the cowl vent under the windshield, the area
        around the rear window, under the battery, and the lower sections of the shock towers.
        <a href="#src-2" className="cite-ref">[2]</a>
      </p>
      <ul>
        <li>
          <strong>The cowl.</strong> Water gets in under the windshield, rusts the vent, and ends
          up on the floor — so a wet carpet is a cowl question before it is a weatherstrip
          question.
        </li>
        <li>
          <strong>Floors and rails.</strong> This is the structure. A soft floor is a patch; a
          soft rail is a much bigger conversation.
        </li>
        <li>
          <strong>Battery tray and shock towers.</strong> Acid and water both collect here, and a
          rotted tower is a safety repair, not a cosmetic one.
        </li>
        <li>
          <strong>Old repairs.</strong> Hagerty warns specifically about fibreglass patch panels
          and heavy filler used to make a rusty car look smooth.
          <a href="#src-2" className="cite-ref">[2]</a> A magnet and a flashlight find more than
          photos do.
        </li>
      </ul>
      <p>
        Where the car lived matters as much as its year. A Mustang that saw years of salted
        Alberta roads carries that history in its seams — the{" "}
        <Link href="/blog/alberta-road-salt-rust-prevention">road salt article</Link> explains
        why — and the{" "}
        <Link href="/blog/rust-repair-cost-canada">rust repair guide</Link> prices the fixes.
        If you cannot put the car on a hoist yourself, pay for a{" "}
        <Link href="/blog/classic-car-pre-purchase-inspection">pre-purchase inspection</Link>{" "}
        before you pay for the car.
      </p>

      <h2>How do you check it is really what the seller says?</h2>
      <p>
        By the numbers, not the badges. Hagerty points out that factory air conditioning, Pony
        interiors, and even fastback sheet metal can all be added to a lesser car over the years,
        so part numbers and factory stampings have to line up with the story — and a seller
        asking top dollar should have the paperwork to prove authenticity, originality, and
        condition.
        <a href="#src-2" className="cite-ref">[2]</a> Decode the VIN and the data plate before you
        negotiate. On a K-code, Shelby, Boss, or Cobra Jet car, the documents are most of the
        value.
      </p>

      <div className="stat-plate">
        <div>
          <span className="stat-v">559,451</span>
          <span className="stat-l">Mustangs built in the full 1965 model year</span>
        </div>
        <div>
          <span className="stat-v">US$20.9K+</span>
          <span className="stat-l">New 1965–68 body shell, list price before freight</span>
        </div>
        <div>
          <span className="stat-v">1.4064</span>
          <span className="stat-l">CAD per US dollar, September 22, 2026</span>
        </div>
        <div>
          <span className="stat-v">$100–$165</span>
          <span className="stat-l">Typical Alberta restoration shop rate, CAD per hour</span>
        </div>
      </div>

      <h2>What does a Mustang restoration cost in Canada?</h2>
      <p>
        Less in parts than most classics and the same in hours. Reproduction catalogues cover
        nearly everything — Hagerty calls it a cottage industry that reproduces everything,
        including sheet metal
        <a href="#src-2" className="cite-ref">[2]</a> — but the labour to cut, fit, weld, block,
        and paint a unibody does not get cheaper because the panels are easy to order. The ranges
        below match the site&rsquo;s{" "}
        <Link href="/blog/classic-car-restoration-cost-canada">restoration cost guide</Link>.
      </p>
      <div className="table-bleed">
        <table>
          <caption className="sr-only">
            Typical Canadian dollar planning ranges for classic Mustang restoration work, from a
            mechanical refresh to a show-quality restoration, plus the list price of a new
            reproduction body shell
          </caption>
          <thead>
            <tr>
              <th scope="col">Scope</th>
              <th scope="col">What it covers</th>
              <th scope="col">Typical CAD</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Mechanical refresh</th>
              <td>Brakes, cooling, fuel, ignition, bushings — a safe driver</td>
              <td className="num">$4,000 – $15,000</td>
            </tr>
            <tr>
              <th scope="row">Structural rust repair</th>
              <td>Floors, rails, cowl, shock towers, fitted and sealed</td>
              <td className="num">$8,000 – $40,000+</td>
            </tr>
            <tr>
              <th scope="row">Driver-quality restoration</th>
              <td>Whole car, professionally built, start to finish</td>
              <td className="num">$60,000 – $150,000</td>
            </tr>
            <tr>
              <th scope="row">Show-quality restoration</th>
              <td>Concours-level fit, finish, and correctness</td>
              <td className="num">$150,000 – $300,000+</td>
            </tr>
            <tr>
              <th scope="row">New body shell, parts only</th>
              <td>1965–68 fastback or convertible, before freight, brokerage, and GST</td>
              <td className="num">≈ $29,000 – $34,000</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        That last line comes from National Parts Depot&rsquo;s listings — complete new shells for
        1965–68 fastbacks and convertibles, and 1969–70 fastbacks, at US$20,900 to US$23,900
        <a href="#src-3" className="cite-ref">[3]</a> — converted at the Bank of Canada&rsquo;s
        September 22, 2026 rate of 1.4064.
        <a href="#src-4" className="cite-ref">[4]</a> Every other figure is a planning range, not
        a quote; the real number comes after the car is apart.
      </p>

      <h2>Restore it, restomod it, or reshell it?</h2>
      <p>
        A numbers-matching or documented performance car gets restored — correct parts, correct
        finishes, original drivetrain. A tired driver is the classic{" "}
        <Link href="/blog/what-is-a-restomod">restomod</Link> candidate: keep the shape, and give
        it the{" "}
        <Link href="/blog/disc-brake-conversion-cost-canada">disc brakes</Link>, suspension, and
        drivetrain that make it pleasant in 2026 traffic. A car whose structure is mostly gone is
        where a new shell enters the conversation, because at some point the metal repair costs
        more than the steel it replaces.
      </p>
      <p>
        Before buying a shell, ask a registry agent how the registration and VIN will be handled
        and get the answer in writing. That conversation belongs before the purchase, not after
        the body arrives on a truck.
      </p>

      <h2>Where does a Canadian Mustang project go wrong?</h2>
      <ul>
        <li>
          <strong>Buying on photos.</strong> The seams, floors, and rails decide the price, and
          photos rarely show them.
        </li>
        <li>
          <strong>Forgetting the border.</strong> A US car carries exchange, shipping, duty, GST,
          and an Alberta inspection — the{" "}
          <Link href="/blog/importing-classic-car-from-us">import guide</Link> runs the full math.
        </li>
        <li>
          <strong>Painting before the metal is honest.</strong> Paint over hidden rust is the most
          expensive shortcut in the hobby.
        </li>
        <li>
          <strong>Estimating with one number.</strong> A Mustang restoration still needs a scope,
          hours by stage, and a contingency — what a{" "}
          <Link href="/blog/restoration-estimate-how-shops-charge">real estimate</Link> looks like.
        </li>
      </ul>
      <p>
        Classic Mustang work sits under{" "}
        <Link href="/services/classic-car-restoration">classic car restoration</Link> here. Send
        photos of the floors, the cowl, the shock towers, and the data plate through
        the <Link href="/quote#form">quote page</Link>, and the first answer will be about the
        structure — before anybody talks about paint.
      </p>
    </>
  );
}
