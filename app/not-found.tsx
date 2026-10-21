import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70svh] items-center bg-sand-50 py-24">
      <div className="mx-auto w-full max-w-3xl px-5 text-center sm:px-8">
        <p className="font-mono text-[11px] tracking-[0.3em] text-sand-500 uppercase">
          Error 404
        </p>
        <h1 className="mt-5 font-display text-[clamp(2rem,5vw,3.25rem)] leading-[1.05] font-light tracking-[-0.02em] text-ink">
          This trail isn&rsquo;t open yet.
        </h1>
        <p className="mx-auto mt-5 max-w-md text-[15px] leading-relaxed text-ink-soft/80">
          The page you were looking for has either moved or is still being
          built. The wildlife catalog, eco-tours and park guidelines are the
          places to start.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 rounded-full bg-lake-800 px-6 py-3.5 text-sm font-semibold text-sand-50 transition-colors hover:bg-lake-700"
          >
            <ArrowLeft
              className="size-4 transition-transform duration-300 group-hover:-translate-x-1"
              strokeWidth={2}
            />
            Back to the lake
          </Link>
          <Link
            href="/guidelines"
            className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-6 py-3.5 text-sm font-medium text-ink transition-colors hover:border-ink/30 hover:bg-white"
          >
            <Compass className="size-4" strokeWidth={1.9} />
            Park guidelines
          </Link>
        </div>
      </div>
    </section>
  );
}
