"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, AlertTriangle } from "lucide-react";

export default function UnderConstructionNotification() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasSeenNotification = sessionStorage.getItem("hasSeenConstructionNotice");

    if (!hasSeenNotification) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 3500);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    sessionStorage.setItem("hasSeenConstructionNotice", "true");
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-foreground/30 backdrop-blur-sm z-[100]"
            onClick={handleClose}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 25,
              duration: 0.4
            }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[101] w-[90%] max-w-md"
          >
            <div className="relative bg-background border border-border rounded-md overflow-hidden">
              <div className="relative p-8">
                <button
                  onClick={handleClose}
                  className="absolute top-4 right-4 text-muted hover:text-foreground transition-colors duration-200 p-1 rounded-full hover:bg-surface"
                  aria-label="Close notification"
                >
                  <X size={20} />
                </button>

                <motion.div
                  initial={{ rotate: -10, scale: 0 }}
                  animate={{ rotate: 0, scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="flex justify-center mb-6"
                >
                  <div className="relative bg-secondary p-4 rounded-full">
                    <AlertTriangle className="text-white" size={32} />
                  </div>
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-2xl md:text-3xl font-bold text-center mb-3 text-foreground"
                >
                  Under Construction
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-muted text-center mb-6 leading-relaxed"
                >
                  This portfolio is currently being enhanced with new features and improvements. Some sections may be incomplete or subject to change.
                </motion.p>

                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  onClick={handleClose}
                  className="w-full bg-primary hover:bg-secondary text-white font-semibold py-3 px-6 rounded-md transition-colors duration-300"
                >
                  Got it!
                </motion.button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
