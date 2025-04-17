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
      quote: "During my night shift last week, I had a confused, hypotensive patient with mixed symptoms. Normally, I’d flip through my handbook or search scattered resources. But with Medulla, I just input the symptoms and within seconds, it generated a short differential list, recommended urgent investigations, and even highlighted red flags. It felt like having a specialist looking over my shoulder—right when I needed it most.",
      name: "Dr. Aakash Pillai",
      title: "Senior Resident – Emergency Medicine, Government Medical College, Thrissur",
      avatar: "https://randomuser.me/api/portraits/men/19.jpg"
    },
    {
      quote: "One of the constant challenges during calls is calculating drug doses for children, especially when the weight isn’t textbook. Medulla’s pediatric dose calculator has been a game changer. I enter the age and weight, and it gives me India-specific doses with actual brand names and syrup formulations. No more flipping through books or double-checking Google. It’s quick, reliable, and built exactly for what we face in our hospitals.",
      name: "Dr. Iqra Siddiqui",
      title: "Junior Resident – Pediatrics, KGMU Lucknow",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      quote: "We’re expected to think like doctors but still figuring things out as students. During rounds, when I get asked for possible differentials or ABG interpretation, I open Medulla quietly—it gives me a concise, structured view that actually teaches while solving. It’s not just a crutch; it’s a learning tool that helps me think clinically and be more confident in front of seniors.",
      name: "Dr. Rohit Sharma",
      title: "Final-Year MBBS Student – BJ Medical College, Pune",
      avatar: "https://randomuser.me/api/portraits/men/24.jpg"
    },
    {
      quote: "I juggle multiple patients, a small team, and very little time to document or assign follow-ups. Medulla’s chat interface lets me tag my assistant, assign tasks, and track everything from one screen. Even results from tools like ECG interpretations can be saved to the patient timeline. It’s like turning a group WhatsApp into an actual medical workflow—with zero chaos.",
      name: "Dr. Meenakshi Suresh",
      title: "Consultant Physician – Private Multispeciality Clinic, Coimbatore",
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
          Real Voices from the Frontlines of Care
          </h2>
          <p className="mt-4 text-xl text-gray-500">
          Trusted by Those Who Trust Science
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