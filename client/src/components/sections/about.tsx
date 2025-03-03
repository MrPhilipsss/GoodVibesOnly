
import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <img 
              src="/assets/IMG_1151.jpeg" 
              alt="About Good Vibes Only" 
              className="rounded-lg shadow-md w-full"
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#B8A088] mb-6">About Our Salon</h2>
            <p className="text-lg text-[#7C6E65] mb-4">
              Good Vibes Only was founded with a mission to provide exceptional beauty services in a relaxing and welcoming environment.
            </p>
            <p className="text-lg text-[#7C6E65] mb-4">
              Our team of highly skilled professionals is dedicated to enhancing your natural beauty and ensuring you leave our salon feeling refreshed and confident.
            </p>
            <p className="text-lg text-[#7C6E65]">
              We use only premium products and stay updated with the latest trends and techniques to deliver the best results for our clients.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default { About };
