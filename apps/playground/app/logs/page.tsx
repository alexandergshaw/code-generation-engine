import { Card, PageShell } from "../components/page-shell";
import { LogStream } from "./log-stream";

export default function LogsPage() {
  return (
    <PageShell title="Logs" subtitle="Streaming generation and worker events">
      <Card title="Streaming logs">
        <LogStream />
      </Card>
      <Card title="Event channels">
        <ul className="list-disc space-y-1 pl-5">
          <li>Generation events</li>
          <li>Validation events</li>
          <li>Worker events</li>
          <li>Adapter events</li>
          <li>Errors and warnings</li>
        </ul>
      </Card>
    </PageShell>
  );
}
