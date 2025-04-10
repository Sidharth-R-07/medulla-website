import { useState, useEffect } from "react";
import { AlertCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useScrollTo } from "@/hooks/use-scroll-to";

export default function FloatingNotification() {
  const [isVisible, setIsVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const { scrollToSection } = useScrollTo();

  useEffect(() => {
    // Show the notification after a delay
    const timer = setTimeout(() => {
      const hasSeenNotification = localStorage.getItem("seen_notification");
      if (!hasSeenNotification && !dismissed) {
        setIsVisible(true);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [dismissed]);

  const handleDismiss = () => {
    setIsVisible(false);
    setDismissed(true);
    localStorage.setItem("seen_notification", "true");
  };

  const handleAction = () => {
    scrollToSection("waitlist");
    handleDismiss();
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-8 left-8 z-40 max-w-sm"
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ duration: 0.4 }}
        >
          <div className="bg-white rounded-lg shadow-xl p-4 border border-gray-100">
            <div className="flex items-start">
              <div className="flex-shrink-0 pt-0.5">
                <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                  New
                </Badge>
              </div>
              <div className="ml-3 w-0 flex-1">
                <p className="text-sm font-medium text-gray-900">Limited spots available!</p>
                <p className="mt-1 text-sm text-gray-500">
                  Join our waitlist today to get early access to Medulla when we launch.
                </p>
                <div className="mt-4 flex">
                  <Button 
                    size="sm" 
                    className="w-full mr-2"
                    onClick={handleAction}
                  >
                    Join now
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="w-full"
                    onClick={handleDismiss}
                  >
                    Maybe later
                  </Button>
                </div>
              </div>
              <div className="ml-4 flex-shrink-0 flex">
                <button
                  className="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none"
                  onClick={handleDismiss}
                >
                  <span className="sr-only">Close</span>
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}