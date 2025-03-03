
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Testimonial {
  id: number;
  name: string;
  title: string;
  content: string;
}

export function Testimonials() {
  const [api, setApi] = useState<any>();
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Anna Smith",
      title: "Regular Client",
      content: "The team at Good Vibes Only provided exceptional service. My skin has never looked better after their facial treatments!",
    },
    {
      id: 2,
      name: "Michael Johnson",
      title: "First-time Customer",
      content: "I was amazed by the attention to detail and personalized care. Will definitely be coming back for more treatments.",
    },
    {
      id: 3,
      name: "Sophie Williams",
      title: "Monthly Client",
      content: "The atmosphere is so relaxing and the staff are true professionals. I wouldn't trust anyone else with my beauty needs.",
    },
    {
      id: 4,
      name: "David Brown",
      title: "Loyal Customer",
      content: "From the moment you walk in, you feel pampered and valued. Their services are worth every penny.",
    },
  ];

  useEffect(() => {
    if (!api) return;
    
    // Auto-advance slides every 2 seconds
    const interval = setInterval(() => {
      api.scrollNext();
    }, 2000);
    
    return () => clearInterval(interval);
  }, [api]);

  return (
    <section id="testimonials" className="py-20 bg-[#F9F5F1]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#B8A088] mb-4">What Our Clients Say</h2>
          <p className="text-lg text-[#7C6E65] max-w-2xl mx-auto">
            Discover why our clients love our services and keep coming back for more.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Carousel setApi={setApi} className="relative py-10 px-10">
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="px-4">
                  <div className="bg-white p-8 rounded-lg shadow-md text-center">
                    <div className="mb-4">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-xl">★</span>
                      ))}
                    </div>
                    <p className="text-[#7C6E65] mb-6 italic">"{testimonial.content}"</p>
                    <h4 className="font-bold text-[#B8A088]">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.title}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}
