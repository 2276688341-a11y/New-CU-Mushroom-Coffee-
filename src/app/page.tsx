import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Solution } from "@/components/sections/Solution";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { Waitlist } from "@/components/sections/Waitlist";

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <Solution />
      <ProductShowcase />
      <Waitlist />
    </>
  );
}
