import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  action?: { label: string; href: string };
  tone?: "light" | "dark";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  action,
  tone = "light",
}: SectionHeadingProps) {
  const dark = tone === "dark";

  return (
    <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl">
        <p
          className={`flex items-center gap-3 text-[11px] font-medium tracking-[0.22em] uppercase ${
            dark ? "text-sand-300/80" : "text-sand-600"
          }`}
        >
          <span
            aria-hidden="true"
            className={`h-px w-7 ${dark ? "bg-sand-300/50" : "bg-sand-400/70"}`}
          />
          {eyebrow}
        </p>
        <h2
          className={`mt-5 font-display text-[clamp(1.9rem,3.4vw,2.85rem)] leading-[1.06] font-light tracking-[-0.02em] ${
            dark ? "text-sand-50" : "text-ink"
          }`}
        >
          {title}
        </h2>
        {description ? (
          <p
            className={`mt-4 max-w-xl text-[15px] leading-relaxed ${
              dark ? "text-sand-200/75" : "text-ink-soft/85"
            }`}
          >
            {description}
          </p>
        ) : null}
      </div>

      {action ? (
        <Link
          href={action.href}
          className={`group inline-flex shrink-0 items-center gap-2 rounded-full border px-5 py-2.5 text-[13px] font-medium transition-colors duration-300 ${
            dark
              ? "border-white/20 text-sand-100 hover:border-white/40 hover:bg-white/5"
              : "border-ink/15 text-ink hover:border-ink/30 hover:bg-white"
          }`}
        >
          {action.label}
          <ArrowUpRight
            className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            strokeWidth={1.9}
          />
        </Link>
      ) : null}
    </div>
  );
}
