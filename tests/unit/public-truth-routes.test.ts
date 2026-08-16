import { expect, test } from "bun:test";
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const ROUTES = ["start", "evidence", "safety", "accessibility", "about"] as const;

for (const route of ROUTES) {
  test(`${route} is a static public-truth route with bounded metadata`, async () => {
    const sourcePath = fileURLToPath(new URL(`../../src/routes/${route}.tsx`, import.meta.url));
    const source = await readFile(sourcePath, "utf8");

    expect(source).toContain(`createFileRoute("/${route}")`);
    expect(source).toContain('name: "description"');
    expect(source).toContain('rel: "canonical"');
    expect(source).not.toMatch(/\b(fetch\s*\(|axios\.|supabase\.|openai\.|checkout\s*\()/i);
  });
}
