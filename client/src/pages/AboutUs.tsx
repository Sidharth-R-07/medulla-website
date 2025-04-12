
import { motion } from "framer-motion";
import { Info } from "lucide-react";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[#f8fdfa] to-[#edf9f3]">
      <Header />
      <main className="relative overflow-hidden pt-8 md:pt-12 pb-24">
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
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full mb-4">
              About Medulla
            </span>
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-6">Our Story</h1>
          </motion.div>
          
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl shadow-sm p-8"
            >
              <p className="text-gray-600 leading-relaxed">
                Medulla.app is a transformative healthcare platform developed by Veguar Technologies Pvt Ltd 
                under the visionary initiative of Medulla.community — a network of medical professionals across 
                India. Our mission is to empower every clinician and healthcare worker in India with a real-time 
                digital companion that enhances clinical decision-making, collaboration, and care delivery at the point 
                of care.
              </p>

              <p className="text-gray-600 mt-6 leading-relaxed">
                India's healthcare system faces numerous challenges, from resource limitations to overburdened 
                professionals, especially in rural and underserved regions. Medulla is born from this need: to build a 
                platform that supports the backbone of Indian healthcare, its human resource with cutting-edge, 
                accessible, and relevant technology.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-sm p-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How We're Different</h2>
              <p className="text-gray-600 leading-relaxed">
                We're not just building another medical reference tool—we are creating a movement. 
                While global tools exist, they often ignore the nuance of Indian protocols, drug 
                availability, and rural accessibility. Medulla is built for Indian clinicians by Indian 
                clinicians.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-2xl shadow-sm p-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Philosophy</h2>
              <p className="text-gray-600 leading-relaxed">
                We believe that efficient, safe, and evidence-based care shouldn't be a privilege, but a 
                default—no matter where you practice. We aim to democratize access to clinical 
                intelligence and remove friction from daily decision-making in healthcare.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white rounded-2xl shadow-sm p-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Journey</h2>
              <p className="text-gray-600 leading-relaxed">
                Medulla is the digital arm of medulla.community, a grassroots movement of medicos 
                across India. What started as academic discussions and collaborative learning sessions 
                evolved into a full-fledged platform designed to solve everyday clinical challenges.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-white rounded-2xl shadow-sm p-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Built for India, Inspired by Global Best Practices</h2>
              <p className="text-gray-600 leading-relaxed">
                Medulla integrates the clarity of global clinical tools with India-specific workflows. 
                Think of it as a homegrown, evidence-based assistant that speaks your clinical 
                language.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-white rounded-2xl shadow-sm p-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Join the Movement</h2>
              <p className="text-gray-600 leading-relaxed">
                We're looking for early users, medical educators, public health leaders, and anyone 
                passionate about healthcare transformation to be a part of Medulla. Together, we can 
                build a tool that truly reflects the needs of Indian healthcare.
              </p>
              <p className="text-gray-600 mt-4 font-semibold">Let's revolutionize care—together.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="bg-white rounded-2xl shadow-sm p-8 text-center"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Contact us</h3>
              <p className="text-gray-600">Email: hello@medulla.app</p>
              <p className="mt-2 text-sm text-gray-500">A medulla.community initiative</p>
            </motion.div>
          </div>
        </div>
      </main>
      <FooterSection />
    </div>
  );
}
