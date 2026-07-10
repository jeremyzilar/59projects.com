import type { ProjectButton } from "@/lib/schema";

interface ButtonRowProps {
  buttons: ProjectButton[];
  fg: string;
}

export function ButtonRow({ buttons, fg }: ButtonRowProps) {
  if (buttons.length === 0) {
    return null;
  }

  return (
    <div className="flex w-full max-w-[38em] flex-wrap gap-3">
      {buttons.map((button) => (
        <a
          key={`${button.text}-${button.url}`}
          href={button.url}
          target="_blank"
          rel="noreferrer"
          className="rounded-[2px] px-4 py-[6px] text-sm font-semibold hover:opacity-70"
          style={{ border: `1px solid ${fg}40` }}
        >
          {button.text} ↗
        </a>
      ))}
    </div>
  );
}
