/**
 * Build-time helpers for guide article HTML. Article bodies are authored as
 * HTML strings, so tables, heading anchors, and reading time are derived here
 * instead of being repeated in every article.
 */

import type { Lang } from '../i18n/ui';

export interface TocItem {
  id: string;
  text: string;
}

export interface PreparedArticle {
  html: string;
  toc: TocItem[];
}

function stripTags(html: string): string {
  return html
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Adds stable `id`s to `<h2>` headings (returned as a table of contents) and
 * wraps every `<table>` in a keyboard-focusable scroll container so wide
 * tables scroll inside the article instead of widening the page.
 */
export function prepareArticleHtml(html: string, tableLabel: string): PreparedArticle {
  const toc: TocItem[] = [];
  let index = 0;

  const withHeadingIds = html.replace(
    /<h2(\s[^>]*)?>([\s\S]*?)<\/h2>/g,
    (_match, attrs: string | undefined, inner: string) => {
      index += 1;
      const id = `section-${index}`;
      toc.push({ id, text: stripTags(inner) });
      return `<h2${attrs ?? ''} id="${id}">${inner}</h2>`;
    },
  );

  const withTableWrappers = withHeadingIds.replace(
    /<table[\s\S]*?<\/table>/g,
    (table) =>
      `<div class="table-scroll" role="region" aria-label="${tableLabel}" tabindex="0">${table}</div>`,
  );

  return { html: withTableWrappers, toc };
}

/** Rough reading time: CJK characters at 400/min, other words at 220/min. */
export function estimateReadMinutes(html: string, lang: Lang): number {
  const text = html.replace(/<pre[\s\S]*?<\/pre>/g, ' ').replace(/<[^>]+>/g, ' ');
  const cjkChars = (text.match(/[\u4e00-\u9fff]/g) ?? []).length;
  const words = text
    .replace(/[\u4e00-\u9fff]/g, ' ')
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.round(cjkChars / 400 + words / 220));
}
