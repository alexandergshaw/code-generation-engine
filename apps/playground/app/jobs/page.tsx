import Link from "next/link";
import { Card, PageShell } from "../components/page-shell";
import { jobs } from "../lib/mock-data";

export default async function JobsPage({ searchParams }: { searchParams: Promise<{ status?: string }> }) {
  const resolvedSearchParams = await searchParams;
  const status = resolvedSearchParams.status;
  const filtered = status && ["running", "completed", "failed"].includes(status) ? jobs.filter((job) => job.status === status) : jobs;

  return (
    <PageShell title="Jobs" subtitle="Generation job history">
      <Card title="Filters">
        <div className="flex gap-2 text-xs">
          {["all", "running", "completed", "failed"].map((entry) => (
            <Link key={entry} href={entry === "all" ? "/jobs" : `/jobs?status=${entry}`} className="rounded border border-slate-700 px-2 py-1 hover:bg-slate-800">
              {entry}
            </Link>
          ))}
        </div>
      </Card>
      <Card title="Generation jobs">
        <table className="w-full text-left text-sm">
          <thead className="text-slate-400">
            <tr>
              <th className="pb-2">status</th>
              <th className="pb-2">recipe</th>
              <th className="pb-2">project</th>
              <th className="pb-2">duration</th>
              <th className="pb-2">created at</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((job) => (
              <tr key={job.id} className="border-t border-slate-800">
                <td className="py-2">{job.status}</td>
                <td className="py-2">{job.recipe}</td>
                <td className="py-2">{job.project}</td>
                <td className="py-2">{job.duration}</td>
                <td className="py-2">
                  <Link className="text-emerald-400 hover:underline" href={`/jobs/${job.id}`}>
                    {job.createdAt}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </PageShell>
  );
}
