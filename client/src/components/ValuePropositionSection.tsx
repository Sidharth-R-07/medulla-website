import { motion } from "framer-motion";
import { Smartphone, Brain, Users, Stethoscope } from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <motion.div 
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
      whileHover={{ y: -10 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="p-8">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
}

export default function ValuePropositionSection() {
  const features = [
    {
      icon: <Smartphone className="h-6 w-6 text-primary" />,
      title: "Clinical Tools at Your Fingertips",
      description:
        "Access essential clinical tools instantly, from differential diagnosis generators to pediatric dose calculators, all in one streamlined platform.",
    },
    {
      icon: <Brain className="h-6 w-6 text-primary" />,
      title: "Your Smart Medical Assistant",
      description:
        "Let our AI co-doctor help analyze complex cases, interpret test results, and suggest evidence-based next steps for optimal patient care.",
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "Smarter Care, Together",
      description:
        "Collaborate seamlessly with your team through integrated messaging, task management, and care coordination tools.",
    },
    {
      icon: <Stethoscope className="h-6 w-6 text-primary" />,
      title: "Enhanced Clinical Decision Support",
      description:
        "Make confident decisions with AI-powered insights that integrate the latest medical research and best practices.",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-3 py-1 text-sm font-semibold text-primary bg-primary/10 rounded-full mb-3">
            Why Medulla
          </span>
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-4">
            Transform Your Medical Practice
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-gray-500">
            Experience the future of clinical decision support with tools designed by doctors, for doctors.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}