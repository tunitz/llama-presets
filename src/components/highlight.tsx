import { Fragment } from "react";

/**
 * Renders `text` with the characters at `indices` (as returned by
 * fuzzyMatch) wrapped in a highlight span.
 */
export function Highlight({
  text,
  indices,
}: {
  text: string;
  indices: readonly number[] | null | undefined;
}) {
  if (!indices || indices.length === 0) return <>{text}</>;

  const idx = new Set(indices);
  const nodes: React.ReactNode[] = [];
  let buffer = "";
  let key = 0;

  const flush = (matched: boolean) => {
    if (buffer === "") return;
    if (matched) {
      nodes.push(
        <mark
          key={key++}
          className="rounded-[3px] bg-accent px-0.5 text-foreground"
        >
          {buffer}
        </mark>
      );
    } else {
      nodes.push(<Fragment key={key++}>{buffer}</Fragment>);
    }
    buffer = "";
  };

  for (let i = 0; i < text.length; i++) {
    const inMatch = idx.has(i);
    if (i > 0 && idx.has(i - 1) !== inMatch) flush(idx.has(i - 1));
    buffer += text[i];
  }
  if (buffer !== "") flush(idx.has(text.length - 1));

  return <>{nodes}</>;
}
