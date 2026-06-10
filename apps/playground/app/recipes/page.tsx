import { Card, PageShell } from "../components/page-shell";
import { recipes } from "../lib/mock-data";

export default function RecipesPage() {
  return (
    <PageShell title="Recipes" subtitle="Composable recipe catalog">
      {recipes.map((recipe) => (
        <Card key={recipe.name} title={recipe.name}>
          <p>{recipe.description}</p>
          <p className="mt-2 text-xs text-slate-400">Capabilities: {recipe.capabilities.join(", ")}</p>
          <p className="text-xs text-slate-400">Dependencies: {recipe.dependencies.join(", ")}</p>
          <p className="text-xs text-slate-400">Supported stacks: {recipe.supportedStacks.join(", ")}</p>
          <pre className="mt-2 overflow-x-auto rounded bg-slate-950 p-2 text-xs">inputs: {JSON.stringify(recipe.exampleInputs)}</pre>
          <pre className="mt-2 overflow-x-auto rounded bg-slate-950 p-2 text-xs">outputs: {JSON.stringify(recipe.exampleOutputs)}</pre>
        </Card>
      ))}
    </PageShell>
  );
}
