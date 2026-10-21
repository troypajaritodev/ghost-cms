import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Backpack,
  Clock,
  Compass,
  MapPin,
  Users,
} from "lucide-react";
import {
  difficultyLabel,
  getTour,
  tariffTotal,
  tours,
  type TourDifficulty,
} from "@/lib/tours";

type TourPageProps = {
  params: Promise<{ slug: string }>;
};

const difficultyStyles: Record<TourDifficulty, string> = {
  EASY: "bg-moss-50 text-moss-700 ring-moss-600/25",
  MODERATE: "bg-reed-50 text-reed-800 ring-reed-600/25",
  CHALLENGING: "bg-alert-50 text-alert-700 ring-alert-600/25",
};

const peso = new Intl.NumberFormat("en-PH", {
  style: "currency",
  currency: "PHP",
  maximumFractionDigits: 0,
});

export function generateStaticParams() {
  return tours.map((tour) => ({ slug: tour.slug }));
}

export async function generateMetadata({
  params,
}: TourPageProps): Promise<Metadata> {
  const { slug } = await params;
  const tour = getTour(slug);

  if (!tour) return { title: "Package not found" };

  return {
    title: tour.title,
    description: tour.summary,
    alternates: { canonical: `/tours/${tour.slug}` },
    openGraph: {
      title: tour.title,
      description: tour.summary,
      images: [{ url: tour.image, alt: tour.imageAlt }],
    },
  };
}

export default async function TourDetailPage({ params }: TourPageProps) {
  const { slug } = await params;
  const tour = getTour(slug);

  if (!tour) notFound();

  const total = tariffTotal(tour);

  return (
    <>
      <section className="relative isolate flex min-h-[60svh] items-end overflow-hidden bg-lake-950 pt-28 pb-12">
        <Image
          src={tour.image}
          alt={tour.imageAlt}
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-gradient-to-b from-lake-950/85 via-lake-950/45 to-lake-950/95"
        />

        <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
          <Link
            href="/tours"
            className="group inline-flex items-center gap-2 text-[12.5px] font-medium text-sand-200/80 transition-colors hover:text-white"
          >
            <ArrowLeft
              className="size-3.5 transition-transform duration-300 group-hover:-translate-x-1"
              strokeWidth={2}
            />
            All packages
          </Link>

          <div className="mt-6 flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-sand-50/90 px-3 py-1 text-[10px] font-semibold tracking-[0.16em] text-ink uppercase backdrop-blur-sm">
              {tour.category}
            </span>
            <span
              className={`rounded-full px-3 py-1 text-[10px] font-semibold tracking-[0.14em] uppercase ring-1 ring-inset backdrop-blur-sm ${difficultyStyles[tour.difficulty]}`}
            >
              {difficultyLabel[tour.difficulty]}
            </span>
          </div>

          <h1 className="mt-4 max-w-3xl font-display text-[clamp(2rem,4.6vw,3.4rem)] leading-[1.04] font-light tracking-[-0.02em] text-sand-50">
            {tour.title}
          </h1>

          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-sand-200/80">
            {tour.summary}
          </p>
        </div>
      </section>

      <section className="bg-sand-50 py-16 lg:py-20">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <h2 className="font-display text-[26px] leading-tight font-light text-ink">
                What the day looks like
              </h2>

              <ol className="mt-8 space-y-0 border-l border-ink/10">
                {tour.itinerary.map((stop) => (
                  <li key={stop.time} className="relative pb-8 pl-6 last:pb-0">
                    <span
                      aria-hidden="true"
                      className="absolute top-1.5 -left-[5px] size-2.5 rounded-full border-2 border-sand-50 bg-lake-600"
                    />
                    <p className="font-mono text-[11px] tracking-wider text-sand-600">
                      {stop.time}
                    </p>
                    <h3 className="mt-1 text-[15.5px] font-medium text-ink">
                      {stop.title}
                    </h3>
                    <p className="mt-1.5 text-[13.5px] leading-relaxed text-ink-soft/80">
                      {stop.detail}
                    </p>
                  </li>
                ))}
              </ol>

              <h2 className="mt-14 font-display text-[26px] leading-tight font-light text-ink">
                What to bring
              </h2>
              <div className="mt-5 flex flex-wrap gap-2">
                {tour.bring.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-2 text-[12.5px] text-ink-soft ring-1 ring-ink/10"
                  >
                    <Backpack
                      className="size-3.5 text-lake-600"
                      strokeWidth={1.9}
                      aria-hidden="true"
                    />
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-10 rounded-2xl border border-ink/8 bg-sand-100/60 p-5">
                <h3 className="text-[11px] font-semibold tracking-[0.18em] text-sand-600 uppercase">
                  Good to know
                </h3>
                <ul className="mt-3 space-y-2">
                  {tour.notes.map((note) => (
                    <li
                      key={note}
                      className="flex items-start gap-2 text-[13px] leading-relaxed text-ink-soft/85"
                    >
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-sand-400" />
                      {note}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <aside className="lg:col-span-5">
              <div className="rounded-2xl bg-white p-6 ring-1 ring-ink/10 lg:sticky lg:top-28">
                <p className="text-[10px] font-semibold tracking-[0.18em] text-sand-600 uppercase">
                  Rate per person
                </p>
                <p className="mt-1.5 font-display text-[34px] leading-none text-ink">
                  {peso.format(tour.ratePerPerson)}
                </p>

                <dl className="mt-6 space-y-2.5 border-t border-ink/8 pt-5 text-[13px]">
                  {tour.tariff.map((line) => (
                    <div key={line.label} className="flex justify-between gap-4">
                      <dt className="text-ink-soft/80">{line.label}</dt>
                      <dd className="font-mono text-[12.5px] text-ink">
                        {peso.format(line.amount)}
                      </dd>
                    </div>
                  ))}
                  <div className="flex justify-between gap-4 border-t border-ink/8 pt-2.5">
                    <dt className="font-medium text-ink">Total</dt>
                    <dd className="font-mono text-[12.5px] font-medium text-ink">
                      {peso.format(total)}
                    </dd>
                  </div>
                </dl>

                <div className="mt-6 space-y-2.5 border-t border-ink/8 pt-5 text-[13px] text-ink-soft/85">
                  <p className="flex items-center gap-2">
                    <Clock className="size-3.5 text-lake-600" strokeWidth={1.9} />
                    {tour.duration}
                  </p>
                  <p className="flex items-center gap-2">
                    <Users className="size-3.5 text-lake-600" strokeWidth={1.9} />
                    Up to {tour.maxCapacity} guests
                  </p>
                  <p className="flex items-center gap-2">
                    <MapPin className="size-3.5 text-lake-600" strokeWidth={1.9} />
                    {tour.departure}
                  </p>
                </div>

                <Link
                  href="/inquire"
                  className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-lake-800 px-5 py-3.5 text-sm font-semibold text-sand-50 transition-colors hover:bg-lake-700"
                >
                  <Compass className="size-4" strokeWidth={2} />
                  Send an inquiry
                  <ArrowRight
                    className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                    strokeWidth={2}
                  />
                </Link>
                <p className="mt-3 text-center text-[11.5px] leading-relaxed text-sand-600">
                  No online payment — fees are settled at the park office.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
