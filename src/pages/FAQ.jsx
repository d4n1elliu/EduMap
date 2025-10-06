import { useState } from 'react';
import Footer from './Footer';
import Background from './Background';

export default function FAQ() {
    const [openItems, setOpenItems] = useState({});

    const toggleItem = (index) => {
        setOpenItems(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    const faqData = [
        {
            question: "How do I get started with EduMap?",
            answer: "Getting started is easy! Simply create an account by clicking 'Sign Up' in the top navigation, complete our course questionnaire to get personalized recommendations and explore our buddy system and events map to connect with other students and mentors."
        },
        {
            question: "Is EduMap completely free to use?",
            answer: "Yes! EduMap is completely free for all students. We're committed to making education accessible to everyone and believe that finding the right educational path shouldn't come with a cost."
        },
        {
            question: "How does the Course Questionnaire work?",
            answer: "Our Course Questionnaire is designed to understand your interests, academic goals and learning preferences. Based on your responses, we provide personalized course recommendations and educational pathways that align with your aspirations."
        },
        {
            question: "What is the Buddy System?",
            answer: "The Buddy System pairs you with experienced mentors and fellow students who can guide you through your academic journey. Whether you need help with course selection, study strategies or career advice, your buddy is there to support you."
        },
        {
            question: "How does the Events & Networking Map work?",
            answer: "Our Events & Networking Map highlights academic and career development opportunities in your area. You can discover workshops, seminars, networking events and career fairs that can help advance your educational and professional goals."
        },
        {
            question: "Can I change my course recommendations?",
            answer: "Absolutely! You can retake the course questionnaire at any time to update your preferences. Your recommendations will automatically adjust based on your new responses and evolving interests."
        },
        {
            question: "How do I find a suitable buddy?",
            answer: "Our matching algorithm considers your academic interests, goals and preferences to pair you with the most compatible mentor or study buddy. You can also browse available mentors and request specific matches."
        },
        {
            question: "Is my personal information secure?",
            answer: "Yes, we take your privacy seriously. All personal information is encrypted and stored securely. We never share your data with third parties without your explicit consent. You can read our full Privacy Policy for more details."
        },
        {
            question: "Can I use EduMap on mobile devices?",
            answer: "Yes! EduMap is fully responsive and works seamlessly on desktop, tablet and mobile devices. You can access all features including the questionnaire, buddy system and events map from any device."
        },
        {
            question: "How often are new events added to the map?",
            answer: "We continuously update our events database with new opportunities. Events are added daily and you can set up notifications to be alerted when new events matching your interests become available."
        },
        {
            question: "What if I can't find events in my area?",
            answer: "If you don't see events in your immediate area, try expanding your search radius or looking for virtual events. We also encourage you to suggest events you know about so we can help other students in your area."
        },
        {
            question: "How do I contact support if I have issues?",
            answer: "You can reach our support team through the Contact Us page, email us at support@edumap.com or call us at +61 (123456789). We typically respond within 24 hours and are here to help with any questions or technical issues."
        }
    ];

    return (
        <Background>
            <div className="flex-1 flex items-center justify-center px-4 py-12">
                <div className="w-full max-w-4xl">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-5xl md:text-6xl font-bold text-blue-700 mb-6">Frequently Asked Questions</h1>
                    </div>

                    {/* FAQ Items */}
                    <div className="space-y-4">
                        {faqData.map((item, index) => (
                            <div key={index} className="bg-white/100 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden">
                                <button
                                    onClick={() => toggleItem(index)}
                                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-white/30 transition-colors"
                                >
                                    <h3 className="text-lg font-semibold text-black pr-4">
                                        {item.question}
                                    </h3>
                                    <svg
                                        className={`w-5 h-5 text-orange-500 transition-transform duration-200 ${
                                            openItems[index] ? 'rotate-180' : ''
                                        }`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                </button>
                                
                                {openItems[index] && (
                                    <div className="px-6 pb-4">
                                        <div className="border-t border-gray-200 pt-4">
                                            <p className="text-black leading-relaxed">
                                                {item.answer}
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Contact Section - Call to Action for Additional Support */}
                    {/* This section provides alternative ways for users to get help if FAQ doesn't answer their questions */}
                    <div className="mt-12 bg-white/100 backdrop-blur-sm p-8 rounded-lg">
                        {/* Centered content container */}
                        <div className="text-center">
                            {/* Main heading to encourage users to reach out */}
                            <h2 className="text-2xl font-bold text-orange-700 mb-4">Any More Questions?</h2>
                            
                            {/* Descriptive text explaining the support options */}
                            <p className="text-black mb-6">
                                Can't find the answer you're looking for? Our support team is here to help!
                            </p>
                            
                            {/* Button container with responsive flex layout */}
                            {/* flex-col on mobile, flex-row on small screens and up */}
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                {/* Primary Contact Us button - navigates to full contact page */}
                                <a
                                    href="/contact"
                                    className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors"
                                >
                                    Contact Us
                                </a>
                                
                                {/* Secondary Email Support button - opens default email client */}
                                <a
                                    href="mailto:support@edumap.com"
                                    className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors"
                                >
                                    Email Support
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </Background>
    );
}