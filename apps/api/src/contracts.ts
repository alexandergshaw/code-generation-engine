export const generationEndpoints = [
  "POST /generate",
  "GET /jobs/:id",
  "GET /recipes",
  "GET /adapters",
  "GET /template-packs",
  "POST /validate",
  "POST /patch",
  "POST /projects/:id/analyze",
  "POST /projects/:id/compatibility-check",
] as const;

export const databaseTables = [
  "generation_jobs",
  "projects",
  "recipes",
  "adapters",
  "template_packs",
  "templates",
  "validation_runs",
  "compatibility_reports",
  "project_files",
  "fixture_projects",
  "logs",
] as const;

export const adapterTypes = [
  "language",
  "framework",
  "database",
  "testing",
  "deployment",
  "CI/CD",
  "styling",
  "package manager",
] as const;
