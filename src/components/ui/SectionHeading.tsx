export function SectionHeading({ label }: { label: string }) {
  return (
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-[0.08em] text-text-primary">
      {label}
    </h2>
  );
}
