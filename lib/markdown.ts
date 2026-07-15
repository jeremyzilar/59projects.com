import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkHtml from "remark-html";

/**
 * A markdown image on its own line (`![Caption text](/path/to.jpg)`)
 * renders as `<p><img src="..." alt="Caption text"></p>`. We treat that
 * alt text as a visible caption too, wrapping the pair in a
 * `<figure>`/`<figcaption>` so a project's body copy can embed a single
 * photo with a caption using plain markdown, no raw HTML required.
 *
 * An image with empty alt text (`![](/path.jpg)`) is left as a plain,
 * uncaptioned image, for cases where a caption doesn't add anything.
 */
function wrapStandaloneImagesInFigures(html: string): string {
  return html.replace(
    /<p>\s*(<img\s+[^>]*>)\s*<\/p>/g,
    (match, imgTag: string) => {
      const altMatch = /alt="([^"]*)"/.exec(imgTag);
      const caption = altMatch?.[1]?.trim();
      if (!caption) {
        return match;
      }
      return `<figure class="prose-figure">${imgTag}<figcaption>${caption}</figcaption></figure>`;
    }
  );
}

export async function markdownToHtml(markdown: string): Promise<string> {
  // All markdown content comes from files we author ourselves (content/),
  // never from visitor input, so it's safe to skip remark-html's default
  // sanitization. Without this, links using schemes other than http(s)
  // and mailto (e.g. tel:) silently lose their href.
  //
  // remarkGfm adds support for GitHub-flavored markdown syntax (tables,
  // strikethrough, autolinks, task lists) that the CommonMark-only core
  // doesn't parse on its own.
  const result = await remark()
    .use(remarkGfm)
    .use(remarkHtml, { sanitize: false })
    .process(markdown);
  return wrapStandaloneImagesInFigures(result.toString());
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
