import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import LoadingScreen from "@/components/layout/loading";
import { Suspense, lazy } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Loading } from "@/components/layout/loading";
import { PageTransition } from "@/components/layout/page-transition";

const Hero = lazy(() => import("@/components/sections/hero").then((mod) => ({ default: mod.Hero })));
const About = lazy(() => import("@/components/sections/about").then((mod) => ({ default: mod.About })));
const Services = lazy(() => import("@/components/sections/services").then((mod) => ({ default: mod.Services })));
const Gallery = lazy(() => import("@/components/sections/gallery").then((mod) => ({ default: mod.Gallery })));
const Appointment = lazy(() => import("@/components/sections/appointment").then((mod) => ({ default: mod.Appointment })));
const Testimonials = lazy(() => import("@/components/sections/testimonials").then((mod) => ({ default: mod.Testimonials })));
const Contact = lazy(() => import("@/components/sections/contact").then((mod) => ({ default: mod.Contact })));
const Footer = lazy(() => import("@/components/layout/footer").then((mod) => ({ default: mod.Footer })));


function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LoadingScreen />
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;