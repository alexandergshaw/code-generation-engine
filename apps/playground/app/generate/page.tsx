import { Card, PageShell } from "../components/page-shell";
import { GenerateForm } from "./generate-form";

export default function GeneratePage() {
  return (
    <PageShell title="Generate" subtitle="Compose deterministic generation requests">
      <Card title="Generation request builder">
        <GenerateForm />
      </Card>
    </PageShell>
  );
}
