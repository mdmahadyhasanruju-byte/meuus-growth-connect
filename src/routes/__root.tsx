import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { BookPreviewPopup } from "@/components/BookPreviewPopup";
import { FloatingBookCta } from "@/components/FloatingBookCta";
import { Toaster } from "sonner";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-7xl font-medium text-gradient-violet">404</h1>
        <h2 className="mt-4 font-serif text-2xl text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-foreground/60">
          This path is not part of the meUus map. Yet.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground shadow-glow-violet transition hover:scale-[1.02]"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-2xl text-foreground">Something went off-course</h1>
        <p className="mt-2 text-sm text-foreground/60">Try again, or return to the home map.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground"
          >
            Try again
          </button>
          <a
            href="/"
            className="rounded-full border-hairline bg-glass px-5 py-2 text-sm text-foreground"
          >
            Home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "meUus — Connecting Everything" },
      {
        name: "description",
        content:
          "meUus is a Phase Zero public foundation for understanding, verification, learning, reflection, and future human-development architecture.",
      },
      { name: "author", content: "Md. Mahady Hasan" },
      { property: "og:title", content: "meUus — Connecting Everything" },
      {
        property: "og:description",
        content:
          "meUus is a Phase Zero public foundation for understanding, verification, learning, reflection, and future human-development architecture.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "meUus — Connecting Everything" },
      {
        name: "twitter:description",
        content:
          "meUus is a Phase Zero public foundation for understanding, verification, learning, reflection, and future human-development architecture.",
      },
      {
        property: "og:image",
        content:
          "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/eb2af373-d4eb-41e1-a862-29904eb4cd30/id-preview-6fe9670d--890696a6-dac5-4b40-bd12-87e26597ace5.lovable.app-1779222160009.png",
      },
      {
        name: "twitter:image",
        content:
          "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/eb2af373-d4eb-41e1-a862-29904eb4cd30/id-preview-6fe9670d--890696a6-dac5-4b40-bd12-87e26597ace5.lovable.app-1779222160009.png",
      },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
      </head>
      <body className="bg-background text-foreground antialiased">
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="relative flex min-h-screen flex-col">
        <a
          href="#main-content"
          className="sr-only z-[60] rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:ring-offset-2 focus:ring-offset-background"
        >
          Skip to main content
        </a>
        <Navbar />
        <main className="flex-1 focus:outline-none" id="main-content" tabIndex={-1}>
          <Outlet />
        </main>
        <Footer />
        <BookPreviewPopup />
        <FloatingBookCta />
        <Toaster theme="dark" position="top-center" richColors />
      </div>
    </QueryClientProvider>
  );
}
