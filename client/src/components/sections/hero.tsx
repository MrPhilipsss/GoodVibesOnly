import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-[#F5EFE6] py-20"
    >
      {/* Background Logo */}
      <div 
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: 'url("/assets/logo_name1.png")',
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-[#4A4036]">
              Good Vibes Only
            </h1>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#7C6E65]">
              Zuza Kwiatek
            </h2>
          </motion.div>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-lg md:text-xl mt-8 mb-12 text-[#7C6E65] max-w-2xl mx-auto"
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
              className="bg-[#B8A088] hover:bg-[#9A846E] text-white px-8 py-6 text-lg"
              onClick={() => window.open("https://booksy.com/pl-pl/dl/show-business/232302", "_blank")}
            >
              Book Your Appointment
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}