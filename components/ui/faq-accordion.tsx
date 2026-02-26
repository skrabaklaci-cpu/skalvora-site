export function FaqAccordion({
  items
}: {
  items: ReadonlyArray<{ question: string; answer: string }>;
}) {
  return (
    <div className="space-y-3">
      {items.map((item) => (
        <details
          key={item.question}
          className="group rounded-xl2 border border-border bg-surface p-4 open:border-accent/40"
        >
          <summary className="cursor-pointer list-none text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">
            <span className="inline-flex items-center gap-2">
              <span className="text-accent transition group-open:rotate-45">+</span>
              {item.question}
            </span>
          </summary>
          <p className="mt-3 text-sm text-muted">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
