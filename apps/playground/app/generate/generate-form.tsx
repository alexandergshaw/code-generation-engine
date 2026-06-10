"use client";

import { useMemo, useState } from "react";

const recipes = ["create-table", "create-api-route", "create-form", "create-list-page", "create-worker", "create-github-action", "create-crud-feature"];

export function GenerateForm() {
  const [projectId, setProjectId] = useState("proj_01");
  const [repositoryUrl, setRepositoryUrl] = useState("https://github.com/example/storefront");
  const [branch, setBranch] = useState("main");
  const [recipe, setRecipe] = useState("create-crud-feature");
  const [entityName, setEntityName] = useState("Project");
  const [options, setOptions] = useState("schema=billing");
  const [ui, setUi] = useState(true);
  const [tests, setTests] = useState(true);
  const [workers, setWorkers] = useState(false);
  const [githubActions, setGithubActions] = useState(true);

  const preview = useMemo(
    () => ({
      projectId,
      repositoryUrl,
      branch,
      recipe,
      input: { entityName, options },
      toggles: { ui, tests, workers, githubActions },
      stackDetection: {
        frameworkVersions: { next: "15.5.18", react: "19.0.0", typescript: "5.x" },
        packageManager: "npm",
      },
    }),
    [branch, entityName, githubActions, options, projectId, recipe, repositoryUrl, tests, ui, workers],
  );

  return (
    <div className="space-y-4">
      <section className="grid gap-2 md:grid-cols-2">
        <label className="space-y-1 text-sm">
          <span>Project selector</span>
          <input value={projectId} onChange={(event) => setProjectId(event.target.value)} className="w-full rounded border border-slate-700 bg-slate-950 px-3 py-2" />
        </label>
        <label className="space-y-1 text-sm">
          <span>Repository URL</span>
          <input value={repositoryUrl} onChange={(event) => setRepositoryUrl(event.target.value)} className="w-full rounded border border-slate-700 bg-slate-950 px-3 py-2" />
        </label>
        <label className="space-y-1 text-sm">
          <span>Branch</span>
          <input value={branch} onChange={(event) => setBranch(event.target.value)} className="w-full rounded border border-slate-700 bg-slate-950 px-3 py-2" />
        </label>
        <div className="rounded border border-slate-800 bg-slate-950 p-3 text-xs text-slate-300">
          <div className="font-semibold">Stack detection output</div>
          <div>nextjs-app-router-v15, react-v19, typescript-v5, tailwind-v4</div>
        </div>
      </section>

      <section className="grid gap-2 md:grid-cols-2">
        <label className="space-y-1 text-sm">
          <span>Recipe selector</span>
          <select value={recipe} onChange={(event) => setRecipe(event.target.value)} className="w-full rounded border border-slate-700 bg-slate-950 px-3 py-2">
            {recipes.map((entry) => (
              <option key={entry} value={entry}>
                {entry}
              </option>
            ))}
          </select>
        </label>
        <label className="space-y-1 text-sm">
          <span>Entity name</span>
          <input value={entityName} onChange={(event) => setEntityName(event.target.value)} className="w-full rounded border border-slate-700 bg-slate-950 px-3 py-2" />
        </label>
        <label className="space-y-1 text-sm md:col-span-2">
          <span>Options</span>
          <input value={options} onChange={(event) => setOptions(event.target.value)} className="w-full rounded border border-slate-700 bg-slate-950 px-3 py-2" />
        </label>
      </section>

      <section className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {[
          ["UI", ui, setUi],
          ["Tests", tests, setTests],
          ["Workers", workers, setWorkers],
          ["GitHub Actions", githubActions, setGithubActions],
        ].map(([label, value, setValue]) => (
          <label key={String(label)} className="flex items-center gap-2 rounded border border-slate-800 bg-slate-950 px-3 py-2 text-sm">
            <input
              type="checkbox"
              checked={Boolean(value)}
              onChange={(event) => (setValue as (next: boolean) => void)(event.target.checked)}
            />
            {String(label)}
          </label>
        ))}
      </section>

      <section>
        <h4 className="mb-2 text-sm font-semibold uppercase tracking-wide text-slate-300">Request Preview</h4>
        <pre className="overflow-x-auto rounded border border-slate-800 bg-slate-950 p-3 text-xs">{JSON.stringify(preview, null, 2)}</pre>
      </section>

      <button type="button" className="rounded bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-emerald-400">
        Generate
      </button>
    </div>
  );
}
