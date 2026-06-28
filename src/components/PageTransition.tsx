import { motion, AnimatePresence } from "framer-motion";
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
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
