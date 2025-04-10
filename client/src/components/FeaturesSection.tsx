import { 
  ClipboardList, 
  Calculator, 
  MessageSquare, 
  FileText, 
  CheckSquare, 
  Star 
} from "lucide-react";
import { motion } from "framer-motion";

interface FeatureItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

function FeatureItem({ icon, title, description, index }: FeatureItemProps) {
  return (
    <motion.div 
      className="flex"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="flex-shrink-0">
        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white shadow-md">
          {icon}
        </div>
      </div>
      <div className="ml-4">
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        <p className="mt-2 text-gray-500">{description}</p>
      </div>
    </motion.div>
  );
}

export default function FeaturesSection() {
  const features = [
    {
      icon: <ClipboardList className="h-6 w-6" />,
      title: "Symptom-to-Diagnosis Tools",
      description:
        "Generate differential diagnoses from symptoms in seconds, with instant access to investigations and scoring systems.",
    },
    {
      icon: <Calculator className="h-6 w-6" />,
      title: "Pediatric Drug Dose Calculator",
      description:
        "Enter age and weight to get accurate, India-specific dose ranges with brands and formulations.",
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Chat That Drives Care",
      description:
        "Tag patients, share updates, and get quick help from consultants — all in one chat. No confusion, no missed messages.",
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Live Analysis",
      description:
        "Scan an ABG or attach an ECG and see it interpreted live with AI and tools side-by-side.",
    },
    {
      icon: <CheckSquare className="h-6 w-6" />,
      title: "Know What to Do, and When",
      description:
        "Turn messages and results into clear tasks. Stay focused on what's important — and reduce the stress of remembering everything.",
    },
  ];

  return (
    <section className="py-16 bg-white" id="tools">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary bg-opacity-10 mb-5">
            <Star className="h-6 w-6 text-primary" />
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            What you'll get
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            One Platform. Smarter Decisions. Better Care
          </p>
        </motion.div>

        <div className="mt-16">
          <div className="space-y-12 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-12">
            {features.map((feature, index) => (
              <FeatureItem
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
