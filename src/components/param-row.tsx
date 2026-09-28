import { Badge } from "@/components/ui/badge";
import type { ParamMatch } from "@/lib/search";
import { Highlight } from "./highlight";

const sectionTitles: Record<string, string> = {
  common: "common",
  sampling: "sampling",
  server: "server",
};

/**
 * One parameter row: flag + aliases + arg, description,
 * extra notes, and env/default metadata — with fuzzy-match
 * highlighting wherever a field matched the query.
 */
export function ParamRow({
  match,
  showSection,
}: {
  match: ParamMatch;
  showSection: boolean;
}) {
  const { param } = match;

  return (
    <div className="rounded-lg border bg-card px-4 py-3 transition-colors hover:bg-accent/40">
      <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
        <span className="font-mono text-sm font-semibold">
          <Highlight
            text={param.primary}
            indices={match.primary?.indices ?? null}
          />
        </span>

        {param.aliases.length > 0 && (
          <span className="flex flex-wrap items-center gap-1">
            {param.aliases.map((alias) => (
              <span
                key={alias}
                className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-muted-foreground"
              >
                <Highlight
                  text={alias}
                  indices={
                    match.aliases.find((a) => a.alias === alias)?.match.indices ??
                    null
                  }
                />
              </span>
            ))}
          </span>
        )}

        {param.arg && (
          <span className="font-mono text-xs text-muted-foreground">
            {param.arg}
          </span>
        )}

        <span className="ml-auto flex items-center gap-1.5">
          {param.deprecated && (
            <Badge
              variant="destructive"
              className="h-4 text-[10px] font-semibold uppercase tracking-wide"
            >
              deprecated
            </Badge>
          )}
          {showSection && (
            <Badge
              variant="secondary"
              className="h-4 text-[10px] font-medium"
            >
              {sectionTitles[param.section] ?? param.section}
            </Badge>
          )}
        </span>
      </div>

      <p className="mt-1.5 text-sm text-foreground/90">
        <Highlight
          text={param.description}
          indices={match.description?.indices ?? null}
        />
      </p>

      {param.extra.length > 0 && (
        <ul className="mt-1.5 list-disc space-y-0.5 pl-5 text-xs text-muted-foreground">
          {param.extra.map((line, i) => (
            <li key={i}>{line}</li>
          ))}
        </ul>
      )}

      {(param.env !== undefined || param.default !== undefined) && (
        <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-muted-foreground">
          {param.env !== undefined && (
            <span>
              env{" "}
              <span className="text-foreground/80">
                <Highlight
                  text={param.env}
                  indices={match.env?.indices ?? null}
                />
              </span>
            </span>
          )}
          {param.default !== undefined && (
            <span>
              default <span className="text-foreground/80">{param.default}</span>
            </span>
          )}
        </div>
      )}
    </div>
  );
}
