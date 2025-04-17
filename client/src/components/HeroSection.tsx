import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useScrollTo } from "@/hooks/use-scroll-to";

export default function HeroSection() {
  const { scrollToSection } = useScrollTo();
  
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-[#f8fdfa] to-[#edf9f3] pt-16 md:pt-24 pb-24">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-[10%] w-64 h-64 rounded-full bg-primary/5"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-[10%] w-80 h-80 rounded-full bg-primary/5"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-primary/5"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full mb-4">
              AI-Powered Healthcare Platform
            </span>
          </motion.div>
          
          <motion.h1
            className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="block">Your AI Co-Doctor for</span>
            <span className="block text-primary">Better Clinical Decisions</span>
          </motion.h1>

          <motion.p
            className="mt-6 text-xl text-gray-500 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Medulla empowers healthcare professionals with AI-powered clinical tools, streamlined team communication, and decision support — all in one powerful platform.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button
              size="lg"
              className="text-lg px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all"
              onClick={() => scrollToSection("waitlist")}
            >
              Join Waitlist <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 rounded-lg"
              onClick={() => scrollToSection("tools")}
            >
              Explore Features
            </Button>
          </motion.div>
        </div>

        
      </div>
    </section>
  );
}