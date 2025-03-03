import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { useEffect, useRef } from "react";

export default function Contact() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Ensure the map is properly loaded and displayed
    if (mapRef.current) {
      const iframe = document.createElement('iframe');
      iframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2504.996447200043!2d17.022559476441934!3d51.10882883343854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fc27a046a9553%3A0x8f4f86240d75faac!2sTadeusza%20Ko%C5%9Bciuszki%2071%2F1%2C%2050-008%20Wroc%C5%82aw%2C%20Poland!5e0!3m2!1sen!2sus!4v1697654321012!5m2!1sen!2sus";
      iframe.width = "100%";
      iframe.height = "100%";
      iframe.style.border = "none";
      iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
      iframe.allowFullscreen = true;
      iframe.title = "Salon Location";
      iframe.className = "rounded-lg";

      // Clear any previous content and append the iframe
      mapRef.current.innerHTML = '';
      mapRef.current.appendChild(iframe);
    }
  }, []);

  return (
    <section
      id="contact"
      className="py-16 md:py-24 bg-[#F5EFE6]"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#4A4036]">
          Contact Us
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          <Card className="border-[#D4C4B5]">
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-[#B8A088]" />
                  <p>Tadeusza Kościuszki 71/1, 50-008 Wrocław</p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-[#B8A088]" />
                  <p>+1 234 567 890</p>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-[#B8A088]" />
                  <p>contact@beautyhaven.com</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-[#D4C4B5]">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-[#B8A088]" />
                <div>
                  <h3 className="font-semibold mb-2">Opening Hours</h3>
                  <p>Monday - Friday: 9:00 AM - 8:00 PM</p>
                  <p>Saturday: 10:00 AM - 6:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Google Maps Embed */}
        <div 
          ref={mapRef}
          className="rounded-lg overflow-hidden shadow-md max-w-4xl mx-auto h-[400px]"
        ></div>
      </div>
    </section>
  );
}
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useRef } from "react";

export function Contact() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize Google Maps
    if (mapRef.current) {
      const iframe = document.createElement('iframe');
      iframe.style.border = '0';
      iframe.style.width = '100%';
      iframe.style.height = '100%';
      iframe.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215610044693!2d-73.98776732397636!3d40.75889687138257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1649367443261!5m2!1sen!2sus';
      iframe.allowFullscreen = true;
      iframe.loading = 'lazy';
      iframe.referrerPolicy = 'no-referrer-when-downgrade';
      
      mapRef.current.appendChild(iframe);
    }
  }, []);

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#B8A088] mb-4">Contact Us</h2>
          <p className="text-lg text-[#7C6E65] max-w-2xl mx-auto">
            Have questions or want to book an appointment? Get in touch with us today.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-[#4A4036] mb-4">Send Us a Message</h3>
            <form className="space-y-4">
              <div>
                <Input placeholder="Your Name" className="border-[#D4C4B5]" />
              </div>
              <div>
                <Input type="email" placeholder="Your Email" className="border-[#D4C4B5]" />
              </div>
              <div>
                <Input placeholder="Subject" className="border-[#D4C4B5]" />
              </div>
              <div>
                <Textarea placeholder="Your Message" className="min-h-[120px] border-[#D4C4B5]" />
              </div>
              <Button className="w-full bg-[#B8A088] hover:bg-[#9A846E] text-white">
                Send Message
              </Button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-[#4A4036] mb-4">Contact Information</h3>
            <div className="space-y-4 text-[#7C6E65]">
              <p>
                <strong>Address:</strong><br />
                123 Beauty Street<br />
                New York, NY 10001
              </p>
              <p>
                <strong>Phone:</strong><br />
                (123) 456-7890
              </p>
              <p>
                <strong>Email:</strong><br />
                info@goodvibesonly.com
              </p>
              <p>
                <strong>Hours:</strong><br />
                Monday - Friday: 9:00 AM - 7:00 PM<br />
                Saturday: 10:00 AM - 6:00 PM<br />
                Sunday: Closed
              </p>
            </div>
          </motion.div>
        </div>

        {/* Google Maps Embed */}
        <div 
          ref={mapRef}
          className="rounded-lg overflow-hidden shadow-md max-w-4xl mx-auto h-[400px]"
        ></div>
      </div>
    </section>
  );
}

export default { Contact };
