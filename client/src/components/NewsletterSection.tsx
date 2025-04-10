import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import NewsletterForm from "./NewsletterForm";

export default function NewsletterSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-primary/10 rounded-2xl p-8 md:p-12">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center justify-center p-2 bg-primary/20 rounded-full mb-4">
                <Mail className="h-6 w-6 text-primary" />
              </span>
              <h2 className="text-3xl font-extrabold text-gray-900">
                Stay up to date
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Get notified about new features, case studies, and medical research integrations
              </p>
            </motion.div>

            <motion.div 
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <NewsletterForm />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}