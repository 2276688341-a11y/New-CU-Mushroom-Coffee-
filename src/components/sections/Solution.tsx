import { INGREDIENTS } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Divider } from "@/components/ui/Divider";
import { FadeIn } from "@/components/motion/FadeIn";
import { AtmosphereImage } from "@/components/atmosphere/AtmosphereImage";

export function Solution() {
  return (
    <section className="relative py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-background overflow-hidden">
      <AtmosphereImage variant="light" opacity={0.5} />

      <div className="relative z-10 max-w-4xl mx-auto">
        <SectionHeading label="Clarity, restored." />

        <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
          {INGREDIENTS.map((ing, i) => (
            <FadeIn key={ing.name} delay={i * 0.15}>
              <p className="text-sm font-normal tracking-[0.2em] uppercase text-text-primary mb-5">
                {ing.name}
              </p>
              <Divider />
              <p className="mt-5 text-text-primary font-light leading-relaxed">
                {ing.benefit}
              </p>
              <p className="mt-3 text-text-primary/80 leading-relaxed">
                {ing.detail}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
