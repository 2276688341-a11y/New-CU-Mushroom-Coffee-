export function LightRays({ opacity = 0.08 }: { opacity?: number }) {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
      style={{ opacity }}
    >
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 100% 50% at 30% 50%, rgba(255,255,255,0.15) 0%, transparent 50%),
            radial-gradient(ellipse 80% 40% at 70% 30%, rgba(255,255,255,0.10) 0%, transparent 45%),
            radial-gradient(ellipse 60% 30% at 50% 80%, rgba(255,255,255,0.08) 0%, transparent 40%)
          `,
        }}
      />
    </div>
  );
}
