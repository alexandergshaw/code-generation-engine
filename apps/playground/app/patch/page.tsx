import { Card, PageShell } from "../components/page-shell";
import { PatchViewer } from "./patch-viewer";

export default function PatchPage() {
  return (
    <PageShell title="Patch" subtitle="Inspect deterministic patch output">
      <Card title="Patch viewer">
        <PatchViewer />
      </Card>
    </PageShell>
  );
}
