import clsx from "clsx";
import type { CSSProperties } from "react";

interface ProseProps {
  html: string;
  className?: string;
  /** Base text color driving the Tailwind Typography `--tw-prose-*` tokens. */
  color?: string;
}

/**
 * Groups each `<h2>` with all of the content that follows it (up to the next
 * `<h2>`) into a `.prose-section` wrapper, so CSS can lay the heading out in
 * a left column with its body content aligned beside it. Content before the
 * first `<h2>` (or markdown with no `<h2>` at all) passes through untouched.
 */
function groupIntoSections(html: string): string {
  const parts = html.split(/(<h2>[\s\S]*?<\/h2>)/);
  if (parts.length <= 1) {
    return html;
  }

  let result = parts[0] ?? "";
  for (let i = 1; i < parts.length; i += 2) {
    const heading = parts[i];
    const body = (parts[i + 1] ?? "").trim();
    result += `<div class="prose-section">${heading}<div class="prose-section__body">${body}</div></div>`;
  }
  return result;
}

function proseColorVars(color: string): CSSProperties {
  return {
    "--tw-prose-body": color,
    "--tw-prose-headings": color,
    "--tw-prose-lead": color,
    "--tw-prose-links": color,
    "--tw-prose-bold": color,
    "--tw-prose-counters": color,
    "--tw-prose-bullets": `${color}80`,
    "--tw-prose-hr": `${color}30`,
    "--tw-prose-quotes": color,
    "--tw-prose-quote-borders": `${color}30`,
    "--tw-prose-captions": `${color}99`,
    "--tw-prose-code": color,
    "--tw-prose-th-borders": `${color}40`,
    "--tw-prose-td-borders": `${color}20`,
  } as CSSProperties;
}

export function Prose({ html, className, color }: ProseProps) {
  return (
    <div
      className={clsx("prose", className)}
      style={color ? proseColorVars(color) : undefined}
      dangerouslySetInnerHTML={{ __html: groupIntoSections(html) }}
    />
  );
}
