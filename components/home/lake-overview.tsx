import Image from "next/image";
import Link from "next/link";
import { Anchor, ArrowRight, Bird, ShieldCheck } from "lucide-react";
import { overviewFacts } from "@/lib/site";

const icons = {
  shield: ShieldCheck,
  bird: Bird,
  anchor: Anchor,
} as const;

export default function LakeOverview() {
  return (
    <section className="relative bg-sand-50 py-20 lg:py-28">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="relative lg:col-span-5">
            <div
              aria-hidden="true"
              className="absolute -right-6 -bottom-6 -z-10 hidden size-36 rounded-full border border-sand-300 lg:block"
            />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-lake-900">
              <Image
                src="/images/lake-canopy.jpg"
                alt="Dense green vegetation on the shore of Naujan Lake with the water beyond"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-lake-950/50 via-transparent to-transparent"
              />
              <div className="absolute inset-x-4 bottom-4 rounded-2xl bg-sand-50/95 px-4 py-3 shadow-sm backdrop-blur-sm">
                <p className="text-[9.5px] font-semibold tracking-[0.2em] text-sand-600 uppercase">
                  Ramsar Site No. 1008
                </p>
                <p className="mt-1 font-display text-[15px] text-ink">
                  Wetland of International Importance
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <p className="flex items-center gap-3 text-[11px] font-medium tracking-[0.22em] text-sand-600 uppercase">
              <span aria-hidden="true" className="h-px w-7 bg-sand-400/70" />
              The park
            </p>

            <h2 className="mt-5 font-display text-[clamp(1.9rem,3.4vw,2.85rem)] leading-[1.06] font-light tracking-[-0.02em] text-ink">
              A lake that still behaves like a lake.
            </h2>

            <div className="mt-6 space-y-5 text-[15px] leading-[1.75] text-ink-soft/85">
              <p>
                Naujan Lake sits in the middle of Oriental Mindoro, ringed by
                marshland, river mouths and the lakeside barangays that have
                fished it for generations. It is the fifth largest lake in the
                Philippines and the core of a national park.
              </p>
              <p>
                From October the open water fills with migratory waterbirds
                arriving from the north. They stay until March. In between, the
                lake holds endemic freshwater species, a small-scale fishery,
                and a growing number of guided boat tours that keep visitors on
                the water and away from the nesting grounds.
              </p>
            </div>

            <dl className="mt-10 grid gap-6 border-t border-ink/8 pt-8 sm:grid-cols-3">
              {overviewFacts.map((fact) => {
                const Icon = icons[fact.icon];
                return (
                  <div key={fact.title}>
                    <dt className="flex items-center gap-2 text-[13px] font-semibold text-ink">
                      <Icon
                        className="size-4 text-lake-600"
                        strokeWidth={1.9}
                        aria-hidden="true"
                      />
                      {fact.title}
                    </dt>
                    <dd className="mt-2 text-[13px] leading-relaxed text-ink-soft/75">
                      {fact.body}
                    </dd>
                  </div>
                );
              })}
            </dl>

            <Link
              href="/guidelines"
              className="group mt-9 inline-flex items-center gap-2 text-[13.5px] font-medium text-lake-700 transition-colors hover:text-lake-900"
            >
              Read the park guidelines
              <ArrowRight
                className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                strokeWidth={1.9}
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
