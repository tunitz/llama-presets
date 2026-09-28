"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { params, sections } from "@/data/params";
import { searchParams } from "@/lib/search";
import { cn } from "@/lib/utils";
import { ParamRow } from "./param-row";

type SectionFilter = "all" | (typeof sections)[number]["id"];

const SECTION_LINK =
  "https://github.com/ggml-org/llama.cpp/blob/master/tools/server/README.md";

export function ParamsBrowser() {
  const [query, setQuery] = useState("");
  const [section, setSection] = useState<SectionFilter>("all");
  const inputRef = useRef<HTMLInputElement>(null);

  // "/" or Ctrl/Cmd+K focuses the search box.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const inInput = document.activeElement === inputRef.current;
      const isCombo = (e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k";
      if (isCombo || (e.key === "/" && !inInput)) {
        e.preventDefault();
        inputRef.current?.focus();
        inputRef.current?.select();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const results = useMemo(
    () => searchParams(query, params, section),
    [query, section]
  );
  const searching = query.trim().length > 0;

  const countFor = (id: SectionFilter): number => {
    if (!searching) return id === "all" ? params.length : sections.find((s) => s.id === id)!.count;
    if (id === "all") return results.matches.length;
    return results.matches.filter((r) => r.param.section === id).length;
  };

  return (
    <div className="mx-auto max-w-6xl px-4 pb-16 pt-8 sm:px-6">
      {/* Header */}
      <header className="sticky top-0 z-10 -mx-4 border-b bg-background/90 px-4 py-4 backdrop-blur sm:-mx-6 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <h1 className="text-xl font-bold tracking-tight sm:text-2xl">
              llama-server parameters
            </h1>
            <span className="text-sm text-muted-foreground">
              {params.length} parameters
            </span>
          </div>
          <p className="mt-1 hidden text-sm text-muted-foreground sm:block">
            Every <code className="rounded bg-muted px-1 py-0.5 font-mono text-[0.85em]">llama-server</code>{" "}
            CLI flag, parsed from the{" "}
            <a
              href={SECTION_LINK}
              target="_blank"
              rel="noreferrer"
              className="text-foreground/80 underline underline-offset-2 hover:text-foreground"
            >
              official README
            </a>
            .
          </p>

          {/* Search */}
          <div className="relative mt-3">
            <SearchIcon className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              ref={inputRef}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Escape") {
                  setQuery("");
                  e.currentTarget.blur();
                }
              }}
              placeholder="Search flags, env vars, descriptions…"
              aria-label="Search parameters"
              className="h-10 rounded-full pl-9 pr-16 text-sm sm:text-base"
            />
            <span className="absolute right-3 top-1/2 flex -translate-y-1/2 items-center gap-1">
              {query ? (
                <button
                  type="button"
                  onClick={() => {
                    setQuery("");
                    inputRef.current?.focus();
                  }}
                  className="rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground transition-colors hover:bg-muted/70 hover:text-foreground"
                  aria-label="Clear search"
                >
                  clear
                </button>
              ) : (
                <>
                  <kbd className="rounded border bg-muted px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground">
                    ctrl
                  </kbd>
                  <kbd className="rounded border bg-muted px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground">
                    K
                  </kbd>
                </>
              )}
            </span>
          </div>
        </div>
      </header>

      {/* Body */}
      <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:gap-8">
        {/* Section filter */}
        <nav aria-label="Sections" className="shrink-0 lg:w-52">
          <div className="flex gap-2 overflow-x-auto pb-1 lg:flex-col lg:gap-1 lg:overflow-visible">
            <SectionButton
              label="All sections"
              count={countFor("all")}
              active={section === "all"}
              onClick={() => setSection("all")}
            />
            {sections.map((s) => (
              <SectionButton
                key={s.id}
                label={s.title}
                count={countFor(s.id)}
                active={section === s.id}
                onClick={() => setSection(s.id)}
              />
            ))}
          </div>
        </nav>

        {/* Results */}
        <main className="min-w-0 flex-1">
          {results.matches.length === 0 ? (
            <div className="rounded-lg border border-dashed px-6 py-16 text-center">
              <p className="text-sm text-muted-foreground">
                No parameters match{" "}
                <span className="font-mono text-foreground">“{query.trim()}”</span>
                {section !== "all" && (
                  <>
                    {" "}
                    in <span className="text-foreground">{sections.find((s) => s.id === section)?.title}</span>
                  </>
                )}
                .
              </p>
              <Button
                variant="ghost"
                size="sm"
                className="mt-3"
                onClick={() => {
                  setQuery("");
                  setSection("all");
                }}
              >
                Clear search
              </Button>
            </div>
          ) : searching ? (
            <div>
              {results.partial && (
                <p className="mb-3 rounded-md bg-muted px-3 py-2 text-xs text-muted-foreground">
                  No exact match for “{query.trim()}” — showing best matches for{" "}
                  <span className="font-mono text-foreground">“{results.query}”</span>
                </p>
              )}
              <div className="space-y-2" role="list">
                {results.matches.map((m) => (
                  <ParamRow key={m.param.id} match={m} showSection />
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-8">
              {sections.map((s) => (
                <section key={s.id} aria-label={s.title}>
                  <div className="mb-3 flex items-baseline gap-2">
                    <h2 className="text-base font-semibold tracking-tight">{s.title}</h2>
                    <span className="text-xs text-muted-foreground">{s.count}</span>
                  </div>
                  <div className="space-y-2" role="list">
                    {results.matches
                      .filter((r) => r.param.section === s.id)
                      .map((m) => (
                        <ParamRow key={m.param.id} match={m} showSection={false} />
                      ))}
                  </div>
                </section>
              ))}
            </div>
          )}

          {/* Footer */}
          <footer className="mt-10 flex flex-wrap items-center justify-between gap-2 border-t pt-4 text-xs text-muted-foreground">
            <span>
              Source:{" "}
              <a
                href={SECTION_LINK}
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-2 hover:text-foreground"
              >
                tools/server/README.md
              </a>{" "}
              (llama.cpp, master)
            </span>
            <span>
              {searching
                ? `${results.matches.length} of ${params.length} shown`
                : `${params.length} parameters`}
            </span>
          </footer>
        </main>
      </div>
    </div>
  );
}

function SectionButton({
  label,
  count,
  active,
  onClick,
}: {
  label: string;
  count: number;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "flex items-center justify-between gap-2 whitespace-nowrap rounded-lg px-3 py-2 text-sm transition-colors",
        "lg:w-full",
        active
          ? "bg-accent text-foreground"
          : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
      )}
    >
      <span>{label}</span>
      <span
        className={cn(
          "font-mono text-xs tabular-nums",
          active ? "text-foreground/70" : "text-muted-foreground/70"
        )}
      >
        {count}
      </span>
    </button>
  );
}

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
