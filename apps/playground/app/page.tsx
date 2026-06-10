import { Card, PageShell } from "./components/page-shell";
import { jobs, projects, supportedAdapters, versions } from "./lib/mock-data";

export default function Home() {
  return (
    <PageShell title="Home" subtitle="System visibility and recent activity">
      <div className="grid gap-4 md:grid-cols-2">
        <Card title="Recent generations">
          <ul className="space-y-2">
            {jobs.map((job) => (
              <li key={job.id} className="flex items-center justify-between rounded border border-slate-800 px-3 py-2">
                <span>{job.recipe}</span>
                <span className="text-xs text-slate-400">{job.status}</span>
              </li>
            ))}
          </ul>
        </Card>
        <Card title="Recent projects">
          <ul className="space-y-2">
            {projects.map((project) => (
              <li key={project.id} className="rounded border border-slate-800 px-3 py-2">
                <div className="font-medium">{project.name}</div>
                <div className="text-xs text-slate-400">{project.repositoryUrl}</div>
              </li>
            ))}
          </ul>
        </Card>
        <Card title="System health">
          <ul className="space-y-1 text-sm">
            <li>API: healthy</li>
            <li>Workers: healthy</li>
            <li>Validation queue: nominal</li>
          </ul>
        </Card>
        <Card title="Supported adapters">
          <ul className="grid grid-cols-2 gap-2 text-xs">
            {supportedAdapters.map((adapter) => (
              <li key={adapter} className="rounded border border-slate-800 px-2 py-1">
                {adapter}
              </li>
            ))}
          </ul>
        </Card>
      </div>
      <Card title="Current versions">
        <pre className="overflow-x-auto rounded bg-slate-950 p-3 text-xs">{JSON.stringify(versions, null, 2)}</pre>
      </Card>
    </PageShell>
  );
}
