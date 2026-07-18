Bun.serve({
  hostname: "127.0.0.1",
  port: 8787,
  async fetch(request) {
    const corsHeaders = {
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Origin": "http://127.0.0.1:4173",
      Vary: "Origin",
    };

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: corsHeaders });
    }

    if (request.method !== "POST") {
      return new Response("Method not allowed", { status: 405, headers: corsHeaders });
    }

    const payload = (await request.json()) as Record<string, unknown>;

    if (
      payload.action !== "sendMessage" ||
      typeof payload.chatInput !== "string" ||
      typeof payload.sessionId !== "string"
    ) {
      return Response.json(
        { error: "Invalid test request" },
        { status: 400, headers: corsHeaders },
      );
    }

    const sessionMarker = `SESSION:${payload.sessionId}`;
    const output =
      payload.chatInput === "HTML_INERT_TEST"
        ? `${sessionMarker} <script>window.__soulAiUnsafe = true</script><strong>HTML should remain inert text.</strong>`
        : `${sessionMarker} Mock response for: ${payload.chatInput}`;

    return Response.json(
      {
        output,
      },
      { headers: corsHeaders },
    );
  },
});
