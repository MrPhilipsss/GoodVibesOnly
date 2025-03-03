import { Suspense, lazy } from "react";
import { Navbar } from "@/components/layout/navbar";
import { PageTransition } from "@/components/layout/page-transition";

const Hero = lazy(() => import("@/components/sections/hero").then((mod) => ({ default: mod.Hero })));
const About = lazy(() => import("@/components/sections/about").then((mod) => ({ default: mod.About })));
const Services = lazy(() => import("@/components/sections/services").then((mod) => ({ default: mod.Services })));
const Gallery = lazy(() => import("@/components/sections/gallery").then((mod) => ({ default: mod.Gallery })));
const Appointment = lazy(() => import("@/components/sections/appointment").then((mod) => ({ default: mod.Appointment })));
const Testimonials = lazy(() => import("@/components/sections/testimonials").then((mod) => ({ default: mod.Testimonials })));
const Contact = lazy(() => import("@/components/sections/contact").then((mod) => ({ default: mod.Contact })));
const Footer = lazy(() => import("@/components/layout/footer").then((mod) => ({ default: mod.Footer })));

export default function Home() {
  return (
    <PageTransition>
      <Navbar />
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Hero />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <About />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <Gallery />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <Appointment />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <Testimonials />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <Services />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={<div>Loading...</div>}>
        <Footer />
      </Suspense>
    </PageTransition>
  );
}