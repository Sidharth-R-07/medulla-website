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
      question: "What is Medulla and who is it for?",
      answer:
        "Medulla is your AI-powered clinical companion, built for doctors, interns, residents, and nurses. Whether you’re managing rounds, preparing for exams, or making decisions in the ER, Medulla simplifies your workflow with the right tools—right when you need them."
    },
    {
      question: "How is Medulla different from a regular medical reference app?",
      answer:
        "Medulla isn’t just another database—it thinks with you. From symptom-based diagnosis to instant investigations and live data interpretation, it works like an AI mentor guiding your clinical reasoning on the go. No more flipping between apps or second-guessing steps."
    },
    {
      question: "Does Medulla follow Indian clinical guidelines?",
      answer:
        "Yes. Everything in Medulla is tailored for Indian practice—from ICMR and AIIMS-backed protocols to India-specific pediatric doses and drug brands. It’s built for the realities of Indian wards and emergencies."
    },
    {
      question: "Can I use Medulla during rounds, duty hours, or in high-pressure situations?",
      answer:
        "Definitely. Medulla is designed for real-time hospital use—during rounds, night duties, OPD, or even in emergencies. It gives instant access to what matters without slowing you down."
    },
    {
      question: "How does the Pediatric Dose Calculator work?",
      answer:
        "You simply enter the age and weight, and Medulla gives you accurate dose ranges along with India-specific formulations and brands. It’s quick, safe, and takes the pressure off when time is tight."
    },
    {
      question: "Is patient data stored or shared?",
      answer:
        "No. Medulla respects patient confidentiality. It doesn’t store or share any personal patient data. Everything stays on your device and under your control."
    },
    {
      question: "How does Medulla compare to other healthcare platforms?",
      answer:
        "Yes. Medulla is completely free for doctors, residents, and interns. You get full access to all features, with no hidden costs—because good clinical support should be available to everyone in medicine."
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