import { LEGAL_NAME, LOCATION } from "@/content/site";

interface FooterProps {
  /**
   * Text color for pages with a non-default background, e.g. a project's
   * takeover color. Leave unset on the default cream background to use the
   * standard muted text token.
   */
  color?: string;
}

export function Footer({ color }: FooterProps) {
  return (
    <div
      className="w-full px-[clamp(20px,2.5vw,40px)] py-[22px] text-center"
      style={color ? { color } : undefined}
    >
      <span
        className={`text-xs font-medium tracking-[0.06em] uppercase ${
          color ? "" : "text-muted-3"
        }`}
      >
        {LEGAL_NAME} • {LOCATION}
      </span>
    </div>
  );
}
