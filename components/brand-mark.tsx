type BrandMarkProps = {
  className?: string;
};

/**
 * Park mark: a gull over two lake ripples, drawn as a single line weight
 * so it stays legible at 20px in the header and 32px in the footer.
 */
export default function BrandMark({ className = "size-10" }: BrandMarkProps) {
  return (
    <span
      className={`relative grid shrink-0 place-items-center overflow-hidden rounded-full bg-lake-800 text-sand-50 ring-1 ring-white/20 ring-inset ${className}`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 32 32" className="size-[58%]" fill="none">
        <path
          d="M4.5 16.4C7.6 11 11.2 11 16 15.6c4.8-4.6 8.4-4.6 11.5 0.8"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 22.2c1.9 0 1.9-1.5 3.8-1.5s1.9 1.5 3.8 1.5 1.9-1.5 3.8-1.5 1.9 1.5 3.8 1.5"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          opacity="0.65"
        />
        <path
          d="M11.5 26.4c1.4 0 1.4-1 2.8-1s1.4 1 2.8 1 1.4-1 2.8-1"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
          opacity="0.35"
        />
      </svg>
    </span>
  );
}
