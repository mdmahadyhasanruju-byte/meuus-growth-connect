import { describe, expect, test } from "bun:test";

import { isReflectionResolved, resolveReflection } from "../../src/journey/domain/reflection";

describe("reflection resolution", () => {
  test("required reflection resolves only through explicit terminal decisions", () => {
    expect(resolveReflection({ required: true, decision: "written" })).toBe("written");
    expect(resolveReflection({ required: true, decision: "considered_privately" })).toBe(
      "considered_privately",
    );
    expect(resolveReflection({ required: true, decision: "not_provided" })).toBe("not_provided");
  });

  test("optional reflection also allows skipped_optional", () => {
    expect(resolveReflection({ required: false, decision: "skipped_optional" })).toBe(
      "skipped_optional",
    );
  });

  test("written text is never required for completion", () => {
    expect(resolveReflection({ required: true, decision: "written", text: "" })).toBe("written");
  });

  test("truthiness and unresolved values are never authoritative completion rules", () => {
    expect(resolveReflection({ required: true, decision: "skipped_optional" })).toBe(undefined);
    expect(resolveReflection({ required: true, decision: undefined })).toBe(undefined);
    expect(isReflectionResolved({ required: true, decision: undefined, text: "private" })).toBe(
      false,
    );
  });
});
