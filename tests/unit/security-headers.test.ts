import { describe, expect, test } from "bun:test";

import { withSecurityHeaders } from "../../src/lib/security-headers";

describe("security headers", () => {
  test("applies the conservative headers with exact values", () => {
    const response = withSecurityHeaders(new Response());

    expect(response.headers.get("Strict-Transport-Security")).toBe("max-age=86400");
    expect(response.headers.get("X-Content-Type-Options")).toBe("nosniff");
    expect(response.headers.get("Referrer-Policy")).toBe("strict-origin-when-cross-origin");
    expect(response.headers.get("Permissions-Policy")).toBe(
      "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
    );
  });

  test("copies the response while preserving its existing data", async () => {
    const original = new Response("preserved body", {
      status: 418,
      statusText: "A careful teapot",
      headers: {
        "content-type": "text/plain; charset=utf-8",
        "x-existing-header": "preserved",
      },
    });

    const response = withSecurityHeaders(original);

    expect(response).not.toBe(original);
    expect(response.status).toBe(418);
    expect(response.statusText).toBe("A careful teapot");
    expect(response.headers.get("content-type")).toBe("text/plain; charset=utf-8");
    expect(response.headers.get("x-existing-header")).toBe("preserved");
    expect(await response.text()).toBe("preserved body");
    expect(original.headers.has("Strict-Transport-Security")).toBe(false);
  });
});
