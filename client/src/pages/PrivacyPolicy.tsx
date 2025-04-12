import { motion } from "framer-motion";
import { Info } from "lucide-react";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";

export default function PrivacyPolicy() {
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
              Policies
            </span>
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-6">Privacy Policy</h1>
            <p className="text-gray-600">Last revised: April 9, 2025</p>
          </motion.div>

          <div className="space-y-8">
            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl shadow-sm p-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
              <p className="text-gray-600 leading-relaxed">
                Medulla.app, operated by Veguar Technologies Private Limited ("we", "us", or "our"), is committed 
                to respecting your privacy. This Privacy Policy outlines how we collect, use, store, and share your 
                information when you use the Medulla mobile application, website, or any related service 
                (collectively, the "Service").
              </p>
              <p className="text-gray-600 mt-4 leading-relaxed">
                This policy is in compliance with applicable laws in India, including the Information Technology 
                Act, 2000, NDHM (Ayushman Bharat Digital Mission) guidelines, and, where applicable, global 
                standards such as the EU General Data Protection Regulation (GDPR).
              </p>
            </motion.div>

            {/* What This Policy Covers */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-sm p-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. What This Policy Covers</h2>
              <p className="text-gray-600 mb-4">
                This Privacy Policy covers the treatment of personally identifiable information ("Personal Data") 
                that Medulla collects when you:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Register for an account</li>
                <li>Use our clinical decision support tools or AI features</li>
                <li>Interact with other users via chat or collaborative features</li>
                <li>Use calculators, task managers, or contact sync</li>
              </ul>
            </motion.div>

            {/* Information We Collect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-2xl shadow-sm p-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Information We Collect</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">a. Account Registration</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Full name</li>
                    <li>Email address</li>
                    <li>Phone number</li>
                    <li>Institution (optional)</li>
                    <li>Date of Birth</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">b. Profile Page & User Interactions</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Username and display photo</li>
                    <li>Professional role (e.g., MBBS intern, PG student, consultant)</li>
                    <li>Country or region</li>
                    <li>User-generated content such as notes, comments, and feedback</li>
                    <li>Contact list (if contact sync is enabled)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">c. Clinical & AI Tools</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Text/audio messages sent to AI features</li>
                    <li>Task and checklist entries</li>
                    <li>Calculator usage history</li>
                    <li>Query logs (non-identifiable only)</li>
                  </ul>
                  <div className="mt-4 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                    <p className="text-yellow-800 font-medium">
                      Important: Medulla does not collect or store personally identifiable patient health records (PHRs).
                      Do not enter real patient names, contact info, or medical record numbers in chats, tasks, or AI tools.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">d. Device & Usage Data</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Device ID and OS version</li>
                    <li>App crash logs and error reports</li>
                    <li>IP address</li>
                    <li>Usage statistics (e.g., session time, feature usage)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">e. Cookies & Analytics</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Cookies on the website to track user behavior</li>
                    <li>Analytics via third-party tools like Google Analytics, Amplitude, and Firebase</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">f. Contact Sync (Optional)</h3>
                  <p className="text-gray-600 mb-3">If you enable Contact Sync:</p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>We access phone numbers stored in your contacts to match with other Medulla users</li>
                    <li>Users who have your phone number may be able to find your profile</li>
                  </ul>
                  <p className="text-gray-600 mt-3">You can disable Contact Sync at any time.</p>
                </div>
              </div>
            </motion.div>

            {/* How We Use Your Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white rounded-2xl shadow-sm p-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. How We Use Your Information</h2>
              <p className="text-gray-600 mb-4">We process your data to:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                <li>Provide you access to AI tools, calculators, and chat features</li>
                <li>Facilitate communication with other users</li>
                <li>Suggest relevant medical content and updates</li>
                <li>Debug, improve, and optimize our services</li>
                <li>Comply with applicable laws and regulatory standards</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Communications</h3>
              <p className="text-gray-600 mb-3">We may send:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                <li>Service-related updates and alerts</li>
                <li>Feature announcements</li>
                <li>Medical news or tips relevant to your clinical role</li>
                <li>Promotional offers (you can opt-out anytime)</li>
              </ul>

              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">AI Feature Disclaimer</h3>
                <p className="text-blue-800">
                  Data sent to AI tools may be processed by third-party vendors such as OpenAI, Google Gemini, or
                  others. These services may temporarily store anonymized interactions for model improvement. Never
                  include any patient-identifiable information.
                </p>
              </div>
            </motion.div>

            {/* Data Sharing and Disclosure */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-white rounded-2xl shadow-sm p-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Sharing and Disclosure</h2>
              <p className="text-gray-600 mb-4">We do not sell your personal data. We may share information:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>With cloud providers (e.g., AWS India region) to host our app</li>
                <li>With analytics and error tracking tools (e.g., Firebase, Amplitude)</li>
                <li>When required by law or to respond to legal process</li>
                <li>To prevent fraud, abuse, or threats to user safety</li>
              </ul>
            </motion.div>

            {/* Data Localization & NDHM Compliance */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-white rounded-2xl shadow-sm p-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Data Localization & NDHM Compliance</h2>
              <p className="text-gray-600 mb-4">
                Medulla is hosted on Indian servers and processes data locally in line with NDHM guidelines. We
                aim to follow NDHM standards including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Voluntary health ID integration (future rollout)</li>
                <li>Consent-based data sharing model</li>
                <li>Data minimization and anonymization principles</li>
              </ul>
            </motion.div>

            {/* Data Retention */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="bg-white rounded-2xl shadow-sm p-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Data Retention</h2>
              <p className="text-gray-600 mb-4">
                We retain your data as long as your account is active or as needed to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Deliver services</li>
                <li>Fulfill legal obligations</li>
                <li>Resolve disputes or enforce policies</li>
              </ul>
              <p className="text-gray-600 mt-4">
                You may delete your account via the app, and your data will be removed within 30 days unless we are
                required by law to retain it longer.
              </p>
            </motion.div>

            {/* Your Rights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="bg-white rounded-2xl shadow-sm p-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Your Rights</h2>
              <p className="text-gray-600 mb-4">Depending on your jurisdiction, you have the right to:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Access or correct your personal data</li>
                <li>Request deletion of your account and data</li>
                <li>Opt out of personalized ads or contact sync</li>
                <li>Withdraw consent to process data</li>
                <li>Export your data in a machine-readable format</li>
              </ul>
              <p className="text-gray-600 mt-4">
                Email: <a href="mailto:privacy@medulla.app" className="text-primary hover:underline">privacy@medulla.app</a> for such requests.
              </p>
            </motion.div>

            {/* Children's Privacy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="bg-white rounded-2xl shadow-sm p-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Children's Privacy</h2>
              <p className="text-gray-600">
                Medulla is intended for users aged 16 and above. We do not knowingly collect personal data from
                minors. If you believe a child has provided us data, please contact us immediately.
              </p>
            </motion.div>

            {/* Third-Party Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
              className="bg-white rounded-2xl shadow-sm p-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Third-Party Services</h2>
              <p className="text-gray-600">
                Our app may link to external websites or third-party content. We are not responsible for the privacy
                practices of those websites.
              </p>
            </motion.div>

            {/* Policy Updates */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.1 }}
              className="bg-white rounded-2xl shadow-sm p-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Policy Updates</h2>
              <p className="text-gray-600">
                We may update this Privacy Policy periodically. You will be notified via email or app notification at
                least 7 days in advance. The latest version will always be available on our website.
              </p>
            </motion.div>

            {/* Medical Disclaimer */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="bg-white rounded-2xl shadow-sm p-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Medical Disclaimer</h2>
              <p className="text-gray-600 mb-4">
                Medulla.app is designed to assist medical professionals by providing clinical decision-support,
                educational content, and patient-related tools based on user inputs. However, the Service does not
                replace professional medical judgment, nor does it offer a diagnosis, treatment, or prescription
                independently.
              </p>
              <p className="text-gray-600 mb-4">
                All outputs, suggestions, or recommendations provided by Medulla.app (including through AI
                features or clinical calculators) are generated based on the data and prompts submitted by the user.
                They are intended solely for informational and educational purposes.
              </p>
              <p className="text-gray-600 mb-4">
                Users must apply their own clinical expertise and professional discretion before using any
                information provided by Medulla.app in the care or treatment of patients. By using the Service, you
                agree that:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>You are solely responsible for any clinical decisions or treatments made based on the output
                    from Medulla.app.</li>
                <li>Veguar Technologies Private Limited, the developers of Medulla.app, shall not be held liable
                    for any harm, loss, injury, or adverse outcomes resulting from the use of information provided
                    by the Service.</li>
                <li>Any use of Medulla.app in clinical settings must be done in accordance with local laws,
                    institutional policies, and medical guidelines.</li>
              </ul>
              <p className="text-gray-600 mt-4">
                If you are a patient or non-medical user, do not use Medulla.app as a substitute for professional
                healthcare advice. Always consult a licensed physician or medical provider for medical concerns.
              </p>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.3 }}
              className="bg-white rounded-2xl shadow-sm p-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Contact Information</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Data Controller</h3>
                  <p className="text-gray-600">
                    Veguar Technologies Pvt Ltd<br />
                    RISE TBI, Sullamussalam Science College, Areekode,<br />
                    Malappuram District, Kerala – 673639, India
                  </p>
                  <p className="text-gray-600 mt-2">
                    Email: <a href="mailto:privacy@medulla.app" className="text-primary hover:underline">privacy@medulla.app</a>
                  </p>
                </div>
                <p className="text-gray-600">
                  For NDHM-related inquiries or consent architecture, please reach out to our Data Protection Officer
                  (DPO).
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-gray-500 text-sm">
                  Effective from April 9, 2025. Version: 2.0
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <FooterSection />
    </div>
  );
}
