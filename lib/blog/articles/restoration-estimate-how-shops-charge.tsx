import Link from "next/link";
import type { ArticleMeta } from "../types";

/**
 * JOURNAL — What a Restoration Estimate Should Include, and How Shops Actually
 * Charge. Time-and-materials versus fixed bids, the line items a real estimate
 * spells out, and the Alberta rules that sit underneath every repair estimate:
 * written estimates and authorizations (AR 192/99 ss 31.6–31.8), the 10% / $100
 * overrun cap, subcontracting and parts disclosure, and the section 12(k)
 * restoration-standard rule that makes a restomod spec belong in writing.
 */

export const meta: ArticleMeta = {
  slug: "restoration-estimate-how-shops-charge",
  title: "What a Restoration Estimate Should Include, and How Shops Actually Charge",
  accent: "Estimate",
  metaTitle: "Restoration Estimates and How Shops Charge",
  description:
    "What a real restoration estimate spells out, why most shops bill hours rather than a fixed price, and the Alberta rules on estimates, overruns, and sign-off.",
  datePublished: "2026-09-22",
  dateModified: "2026-09-22",
  author: "2240 Speed Shop",
  category: "Buy Smart",
  targetKeywords: [
    "restoration shop estimate",
    "how do restoration shops charge",
    "hourly vs fixed price restoration",
    "car repair estimate rules Alberta",
    "AMVIC repair estimate",
  ],
  faq: [
    {
      q: "Do restoration shops charge by the hour or a fixed price?",
      a: "Most bill time and materials against a written estimate, because nobody can see what is under old paint and filler until it comes off. Fixed prices suit defined, repeatable jobs like a bolt-in brake kit or a wiring harness. On a full restoration, a fixed bid usually means a large padding buffer or an argument later. Typical Alberta restoration shop rates run about $100 to $165 CAD an hour, as a planning range.",
    },
    {
      q: "Can a shop in Alberta charge more than the estimate?",
      a: "Not by much without your consent. Alberta's Automotive Business Regulation says a business must not charge more than 10 percent over the estimate, to a maximum of $100, unless you expressly consented to the higher price before the work was done, or you both agreed to amend the estimate. Get any change in writing.",
    },
    {
      q: "What should a restoration estimate include?",
      a: "A written description of the work and the standard the car is being built to, labour hours by stage, allowances for parts, anything sent out to other shops, what is excluded, a contingency for what teardown reveals, how payments and change orders work, and how you will be kept updated. If the estimate is one number with no scope, it is not an estimate.",
    },
    {
      q: "Do I have to sign off before work starts in Alberta?",
      a: "Yes. A repair business must not start work until you have authorized it. The authorization is normally in writing, with your name, the date, a description of the work, and the estimated total cost. If you authorize it another way, such as by phone, the business has to record those details plus the time and the method.",
    },
    {
      q: "How big should a restoration contingency be?",
      a: "Ten to twenty percent on top of the estimate is a sensible planning figure for a restoration, and more on a car with heavy rust or a history nobody can vouch for. The contingency is for what teardown reveals, not for changing your mind about the paint colour, which is a change order.",
    },
  ],
  citations: [
    {
      name: "Automotive Business Regulation, Alta Reg 192/1999, ss 12, 31.6–31.8, Alberta King’s Printer",
      url: "https://kings-printer.alberta.ca/documents/Regs/1999_192.pdf",
    },
    {
      name: "“Repair estimates and authorizations: what you need to know,” Alberta Motor Vehicle Industry Council (AMVIC), March 2025",
      url: "https://www.amvic.org/repair-estimates-and-authorizations-what-you-need-to-know/",
    },
    {
      name: "“Repairing a vehicle,” Alberta Motor Vehicle Industry Council (AMVIC)",
      url: "https://www.amvic.org/consumer/repairing-a-vehicle/",
    },
  ],
  internalLinks: [
    "/guides/costs",
    "/blog/classic-car-restoration-cost-canada",
    "/blog/classic-car-restoration-timeline",
    "/blog/what-is-a-restomod",
    "/blog/frame-off-vs-rolling-restoration",
    "/services/classic-car-restoration",
    "/quote",
  ],
  readingMinutes: 7,
};

/**
 * An estimate sheet drawn as a technical document: a scope header, labour
 * hours by stage, parts allowances, a contingency band, and a change-order
 * slip clipped to the edge with a signature line. A stamped cap reads
 * "+10% / $100 max without consent". Editorial plate.
 */
export function Illustration() {
  const stages = [
    { label: "TEARDOWN + ASSESS", w: 90 },
    { label: "METAL + RUST", w: 250 },
    { label: "BODY + PAINT", w: 210 },
    { label: "MECHANICAL", w: 160 },
    { label: "ASSEMBLY + SORTING", w: 180 },
  ];
  return (
    <svg
      viewBox="0 0 1200 660"
      role="img"
      aria-label="Technical drawing of a restoration estimate sheet: a written scope header, labour hours shown as bars for each stage from teardown to sorting, parts allowances, a shaded contingency band of ten to twenty percent, and a signed change-order slip clipped to the side, with a stamp reading plus ten percent or one hundred dollars maximum without consent"
      className="h-auto w-full"
    >
      <title>What a real restoration estimate carries</title>
      <defs>
        <radialGradient id="est-pool" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffb066" stopOpacity="0.1" />
          <stop offset="60%" stopColor="#ffb066" stopOpacity="0.04" />
          <stop offset="100%" stopColor="#ffb066" stopOpacity="0" />
        </radialGradient>
        <pattern id="est-hatch" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="8" stroke="#ffb066" strokeWidth="1" strokeOpacity="0.35" />
        </pattern>
      </defs>

      <ellipse cx="560" cy="590" rx="420" ry="24" fill="url(#est-pool)" />

      {/* the sheet */}
      <g fill="none" stroke="#9a9ca0" strokeWidth="1.6">
        <rect x="200" y="70" width="620" height="500" rx="4" />
        <line x1="200" y1="140" x2="820" y2="140" strokeOpacity="0.6" />
        <line x1="200" y1="440" x2="820" y2="440" strokeOpacity="0.6" />
      </g>
      <g fontFamily="var(--font-plex-mono), ui-monospace, monospace" letterSpacing="0.14em">
        <text x="228" y="104" fontSize="13" fill="#ffd9ad">
          ESTIMATE — SCOPE, STANDARD, EXCLUSIONS
        </text>
        <text x="228" y="126" fontSize="10" fill="#9a9ca0" fillOpacity="0.8">
          BUILT TO: DRIVER / SHOW / RESTOMOD SPEC — IN WRITING
        </text>
      </g>

      {/* labour bars */}
      <g fontFamily="var(--font-plex-mono), ui-monospace, monospace" fontSize="10" letterSpacing="0.12em">
        {stages.map((s, i) => (
          <g key={s.label}>
            <text x="228" y={182 + i * 48} fill="#9a9ca0">
              {s.label}
            </text>
            <rect x="228" y={190 + i * 48} width={s.w} height="14" fill="none" stroke="#ffb066" strokeWidth="1.2" />
            <rect x="228" y={190 + i * 48} width={s.w * 0.62} height="14" fill="#ffb066" fillOpacity="0.18" />
          </g>
        ))}
      </g>
      {/* contingency band */}
      <rect x="560" y="180" width="130" height="248" fill="url(#est-hatch)" stroke="#ffb066" strokeWidth="1" strokeDasharray="4 4" />
      <text x="625" y="172" textAnchor="middle" fontFamily="var(--font-plex-mono), ui-monospace, monospace" fontSize="10" letterSpacing="0.14em" fill="#ffd9ad">
        CONTINGENCY 10–20%
      </text>

      {/* parts allowance row */}
      <g fontFamily="var(--font-plex-mono), ui-monospace, monospace" fontSize="10" letterSpacing="0.12em" fill="#9a9ca0">
        <text x="228" y="470">PARTS ALLOWANCE · NEW / USED / RECONDITIONED · OEM OR NOT</text>
        <text x="228" y="496">SUBLET WORK · ONLY WITH YOUR CONSENT</text>
        <text x="228" y="522">PAYMENTS · CHANGE ORDERS · PHOTO UPDATES · STORAGE</text>
      </g>

      {/* change-order slip */}
      <g fill="none" stroke="#9a9ca0" strokeWidth="1.4">
        <rect x="860" y="200" width="250" height="170" rx="3" transform="rotate(4 985 285)" />
        <path d="M 900 330 L 1060 342" transform="rotate(4 985 285)" strokeOpacity="0.6" />
      </g>
      <g transform="rotate(4 985 285)" fontFamily="var(--font-plex-mono), ui-monospace, monospace" letterSpacing="0.12em">
        <text x="884" y="236" fontSize="11" fill="#ffd9ad">
          CHANGE ORDER
        </text>
        <text x="884" y="262" fontSize="9.5" fill="#9a9ca0">
          WORK · NEW TOTAL · DATE
        </text>
        <text x="884" y="284" fontSize="9.5" fill="#9a9ca0">
          APPROVED BEFORE IT IS DONE
        </text>
        <text x="900" y="326" fontSize="9" fill="#9a9ca0" fillOpacity="0.7">
          SIGNATURE
        </text>
      </g>
      {/* clip */}
      <path d="M 850 214 L 876 214 L 876 250 L 850 250" fill="none" stroke="#9a9ca0" strokeWidth="1.2" />

      {/* stamp */}
      <g transform="rotate(-8 980 470)">
        <rect x="880" y="430" width="200" height="80" rx="6" fill="none" stroke="#ffb066" strokeWidth="2" />
        <text x="980" y="464" textAnchor="middle" fontFamily="var(--font-plex-mono), ui-monospace, monospace" fontSize="16" letterSpacing="0.1em" fill="#ffb066">
          +10% / $100
        </text>
        <text x="980" y="490" textAnchor="middle" fontFamily="var(--font-plex-mono), ui-monospace, monospace" fontSize="9" letterSpacing="0.14em" fill="#ffb066">
          MAX WITHOUT CONSENT
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
        FIG. A — AN ESTIMATE IS A SCOPE WITH HOURS, NOT A NUMBER
      </text>
    </svg>
  );
}

export function Body() {
  return (
    <>
      <p>
        A real restoration estimate is a written scope, not a number: the standard the car is
        built to, labour hours by stage, parts allowances, exclusions, and a contingency. Most
        shops bill those hours as they are worked. In Alberta, the law adds three protections —
        a written estimate on request, your authorization before work, and a cap on overruns.
      </p>

      <h2>Why do most restoration shops bill hours instead of a fixed price?</h2>
      <p>
        Because nobody can price what they cannot see. A sixty-year-old quarter panel can hide
        a skim of filler, a brazed patch from 1978, and a rocker that is more rust than steel.
        The honest number arrives after teardown, which is why the{" "}
        <Link href="/blog/classic-car-restoration-timeline">restoration timeline</Link> puts
        assessment first and why the{" "}
        <Link href="/blog/classic-car-restoration-cost-canada">cost guide</Link> talks in ranges.
      </p>
      <p>
        A fixed price on an unknown car can only be built two ways: pad it heavily so the shop
        survives the worst case, or quote low and argue later. Time and materials against a
        detailed estimate, with checkpoints, is the version where you pay for the car you
        actually have. Typical Alberta restoration shop rates run about $100 to $165 CAD an
        hour; the{" "}
        <Link href="/guides/costs">costs guide</Link> multiplies that out by scope.
      </p>
      <p>
        Fixed prices still have a place. A defined, repeatable job — a bolt-in disc brake kit, a
        wiring harness, a carburetor rebuild — can and should be quoted as a number. The
        difference is how much of the job is known before the first bolt comes out.
      </p>

      <h2>What should the estimate actually say?</h2>
      <p>At minimum, these eight things, in writing:</p>
      <ol>
        <li>
          <strong>The standard.</strong> Driver-quality, show, or a restomod spec — and for a
          restomod, the actual spec: engine, transmission, brakes, suspension, wiring.
        </li>
        <li>
          <strong>Scope by stage.</strong> Teardown and assessment, metal, body and paint,
          mechanical, assembly, and sorting — the same stages as the{" "}
          <Link href="/blog/frame-off-vs-rolling-restoration">frame-off versus rolling</Link>{" "}
          decision.
        </li>
        <li>
          <strong>Labour hours per stage.</strong> A total with no breakdown cannot be checked
          against progress.
        </li>
        <li>
          <strong>Parts allowances.</strong> Budget lines for parts, with what kind: new, used, or
          reconditioned, original-equipment or not.
        </li>
        <li>
          <strong>Sublet work.</strong> Machining, chrome, upholstery, or anything else sent out,
          named up front.
        </li>
        <li>
          <strong>Exclusions.</strong> What is not in the number — the list that prevents most
          arguments.
        </li>
        <li>
          <strong>Contingency.</strong> A stated allowance for what teardown reveals, usually ten
          to twenty percent on a restoration.
        </li>
        <li>
          <strong>Payments, changes, and updates.</strong> Deposit and progress billing, how change
          orders are approved, how often you get photos, and what storage and insurance look like
          while the car is in the shop.
        </li>
      </ol>

      <div className="stat-plate">
        <div>
          <span className="stat-v">10% / $100</span>
          <span className="stat-l">Most a bill can exceed the estimate without your consent</span>
        </div>
        <div>
          <span className="stat-v">In writing</span>
          <span className="stat-l">Estimate on request, and your authorization before work</span>
        </div>
        <div>
          <span className="stat-v">10–20%</span>
          <span className="stat-l">Planning contingency for what teardown reveals</span>
        </div>
        <div>
          <span className="stat-v">$100–$165</span>
          <span className="stat-l">Typical Alberta restoration shop rate, CAD per hour</span>
        </div>
      </div>

      <h2>What does Alberta law say about estimates and overruns?</h2>
      <p>
        More than most owners realise. Alberta&rsquo;s Automotive Business Regulation, which the
        Alberta Motor Vehicle Industry Council administers, sets these rules for businesses that
        repair vehicles:
      </p>
      <ul>
        <li>
          <strong>Written estimate on request.</strong> If you ask for one, the business must give
          you a written estimate describing the proposed work and its estimated total cost,
          including labour and parts. If diagnosis has to come first, the estimate must state the
          maximum cost of the diagnostic work.
          <a href="#src-1" className="cite-ref">[1]</a>
          <a href="#src-2" className="cite-ref">[2]</a>
        </li>
        <li>
          <strong>Your authorization before work.</strong> Work cannot start until you authorize
          it. The authorization is in writing with your name, the date, a description of the work,
          and the estimated total cost — or, if you give it another way, the business records
          those details plus the time and the method.
          <a href="#src-1" className="cite-ref">[1]</a>
          <a href="#src-2" className="cite-ref">[2]</a>
        </li>
        <li>
          <strong>A cap on overruns.</strong> A business must not charge more than 10 percent
          above the estimate, to a maximum of $100, unless you expressly consented to the higher
          price before the work was done, or you both agreed to amend the estimate.
          <a href="#src-1" className="cite-ref">[1]</a>
          <a href="#src-3" className="cite-ref">[3]</a>
        </li>
        <li>
          <strong>Consent for subcontracting and used parts.</strong> Repair work cannot be
          subcontracted without your knowledge and prior consent, and used, rebuilt, salvaged, or
          straightened parts cannot be substituted for new ones without it either. You are
          entitled to written information on the parts installed, and the business must offer to
          return the parts it removed.
          <a href="#src-1" className="cite-ref">[1]</a>
          <a href="#src-3" className="cite-ref">[3]</a>
        </li>
      </ul>
      <p>
        One more clause matters specifically to restorations. Section 12(k) requires a business
        rebuilding or restoring a vehicle to meet or exceed the original manufacturer&rsquo;s
        standards and tolerances for that model and year — unless the customer consents in
        writing to a specific different standard before the work is done.
        <a href="#src-1" className="cite-ref">[1]</a> A{" "}
        <Link href="/blog/what-is-a-restomod">restomod</Link> is, by definition, a different
        standard. That is one more reason its spec belongs in the signed estimate, not in a
        conversation over the fender.
      </p>
      <p>
        AMVIC&rsquo;s consumer guidance also tells owners to choose a licensed repair facility,
        and it offers a search for licensed businesses.
        <a href="#src-3" className="cite-ref">[3]</a> None of this replaces reading the
        regulation or calling AMVIC with a specific dispute, but it is the floor every Alberta
        estimate stands on.
      </p>

      <h2>How do change orders work on a long build?</h2>
      <p>
        On a restoration, the estimate is the plan and the change order is how the plan moves
        honestly. Teardown finds a rotted frame rail; you decide the car deserves disc brakes
        after all; a part turns out to be unobtainable. Each of those gets written down — the
        work, the cost, the new running total — and approved before the work happens. Under the
        overrun rule above, that written consent is not a courtesy. It is what lets the bill move
        past the estimate at all.
      </p>
      <blockquote>
        <p>The contingency is for what the car hides. The change order is for what you decide.</p>
      </blockquote>
      <p>
        Keep the two separate. A contingency covers surprises in the steel; a change order covers
        a change in the plan. Mixing them is how a budget quietly turns into a debate.
      </p>

      <h2>What are the red flags in a restoration quote?</h2>
      <ul>
        <li>One number, no scope, no hours, and no exclusions.</li>
        <li>No written standard — &ldquo;we&rsquo;ll make it nice&rdquo; is not a spec.</li>
        <li>Full payment up front on a job that will take months.</li>
        <li>No mention of sublet work, when the paint or machining is clearly going elsewhere.</li>
        <li>Work starting before anything is signed or recorded.</li>
        <li>No plan for updates, storage, or insurance while the car is apart.</li>
      </ul>

      <h2>What should you ask any shop — including this one?</h2>
      <ul>
        <li>How do you bill, and what is your hourly rate?</li>
        <li>What standard is this estimate written to, and what is excluded?</li>
        <li>How are hours broken down by stage, and how will I see progress against them?</li>
        <li>What goes out to other shops, and who are they?</li>
        <li>How are change orders approved, and how often do I get photos?</li>
        <li>What happens to the old parts?</li>
      </ul>
      <p>
        Ask them here, and ask them at any shop you are thinking of trusting with a car. A shop
        that bristles at them has told you something useful. For the{" "}
        <Link href="/services/classic-car-restoration">restoration work itself</Link>, send photos
        of the seams, the floors, and the underside through the{" "}
        <Link href="/quote#form">quote page</Link>. The first number back is a band with a scope
        attached — the start of an estimate, not the end of one.
      </p>
    </>
  );
}
