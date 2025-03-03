
import { motion } from "framer-motion";
import { Instagram, Facebook, Twitter } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#4A4036] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-4 text-[#B8A088]">Good Vibes Only</h3>
            <p className="text-gray-300">
              Providing premium beauty services in a relaxing environment.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-4 text-[#B8A088]">Opening Hours</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Monday - Friday: 9:00 AM - 7:00 PM</li>
              <li>Saturday: 10:00 AM - 6:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-4 text-[#B8A088]">Connect With Us</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-white hover:text-[#B8A088] transition-colors">
                <Instagram />
              </a>
              <a href="#" className="text-white hover:text-[#B8A088] transition-colors">
                <Facebook />
              </a>
              <a href="#" className="text-white hover:text-[#B8A088] transition-colors">
                <Twitter />
              </a>
            </div>
            <p className="text-gray-300">
              Email: info@goodvibesonly.com<br />
              Phone: (123) 456-7890
            </p>
          </motion.div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Good Vibes Only. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default { Footer };
