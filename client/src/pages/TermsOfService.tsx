import { motion } from "framer-motion";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";

export default function TermsOfService() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-white via-[#f8fdfa] to-[#edf9f3]">
            <Header />
            <main className="relative overflow-hidden pt-8 md:pt-12 pb-24">
                {/* Background animated circles */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                    <motion.div
                        className="absolute top-20 right-[10%] w-64 h-64 rounded-full bg-primary/5"
                        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.div
                        className="absolute bottom-20 left-[10%] w-80 h-80 rounded-full bg-primary/5"
                        animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }}
                        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    />
                </div>

                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Page Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-12"
                    >
                        <span className="inline-block px-4 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full mb-4">
                            Terms
                        </span>
                        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-6">
                            Terms and Conditions
                        </h1>
                        <p className="text-gray-600">Last revised: April 9, 2025</p>
                    </motion.div>

                    {/* Content Sections */}
                    <div className="space-y-8">
                        {/* Section: General */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="bg-white rounded-2xl shadow-sm p-8"
                        >
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">General</h2>
                            <p className="text-gray-600 leading-relaxed">
                                Medulla websites (“Websites”), mobile applications (“Apps”), and related services (together with the Websites and Apps, the “Service”) are operated by Veguar Technologies Private Limited (“Medulla,” “us,” or “we”). Access and use of the Service is subject to the following Terms and Conditions of Service (“Terms and Conditions”). By accessing or using any part of the Service, you represent that you have read, understood, and agree to be bound by these Terms and Conditions, including any future modifications. Medulla may amend, update, or change these Terms and Conditions. If we do this, we will post a notice that we have made changes to these Terms and Conditions on the Websites for at least 7 days after the changes are posted and will indicate at the bottom of the Terms and Conditions the date these terms were last revised. Any revisions to these Terms and Conditions will become effective the earlier of (i) the end of such 7-day period or (ii) the first time you access or use the Service after such changes. If you do not agree to abide by these Terms and Conditions, you are not authorized to use, access, or participate in the Service.
                            </p>
                        </motion.div>

                        {/* Section: Description of Website and Service */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="bg-white rounded-2xl shadow-sm p-8"
                        >
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Description of Website and Service</h2>
                            <p className="text-gray-600 leading-relaxed">
                                The Service allows healthcare professionals in India to access and use a comprehensive point-of-care tool designed specifically for the Indian healthcare context. The platform provides clinical decision support, reference information, calculators, and collaboration features to improve healthcare delivery throughout India, with particular attention to the needs of practitioners in resource-constrained settings. Medulla may, in its sole discretion and at any time, update, change, suspend, make improvements to, or discontinue any aspect of the Service, temporarily or permanently.
                            </p>
                        </motion.div>

                        {/* Section: Acceptable Use of the Services */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="bg-white rounded-2xl shadow-sm p-8"
                        >
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Acceptable Use of the Services</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                You are responsible for your use of the Services and for any use of the Services made using your account. Our goal is to create a positive, useful, and safe user experience. To promote this goal, we prohibit certain kinds of conduct that may be harmful to other users or to us. When you use the Services, you must comply with our Community Guidelines. As a healthcare-focused platform, users are expected to maintain professional standards of conduct, respect patient privacy, and adhere to applicable medical ethics guidelines when using the Service.
                            </p>
                        </motion.div>

                        {/* Section: Additional Terms */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="bg-white rounded-2xl shadow-sm p-8"
                        >
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Additional Terms</h2>
                            <p className="text-gray-600 leading-relaxed">
                                Some of our Services have additional terms and conditions (“Additional Terms”). Where Additional Terms apply to a Service, we will make them available for you to read before using that Service. By using that Service, you agree to the Additional Terms.
                            </p>
                        </motion.div>

                        {/* Section: Registration */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="bg-white rounded-2xl shadow-sm p-8"
                        >
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Registration</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                In connection with registering for and using the Service, you agree to:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-600">
                                <li>Provide accurate, current, and complete information about you and/or your organization as requested by Medulla;</li>
                                <li>Maintain the confidentiality of your password and other security-related information;</li>
                                <li>Maintain and promptly update any registration information you provide to Medulla;</li>
                                <li>Be fully responsible for all use of your account and for any actions that occur through your account.</li>
                            </ul>
                        </motion.div>

                        {/* Section: Your Representations and Warranties */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="bg-white rounded-2xl shadow-sm p-8"
                        >
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Representations and Warranties</h2>
                            <p className="text-gray-600 leading-relaxed">
                                You represent and warrant to Medulla that your access and use of the Service will be in
                                accordance with these Terms and Conditions and with all applicable laws, rules, and
                                regulations of India and any other relevant jurisdiction, including those regarding online
                                conduct or acceptable content, and those regarding the transmission of data or information
                                exported from India and/or the jurisdiction in which you reside. You further represent and
                                warrant that you have created or own any material you submit via the Service (including
                                Activity Materials and Content) and that you have the right, as applicable, to grant us a
                                license to use that material as set forth above or the right to assign that material to us as set
                                forth below.
                            </p>
                        </motion.div>


                        {/* Section: Submission of Content */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.7 }}
                            className="bg-white rounded-2xl shadow-sm p-8"
                        >
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Submission of Content</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                As a condition of submitting any ratings, reviews, information, data, text, photographs, audio
                                clips, audiovisual works, translations, clinical notes, medical protocols, or other materials on
                                the Service (collectively, "Content"), you hereby grant to Medulla a full-paid, royalty-free,
                                perpetual, irrevocable, worldwide, nonexclusive, transferable, and sublicensable license to
                                use, reproduce, copy, adapt, modify, merge, distribute, publicly display, and create derivative
                                works from the Content; incorporate the Content into other works; and sublicense through
                                multiple tiers the Content. You acknowledge that this license cannot be terminated by you
                                once your Content is submitted to the Service. You represent that you own or have secured
                                all legal rights necessary for the Content submitted by you to be used by you, Medulla, and
                                others as described and otherwise contemplated in these Terms and Conditions. You
                                understand that other users will have access to the Content and that neither they nor Medulla
                                have any obligation to you or anyone else to maintain the confidentiality of the Content.               
                            </p>
                            <br />
                            <p className="text-gray-600 leading-relaxed">
                                You will not upload, display, or otherwise provide on or through the Service any Content
                                that:
                            </p>

                            <ol type="i" className="list-decimal list-inside text-gray-600 leading-relaxed">
                                <li>is libelous, defamatory, abusive, threatening, harassing, hateful, offensive, or
                                    otherwise violates any law or infringes upon the rights of any third party (including
                                    copyright, trademark, privacy, publicity, or other personal or proprietary rights);</li>
                                <li>in Medulla's sole judgment, is objectionable, restricts or inhibits any other person from
                                    using the Service, or may expose Medulla or its users to any harm or liability of any kind;</li>
                                <li>violates Medulla's Community Guidelines;</li>
                                <li>contains patient-identifying information that violates privacy laws or medical ethics
                                    standards.</li>
                            </ol>
                        </motion.div>

                        {/* Section: Medical Disclaimer */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                            className="bg-white rounded-2xl shadow-sm p-8"
                        >
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Medical Disclaimer</h2>
                            <p className="text-gray-600 leading-relaxed">
                                The Service provides information and tools for healthcare professionals in India. The
                                information and materials available through the Service are for informational purposes only
                                and are not intended to constitute professional medical advice, diagnosis, or treatment. The
                                Service is designed as a resource and reference tool for healthcare professionals who should
                                rely on their professional judgment, training, and experience when treating patients. Medulla
                                does not warrant or guarantee the accuracy, completeness, or adequacy of the information
                                contained in or available through the Service. Healthcare professionals should independently
                                verify any clinical information and evaluate it in conjunction with their own professional
                                judgment. By using the Service, you acknowledge and agree that you are doing so at your
                                own risk and that neither Medulla nor its suppliers are responsible or liable for any claim,
                                loss, or damage arising from the use of the Service.                            
                            </p>
                        </motion.div>

                        {/* Section: Indemnification of Medulla */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.9 }}
                            className="bg-white rounded-2xl shadow-sm p-8"
                        >
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Indemnification of Medulla</h2>
                            <p className="text-gray-600 leading-relaxed">
                                You agree to defend, indemnify, and hold harmless Medulla and its directors, officers,
                                employees, contractors, agents, suppliers, licensors, successors, and assigns, from and against
                                any and all losses, claims, causes of action, obligations, liabilities, and damages whatsoever,
                                including attorneys' fees, arising out of or relating to your access or use of the Service, any
                                false representation made to us (as part of these Terms and Conditions or otherwise), your
                                breach of any of these Terms and Conditions, or any claim that any content we provide to you
                                is inaccurate, inappropriate, or defective in any way whatsoever.                            
                            </p>
                        </motion.div>

                        {/* Section: License to Apps */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 1.0 }}
                            className="bg-white rounded-2xl shadow-sm p-8"
                        >
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">License to Apps</h2>
                            <p className="text-gray-600 leading-relaxed">
                                Subject to the terms of these Terms and Conditions, Medulla grants you a non-transferable,
                                non-exclusive license to download, install, and use one copy of each App in object code form
                                only on an interactive wireless device that you own or control. You may not derive or attempt
                                to derive the source code of all or any portion of any App, permit any third party to derive or
                                attempt to derive such source code, or reverse engineer, decompile, disassemble, or translate
                                any App or any part thereof. Medulla and its licensors own and shall retain all intellectual
                                property rights and other rights in and to the Apps, and any changes, modifications, or
                                corrections thereto.
                            </p>
                        </motion.div>

                        {/* Section: Payment Processors */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 1.1 }}
                            className="bg-white rounded-2xl shadow-sm p-8"
                        >
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Payment Processors</h2>
                            <p className="text-gray-600 leading-relaxed">
                                While the Service is currently offered free of charge, any future financial transactions made
                                in connection with the Service will be processed by a third party in accordance with their
                                respective terms of use, privacy policy, and/or any applicable payment terms and conditions.
                                We encourage you to learn about the practices of such third parties. In no event will Medulla
                                be responsible for the actions or inactions of any third-party payment processor, including,
                                but not limited to, system downtime or payment service outages.                            
                            </p>
                        </motion.div>

                        {/* Section: Refund Policy */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 1.2 }}
                            className="bg-white rounded-2xl shadow-sm p-8"
                        >
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Refund Policy</h2>
                            <p className="text-gray-600 leading-relaxed">
                                The Service is currently provided free of charge. Should Medulla implement any paid
                                features in the future, all payments would be nonrefundable unless otherwise stated at the
                                time of purchase. There would be no refunds or credits for partially used membership
                                periods. However, Medulla may grant refunds or credits on a case-by-case basis at our sole
                                discretion. Medulla's grant of a refund or credit in one instance does not obligate Medulla to
                                provide a refund or credit in the future, under any circumstances.                             
                            </p>
                        </motion.div>

                        {/* Section: Third-Party Links, Sites, and Services */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 1.3 }}
                            className="bg-white rounded-2xl shadow-sm p-8"
                        >
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Links, Sites, and Services</h2>
                            <p className="text-gray-600 leading-relaxed">
                                The Service may contain links to third-party websites, advertisers, services, special offers, or
                                other events or activities that are not owned or controlled by Medulla. We do not endorse or
                                assume any responsibility for any such third-party sites, information, materials, products, or
                                services. If you access any third-party website, service, or content from Medulla, you
                                understand that these Terms and Conditions and our Privacy Policy do not apply to your use
                                of such sites. You expressly acknowledge and agree that Medulla shall not be responsible or
                                liable, directly or indirectly, for any damage or loss arising from your use of any third-party
                                website, service, or content.                             
                            </p>
                            <br />
                            <p className="text-gray-600 leading-relaxed">
                                The Service may include advertisements, which may be targeted to the Content or
                                information on the Service, or other information. The types and extent of advertising by
                                Medulla on the Service are subject to change. In consideration for Medulla granting you
                                access to and use of the Service, you agree that Medulla and its third-party providers and
                                partners may place such advertising in connection with the display of content or information
                                submitted by you or others.
                            </p>
                        </motion.div>

                        {/* Section: No Representations or Warranties by Medulla */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 1.4 }}
                            className="bg-white rounded-2xl shadow-sm p-8"
                        >
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">No Representations or Warranties by Medulla</h2>
                            <p className="text-gray-600 leading-relaxed">
                                THE SERVICE, INCLUDING ALL IMAGES, AUDIO FILES, AND OTHER CONTENT
                                THEREIN, AND ANY OTHER INFORMATION, PROPERTY, AND RIGHTS GRANTED
                                OR PROVIDED TO YOU BY MEDULLA ARE PROVIDED TO YOU ON AN "AS IS"
                                BASIS. MEDULLA AND ITS SUPPLIERS MAKE NO REPRESENTATIONS OR
                                WARRANTIES OF ANY KIND WITH RESPECT TO THE SERVICE, EITHER EXPRESS
                                OR IMPLIED, AND ALL SUCH REPRESENTATIONS AND WARRANTIES,
                                INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
                                PARTICULAR PURPOSE, OR NON-INFRINGEMENT, ARE EXPRESSLY
                                DISCLAIMED. WITHOUT LIMITING THE GENERALITY OF THE FOREGOING,
                                MEDULLA DOES NOT MAKE ANY REPRESENTATION OR WARRANTY OF ANY
                                KIND RELATING TO ACCURACY, SERVICE AVAILABILITY, COMPLETENESS,
                                INFORMATIONAL CONTENT, ERROR-FREE OPERATION, RESULTS TO BE
                                OBTAINED FROM USE, OR NON-INFRINGEMENT. ACCESS AND USE OF THE
                                SERVICE MAY BE UNAVAILABLE DURING PERIODS OF PEAK DEMAND,
                                SYSTEM UPGRADES, MALFUNCTIONS, OR SCHEDULED OR UNSCHEDULED
                                MAINTENANCE OR FOR OTHER REASONS. SOME JURISDICTIONS DO NOT
                                ALLOW THE EXCLUSION OF IMPLIED WARRANTIES, SO THE ABOVE
                                EXCLUSION MAY NOT APPLY TO YOU.                             
                            </p>
                        </motion.div>

                        {/* Section: Limitation on Types of Damages/Limitation of Liability */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 1.5 }}
                            className="bg-white rounded-2xl shadow-sm p-8"
                        >
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                Limitation on Types of Damages / Limitation of Liability
                            </h2>
                            <p className="text-gray-600 leading-relaxed">
                                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT
                                WILL MEDULLA BE LIABLE TO YOU OR ANY THIRD PARTY CLAIMING
                                THROUGH YOU (WHETHER BASED IN CONTRACT, TORT, STRICT LIABILITY, OR
                                OTHER THEORY) FOR INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR
                                EXEMPLARY DAMAGES ARISING OUT OF OR RELATING TO THE ACCESS OR
                                USE OF, OR THE INABILITY TO ACCESS OR USE, THE SERVICE OR ANY
                                PORTION THEREOF, INCLUDING BUT NOT LIMITED TO THE LOSS OF USE OF
                                THE SERVICE, INACCURATE RESULTS, LOSS OF PROFITS, BUSINESS
                                INTERRUPTION, OR DAMAGES STEMMING FROM LOSS OR CORRUPTION OF
                                DATA OR DATA BEING RENDERED INACCURATE, THE COST OF RECOVERING
                                ANY DATA, THE COST OF SUBSTITUTE SERVICES, OR CLAIMS BY THIRD
                                PARTIES FOR ANY DAMAGE TO COMPUTERS, SOFTWARE, MODEMS,
                                TELEPHONES, OR OTHER PROPERTY, EVEN IF MEDULLA HAS BEEN ADVISED
                                OF THE POSSIBILITY OF SUCH DAMAGES. TO THE MAXIMUM EXTENT
                                PERMITTED BY APPLICABLE LAW, MEDULLA'S LIABILITY TO YOU OR ANY
                                THIRD PARTY CLAIMING THROUGH YOU FOR ANY CAUSE WHATSOEVER, AND
                                REGARDLESS OF THE FORM OF THE ACTION, IS LIMITED TO THE AMOUNT
                                PAID, IF ANY, BY YOU TO MEDULLA FOR THE SERVICE IN THE 12 MONTHS
                                PRIOR TO THE INITIAL ACTION GIVING RISE TO LIABILITY. THIS IS AN
                                AGGREGATE LIMIT. THE EXISTENCE OF MORE THAN ONE CLAIM HEREUNDER
                                WILL NOT INCREASE THIS LIMIT.                            
                            </p>
                            <br />
                            <p className="text-gray-600 leading-relaxed">
                                You understand and agree that we have set our prices and entered into these Terms and
                                Conditions with you in reliance upon the limitations of liability set forth in these Terms and
                                Conditions, which allocate risk between us and form the basis of a bargain between the
                                parties.
                            </p>
                        </motion.div>

                        {/* Section: Termination */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 1.6 }}
                            className="bg-white rounded-2xl shadow-sm p-8"
                        >
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Termination</h2>
                            <p className="text-gray-600 leading-relaxed">
                                Medulla may terminate your access and use of the Service immediately at any time, for any
                                reason, and at such time you will have no further right to use the Service. You may terminate
                                your Medulla account at any time by following the instructions available through the Service.
                                Sections 1, 6, 8, and 10-28 of these Terms and Conditions shall survive any termination.                            
                            </p>
                        </motion.div>

                        {/* Section: Proprietary Rights in Service Content and Activity Materials */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 1.7 }}
                            className="bg-white rounded-2xl shadow-sm p-8"
                        >
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                Proprietary Rights in Service Content and Activity Materials
                            </h2>
                            <p className="text-gray-600 leading-relaxed">
                                All content available through the Service, including designs, text, graphics, images,
                                information, software, audio, and other files, and their selection and arrangement ("Service
                                Content"), are the proprietary property of Medulla or its licensors. No Service Content may
                                be modified, copied, distributed, framed, reproduced, republished, downloaded, scraped,
                                displayed, posted, transmitted, or sold in any form or by any means, in whole or in part, other
                                than as expressly permitted in these Terms and Conditions. You may not use any data
                                mining, robots, scraping, or similar data gathering or extraction methods to obtain Service
                                Content. As between you and Medulla, all data, information, and materials generated from
                                your access and use of the clinical tools, reference materials, calculators, and collaborative
                                features made available on or through the Service, including content generated by you
                                ("Activity Materials"), shall be exclusively owned by Medulla, and you shall not have any
                                right to use such Activity Materials except as expressly authorized by these Terms and
                                Conditions. By using the Service, you hereby assign to Medulla any and all rights, title, and
                                interest, including any intellectual property rights or proprietary rights, in the Activity
                                Materials. All rights of Medulla or its licensors that are not expressly granted in these Terms
                                and Conditions are reserved to Medulla and its licensors.
                            </p>
                        </motion.div>

                        {/* Section: Collaboration and Communication Features */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 1.8 }}
                            className="bg-white rounded-2xl shadow-sm p-8"
                        >
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Collaboration and Communication Features</h2>
                            <p className="text-gray-600 leading-relaxed">
                                The Service may include features that allow healthcare professionals to communicate,
                                collaborate, and share information with each other. You agree to use these features
                                responsibly and professionally. You will not use the collaboration and communication
                                features for any purpose that violates applicable laws, regulations, or professional standards,
                                including but not limited to sharing protected health information in a manner that violates
                                applicable privacy laws. Medulla does not monitor all communications and is not responsible
                                for the content of communications between users. However, Medulla reserves the right to
                                remove any content and/or restrict any user's access to the collaboration and communication
                                features if Medulla becomes aware that such content or user violates these Terms and
                                Conditions.
                            </p>
                        </motion.div>

                        {/* Section: Trademarks */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 1.9 }}
                            className="bg-white rounded-2xl shadow-sm p-8"
                        >
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Trademarks</h2>
                            <p className="text-gray-600 leading-relaxed">
                                "Medulla" and all other trademarks, service marks, graphics, and logos used in connection
                                with the Service are trademarks or service marks of Medulla or their respective owners.
                                Access and use of the Service does not grant or provide you with the right or license to
                                reproduce or otherwise use the Medulla name or any Medulla or third-party trademarks,
                                service marks, graphics, or logos.
                            </p>
                        </motion.div>

                        {/* Section: Privacy */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 2.0 }}
                            className="bg-white rounded-2xl shadow-sm p-8"
                        >
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Privacy</h2>
                            <p className="text-gray-600 leading-relaxed">
                                Use of the Service is also governed by our Privacy Policy, a copy of which is located at{" "}
                                <a href="https://www.medulla.app/privacy" className="text-primary hover:underline">
                                    www.medulla.app/privacy
                                </a>
                                . By using the Service, you consent to the terms of the Privacy Policy.
                            </p>
                        </motion.div>

                        {/* Section: Notice for Claims of Copyright Violations and Agent for Notice */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 2.1 }}
                            className="bg-white rounded-2xl shadow-sm p-8"
                        >
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                Notice for Claims of Copyright Violations and Agent for Notice
                            </h2>

                            <p className="text-gray-600 leading-relaxed mb-4">
                                If you are a copyright owner and have a good faith belief that any material available through
                                the Service infringes upon your copyrights, you may submit a copyright infringement
                                notification to Medulla pursuant to the Digital Millennium Copyright Act by providing us
                                with the following information in writing:
                            </p>

                            <ol className="text-gray-600 leading-relaxed list-decimal list-inside space-y-2 mb-6">
                                <li>
                                    An electronic or physical signature of the copyright owner or the person authorized to
                                    act on behalf of the owner of the copyright interest.
                                </li>
                                <li>
                                    A description of the copyrighted work that you claim has been infringed.
                                </li>
                                <li>
                                    A description of where the material that you claim is infringing is located on the
                                    Service, with enough detail that we may find it on the Service.
                                </li>
                                <li>
                                    Your address, telephone number, and email address.
                                </li>
                                <li>
                                    A statement by you that you have a good faith belief that the disputed use is not
                                    authorized by the copyright owner, its agent, or the law.
                                </li>
                                <li>
                                    A statement by you, made under penalty of perjury, that the above information in your
                                    notice is accurate and that you are the copyright owner or are authorized to act on the
                                    copyright owner's behalf. Please consult your legal counsel for further details or see
                                    17 U.S.C. §512(c)(3). Medulla's Agent for Notice of claims of copyright infringement
                                    can be reached as follows: By email: hello@Medulla.ai
                                </li>
                            </ol>

                            <p className="text-gray-600 leading-relaxed mb-4">
                                If you believe the content that was removed (or to which access was disabled) is not
                                infringing, or that you have the authorization from the copyright owner, the copyright owner's
                                agent, or pursuant to the law, to post and use such content, you may submit a counter-notice
                                to the address listed above containing the following information:
                            </p>

                            <ol className="text-gray-600 leading-relaxed list-decimal list-inside space-y-2">
                                <li>
                                    Your physical or electronic signature.
                                </li>
                                <li>
                                    Identification of the content that has been removed or to which access has been
                                    disabled and the location at which the content appeared before it was removed or
                                    disabled.
                                </li>
                                <li>
                                    A statement that you have a good faith belief that the content was removed or
                                    disabled as a result of mistake or a misidentification of the content.
                                </li>
                                <li>
                                    Your name, physical address, telephone number, and e-mail address, a statement that
                                    you consent to the jurisdiction of the federal court in the judicial district in which you
                                    reside, and a statement that you will accept service of process from the person who
                                    provided notification of the alleged infringement. After we receive your counter
                                    notification, we will forward it to the party who submitted the original claim of
                                    copyright infringement. Please note that when we forward the counter-notification, it
                                    includes your personal information. By submitting a counter-notification, you consent
                                    to having your information revealed in this way. We will not forward the counter
                                    notification to any party other than the original claimant. After we send out the
                                    counter-notification, the claimant must then notify us within 10 days that he or she
                                    has filed an action seeking a court order to restrain you from engaging in infringing
                                    activity relating to the content that was removed or disabled. If we receive such
                                    notification, we will be unable to restore the material. If we do not receive such
                                    notification, we may reinstate the material.
                                </li>
                            </ol>
                        </motion.div>


                        {/* Section: Governing Law */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 2.2 }}
                            className="bg-white rounded-2xl shadow-sm p-8"
                        >
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Governing Law</h2>
                            <p className="text-gray-600 leading-relaxed">
                                These Terms and Conditions shall be governed by and construed under the laws of India,
                                excluding any conflict of laws provisions, regardless of your country of origin or where you
                                access the Service.
                            </p>
                        </motion.div>

                        {/* Section: Choice of Forum */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 2.3 }}
                            className="bg-white rounded-2xl shadow-sm p-8"
                        >
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Choice of Forum</h2>
                            <p className="text-gray-600 leading-relaxed">
                                Subject to Section 24 (Dispute Resolution & Arbitration), all judicial proceedings relating to
                                or arising out of these Terms and Conditions or the Service shall be brought in the courts
                                sitting in Honourable High Court of Kerala, India. Both parties hereby consent to the personal
                                jurisdiction of the courts sitting in Honourable High Court of Kerala, and waive any
                                objections to venue in those courts.                            
                            </p>
                        </motion.div>

                        {/* Section: Dispute Resolution & Arbitration */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 2.4 }}
                            className="bg-white rounded-2xl shadow-sm p-8"
                        >
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Dispute Resolution & Arbitration</h2>
                            <p className="text-gray-600 leading-relaxed">
                                ANY DISPUTE OR CLAIM RELATING TO THESE TERMS AND CONDITIONS OR
                                THE SERVICE AND SEEKING MONETARY RELIEF SHALL BE RESOLVED BY
                                BINDING ARBITRATION ON AN INDIVIDUAL BASIS ACCORDING TO THIS
                                SECTION.                            
                            </p>
                            <br />
                            <p className="text-gray-600 leading-relaxed">
                                Prior to initiating any arbitration, the party seeking arbitration ("Claimant") must first send a
                                written Notice of Claim to the other party ("Respondent") by email or USPS Certified Mail.
                                This Notice must contain the Claimant's name, address, and contact information; the identity
                                of counsel (if any); the nature and basis of the claim; and the specific relief sought. Within
                                thirty (30) days of receipt of the Notice, the parties shall engage in at least one good-faith
                                settlement conference by telephone or video conference. An individual party must be
                                personally present at this settlement conference, and an entity party must be present at this
                                settlement conference through an employee with settlement authority, though both parties
                                may bring counsel as well. Arbitration shall be initiated only if no settlement can be reached
                                at this settlement conference.
                            </p><br />

                            <p className="text-gray-600 leading-relaxed">
                                The arbitration shall be conducted by a single arbitrator and administered by the Indian
                                Council of Arbitration ("ICA") according to its Consumer Arbitration Rules, Procedures for
                                the Resolution of Disputes Through Document Submission, Consumer Fee Schedule, and
                                Supplementary Rules for Multiple Case Filings ("ICA Rules"), and the provisions of this
                                section. Where they conflict, the provisions of this section shall take precedence over any
                                ICA Rules. If the ICA is unavailable to conduct an arbitration, the parties shall arbitrate
                                through another mutually agreed-upon organization or on an ad hoc basis according to the
                                rules in this section. The arbitration shall be conducted in the English language.
                            </p> <br />

                            <p className="text-gray-600 leading-relaxed">
                            If a claim is within the jurisdiction of a small claims court, either party may choose to have 
                            the case heard in the small claims court on an individual basis, instead of arbitration. 
                            </p> <br />

                            <p className="text-gray-600 leading-relaxed">
                                If twenty-five (25) or more similar Demands for Arbitration are filed against or on behalf of
                                the same party or related parties, and if representation of the parties is consistent or
                                coordinated across the cases, then the ICA's Supplementary Rules for Multiple Case Filings
                                shall apply. Counsel filing twenty-five (25) or more similar Demands for Arbitration against
                                Medulla must comply with the ICA's Filing Requirements for Multiple Case Filings. There
                                shall be no class or collective arbitration, or joinder of claims, except as provided for in the
                                ICA's Supplementary Rules for Multiple Case Filings.
                            </p> <br />

                            <p className="text-gray-600 leading-relaxed">
                                If you do not want to arbitrate disputes with Medulla and you are an individual, you may opt
                                out of this arbitration agreement by sending an email to hello@medulla.app within 30 days of
                                the day you first access or use the Service.
                                Notwithstanding the above, either party may apply for and obtain non-monetary, injunctive
                                remedies, or urgent relief in court without engaging in any arbitration or informal dispute
                                resolution process.
                            </p>

                        </motion.div>

                        {/* Section: Language */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 2.5 }}
                            className="bg-white rounded-2xl shadow-sm p-8"
                        >
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Language</h2>
                            <p className="text-gray-600 leading-relaxed">
                                This agreement was originally written in English. In the event of any conflict between the English version and any translated version, the English version shall control.
                            </p>
                        </motion.div>

                        {/* Section: Miscellaneous */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 2.6 }}
                            className="bg-white rounded-2xl shadow-sm p-8"
                        >
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Miscellaneous</h2>
                            <p className="text-gray-600 leading-relaxed">
                                These Terms and Conditions constitute the entire agreement between Medulla and you
                                concerning the subject matter hereof. In the event that any of the Terms and Conditions are
                                held by a court or other tribunal of competent jurisdiction to be unenforceable, such
                                provisions shall be limited or eliminated to the minimum extent necessary so that these Terms
                                and Conditions shall otherwise remain in full force and effect. A waiver by Medulla or you of
                                any provision of these Terms and Conditions or any breach thereof, in any one instance, will
                                not waive such term or condition or any subsequent breach thereof. Medulla may assign its
                                rights or obligations under these Terms and Conditions without condition. These Terms and
                                Conditions will be binding upon and will inure to the benefit of Medulla and you, and
                                Medulla's and your respective successors and permitted assigns.                            
                            </p>
                        </motion.div>

                        {/* Footer Note */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 2.7 }}
                            className="mt-8 pt-6 border-t border-gray-200"
                        >
                            <p className="text-gray-500 text-sm">
                                Effective from April 9, 2025. Version: 2.0
                            </p>
                        </motion.div>
                    </div>
                </div>
            </main>
            <FooterSection />
        </div>
    );
}
