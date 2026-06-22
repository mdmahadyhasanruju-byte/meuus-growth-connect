import type { ReflectionResolution } from "./types";

type ReflectionInput = {
  required: boolean;
  decision?: ReflectionResolution;
  text?: string;
};

const requiredResolutions = new Set<ReflectionResolution>([
  "written",
  "considered_privately",
  "not_provided",
]);

const optionalResolutions = new Set<ReflectionResolution>([
  "written",
  "considered_privately",
  "not_provided",
  "skipped_optional",
]);

export function resolveReflection(input: ReflectionInput): ReflectionResolution | undefined {
  if (input.decision === undefined) return undefined;

  const allowed = input.required ? requiredResolutions : optionalResolutions;
  if (!allowed.has(input.decision)) return undefined;

  return input.decision;
}

export function isReflectionResolved(input: ReflectionInput): boolean {
  return resolveReflection(input) !== undefined;
}
