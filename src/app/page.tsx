import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Products } from "@/components/sections/products";
import { Features } from "@/components/sections/features";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Products />
      <Features />
      <Contact />
    </>
  );
}
