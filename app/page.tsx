import Hero from "@/components/sections/hero";
import Products from "@/components/sections/products";
import Why from "@/components/sections/why";
import Pricing from "@/components/sections/pricing";
import Testimonials from "@/components/sections/testimonials";
import CTA from "@/components/sections/cta";

export default function Home() {
  return (
    <main className="bg-white dark:bg-black text-black dark:text-white">
      <Hero />
      <Products />
      <Why />
      <Pricing />
      <Testimonials />
      <CTA />
    </main>
  );
}
