import { PROBLEMS } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/motion/FadeIn";
import { AtmosphereImage } from "@/components/atmosphere/AtmosphereImage";

export function Problem() {
  return (
    <section
      id="problem"
      className="relative py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-surface overflow-hidden"
    >
      <AtmosphereImage variant="fog" opacity={0.5} />

      <div className="relative z-10 max-w-4xl mx-auto">
        <SectionHeading label="The modern mind wasn't built for this." />

        <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
          {PROBLEMS.map((p, i) => (
            <FadeIn key={p.title} delay={i * 0.15}>
              <h3 className="text-sm font-normal tracking-[0.2em] uppercase text-text-primary mb-5">
                {p.title}
              </h3>
              <p className="text-text-secondary font-light leading-relaxed">
                {p.description}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
