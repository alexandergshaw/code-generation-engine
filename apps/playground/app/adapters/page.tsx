import { Card, PageShell } from "../components/page-shell";
import { supportedAdapters, versions } from "../lib/mock-data";

export default function AdaptersPage() {
  return (
    <PageShell title="Adapters" subtitle="Framework behavior isolation layer">
      <Card title="Adapter registry">
        <table className="w-full text-left text-sm">
          <thead className="text-slate-400">
            <tr>
              <th className="pb-2">name</th>
              <th className="pb-2">type</th>
              <th className="pb-2">supported versions</th>
              <th className="pb-2">capabilities</th>
              <th className="pb-2">health</th>
              <th className="pb-2">fixture tests</th>
            </tr>
          </thead>
          <tbody>
            {supportedAdapters.map((adapter) => (
              <tr key={adapter} className="border-t border-slate-800">
                <td className="py-2">{adapter}</td>
                <td className="py-2">framework/language</td>
                <td className="py-2">{versions.nextjs}</td>
                <td className="py-2">render, parse, mutate</td>
                <td className="py-2">healthy</td>
                <td className="py-2">passing</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </PageShell>
  );
}
