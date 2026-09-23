import Link from "next/link";
import type { ArticleMeta } from "../types";

/**
 * JOURNAL — How to Break In a Rebuilt Engine: Cam, Rings, and the First 800 km.
 * Priming and first fire, the 20–30 minute flat-tappet cam procedure (Crane
 * Cams via Engine Builder), spring load and ZDDP oil (OnAllCylinders), seating
 * the rings under load without glazing them (JE Pistons via Engine Builder),
 * the oil-change schedule, and what an Alberta autumn changes. Links into the
 * engine rebuild cost article, engine services, winter guide, and quote.
 */

export const meta: ArticleMeta = {
  slug: "engine-break-in-procedure",
  title: "How to Break In a Rebuilt Engine: Cam, Rings, and the First 800 km",
  accent: "Break In",
  metaTitle: "How to Break In a Rebuilt Engine",
  description:
    "The break-in that protects a fresh rebuild: priming, the first 20 minutes for a flat-tappet cam, seating the rings under load, and the first two oil changes.",
  datePublished: "2026-09-22",
  dateModified: "2026-09-22",
  author: "2240 Speed Shop",
  category: "Keep It Running",
  targetKeywords: [
    "rebuilt engine break in procedure",
    "flat tappet cam break in",
    "how to break in a new engine",
    "break in oil ZDDP",
    "piston ring seating break in",
  ],
  faq: [
    {
      q: "How long does it take to break in a rebuilt engine?",
      a: "In two stages. A flat-tappet camshaft needs its first 20 to 30 minutes at a varied 1,500 to 3,000 rpm right after first start. The piston rings seat under load, and with modern rings that happens within the first 20 to 30 miles of real driving. After that, change the oil again at about 500 miles, or 800 km.",
    },
    {
      q: "Can I let a new engine idle to break it in?",
      a: "No. Idling is the one thing both halves of break-in hate. A flat-tappet cam gets too little splash oil at idle during its critical first minutes, and long idling or very light load can glaze the cylinder walls so the rings never seal properly, which shows up later as oil consumption.",
    },
    {
      q: "What oil should I use to break in a flat-tappet cam?",
      a: "A petroleum break-in oil with high zinc and phosphorus (ZDDP), ideally one the cam maker approves. Crane's break-in procedure says not to use synthetic oil for break-in and not to use API SL, SM, or SN rated oil. Heavy detergent packages can pull the anti-wear additive off the parts it is meant to protect, which is why dedicated break-in oils keep detergent low.",
    },
    {
      q: "Does a roller-cam engine need the same break-in?",
      a: "Not the 20-minute cam ritual. That exists because a flat-tappet lifter slides across its lobe and the two surfaces have to wear in together; a roller lifter rolls instead. The rings still need load to seat, the engine still should not idle for long, and the first oil change still carries assembly debris out.",
    },
    {
      q: "When should I change the oil after a rebuild?",
      a: "Twice early. Drain the oil and change the filter as soon as the engine has cooled after the cam break-in, then change it again at about 500 miles, or 800 km. Crane's procedure suggests another 5,000 miles on the cam before switching to synthetic, if you want synthetic at all.",
    },
  ],
  citations: [
    {
      name: "“Flat Tappet Camshaft Break-in Procedure” (courtesy of Crane Cams), Engine Builder Magazine, April 2011",
      url: "https://www.enginebuildermag.com/2011/04/flat-tappet-camshaft-break-in-procedure/",
    },
    {
      name: "“How to Break-In Your Piston Rings, The Right Way!” (JE Pistons), Engine Builder Magazine, May 2018",
      url: "https://www.enginebuildermag.com/2018/05/how-to-break-in-your-piston-rings-the-right-way/",
    },
    {
      name: "Jeff Smith, “How to Break In a Flat Tappet Cam for Maximum Lifespan,” OnAllCylinders (Summit Racing), October 2020",
      url: "https://www.onallcylinders.com/2020/10/02/camshaft-break-in-how-to-ensure-long-life/",
    },
  ],
  internalLinks: [
    "/blog/engine-rebuild-cost-canada",
    "/services/engine-swaps-builds",
    "/blog/carburetor-rebuild-signs",
    "/blog/classic-car-winter-storage-alberta",
    "/guides/winter",
    "/quote",
  ],
  readingMinutes: 7,
};

/**
 * An rpm-over-time trace on graph paper: a steep start to 3,000, then a
 * zig-zag band between 1,500 and 3,000 for the first 20–30 minutes, a gap for
 * cool-down and the first oil change, then load pulses for ring seating, and
 * an odometer rail with the 800 km oil change marked. Editorial plate.
 */
export function Illustration() {
  // zig-zag between 1,500 and 3,000 rpm across the break-in window
  const zig = Array.from({ length: 13 }, (_, i) => `${200 + i * 30},${i % 2 === 0 ? 170 : 290}`).join(" ");
  return (
    <svg
      viewBox="0 0 1200 660"
      role="img"
      aria-label="Chart of engine speed over time during break-in: a fast start straight to about 3,000 rpm, a zig-zag band between 1,500 and 3,000 rpm for the first 20 to 30 minutes, a cool-down gap marked with the first oil and filter change, short load pulses for seating the piston rings, and an odometer line marking the next oil change at 800 kilometres"
      className="h-auto w-full"
    >
      <title>The first 20 minutes, the first 50 km, the first 800 km</title>
      <defs>
        <radialGradient id="bi-pool" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffb066" stopOpacity="0.1" />
          <stop offset="60%" stopColor="#ffb066" stopOpacity="0.04" />
          <stop offset="100%" stopColor="#ffb066" stopOpacity="0" />
        </radialGradient>
      </defs>

      <ellipse cx="600" cy="560" rx="480" ry="24" fill="url(#bi-pool)" />

      {/* grid */}
      <g stroke="#9a9ca0" strokeOpacity="0.14" strokeWidth="1">
        {Array.from({ length: 11 }, (_, i) => (
          <line key={`v${i}`} x1={140 + i * 96} y1="100" x2={140 + i * 96} y2="420" />
        ))}
        {Array.from({ length: 5 }, (_, i) => (
          <line key={`h${i}`} x1="140" y1={100 + i * 80} x2="1100" y2={100 + i * 80} />
        ))}
      </g>
      {/* axes */}
      <g stroke="#9a9ca0" strokeWidth="1.6" fill="none">
        <line x1="140" y1="420" x2="1100" y2="420" />
        <line x1="140" y1="100" x2="140" y2="420" />
      </g>
      <g fontFamily="var(--font-plex-mono), ui-monospace, monospace" fontSize="10" letterSpacing="0.12em" fill="#9a9ca0">
        <text x="128" y="174" textAnchor="end">3,000</text>
        <text x="128" y="294" textAnchor="end">1,500</text>
        <text x="128" y="424" textAnchor="end">0</text>
        <text x="96" y="92">RPM</text>
      </g>

      {/* the 1,500–3,000 band */}
      <rect x="170" y="170" width="390" height="120" fill="#ffb066" fillOpacity="0.06" stroke="#ffb066" strokeOpacity="0.35" strokeDasharray="4 5" />

      {/* first fire straight up, then zig-zag */}
      <polyline points={`150,420 170,420 185,170 ${zig} 560,330 580,420`} fill="none" stroke="#ffb066" strokeWidth="2" strokeLinejoin="round" />

      {/* cool-down gap + oil change */}
      <g stroke="#9a9ca0" strokeWidth="1.2" fill="none">
        <line x1="600" y1="420" x2="690" y2="420" strokeDasharray="3 5" />
        <path d="M 634 380 q 11 -24 22 0 a 11 11 0 0 1 -22 0 z" />
      </g>

      {/* load pulses for rings */}
      <polyline
        points="700,420 715,330 740,160 755,300 780,150 795,300 820,150 835,300 860,150 875,300 900,160 915,330 935,420"
        fill="none"
        stroke="#ffd9ad"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />

      {/* odometer rail */}
      <g stroke="#9a9ca0" strokeWidth="1.4" fill="none">
        <line x1="140" y1="480" x2="1100" y2="480" />
        <line x1="140" y1="472" x2="140" y2="488" />
        <line x1="700" y1="472" x2="700" y2="488" />
        <line x1="1060" y1="468" x2="1060" y2="492" stroke="#ffb066" strokeWidth="2" />
      </g>
      <g fontFamily="var(--font-plex-mono), ui-monospace, monospace" fontSize="10" letterSpacing="0.14em">
        <text x="140" y="508" fill="#9a9ca0">0 KM</text>
        <text x="700" y="508" textAnchor="middle" fill="#9a9ca0">FIRST 30–50 KM</text>
        <text x="1060" y="508" textAnchor="middle" fill="#ffb066">800 KM · OIL + FILTER</text>
      </g>

      <g stroke="#ffb066" strokeWidth="0.75" strokeOpacity="0.5" fill="none">
        <path d="M 185 170 L 185 130" />
        <path d="M 300 290 L 300 347" />
        <path d="M 645 395 L 645 433" />
        <path d="M 820 150 L 820 118" />
      </g>
      <g fontFamily="var(--font-plex-mono), ui-monospace, monospace" letterSpacing="0.08em">
        {[
          { x: 185, y: 130, n: "1" },
          { x: 300, y: 360, n: "2" },
          { x: 645, y: 446, n: "3" },
          { x: 820, y: 118, n: "4" },
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
        <text x="210" y="134">1 · FIRES FAST, STRAIGHT TO RPM</text>
        <text x="325" y="364">2 · VARY 1,500–3,000 FOR 20–30 MIN</text>
        <text x="668" y="450">3 · COOL · DRAIN · NEW FILTER</text>
        <text x="848" y="122">4 · LOAD PULSES SEAT THE RINGS</text>
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
        FIG. A — THE FIRST 20 MINUTES, THE FIRST 50 KM, THE FIRST 800 KM
      </text>
    </svg>
  );
}

export function Body() {
  return (
    <>
      <p>
        Break a rebuilt engine in on purpose, not at idle. Prime the oiling system before first
        fire, start it fast, and hold a varied 1,500 to 3,000 rpm for 20 to 30 minutes if it has a
        flat-tappet cam. Then seat the rings with short bursts of load, change the oil right away,
        and change it again at 800 km.
      </p>

      <h2>Why do the first 20 minutes matter so much?</h2>
      <p>
        Because on a flat-tappet engine, that is when the camshaft and lifters decide whether
        they will get along. Crane&rsquo;s procedure, published by Engine Builder, calls the
        first 20 minutes the most critical time in a flat-tappet cam&rsquo;s life — the window in
        which the bottom of each lifter mates with its lobe.
        <a href="#src-1" className="cite-ref">[1]</a> The lobes are ground with a slight taper and
        the lifters sit slightly off-centre, so each lifter spins as it rides; that rotation is
        what drags oil between the two surfaces. If a pushrod is not turning during break-in, the
        engine gets shut down until somebody finds out why.
        <a href="#src-1" className="cite-ref">[1]</a>
      </p>
      <p>
        Get it wrong and the damage is quick and expensive: a flattened lobe, a ticking lifter,
        and metal through an engine that was new an hour ago. That is how a rebuild from the{" "}
        <Link href="/blog/engine-rebuild-cost-canada">engine rebuild cost guide</Link> turns into
        a second teardown.
      </p>

      <h2>What happens before the first start?</h2>
      <p>Most break-in failures are decided on the stand, before the key ever turns:</p>
      <ul>
        <li>
          <strong>New lifters with a new cam, always.</strong> Old flat-tappet lifters never go on
          a new cam, and if lifters come out they go back on the lobe they came from.
          <a href="#src-1" className="cite-ref">[1]</a>
        </li>
        <li>
          <strong>Moly paste where it slides.</strong> Lobes, lifter bottoms, and the distributor
          gear get the paste the cam maker supplies; assembly lube goes everywhere else.
          <a href="#src-1" className="cite-ref">[1]</a> The cylinder walls and rings get engine oil
          or a light machine oil, not sticky assembly lube.
          <a href="#src-2" className="cite-ref">[2]</a>
        </li>
        <li>
          <strong>Break-in spring load.</strong> Heavy performance springs can wipe a lobe before
          it ever mates. Crane recommends lighter springs, or removing the inner springs of a
          dual set, for break-in.
          <a href="#src-1" className="cite-ref">[1]</a> OnAllCylinders traced one wiped
          flat-tappet cam to exactly that, and suggested break-in seat loads around 100 to 110
          pounds for that engine.
          <a href="#src-3" className="cite-ref">[3]</a>
        </li>
        <li>
          <strong>Prime the oiling system.</strong> Turn the engine over at least two full
          revolutions while priming, with the valve covers off, until every rocker shows oil.
          <a href="#src-1" className="cite-ref">[1]</a>
        </li>
        <li>
          <strong>Make it fire fast.</strong> Static timing set as close as possible and fuel
          already in the carburetor bowls, so the engine starts in a turn or two instead of
          cranking dry.
          <a href="#src-1" className="cite-ref">[1]</a>
          <a href="#src-2" className="cite-ref">[2]</a>
        </li>
      </ul>

      <h2>What is the cam break-in procedure?</h2>
      <ol>
        <li>
          <strong>Start it and bring it straight up.</strong> Crane says to go immediately to about
          3,000 rpm; JE Pistons says never to break an engine in at idle.
          <a href="#src-1" className="cite-ref">[1]</a>
          <a href="#src-2" className="cite-ref">[2]</a>
        </li>
        <li>
          <strong>Vary the speed for 20 to 30 minutes.</strong> Sweep slowly between 1,500 and
          3,000 rpm rather than holding one number, watching oil pressure, temperature, leaks, and
          noises. If it has to be shut off, it goes straight back to break-in speed on restart
          until the total run time is reached.
          <a href="#src-1" className="cite-ref">[1]</a>
        </li>
        <li>
          <strong>Set the timing quickly.</strong> Adjust it as soon as the engine is running;
          Crane&rsquo;s reason is to cut excess heat and load during break-in.
          <a href="#src-1" className="cite-ref">[1]</a>
        </li>
        <li>
          <strong>Cool, drain, refill.</strong> Let it cool, drain the oil, and change the filter.
          Refill with a petroleum oil that carries flat-tappet additives, not synthetic.
          <a href="#src-1" className="cite-ref">[1]</a>
        </li>
      </ol>
      <p>
        If the carburetor will not hold a steady fast idle during this, fix that first — a{" "}
        <Link href="/blog/carburetor-rebuild-signs">tired carburetor</Link> that dies at the wrong
        moment is a break-in risk, not just an annoyance.
      </p>

      <div className="stat-plate">
        <div>
          <span className="stat-v">20–30 min</span>
          <span className="stat-l">Varied-rpm cam break-in straight after first fire</span>
        </div>
        <div>
          <span className="stat-v">1,500–3,000</span>
          <span className="stat-l">The rpm band, swept, never held at idle</span>
        </div>
        <div>
          <span className="stat-v">30–50 km</span>
          <span className="stat-l">Driving under load that seats modern rings</span>
        </div>
        <div>
          <span className="stat-v">800 km</span>
          <span className="stat-l">Second oil and filter change</span>
        </div>
      </div>

      <h2>How do you seat the piston rings?</h2>
      <p>
        With load, soon, and in short bursts. Freshly honed cylinder walls have microscopic peaks
        and valleys, and the rings wear the peaks down into a seal. JE Pistons&rsquo; guidance is
        to bring the engine up to normal coolant and oil temperature, then put it under load —
        50 to 75 percent, then full — so cylinder pressure pushes the rings hard against the
        walls. With modern moly-faced rings, that happens within the first 20 to 30 miles of
        street driving, roughly 30 to 50 km.
        <a href="#src-2" className="cite-ref">[2]</a>
      </p>
      <p>
        In practice: a few firm pulls through the gears from a moderate speed, easing off in
        between, then normal varied driving. Not a highway cruise at one steady rpm for an hour,
        and not a week of idling in the driveway.
      </p>
      <blockquote>
        <p>Idle is where cams get hurt and cylinders get glazed.</p>
      </blockquote>
      <p>
        The glazing is the quiet failure. Idle or very light load for too long lets oxidised oil
        fill the hone pattern, the walls go smooth, and the rings never seal. JE lists the
        symptoms: oil consumption, sometimes blue smoke, and oil on the spark plug threads.
        <a href="#src-2" className="cite-ref">[2]</a>
      </p>

      <h2>Which oil, and when do you change it?</h2>
      <p>
        For a flat-tappet engine, the break-in oil has to protect the cam first. OnAllCylinders
        explains why: the zinc and phosphorus anti-wear additive, ZDDP, is what protects the lobe
        and lifter while they mate, and heavy detergent packages can pull that additive off the
        very parts it is meant to protect — so the best break-in oils are high in ZDDP and low in
        detergent.
        <a href="#src-3" className="cite-ref">[3]</a> Crane&rsquo;s procedure says not to use
        synthetic for break-in and not to use API SL, SM, or SN rated oils.
        <a href="#src-1" className="cite-ref">[1]</a> JE adds that any break-in oil choice starts
        with compatibility with the camshaft.
        <a href="#src-2" className="cite-ref">[2]</a>
      </p>
      <p>
        The schedule is simple. Change the oil and filter after the cam break-in, again at about
        500 miles (800 km), and — per Crane — put another 5,000 miles on the cam before switching
        to synthetic, if you want to switch at all.
        <a href="#src-1" className="cite-ref">[1]</a> Roller-cam engines skip the 20-minute lobe
        ritual, because a roller follower rolls instead of sliding, but they still need the load
        cycles and the early oil changes.
      </p>

      <h2>What changes when the rebuild finishes in an Alberta autumn?</h2>
      <p>
        The calendar. Engines come out of the shop in October with a winter in front of them, and
        the temptation is to fire it up in the garage now and then to &ldquo;keep it
        lubricated.&rdquo; Do not. Short cold idles are the opposite of break-in, and the{" "}
        <Link href="/blog/classic-car-winter-storage-alberta">winter storage guide</Link> explains
        why they are bad for any engine, new or old.
      </p>
      <p>
        If the car is going straight into storage, do the cam break-in and the first oil change
        before it goes away, store it properly, and save the load cycles for the first dry spring
        day. The{" "}
        <Link href="/guides/winter">winter guide</Link> covers the storage; the break-in covers
        itself if you give it a real drive instead of a driveway.
      </p>
      <p>
        Engine builds, swaps, and the first start that follows are part of{" "}
        <Link href="/services/engine-swaps-builds">engine swaps and builds</Link>. If you are
        about to fire a fresh engine and want a second set of eyes on the springs, the oil, or the
        timing first, send the details through the{" "}
        <Link href="/quote#form">quote page</Link>.
      </p>
    </>
  );
}
