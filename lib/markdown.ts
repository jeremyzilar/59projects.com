import { remark } from "remark";
import remarkHtml from "remark-html";

export async function markdownToHtml(markdown: string): Promise<string> {
  const result = await remark().use(remarkHtml).process(markdown);
  return result.toString();
}

/**
 * Renders a short, single-line markdown string (e.g. a name with a link)
 * without wrapping it in a block-level `<p>`, so it can be dropped inline
 * into existing markup like a table cell or label/value row.
 */
export async function markdownToInlineHtml(markdown: string): Promise<string> {
  const html = await markdownToHtml(markdown);
  return html.trim().replace(/^<p>([\s\S]*)<\/p>$/, "$1");
}
