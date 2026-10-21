import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Compass, Waves } from "lucide-react";
import AdvisoryPreview from "@/components/home/advisory-preview";
import ExploreCards from "@/components/home/explore-cards";
import LakeOverview from "@/components/home/lake-overview";
import VisitCta from "@/components/home/visit-cta";
import { heroStats, site } from "@/lib/site";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "TouristAttraction",
  name: "Naujan Lake National Park",
  description: site.description,
  touristType: ["Eco-tourists", "Birdwatchers", "Researchers"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Naujan",
    addressRegion: "Oriental Mindoro",
    addressCountry: "PH",
  },
  isAccessibleForFree: false,
  publicAccess: true,
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section className="relative isolate flex min-h-svh flex-col overflow-hidden bg-lake-950">
        <Image
          src="/images/hero-lake.jpg"
          alt="Open water of Naujan Lake beneath a wide sky, with the mountains of Mindoro on the horizon"
          fill
          priority
          sizes="100vw"
          className="-z-10 scale-[1.02] object-cover object-center"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-gradient-to-b from-lake-950/85 via-lake-950/25 to-lake-950/95"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-gradient-to-r from-lake-950/85 via-lake-950/25 to-transparent"
        />
        <div aria-hidden="true" className="grain-overlay absolute inset-0 -z-10" />

        <div className="relative flex flex-1 items-end px-5 pt-32 pb-12 sm:px-8 lg:px-12 lg:pb-16">
          <div className="mx-auto w-full max-w-7xl">
            <div className="max-w-4xl">
              <p
                className="animate-rise flex items-center gap-3 text-[11px] font-medium tracking-[0.22em] text-sand-100/75 uppercase"
                style={{ animationDelay: "80ms" }}
              >
                <span aria-hidden="true" className="h-px w-8 bg-reed-300/70" />
                {site.park} · {site.region}
              </p>

              <h1
                className="animate-rise mt-6 font-display text-[clamp(2.45rem,6.6vw,5.5rem)] leading-[0.95] font-light tracking-[-0.025em] text-sand-50"
                style={{ animationDelay: "180ms" }}
              >
                The lake the birds
                <br />
                <span className="text-reed-200 italic">come home to.</span>
              </h1>

              <p
                className="animate-rise mt-7 max-w-[46ch] text-[15.5px] leading-[1.7] text-sand-100/80"
                style={{ animationDelay: "320ms" }}
              >
                The fifth largest lake in the Philippines and a Ramsar Wetland
                of International Importance — 8,125 hectares of open water,
                marshland and river mouth where migratory waterbirds return
                every October, and where a national park has stayed whole.
              </p>

              <div
                className="animate-rise mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
                style={{ animationDelay: "440ms" }}
              >
                <Link
                  href="/inquire"
                  className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-sand-50 px-6 py-3.5 text-sm font-semibold text-ink shadow-lg shadow-lake-950/30 transition-colors duration-300 hover:bg-white"
                >
                  <Compass className="size-4" strokeWidth={2} />
                  Plan your visit
                  <ArrowRight
                    className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                    strokeWidth={2}
                  />
                </Link>
                <Link
                  href="/wildlife"
                  className="inline-flex items-center justify-center gap-2.5 rounded-full border border-white/25 px-6 py-3.5 text-sm font-medium text-sand-50 backdrop-blur-sm transition-colors duration-300 hover:border-white/50 hover:bg-white/10"
                >
                  <Waves className="size-4" strokeWidth={1.8} />
                  Explore the wildlife
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="relative border-t border-white/15 bg-lake-950/35 backdrop-blur-md">
          <dl className="mx-auto grid w-full max-w-7xl grid-cols-2 gap-y-7 px-5 py-7 sm:px-8 md:grid-cols-4 lg:px-12">
            {heroStats.map((stat, index) => (
              <div
                key={stat.label}
                className={`animate-fade-in ${
                  index > 0 ? "md:border-l md:border-white/10 md:pl-7" : ""
                }`}
                style={{ animationDelay: `${600 + index * 90}ms` }}
              >
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="font-display text-[26px] leading-none font-light text-sand-50">
                    {stat.value}
                  </span>
                  {stat.unit ? (
                    <span className="ml-1 font-mono text-[11px] tracking-wider text-sand-300/70">
                      {stat.unit}
                    </span>
                  ) : null}
                  <span className="mt-2.5 block text-[10px] font-medium tracking-[0.16em] text-sand-200/65 uppercase">
                    {stat.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <LakeOverview />
      <ExploreCards />
      <AdvisoryPreview />
      <VisitCta />
    </>
  );
}
