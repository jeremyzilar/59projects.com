import type { ProjectCredits } from "@/lib/schema";

interface CreditsBoxProps {
  credits: ProjectCredits;
  fg: string;
}

/** Turns a front-matter key like `development` or `case-study` into "Development" / "Case Study". */
function labelFromKey(key: string): string {
  return key
    .replace(/[-_]+/g, " ")
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .trim()
    .split(" ")
    .filter(Boolean)
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}

export function CreditsBox({ credits, fg }: CreditsBoxProps) {
  const rows = Object.entries(credits).filter(([, value]) => value);

  if (rows.length === 0) {
    return null;
  }

  return (
    <div
      className="w-full max-w-[40em] px-2 py-2 sm:px-4"
      style={{ background: `${fg}0a` }}
    >
      {rows.map(([key, value], index) => (
        <div
          key={key}
          className="grid grid-cols-[120px_1fr] items-baseline gap-x-8 py-1.5"
          style={index > 0 ? { borderTop: `1px solid ${fg}18` } : undefined}
        >
          <span className="text-sm font-medium opacity-60">
            {labelFromKey(key)}
          </span>
          <span
            className="credits-box-value text-[15px]"
            dangerouslySetInnerHTML={{ __html: value ?? "" }}
          />
        </div>
      ))}
    </div>
  );
}
