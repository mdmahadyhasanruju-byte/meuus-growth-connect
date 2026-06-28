import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Compass } from "lucide-react";
import { EXPLORER_NAVIGATION_GROUPS } from "@/data/navigation";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

interface ExplorerPanelProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ExplorerPanel({ open, onOpenChange }: ExplorerPanelProps) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="right"
        className="flex h-full w-[min(92vw,28rem)] flex-col gap-0 border-white/10 bg-background/95 p-0 backdrop-blur-xl sm:max-w-md"
      >
        <SheetHeader className="border-b border-white/5 px-6 pt-8 pb-6 text-left">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-[var(--gold)]">
            <Compass className="h-4 w-4" aria-hidden="true" />
            meYoo · navigation helper
          </div>
          <SheetTitle className="font-serif text-3xl font-medium">Explore meUus</SheetTitle>
          <SheetDescription className="max-w-sm leading-relaxed text-foreground/60">
            A guide to public meUus pages. It does not provide AI analysis, diagnosis, advice, or
            automated decisions.
          </SheetDescription>
        </SheetHeader>

        <ScrollArea className="min-h-0 flex-1">
          <nav aria-label="Explore meUus" className="space-y-8 px-4 py-6 sm:px-6">
            {EXPLORER_NAVIGATION_GROUPS.map((group) => (
              <section key={group.id} aria-labelledby={`explorer-${group.id}`}>
                <h2
                  id={`explorer-${group.id}`}
                  className="px-3 text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-foreground/40"
                >
                  {group.title}
                </h2>
                <ul className="mt-2 space-y-1">
                  {group.links.map((item) => (
                    <li key={item.to}>
                      <SheetClose asChild>
                        <Link
                          to={item.to}
                          search={"search" in item ? item.search : undefined}
                          activeOptions={{ exact: item.to === "/" }}
                          className="group flex min-h-12 items-center justify-between gap-4 rounded-xl px-3 py-2.5 text-foreground/75 transition hover:bg-white/5 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                          activeProps={{ className: "bg-white/5 !text-foreground" }}
                        >
                          <span className="min-w-0">
                            <span className="block text-sm font-medium">{item.label}</span>
                            {"status" in item && (
                              <span className="mt-0.5 block text-xs leading-relaxed text-foreground/45">
                                {item.status}
                              </span>
                            )}
                          </span>
                          <ArrowUpRight
                            className="h-4 w-4 shrink-0 text-foreground/30 transition group-hover:text-[var(--gold)]"
                            aria-hidden="true"
                          />
                        </Link>
                      </SheetClose>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </nav>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
