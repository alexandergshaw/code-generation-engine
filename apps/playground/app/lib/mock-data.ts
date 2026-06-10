export type JobStatus = "running" | "completed" | "failed";

export type GenerationJob = {
  id: string;
  status: JobStatus;
  recipe: string;
  project: string;
  duration: string;
  createdAt: string;
  adapters: string[];
  warnings: string[];
};

export const versions = {
  nextjs: "15.5.18",
  react: "19.0.0",
  typescript: "5.x",
  tailwind: "4.x",
  supabase: "2.x",
  postgres: "16.x",
  railway: "v1",
  githubActions: "v4",
  vitest: "v3",
};

export const supportedAdapters = [
  "nextjs-app-router-v15",
  "react-v19",
  "typescript-v5",
  "tailwind-v4",
  "supabase-js-v2",
  "vitest-v3",
  "github-actions-v4",
  "railway-v1",
];

export const projects = [
  { id: "proj_01", name: "storefront", repositoryUrl: "https://github.com/example/storefront", branch: "main" },
  { id: "proj_02", name: "internal-admin", repositoryUrl: "https://github.com/example/internal-admin", branch: "develop" },
];

export const jobs: GenerationJob[] = [
  {
    id: "job_001",
    status: "completed",
    recipe: "create-crud-feature",
    project: "storefront",
    duration: "35s",
    createdAt: "2026-06-10T12:02:00Z",
    adapters: ["nextjs-app-router-v15", "typescript-v5", "tailwind-v4"],
    warnings: ["No worker adapter requested"],
  },
  {
    id: "job_002",
    status: "running",
    recipe: "create-worker",
    project: "internal-admin",
    duration: "12s",
    createdAt: "2026-06-10T12:20:00Z",
    adapters: ["railway-v1", "typescript-v5", "github-actions-v4"],
    warnings: [],
  },
  {
    id: "job_003",
    status: "failed",
    recipe: "create-form",
    project: "storefront",
    duration: "9s",
    createdAt: "2026-06-10T11:58:00Z",
    adapters: ["nextjs-app-router-v15", "react-v19"],
    warnings: ["Validation failed: lint"],
  },
];

export const recipes = [
  {
    name: "create-table",
    description: "Create schema and migration with deterministic naming.",
    capabilities: ["schema", "migration"],
    dependencies: ["database"],
    supportedStacks: ["supabase", "postgresql", "typescript"],
    exampleInputs: { entity: "Invoice", schemaName: "billing" },
    exampleOutputs: ["supabase/migrations/202606101201_create_invoice.sql"],
  },
  {
    name: "create-crud-feature",
    description: "Generate route handlers, pages, tests, and worker hooks.",
    capabilities: ["api", "page", "test", "worker"],
    dependencies: ["framework", "language", "testing"],
    supportedStacks: ["nextjs", "typescript", "tailwind", "vitest"],
    exampleInputs: { entity: "Project", routeName: "projects" },
    exampleOutputs: ["app/projects/page.tsx", "app/api/projects/route.ts"],
  },
];

export const templatePacks = [
  {
    name: "nextjs-ts-core",
    versionRange: ">=15.0.0 <16.0.0",
    templates: ["page", "api", "component", "test", "github-action"],
    variables: ["entity", "entityPlural", "routeName", "serviceName"],
    dependencies: ["nextjs-app-router-v15", "typescript-v5"],
  },
];

export const compatibilityWarnings = [
  "No adapter found for package manager: pnpm",
  "Fixture coverage missing for supabase-js-v2 read-replica mode",
];

export const fixtureHealth = [
  { name: "next15-tailwind4", stack: "nextjs/typescript/tailwind", status: "healthy", coverage: "92%" },
  { name: "next15-supabase", stack: "nextjs/supabase/postgresql", status: "warning", coverage: "84%" },
];

export const logEvents = [
  "generation.request.received",
  "stack-resolver.detected.nextjs@15.5.18",
  "recipe-engine.selected.create-crud-feature",
  "adapter.nextjs.render-page.start",
  "adapter.typescript.emit-api.complete",
  "patch-builder.generated",
  "validation.typecheck.success",
  "validation.test.success",
  "job.completed",
];

export const patchText = `diff --git a/app/projects/page.tsx b/app/projects/page.tsx
new file mode 100644
index 0000000..2fa7ab1
--- /dev/null
+++ b/app/projects/page.tsx
@@ -0,0 +1,12 @@
+import { ProjectList } from "@/components/project-list";
+
+export default function ProjectsPage() {
+  return (
+    <main className="p-6">
+      <h1 className="text-2xl font-semibold">Projects</h1>
+      <ProjectList />
+    </main>
+  );
+}
`;
