import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  avatar: string;
}

export default function TestimonialSection() {
  const testimonials: Testimonial[] = [
    {
      quote: "Medulla's diagnostic tools have completely changed how I approach complex cases. The differential diagnosis generator saves me hours of research time.",
      name: "Dr. Sarah Chen",
      title: "Pediatrician, City Children's Hospital",
      avatar: "https://randomuser.me/api/portraits/women/79.jpg"
    },
    {
      quote: "The pediatric drug dose calculator is a lifesaver during busy shifts. It's made my prescribing process faster and significantly reduced the risk of errors.",
      name: "Dr. Jamal Thompson",
      title: "Emergency Medicine, Medical Center",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      quote: "Team communication has been transformed since we started using Medulla. Having all patient information and consultations in one place reduces confusion and improves care.",
      name: "Dr. Priya Patel",
      title: "Internal Medicine, University Hospital",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-16 bg-gray-50 overflow-hidden" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            What physicians are saying
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Hear from healthcare professionals using Medulla in their practice
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-xl p-8 md:p-10 relative"
            >
              <div className="absolute -top-6 left-10 text-primary">
                <Quote size={48} className="opacity-50" />
              </div>
              <blockquote className="mt-8">
                <p className="text-xl text-gray-700 leading-relaxed italic">
                  "{testimonials[currentIndex].quote}"
                </p>
                <footer className="mt-8 flex items-center">
                  <img
                    className="h-12 w-12 rounded-full object-cover"
                    src={testimonials[currentIndex].avatar}
                    alt={testimonials[currentIndex].name}
                  />
                  <div className="ml-4">
                    <div className="text-base font-medium text-gray-900">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {testimonials[currentIndex].title}
                    </div>
                  </div>
                </footer>
              </blockquote>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-10 space-x-4">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={prevTestimonial}
              className="rounded-full h-10 w-10 p-0 border-primary text-primary hover:bg-primary hover:text-white transition-colors"
            >
              <ChevronLeft className="h-6 w-6" />
              <span className="sr-only">Previous testimonial</span>
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={nextTestimonial}
              className="rounded-full h-10 w-10 p-0 border-primary text-primary hover:bg-primary hover:text-white transition-colors"
            >
              <ChevronRight className="h-6 w-6" />
              <span className="sr-only">Next testimonial</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}