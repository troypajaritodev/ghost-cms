import { Info, TriangleAlert } from "lucide-react";
import type { AdvisorySeverity } from "@/lib/site";

const styles: Record<
  AdvisorySeverity,
  { className: string; Icon: typeof Info }
> = {
  CRITICAL: {
    className: "bg-alert-50 text-alert-700 ring-alert-600/25",
    Icon: TriangleAlert,
  },
  WARNING: {
    className: "bg-reed-50 text-reed-800 ring-reed-600/25",
    Icon: TriangleAlert,
  },
  INFO: {
    className: "bg-moss-50 text-moss-700 ring-moss-600/25",
    Icon: Info,
  },
};

type AdvisoryBadgeProps = {
  severity: AdvisorySeverity;
  label: string;
};

export default function AdvisoryBadge({ severity, label }: AdvisoryBadgeProps) {
  const { className, Icon } = styles[severity];

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[10.5px] font-semibold tracking-[0.14em] uppercase ring-1 ring-inset ${className}`}
    >
      <Icon className="size-3" strokeWidth={2.2} />
      {label}
    </span>
  );
}
