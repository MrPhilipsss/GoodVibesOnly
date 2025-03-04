import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Robimy brewki",
    description: "Zrobimy Ci brewki najlepsze",
    image: "/images/lam-brwi.jpg",
  },
  {
    title: "Robimy rzęski",
    description: "A rzęski jeszcze lepsze",
    image: "/images/pazy.jpg",
  },
  {
    title: "Robimy pazki",
    description: "Pazy no... najlepsze",
    image: "/images/lam-rzes.jpg",
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
