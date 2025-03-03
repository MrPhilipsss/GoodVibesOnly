import { motion } from "framer-motion";
import { ReactNode, useEffect } from "react";

interface PageTransitionProps {
  children: ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  useEffect(() => {
    // Ensure content is visible by scrolling to top on page load/transition
    window.scrollTo(0, 0);
    
    // Restore smooth scrolling behavior for browser's back/forward navigation
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      if (hash) {
        const element = document.getElementById(hash);
        if (element) {
          import('@/lib/scroll-utils').then(({ smoothScrollTo }) => {
            smoothScrollTo(hash, 1500);
          });
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
      onAnimationComplete={() => {
        // Ensure content is visible after animation completes
        window.scrollTo(0, 0);
      }}
    >
      {children}
    </motion.div>
  );
}