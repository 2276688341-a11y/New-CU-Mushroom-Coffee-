import { PRODUCT } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ParallaxSlow } from "@/components/motion/ParallaxSlow";

export function ProductShowcase() {
  return (
    <section
      id="product"
      className="relative py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-surface overflow-hidden"
    >
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <SectionHeading label="The ritual, refined." />

        <div className="mt-20 md:mt-28 relative h-[340px] md:h-[460px] flex items-center justify-center">
          <ParallaxSlow speed={0.02}>
            <div className="relative">
              {/* Main sachet — lighter gray to stand out on dark bg */}
              <div className="w-20 h-64 md:w-24 md:h-80 bg-[#3a3a3a] mx-auto shadow-[0_4px_60px_rgba(0,0,0,0.3)] relative overflow-hidden">
                <div className="absolute inset-[1px] border border-white/8" />
                <div className="absolute bottom-8 left-0 right-0 text-center">
                  <span className="text-[9px] font-light tracking-[0.3em] uppercase text-white/50">
                    Daily
                  </span>
                  <br />
                  <span className="text-[9px] font-light tracking-[0.3em] uppercase text-white/50">
                    Clarity
                  </span>
                  <div className="mt-3 w-6 h-px bg-white/12 mx-auto" />
                  <span className="mt-2 block text-[7px] font-light tracking-[0.2em] uppercase text-white/25">
                    01
                  </span>
                </div>
              </div>

              {/* Left sachet */}
              <div className="absolute -left-5 md:-left-10 top-8 w-16 h-52 md:w-20 md:h-64 bg-[#2e2e2e] opacity-70 shadow-[0_2px_30px_rgba(0,0,0,0.2)]">
                <div className="absolute inset-[1px] border border-white/5" />
                <div className="absolute bottom-6 left-0 right-0 text-center">
                  <span className="text-[7px] font-light tracking-[0.3em] uppercase text-white/35">
                    Daily
                  </span>
                  <br />
                  <span className="text-[7px] font-light tracking-[0.3em] uppercase text-white/35">
                    Clarity
                  </span>
                  <div className="mt-2 w-4 h-px bg-white/8 mx-auto" />
                  <span className="mt-1 block text-[6px] font-light tracking-[0.2em] uppercase text-white/15">
                    02
                  </span>
                </div>
              </div>

              {/* Right sachet */}
              <div className="absolute -right-5 md:-right-10 top-8 w-16 h-52 md:w-20 md:h-64 bg-[#2e2e2e] opacity-70 shadow-[0_2px_30px_rgba(0,0,0,0.2)]">
                <div className="absolute inset-[1px] border border-white/5" />
                <div className="absolute bottom-6 left-0 right-0 text-center">
                  <span className="text-[7px] font-light tracking-[0.3em] uppercase text-white/35">
                    Daily
                  </span>
                  <br />
                  <span className="text-[7px] font-light tracking-[0.3em] uppercase text-white/35">
                    Clarity
                  </span>
                  <div className="mt-2 w-4 h-px bg-white/8 mx-auto" />
                  <span className="mt-1 block text-[6px] font-light tracking-[0.2em] uppercase text-white/15">
                    03
                  </span>
                </div>
              </div>
            </div>
          </ParallaxSlow>
        </div>

        <p className="mt-12 md:mt-16 text-text-secondary font-light max-w-md mx-auto leading-relaxed">
          {PRODUCT.description}
        </p>
      </div>
    </section>
  );
}
