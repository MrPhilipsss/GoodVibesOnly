
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

export function Appointment() {
  const [date, setDate] = useState<Date | undefined>(undefined);

  return (
    <section id="appointment" className="py-20 bg-[#F9F5F1]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#B8A088] mb-4">Book Your Appointment</h2>
          <p className="text-lg text-[#7C6E65] max-w-2xl mx-auto">
            Schedule your visit to Good Vibes Only and treat yourself to our premium beauty services.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6 md:p-8">
          <div className="flex flex-col md:flex-row gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="md:w-1/2"
            >
              <h3 className="text-xl font-semibold text-[#4A4036] mb-4">Select a Date</h3>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border border-[#D4C4B5]"
              />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="md:w-1/2"
            >
              <h3 className="text-xl font-semibold text-[#4A4036] mb-4">Booking Information</h3>
              <p className="text-[#7C6E65] mb-6">
                Choose your preferred date and then click the button below to complete your booking on our scheduling platform.
              </p>
              <Button
                size="lg"
                className="w-full bg-[#B8A088] hover:bg-[#9A846E] text-white"
                onClick={() => window.open("https://booksy.com", "_blank")}
              >
                Complete Booking
              </Button>
              <p className="text-sm text-gray-500 mt-4">
                You will be redirected to our scheduling platform to select the time and service.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default { Appointment };
