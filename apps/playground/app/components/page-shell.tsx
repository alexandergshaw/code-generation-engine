import Link from "next/link";
import { ReactNode } from "react";

const links = [
  "/",
  "/generate",
  "/jobs",
  "/patch",
  "/recipes",
  "/adapters",
  "/template-packs",
  "/compatibility",
  "/fixtures",
  "/logs",
];

export function PageShell({ title, subtitle, children }: { title: string; subtitle?: string; children: ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="border-b border-slate-800 bg-slate-900/80">
        <div className="mx-auto max-w-7xl px-4 py-4">
          <h1 className="text-xl font-semibold">Deterministic Code Generation Playground</h1>
          <p className="mt-1 text-sm text-slate-400">Fast visibility-first playground for generation plumbing.</p>
        </div>
        <nav className="mx-auto flex max-w-7xl flex-wrap gap-2 px-4 pb-4 text-sm">
          {links.map((href) => (
            <Link key={href} href={href} className="rounded border border-slate-700 px-2 py-1 hover:bg-slate-800">
              {href === "/" ? "home" : href.slice(1)}
            </Link>
          ))}
        </nav>
      </header>
      <main className="mx-auto max-w-7xl space-y-6 px-4 py-6">
        <section>
          <h2 className="text-2xl font-semibold">{title}</h2>
          {subtitle ? <p className="mt-1 text-slate-400">{subtitle}</p> : null}
        </section>
        {children}
      </main>
    </div>
  );
}

export function Card({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="rounded-lg border border-slate-800 bg-slate-900 p-4">
      <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-300">{title}</h3>
      <div className="mt-3 text-sm text-slate-200">{children}</div>
    </section>
  );
}
