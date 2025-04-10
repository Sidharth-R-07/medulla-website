import { Check, X } from "lucide-react";
import { motion } from "framer-motion";

export default function FeatureComparisonTable() {
  const features = [
    {
      name: "AI-powered clinical decision support",
      medulla: true,
      competitors: false,
    },
    {
      name: "Pediatric dosage calculator",
      medulla: true,
      competitors: true,
    },
    {
      name: "Team chat with patient tagging",
      medulla: true,
      competitors: false,
    },
    {
      name: "Live analysis of vitals and imaging",
      medulla: true,
      competitors: false,
    },
    {
      name: "HIPAA compliance",
      medulla: true,
      competitors: true,
    },
    {
      name: "Designed for India-specific needs",
      medulla: true,
      competitors: false,
    },
    {
      name: "Tasks & reminders system",
      medulla: true, 
      competitors: true,
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="mt-12 bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="px-4 py-5 sm:px-6 bg-gray-50 border-b border-gray-200">
        <h3 className="text-lg font-medium text-gray-900">
          How Medulla Compares
        </h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">
          See how our features stack up against other solutions
        </p>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Feature
              </th>
              <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                <span className="text-primary">Medulla</span>
              </th>
              <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Competitors
              </th>
            </tr>
          </thead>
          <motion.tbody 
            className="bg-white divide-y divide-gray-200"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.tr key={index} variants={item}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {feature.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  {feature.medulla ? (
                    <span className="text-green-500 flex justify-center">
                      <Check className="h-5 w-5" />
                    </span>
                  ) : (
                    <span className="text-red-500 flex justify-center">
                      <X className="h-5 w-5" />
                    </span>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  {feature.competitors ? (
                    <span className="text-green-500 flex justify-center">
                      <Check className="h-5 w-5" />
                    </span>
                  ) : (
                    <span className="text-red-500 flex justify-center">
                      <X className="h-5 w-5" />
                    </span>
                  )}
                </td>
              </motion.tr>
            ))}
          </motion.tbody>
        </table>
      </div>
    </div>
  );
}