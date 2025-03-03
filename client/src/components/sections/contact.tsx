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