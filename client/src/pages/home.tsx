import Hero from "@/components/sections/hero";
import Services from "@/components/sections/services";
import Staff from "@/components/sections/staff";
import Gallery from "@/components/sections/gallery";
import Contact from "@/components/sections/contact";
import Navbar from "@/components/layout/navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Staff />
        <Gallery />
        <Contact />
      </main>
    </div>
  );
}
