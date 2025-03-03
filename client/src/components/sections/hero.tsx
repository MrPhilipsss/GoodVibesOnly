import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-[#F5EFE6] py-20"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.img
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            src="/assets/IMG_1151.jpeg"
            alt="Good Vibes Only Logo"
            className="w-32 h-32 mx-auto mb-8 rounded-full"
          />
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold mb-6 text-[#4A4036]"
          >
            Good Vibes Only
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-lg md:text-xl mb-2 text-[#7C6E65]"
          >
            by Zuza Kwiatek
          </motion.p>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-lg md:text-xl mb-8 text-[#7C6E65]"
          >
            Experience luxury beauty treatments tailored just for you. Let our expert team help you
            discover your natural radiance.
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <Button
              size="lg"
              className="bg-[#B8A088] hover:bg-[#9A846E] text-white"
              onClick={() => window.open("https://booksy.com", "_blank")}
            >
              Book Your Appointment
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}