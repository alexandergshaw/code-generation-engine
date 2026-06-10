"use client";

import { useMemo, useState } from "react";
import { patchText } from "../lib/mock-data";

export function PatchViewer() {
  const [mode, setMode] = useState<"side-by-side" | "unified">("unified");
  const [search, setSearch] = useState("");
  const [collapsed, setCollapsed] = useState(false);

  const visiblePatch = useMemo(() => {
    if (!search.trim()) {
      return patchText;
    }

    return patchText
      .split("\n")
      .filter((line) => line.toLowerCase().includes(search.toLowerCase()))
      .join("\n");
  }, [search]);

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap gap-2 text-xs">
        <button className="rounded border border-slate-700 px-2 py-1" onClick={() => setMode("side-by-side")}>side-by-side diff</button>
        <button className="rounded border border-slate-700 px-2 py-1" onClick={() => setMode("unified")}>unified diff</button>
        <button className="rounded border border-slate-700 px-2 py-1" onClick={() => navigator.clipboard.writeText(patchText)}>copy patch</button>
        <a className="rounded border border-slate-700 px-2 py-1" download="patch.diff" href={`data:text/plain;charset=utf-8,${encodeURIComponent(patchText)}`}>download patch</a>
        <button className="rounded border border-slate-700 px-2 py-1" onClick={() => setCollapsed((value) => !value)}>{collapsed ? "expand sections" : "collapse sections"}</button>
      </div>
      <div className="grid gap-3 md:grid-cols-[220px_1fr]">
        <aside className="rounded border border-slate-800 bg-slate-950 p-3 text-xs">
          <div className="mb-2 font-semibold">File tree</div>
          <ul className="space-y-1">
            <li>app/projects/page.tsx</li>
            <li>app/api/projects/route.ts</li>
            <li>app/projects/__tests__/page.test.tsx</li>
          </ul>
        </aside>
        <section className="rounded border border-slate-800 bg-slate-950 p-3">
          <label className="mb-3 block text-xs">
            Search
            <input value={search} onChange={(event) => setSearch(event.target.value)} className="mt-1 w-full rounded border border-slate-700 bg-slate-900 px-2 py-1" />
          </label>
          {!collapsed ? (
            <pre className="overflow-x-auto text-xs leading-5">
              {mode === "side-by-side" ? `LEFT | RIGHT\n${visiblePatch}` : visiblePatch}
            </pre>
          ) : (
            <p className="text-xs text-slate-400">Sections collapsed.</p>
          )}
        </section>
      </div>
    </div>
  );
}
