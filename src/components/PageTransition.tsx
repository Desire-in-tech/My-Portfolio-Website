import { AnimatePresence } from "framer-motion";
import * as m from "framer-motion/m";
import { ReactNode } from "react";
import { Location } from "react-router-dom";

interface PageTransitionProps {
  children: ReactNode;
  location: Location;
}

export default function PageTransition({
  children,
  location,
}: PageTransitionProps) {
  return (
    <AnimatePresence mode="wait">
      <m.div
        key={location.pathname}
        initial={false}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </m.div>
    </AnimatePresence>
  );
}
