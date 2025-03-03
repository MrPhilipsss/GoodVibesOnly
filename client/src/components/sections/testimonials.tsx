
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

export default function Testimonials() {
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
    
    // Auto-advance slides every 5 seconds (slower animation)
    const interval = setInterval(() => {
      api.scrollNext();
      
      // When we reach the end, scroll back to the beginning for infinite loop
      if (!api.canScrollNext()) {
        setTimeout(() => {
          api.scrollTo(0);
        }, 1000);
      }
    }, 5000);
    
    return () => clearInterval(interval);
  }, [api]);

  return (
    <section id="testimonials" className="py-12 bg-[#F9F5F1]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#B8A088] mb-2">What Our Clients Say</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <Carousel 
            setApi={setApi} 
            className="relative py-5 px-5"
            opts={{
              loop: true,
              duration: 50, // Slower transition between slides (in milliseconds)
            }}
          >
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="px-4">
                  <div className="bg-white p-8 rounded-lg shadow-md text-center max-w-4xl mx-auto">
                    <div className="mb-4">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-xl">★</span>
                      ))}
                    </div>
                    <p className="text-[#7C6E65] mb-6 italic text-lg">"{testimonial.content}"</p>
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
