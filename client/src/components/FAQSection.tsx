import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import FeatureComparisonTable from "./FeatureComparisonTable";

export default function FAQSection() {
  const faqs = [
    {
      question: "What is Medulla?",
      answer:
        "Medulla is an AI-powered healthcare platform designed to support medical professionals in making better clinical decisions. It offers tools for diagnosis support, pediatric drug dosing, team communication, and more."
    },
    {
      question: "Is Medulla available for all medical specialties?",
      answer:
        "Yes, Medulla is designed to support healthcare professionals across various specialties including pediatrics, internal medicine, emergency medicine, and more. Our tools are tailored to address the specific needs of different medical practices."
    },
    {
      question: "How secure is patient data on Medulla?",
      answer:
        "Medulla is built with security and privacy as top priorities. We are HIPAA-compliant and use industry-leading encryption standards to ensure all patient data is securely stored and transmitted. We never share patient data with third parties."
    },
    {
      question: "Can Medulla integrate with existing hospital systems?",
      answer:
        "Yes, Medulla is designed to integrate seamlessly with major Electronic Health Record (EHR) systems and hospital management software. Our team provides dedicated support for integration with your existing infrastructure."
    },
    {
      question: "How do I join the waitlist?",
      answer:
        "You can join our waitlist by filling out the form in the 'Join Waitlist' section of our website. Once you submit your information, you'll be notified as soon as Medulla becomes available for your region and specialty."
    },
    {
      question: "Is there a cost to use Medulla?",
      answer:
        "Medulla will offer both free and premium tiers. The free tier provides access to essential features, while the premium subscription unlocks advanced capabilities, priority support, and more. Pricing details will be provided closer to launch."
    },
    {
      question: "How does Medulla compare to other healthcare platforms?",
      answer:
        "Medulla offers several unique features including AI-powered clinical decision support, pediatric drug dosage calculators specifically designed for India, and integrated team communication with patient tagging. See our comparison table below for more details."
    },
  ];

  return (
    <section className="py-16 bg-white" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Everything you need to know about Medulla
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
                <AccordionTrigger className="text-left text-lg font-medium text-gray-900 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
        
        {/* Feature Comparison Table */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <FeatureComparisonTable />
        </motion.div>
      </div>
    </section>
  );
}