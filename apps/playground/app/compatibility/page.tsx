import { Card, PageShell } from "../components/page-shell";
import { compatibilityWarnings } from "../lib/mock-data";

export default function CompatibilityPage() {
  return (
    <PageShell title="Compatibility" subtitle="Stack resolver and compatibility reports">
      <Card title="Detected frameworks">
        <ul className="list-disc space-y-1 pl-5">
          <li>nextjs-app-router v15.5.18</li>
          <li>react v19</li>
          <li>typescript v5</li>
          <li>tailwind v4</li>
        </ul>
      </Card>
      <Card title="Warnings">
        <ul className="list-disc space-y-1 pl-5">
          {compatibilityWarnings.map((warning) => (
            <li key={warning}>{warning}</li>
          ))}
        </ul>
      </Card>
      <Card title="Missing adapters">package-manager adapter for pnpm is not registered.</Card>
      <Card title="Upgrade recommendations">Upgrade to adapter package-manager-npm-v10 and add supabase fixture coverage.</Card>
    </PageShell>
  );
}
