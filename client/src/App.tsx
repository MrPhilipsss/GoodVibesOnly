import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import LoadingScreen from "@/components/layout/loading";
import { Suspense, useEffect, useState } from "react";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [contentReady, setContentReady] = useState(false);

  useEffect(() => {
    // Make sure content is ready after the loading screen
    const timer = setTimeout(() => {
      setContentReady(true);
      // Scroll to top to ensure content is visible
      window.scrollTo(0, 0);
    }, 2600); // Slightly longer than the loading screen duration (2500ms)

    // Fix for hash navigation after page load
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      if (hash) {
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    if (window.location.hash) {
      handleHashChange();
    }

    return () => {
      clearTimeout(timer);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <LoadingScreen />
      <div className={`min-h-screen ${contentReady ? 'opacity-100' : 'opacity-0'}`} 
           style={{ transition: 'opacity 0.5s ease-in-out' }}>
        <Suspense fallback={<div className="w-full h-screen flex items-center justify-center">Loading...</div>}>
          <Router />
        </Suspense>
      </div>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;