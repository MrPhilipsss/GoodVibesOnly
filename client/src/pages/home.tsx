import { motion } from "framer-motion";
import Hero from "@/components/sections/hero";
import Services from "@/components/sections/services";
import Staff from "@/components/sections/staff";
import Gallery from "@/components/sections/gallery";
import Contact from "@/components/sections/contact";
import Navbar from "@/components/layout/navbar";

const fadeInUp = {
  initial: { y: 20, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <motion.div {...fadeInUp}>
          <Hero />
        </motion.div>
        <motion.div {...fadeInUp}>
          <Services />
        </motion.div>
        <motion.div {...fadeInUp}>
          <Staff />
        </motion.div>
        <motion.div {...fadeInUp}>
          <Gallery />
        </motion.div>
        <motion.div {...fadeInUp}>
          <Contact />
        </motion.div>
      </main>
    </div>
  );
}