import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Facial Treatments",
    description: "Customized facials for all skin types",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9",
  },
  {
    title: "Massage Therapy",
    description: "Relaxing and therapeutic massages",
    image: "https://images.unsplash.com/photo-1487412912498-0447578fcca8",
  },
  {
    title: "Nail Care",
    description: "Professional manicure and pedicure",
    image: "https://images.unsplash.com/photo-1632345031435-8727f6897d53",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#4A4036]">
          Our Services
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="overflow-hidden border-[#D4C4B5]">
              <div className="aspect-video relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-[#4A4036]">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#7C6E65]">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Services() {
  const services = [
    {
      title: "Facial Treatments",
      description: "Rejuvenate your skin with our customized facial treatments designed to address your specific skin concerns.",
      icon: "✨"
    },
    {
      title: "Massage Therapy",
      description: "Relax and unwind with our therapeutic massages that relieve tension and promote overall wellness.",
      icon: "👐"
    },
    {
      title: "Hair Styling",
      description: "Transform your look with our professional hair styling services, from cuts to coloring and treatments.",
      icon: "💇‍♀️"
    },
    {
      title: "Nail Care",
      description: "Pamper your hands and feet with our luxurious manicure and pedicure services.",
      icon: "💅"
    },
    {
      title: "Waxing",
      description: "Achieve smooth, hair-free skin with our gentle and effective waxing services for all body areas.",
      icon: "🌟"
    },
    {
      title: "Makeup Application",
      description: "Look your best for any occasion with our professional makeup application services.",
      icon: "🎨"
    }
  ];

  return (
    <section id="services" className="py-20 bg-[#F5EFE6]">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#B8A088] mb-4">Our Services</h2>
          <p className="text-lg text-[#7C6E65] max-w-2xl mx-auto">
            Discover our wide range of beauty services designed to help you look and feel your best.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-[#D4C4B5] hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="text-4xl mb-2">{service.icon}</div>
                  <CardTitle className="text-xl text-[#4A4036]">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#7C6E65]">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default { Services };
