import { motion } from "framer-motion";
import { Smartphone, CheckCircle } from "lucide-react";
import StoreButtons from "./StoreButtons";

export default function AppDownloadSection() {
  const features = [
    "Real-time clinical decision support",
    "Pediatric dosage calculator",
    "Team messaging with patient tagging",
    "Easy access to patient data",
    "Works offline for rural settings"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-gray-50" id="app">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-3 py-1 text-sm font-semibold text-primary bg-primary/10 rounded-full mb-3">
                Mobile App
              </span>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Get Medulla in Your Pocket
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Take Medulla's powerful clinical tools with you wherever you go. Download our mobile app for instant access to all features, even in areas with limited connectivity.
              </p>

              <div className="mt-8">
                <ul className="space-y-4">
                  {features.map((feature, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <StoreButtons />
            </motion.div>
          </div>

          <motion.div
            className="relative flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative w-64 h-[500px] md:w-80 md:h-[600px]">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/60 rounded-[40px] shadow-lg transform -rotate-6"></div>
              <div className="absolute inset-0 bg-white rounded-[40px] shadow-lg overflow-hidden transform rotate-3">
                <img 
                  src="/assets/image_1744288187663.jpg"
                  alt="Smartphone Interface" 
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-full p-4 shadow-lg">
                <Smartphone className="h-8 w-8 text-primary" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}