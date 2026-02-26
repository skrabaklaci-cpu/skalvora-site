import { Button } from "@/components/ui/button";

type MobileStickyCtaProps = {
  bookCallLabel: string;
  requestAuditLabel: string;
};

export function MobileStickyCta({ bookCallLabel, requestAuditLabel }: MobileStickyCtaProps) {
  return (
    <div className="fixed bottom-4 left-1/2 z-40 w-[min(92%,420px)] -translate-x-1/2 rounded-full border border-border bg-bg/95 p-2 shadow-card backdrop-blur-md lg:hidden">
      <div className="grid grid-cols-2 gap-2">
        <Button href="/contact" className="text-xs">
          {bookCallLabel}
        </Button>
        <Button href="/contact" variant="secondary" className="text-xs">
          {requestAuditLabel}
        </Button>
      </div>
    </div>
  );
}
