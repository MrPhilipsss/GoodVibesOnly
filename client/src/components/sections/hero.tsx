import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-[#F5EFE6] py-20"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#4A4036]">
            Your Beauty Journey Begins Here
          </h1>
          <p className="text-lg md:text-xl mb-8 text-[#7C6E65]">
            Experience luxury beauty treatments tailored just for you. Let our expert team help you
            discover your natural radiance.
          </p>
          <Button
            size="lg"
            className="bg-[#B8A088] hover:bg-[#9A846E] text-white"
            onClick={() => window.open("https://booksy.com", "_blank")}
          >
            Book Your Appointment
          </Button>
        </div>
      </div>
    </section>
  );
}
