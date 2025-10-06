import Footer from './Footer';
import Background from './Background';

export default function TermsOfService() {
    return (
        <Background>
            <div className="flex-1 flex items-center justify-center px-4 py-12">
                <div className="w-full max-w-4xl">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-5xl md:text-6xl font-bold text-blue-700 mb-6">Terms of Service</h1>
                        <p className="font-bold text-black text-sm">
                            Last updated: 1st October 2025
                        </p>
                    </div>

                    {/* Terms Content */}
                    <div className="bg-white/100 backdrop-blur-sm p-8 rounded-lg shadow-lg space-y-8">
                        
                        {/* Introduction */}
                        <section>
                            <h2 className="text-2xl font-bold text-orange-500 mb-4">1. Introduction</h2>
                            <p className="text-gray-800 leading-relaxed mb-4">
                                Welcome to EduMap. These Terms of Service ("Terms") govern your use of our educational platform 
                                and services. By accessing or using EduMap, you agree to be bound by these Terms.
                            </p>
                            <p className="text-gray-800 leading-relaxed">
                                EduMap is a student-driven initiative designed to help university students make informed 
                                academic and career decisions through course questionnaires, mentorship programs, and 
                                networking opportunities.
                            </p>
                        </section>

                        {/* Acceptance of Terms */}
                        <section>
                            <h2 className="text-2xl font-bold text-orange-500 mb-4">2. Acceptance of Terms</h2>
                            <p className="text-gray-800 leading-relaxed mb-4">
                                By creating an account, accessing our platform, or using any of our services, you 
                                acknowledge that you have read, understood, and agree to be bound by these Terms.
                            </p>
                            <p className="text-gray-800 leading-relaxed">
                                If you do not agree to these Terms, you may not access or use our services.
                            </p>
                        </section>

                        {/* User Accounts */}
                        <section>
                            <h2 className="text-2xl font-bold text-orange-500 mb-4">3. User Accounts</h2>
                            <div className="space-y-4">
                                <p className="text-gray-800 leading-relaxed">
                                    <strong>Account Creation:</strong> You must provide accurate and complete information 
                                    when creating your account. You are responsible for maintaining the confidentiality 
                                    of your account credentials.
                                </p>
                                <p className="text-gray-800 leading-relaxed">
                                    <strong>Account Responsibility:</strong> You are responsible for all activities 
                                    that occur under your account. You must notify us immediately of any unauthorized 
                                    use of your account.
                                </p>
                                <p className="text-gray-800 leading-relaxed">
                                    <strong>Account Termination:</strong> We reserve the right to suspend or terminate 
                                    your account if you violate these Terms or engage in inappropriate behavior.
                                </p>
                            </div>
                        </section>

                        {/* Acceptable Use */}
                        <section>
                            <h2 className="text-2xl font-bold text-orange-500 mb-4">4. Acceptable Use Policy</h2>
                            <div className="space-y-4">
                                <p className="text-gray-800 leading-relaxed">
                                    <strong>Permitted Uses:</strong> You may use EduMap for legitimate educational 
                                    purposes, including:
                                </p>
                                <ul className="list-disc list-inside text-gray-800 ml-4 space-y-2">
                                    <li>Completing course questionnaires to receive recommendations</li>
                                    <li>Participating in mentorship programs</li>
                                    <li>Discovering educational and networking events</li>
                                    <li>Connecting with other students and mentors</li>
                                </ul>
                                <p className="text-gray-800 leading-relaxed">
                                    <strong>Prohibited Activities:</strong> You may not:
                                </p>
                                <ul className="list-disc list-inside text-gray-800 ml-4 space-y-2">
                                    <li>Share false or misleading information</li>
                                    <li>Harass, abuse, or harm other users</li>
                                    <li>Attempt to gain unauthorized access to our systems</li>
                                    <li>Use the platform for commercial purposes without permission</li>
                                    <li>Violate any applicable laws or regulations</li>
                                </ul>
                            </div>
                        </section>

                        {/* Privacy and Data */}
                        <section>
                            <h2 className="text-2xl font-bold text-orange-500 mb-4">5. Privacy and Data Protection</h2>
                            <div className="space-y-4">
                                <p className="text-gray-800 leading-relaxed">
                                    <strong>Data Collection:</strong> We collect information you provide directly, 
                                    such as your profile information, questionnaire responses and communication 
                                    preferences.
                                </p>
                                <p className="text-gray-800 leading-relaxed">
                                    <strong>Data Usage:</strong> We use your data to provide personalized 
                                    recommendations, facilitate mentorship connections and improve our services.
                                </p>
                                <p className="text-gray-800 leading-relaxed">
                                    <strong>Data Security:</strong> We implement appropriate security measures to 
                                    protect your personal information from unauthorized access, alteration or disclosure.
                                </p>
                                <p className="text-gray-800 leading-relaxed">
                                    <strong>Third-Party Sharing:</strong> We do not sell your personal information 
                                    to third parties. We may share data only as necessary to provide our services 
                                    or as required by law.
                                </p>
                            </div>
                        </section>

                        {/* Intellectual Property */}
                        <section>
                            <h2 className="text-2xl font-bold text-orange-500 mb-4">6. Intellectual Property</h2>
                            <div className="space-y-4">
                                <p className="text-gray-800 leading-relaxed">
                                    <strong>Our Content:</strong> All content on EduMap, including text, graphics, 
                                    logos and software is owned by EduMap or our licensors and is protected by 
                                    copyright and other intellectual property laws.
                                </p>
                                <p className="text-gray-800 leading-relaxed">
                                    <strong>User Content:</strong> You retain ownership of content you submit to 
                                    our platform. By submitting content, you grant us a license to use, display  
                                    and distribute it as necessary to provide our services.
                                </p>
                                <p className="text-gray-800 leading-relaxed">
                                    <strong>Prohibited Use:</strong> You may not copy, modify, distribute or create 
                                    derivative works based on our content without our express written permission.
                                </p>
                            </div>
                        </section>

                        {/* Service Availability */}
                        <section>
                            <h2 className="text-2xl font-bold text-orange-500 mb-4">7. Service Availability</h2>
                            <div className="space-y-4">
                                <p className="text-gray-800 leading-relaxed">
                                    <strong>Service Level:</strong> We strive to maintain high service availability, 
                                    but we do not guarantee uninterrupted access to our platform.
                                </p>
                                <p className="text-gray-800 leading-relaxed">
                                    <strong>Maintenance:</strong> We may perform scheduled maintenance that may 
                                    temporarily interrupt service. We will provide reasonable notice when possible.
                                </p>
                                <p className="text-gray-800 leading-relaxed">
                                    <strong>Modifications:</strong> We reserve the right to modify, suspend or 
                                    discontinue any part of our services at any time with or without notice.
                                </p>
                            </div>
                        </section>

                        {/* Disclaimers */}
                        <section>
                            <h2 className="text-2xl font-bold text-orange-500 mb-4">8. Disclaimers</h2>
                            <div className="space-y-4">
                                <p className="text-gray-800 leading-relaxed">
                                    <strong>Educational Advice:</strong> The recommendations and advice provided 
                                    through EduMap are for informational purposes only and should not be considered 
                                    as professional academic or career counseling.
                                </p>
                                <p className="text-gray-800 leading-relaxed">
                                    <strong>Third-Party Content:</strong> We are not responsible for the accuracy 
                                    or reliability of information provided by mentors, event organizers, or other 
                                    third parties.
                                </p>
                                <p className="text-gray-800 leading-relaxed">
                                    <strong>No Warranty:</strong> Our services are provided "as is" without 
                                    warranties of any kind, either express or implied.
                                </p>
                            </div>
                        </section>

                        {/* Limitation of Liability */}
                        <section>
                            <h2 className="text-2xl font-bold text-orange-500 mb-4">9. Limitation of Liability</h2>
                            <p className="text-gray-800 leading-relaxed mb-4">
                                To the maximum extent permitted by law, EduMap shall not be liable for any indirect, 
                                incidental, special, consequential or punitive damages including but not limited to 
                                loss of profits, data or other intangible losses.
                            </p>
                            <p className="text-gray-800 leading-relaxed">
                                Our total liability to you for any claims arising from or relating to these Terms 
                                or our services shall not exceed the amount you paid us, if any for accessing our 
                                services.
                            </p>
                        </section>

                        {/* Changes to Terms */}
                        <section>
                            <h2 className="text-2xl font-bold text-orange-500 mb-4">10. Changes to Terms</h2>
                            <p className="text-gray-800 leading-relaxed mb-4">
                                We may update these Terms from time to time. We will notify you of any material 
                                changes by posting the new Terms on our website and updating the "Last updated" date.
                            </p>
                            <p className="text-gray-800 leading-relaxed">
                                Your continued use of our services after any changes constitutes acceptance of the 
                                new Terms.
                            </p>
                        </section>

                        {/* Contact Information */}
                        <section>
                            <h2 className="text-2xl font-bold text-orange-500 mb-4">11. Contact Information</h2>
                            <p className="text-gray-800 leading-relaxed mb-4">
                                If you have any questions about these Terms of Service, please contact us:
                            </p>
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <p className="text-gray-800">
                                    <strong>Email:</strong> support@edumap.com<br/>
                                    <strong>Phone:</strong> +61 (123456789)<br/>
                                    <strong>Address:</strong> 123 Education Street, Learning City, LC 12345
                                </p>
                            </div>
                        </section>

                        {/* Governing Law */}
                        <section>
                            <h2 className="text-2xl font-bold text-orange-500 mb-4">12. Governing Law</h2>
                            <p className="text-gray-800 leading-relaxed">
                                These terms shall be governed by and construed in accordance with the laws of 
                                the jurisdiction where EduMap operates. Any disputes arising from these Terms 
                                shall be resolved in the courts of that jurisdiction.
                            </p>
                        </section>

                    </div>

                    {/* Footer Note */}
                    <div className="mt-8 text-center">
                        <p className="font-bold text-black text-sm">
                            By using EduMap, you acknowledge that you have read and understood these Terms of Service.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </Background>
    );
}
