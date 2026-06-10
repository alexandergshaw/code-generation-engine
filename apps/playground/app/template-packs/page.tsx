import { Card, PageShell } from "../components/page-shell";
import { templatePacks } from "../lib/mock-data";

export default function TemplatePacksPage() {
  return (
    <PageShell title="Template packs" subtitle="Version-aware template bundles">
      {templatePacks.map((pack) => (
        <Card key={pack.name} title={pack.name}>
          <p>Version range: {pack.versionRange}</p>
          <p className="mt-1 text-xs text-slate-400">Templates: {pack.templates.join(", ")}</p>
          <p className="text-xs text-slate-400">Variables: {pack.variables.join(", ")}</p>
          <p className="text-xs text-slate-400">Dependencies: {pack.dependencies.join(", ")}</p>
        </Card>
      ))}
    </PageShell>
  );
}
