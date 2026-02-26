type TimelineStep = {
  step: string;
  title: string;
  description: string;
};

export function StepTimeline({ steps }: { steps: ReadonlyArray<TimelineStep> }) {
  return (
    <ol className="relative ml-2 space-y-6 border-l border-border pl-6">
      {steps.map((item) => (
        <li key={item.step} className="relative">
          <span className="absolute -left-[2.1rem] top-1 inline-flex h-6 w-6 items-center justify-center rounded-full border border-accent bg-bg text-[10px] font-bold text-accent">
            {item.step}
          </span>
          <h3 className="text-lg font-semibold">{item.title}</h3>
          <p className="mt-2 text-sm text-muted">{item.description}</p>
        </li>
      ))}
    </ol>
  );
}
