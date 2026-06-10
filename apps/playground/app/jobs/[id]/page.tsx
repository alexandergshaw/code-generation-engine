import { notFound } from "next/navigation";
import { Card, PageShell } from "../../components/page-shell";
import { jobs, patchText } from "../../lib/mock-data";

export default async function JobDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const job = jobs.find((entry) => entry.id === resolvedParams.id);
  if (!job) {
    notFound();
  }

  return (
    <PageShell title={`Job ${job.id}`} subtitle="Detailed generation execution output">
      <div className="grid gap-4 md:grid-cols-2">
        <Card title="Generation request">
          <pre className="overflow-x-auto rounded bg-slate-950 p-3 text-xs">{JSON.stringify({ recipe: job.recipe, project: job.project }, null, 2)}</pre>
        </Card>
        <Card title="Recipe used">{job.recipe}</Card>
        <Card title="Adapters used">
          <ul className="list-disc space-y-1 pl-5">
            {job.adapters.map((adapter) => (
              <li key={adapter}>{adapter}</li>
            ))}
          </ul>
        </Card>
        <Card title="Files changed">
          <ul className="list-disc space-y-1 pl-5">
            <li>app/projects/page.tsx</li>
            <li>app/api/projects/route.ts</li>
            <li>app/projects/__tests__/page.test.tsx</li>
          </ul>
        </Card>
        <Card title="Warnings">
          {job.warnings.length ? <ul className="list-disc space-y-1 pl-5">{job.warnings.map((warning) => <li key={warning}>{warning}</li>)}</ul> : <span>None</span>}
        </Card>
        <Card title="Patch">
          <pre className="overflow-x-auto rounded bg-slate-950 p-3 text-xs">{patchText}</pre>
        </Card>
        <Card title="Validation results">
          <ul className="list-disc space-y-1 pl-5">
            <li>install dependencies: success</li>
            <li>typecheck: success</li>
            <li>lint: success</li>
            <li>test: success</li>
            <li>build: success</li>
          </ul>
        </Card>
        <Card title="Compatibility report">
          matched adapters: {job.adapters.join(", ")}
        </Card>
      </div>
      <Card title="Logs">
        <pre className="overflow-x-auto rounded bg-slate-950 p-3 text-xs">[job:{job.id}] deterministic generation pipeline complete</pre>
      </Card>
    </PageShell>
  );
}
