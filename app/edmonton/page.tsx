import type { Metadata } from "next";
import { withPageMetadata } from "@/lib/metadata";
import Image from "next/image";
import Link from "next/link";
import { site, services, areas } from "@/lib/site";
import { JsonLd, breadcrumbSchema, faqSchema } from "@/lib/schema";

export const metadata: Metadata = withPageMetadata("/edmonton", {
  title: "Classic Car Restoration Edmonton",
  description: `Classic car restoration in Edmonton at 2240 Speed Shop, ${site.street}, off the Sherwood Park Freeway. Drive times for Sherwood Park, Fort Saskatchewan, St. Albert and Leduc.`,
  alternates: { canonical: "/edmonton" },
  openGraph: {
    type: "website",
    title: "Classic Car Restoration Edmonton",
    description: `Classic car restoration in Edmonton at 2240 Speed Shop, ${site.street}, off the Sherwood Park Freeway. Drive times for Sherwood Park, Fort Saskatchewan, St. Albert and Leduc.`,
  },
});

const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${site.street}, ${site.city}, ${site.region} ${site.postalCode}`
)}`;

type DriveRow = {
  area: string;
  route: string;
  drive: string;
  href?: string;
};

// Clear-road routes and times to 4507 82 Ave NW, from OSRM routing on
// 2026-09-22, rounded up to the next five minutes.
const driveTable: DriveRow[] = [
  {
    area: "Mill Woods and the south side",
    route: "50 Street north — no bridge, no Whyte Ave",
    drive: "About 15 min",
  },
  {
    area: "Downtown Edmonton",
    route: "Connors Road and 90 Avenue east to 50 Street",
    drive: "About 15 min",
  },
  {
    area: "Sherwood Park",
    route: "Sherwood Park Freeway west — it runs right past the shop",
    drive: "About 15 min",
    href: "/edmonton/sherwood-park",
  },
  {
    area: "Fort Saskatchewan",
    route: "Highway 21 south, the Henday, then the Sherwood Park Freeway",
    drive: "About 35 min",
    href: "/edmonton/fort-saskatchewan",
  },
  {
    area: "St. Albert",
    route: "The Yellowhead east, then Wayne Gretzky Drive south",
    drive: "About 35 min",
    href: "/edmonton/st-albert",
  },
  {
    area: "Leduc and Nisku",
    route: "QEII north, Whitemud Drive east, then 50 Street north",
    drive: "About 30–35 min",
    href: "/edmonton/leduc-nisku",
  },
  {
    area: "Spruce Grove",
    route: "Highway 16 east across the city, then Wayne Gretzky Drive south",
    drive: "About 45 min",
    href: "/edmonton/spruce-grove",
  },
];

const faq = [
  {
    q: "Where is 2240 Speed Shop?",
    a: `${site.name} is at ${site.street}, ${site.city}, ${site.region} ${site.postalCode} — in Morris Industrial on Edmonton's east side, just off 50 Street and the Sherwood Park Freeway. Owner-operated by ${site.owner}. Open Monday to Friday, 9:00 to 17:00.`,
  },
  {
    q: "Which areas does the shop serve?",
    a: "Edmonton, Sherwood Park, St. Albert, Leduc, Nisku, Spruce Grove, and Fort Saskatchewan. Most of the metro is inside a forty-minute drive, and projects come in from county roads well past that.",
  },
  {
    q: "Do I have to drive the car there myself?",
    a: "No. Plenty of projects arrive on a trailer or a deck truck, especially the ones that have not run in years. The shop sits in an industrial district off 50 Street, so a trailer never has to fight downtown traffic. Call ahead and we will tell you where to unload.",
  },
  {
    q: "When is car season in Edmonton?",
    a: "Roughly May through September. That is why bodywork and paint get booked over the winter — a car that arrives in July is usually a next-season car. Every September the shop runs the road west to the Columbia Valley Classics Show and Shine at Radium Hot Springs.",
  },
];

export default function EdmontonHubPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-14 sm:py-20">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Edmonton", path: "/edmonton" },
        ])}
      />
      <JsonLd data={faqSchema(faq)} />

      <nav aria-label="Breadcrumb" className="font-mono text-xs text-steel">
        <ol className="flex flex-wrap items-center gap-2">
          <li>
            <Link className="hover:text-bone" href="/">
              Home
            </Link>
          </li>
          <li aria-hidden="true" className="text-tungsten/50">
            /
          </li>
          <li aria-current="page" className="text-bone">
            Edmonton
          </li>
        </ol>
      </nav>

      <header className="mt-8 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div>
          <p className="font-sub text-xs uppercase tracking-[0.28em] text-neon-bloom">
            Edmonton and the ring
          </p>
          <h1 data-fx="h" className="mt-3 font-display text-5xl leading-[0.95] tracking-wide text-bone sm:text-7xl">
            Classic car restoration near you in Edmonton
          </h1>
          <div className="weld mt-6 max-w-md" />
          <p className="mt-6 text-lg leading-relaxed text-bone">
            2240 Speed Shop is a classic car restoration and custom build shop at {site.street} in
            east Edmonton, just off the Sherwood Park Freeway. {site.owner}&rsquo;s shop serves
            Edmonton, Sherwood Park, St. Albert, Leduc, Nisku, Spruce Grove, and Fort
            Saskatchewan — most of the metro sits inside a forty-minute drive.
          </p>
          <p className="mt-4 text-base leading-relaxed text-steel">
            East Edmonton. Off the Sherwood Park Freeway. Come see the work.
          </p>
        </div>

        <figure>
          <div data-fx="mask" className="relative aspect-[3/4] w-full overflow-hidden">
            <Image
              src="/shop/IMG_2943-original.jpeg"
              alt="The rusted steel 2240 Speed Shop sign above a red shop door — the badge of the classic car restoration shop in east Edmonton"
              fill
              priority
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="graded object-cover"
            />
          </div>
          <figcaption className="mt-3 text-sm leading-relaxed text-steel">
            Laser-cut steel, left to weather on purpose — the badge this whole site is built
            around.
          </figcaption>
        </figure>
      </header>

      <section aria-labelledby="where" className="mt-20 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <h2 id="where" className="font-display text-3xl tracking-wide text-bone sm:text-4xl">
            Where exactly is the shop?
          </h2>
          <div className="weld mt-5 max-w-xs" />
          <p className="mt-6 text-base leading-relaxed text-steel">
            {site.street}, in Morris Industrial on the east side of the city — a few blocks east of
            50 Street, on the south side of 82 Avenue, with the Sherwood Park Freeway running along
            the south edge of the block. An industrial street, not a strip mall and not a downtown
            address. Trailering in? Call ahead and we will tell you where to unload.
          </p>
          <p className="mt-4 text-base leading-relaxed text-steel">
            The location does the arguing. The Sherwood Park Freeway runs straight from the Park to
            the shop. Mill Woods comes up 50 Street without a bridge. The Whitemud and the Yellowhead
            bring everyone else across the city without touching Whyte Ave on a Saturday.
          </p>
        </div>

        <address className="plate not-italic p-6 text-sm leading-relaxed text-steel">
          <p className="font-display text-2xl not-italic tracking-wide text-bone">{site.name}</p>
          <p className="mt-3">
            {site.street}
            <br />
            {site.city}, {site.region} {site.postalCode}
          </p>
          <p className="mt-4 font-mono text-xs uppercase tracking-widest text-tungsten">
            Mon–Fri 9:00–17:00
          </p>
          <p className="mt-4">
            <a className="hover:text-bone" href={`tel:${site.phone}`}>
              {site.phoneDisplay}
            </a>
            <br />
            <a className="hover:text-bone" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </p>
          <p className="mt-5">
            <a
              className="font-sub text-[11px] uppercase tracking-[0.2em] text-neon-bloom hover:text-bone"
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open in maps →
            </a>
          </p>
        </address>
      </section>

      <section aria-labelledby="drive" className="mt-20">
        <h2 id="drive" className="font-display text-3xl tracking-wide text-bone sm:text-4xl">
          How far is the drive?
        </h2>
        <div className="weld mt-5 max-w-xs" />
        <div className="mt-8 overflow-x-auto border border-rust/30">
          <table className="w-full min-w-[38rem] border-collapse text-left">
            <caption className="sr-only">
              Drive times and routes to 2240 Speed Shop from areas around Edmonton
            </caption>
            <thead>
              <tr className="border-b border-rust/40 bg-panel">
                <th
                  scope="col"
                  className="px-4 py-3 font-sub text-[11px] uppercase tracking-[0.2em] text-neon-bloom"
                >
                  Area
                </th>
                <th
                  scope="col"
                  className="px-4 py-3 font-sub text-[11px] uppercase tracking-[0.2em] text-neon-bloom"
                >
                  Route
                </th>
                <th
                  scope="col"
                  className="px-4 py-3 font-sub text-[11px] uppercase tracking-[0.2em] text-neon-bloom"
                >
                  Clear-road drive
                </th>
              </tr>
            </thead>
            <tbody>
              {driveTable.map((row) => (
                <tr key={row.area} className="border-b border-rust/20 last:border-0">
                  <th scope="row" className="px-4 py-4 align-top font-display text-lg tracking-wide text-bone">
                    {row.href ? (
                      <Link className="hover:text-neon-bloom" href={row.href}>
                        {row.area}
                      </Link>
                    ) : (
                      row.area
                    )}
                  </th>
                  <td className="px-4 py-4 align-top text-sm leading-relaxed text-steel">
                    {row.route}
                  </td>
                  <td className="px-4 py-4 align-top font-mono text-sm text-tungsten">
                    {row.drive}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 font-mono text-xs leading-relaxed text-steel">
          Clear-road estimates, not promises. Check a map app before you hitch up a trailer.
        </p>
      </section>

      <section aria-labelledby="area-pages" className="mt-20">
        <h2 id="area-pages" className="font-display text-3xl tracking-wide text-bone sm:text-4xl">
          Which area are you coming from?
        </h2>
        <div className="weld mt-5 max-w-xs" />
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {areas.map((a) => (
            <li key={a.slug}>
              <Link href={`/edmonton/${a.slug}`} className="plate block h-full p-6">
                <p className="font-display text-2xl tracking-wide text-bone">{a.name}</p>
                <p className="mt-2 text-sm leading-relaxed text-steel">{a.note}</p>
                <p className="mt-4 font-sub text-[11px] uppercase tracking-[0.22em] text-neon-bloom">
                  Read the {a.name} page →
                </p>
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm leading-relaxed text-steel">
          Coming from a county road we have not named? The Henday, the Whitemud, and the Sherwood
          Park Freeway all end up at the same door on 82 Avenue. Call the shop and describe the
          project.
        </p>
      </section>

      <div className="mt-20 grid gap-10 lg:grid-cols-2">
        <section aria-labelledby="season">
          <h2 id="season" className="font-display text-3xl tracking-wide text-bone sm:text-4xl">
            When is car season here?
          </h2>
          <div className="weld mt-5 max-w-xs" />
          <p className="mt-6 text-base leading-relaxed text-steel">
            Roughly May through September, and everybody in this city knows it. That is why the
            calendar runs backwards from the shows: bodywork and paint booked over winter,
            mechanical sorted in spring, shakedown miles in June. A car that lands here in July is
            usually a next-season car.
          </p>
          <p className="mt-4 text-base leading-relaxed text-steel">
            Winter is not downtime. It is when the long jobs get done — the ones you cannot rush
            through a summer weekend.
          </p>
        </section>
        <section aria-labelledby="off-the-clock">
          <h2
            id="off-the-clock"
            className="font-display text-3xl tracking-wide text-bone sm:text-4xl"
          >
            What does the shop do off the clock?
          </h2>
          <div className="weld mt-5 max-w-xs" />
          <p className="mt-6 text-base leading-relaxed text-steel">
            Every September the shop runs the road west to the Columbia Valley Classics Show and
            Shine at Radium Hot Springs. Mountains, hot springs, and a field of old iron — the last
            good trip before the salt goes down.
          </p>
          <p className="mt-4 text-base leading-relaxed text-steel">
            Local show season fills the summer in between. St. Albert has Rock&rsquo;n August. Come
            find us there, or come by the shop and look at what is on the hoist.
          </p>
        </section>
      </div>

      <section aria-labelledby="edmonton-services" className="mt-20">
        <h2
          id="edmonton-services"
          className="font-display text-3xl tracking-wide text-bone sm:text-4xl"
        >
          What can the shop do for an Edmonton classic?
        </h2>
        <div className="weld mt-5 max-w-xs" />
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <li key={s.slug}>
              <Link href={`/services/${s.slug}`} className="plate block h-full p-5">
                <p className="font-sub text-[11px] uppercase tracking-[0.2em] text-neon-bloom">
                  {s.keyword}
                </p>
                <p className="mt-3 font-display text-xl tracking-wide text-bone">{s.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-steel">{s.blurb}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="edmonton-faq" className="mt-20 max-w-3xl">
        <h2 id="edmonton-faq" className="font-display text-3xl tracking-wide text-bone sm:text-4xl">
          Straight answers
        </h2>
        <div className="weld mt-5 max-w-xs" />
        <dl className="mt-8 space-y-8">
          {faq.map((item) => (
            <div key={item.q}>
              <dt className="font-display text-xl tracking-wide text-bone">{item.q}</dt>
              <dd className="mt-2 text-base leading-relaxed text-steel">{item.a}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section
        aria-labelledby="edmonton-cta"
        className="mt-20 border border-tungsten/50 bg-panel px-6 py-10 sm:px-10"
      >
        <h2 id="edmonton-cta" className="font-display text-4xl tracking-wide text-bone sm:text-5xl">
          Let&rsquo;s talk straight
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-steel">
          Photos in, honest scope out. Two business days. Better yet — come by and look at what is
          on the hoist.
        </p>
        <div className="mt-7 flex flex-wrap gap-4">
          <Link
            href="/quote#form"
            className="border border-tungsten/70 px-6 py-3 font-sub text-xs uppercase tracking-[0.2em] text-bone transition-all hover:border-neon-bloom hover:shadow-[0_0_24px_rgba(255,176,102,0.15)]"
          >
            Start your quote
          </Link>
          <Link
            href="/builds"
            className="border border-steel/40 px-6 py-3 font-sub text-xs uppercase tracking-[0.2em] text-bone transition-colors hover:border-steel"
          >
            See the builds
          </Link>
          <a
            href={`tel:${site.phone}`}
            className="border border-steel/40 px-6 py-3 font-sub text-xs uppercase tracking-[0.2em] text-bone transition-colors hover:border-steel"
          >
            {site.phoneDisplay}
          </a>
        </div>
      </section>
    </div>
  );
}
