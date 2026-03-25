import { feedbackStoreMode } from "lib/feedback-store";

function getEnvironment() {
  if (process.env.VERCEL) {
    return "vercel";
  }

  if (process.env.NETLIFY) {
    return "netlify";
  }

  if (process.env.NODE_ENV === "production") {
    return "custom";
  }

  return "local";
}

export async function GET() {
  const storageMode = feedbackStoreMode();

  return Response.json(
    {
      environment: getEnvironment(),
      adminConfigured: Boolean(process.env.ADMIN_TOKEN),
      feedbackConfigured: storageMode !== "unconfigured",
      storageMode,
      localMode: storageMode === "local",
    },
    {
      headers: {
        "Cache-Control": "no-store",
      },
    }
  );
}
