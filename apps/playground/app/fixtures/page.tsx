import { Card, PageShell } from "../components/page-shell";
import { fixtureHealth } from "../lib/mock-data";

export default function FixturesPage() {
  return (
    <PageShell title="Fixtures" subtitle="Fixture project health and adapter coverage">
      <Card title="Fixture projects">
        <table className="w-full text-left text-sm">
          <thead className="text-slate-400">
            <tr>
              <th className="pb-2">name</th>
              <th className="pb-2">supported stacks</th>
              <th className="pb-2">fixture health</th>
              <th className="pb-2">adapter coverage</th>
            </tr>
          </thead>
          <tbody>
            {fixtureHealth.map((fixture) => (
              <tr key={fixture.name} className="border-t border-slate-800">
                <td className="py-2">{fixture.name}</td>
                <td className="py-2">{fixture.stack}</td>
                <td className="py-2">{fixture.status}</td>
                <td className="py-2">{fixture.coverage}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
      <Card title="Validation results">Most fixtures pass typecheck/lint/build; one fixture has warnings.</Card>
    </PageShell>
  );
}
