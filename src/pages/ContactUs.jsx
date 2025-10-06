import { useState } from 'react';
import Footer from './Footer';
import Background from './Background';

export default function ContactUs() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Simulate form submission
        setTimeout(() => {
            setSubmitStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });
            setIsSubmitting(false);
        }, 1000);
    };

    return (
        <Background>
            <div className="flex-1 flex items-center justify-center px-4 py-12">
                <div className="w-full max-w-4xl">
                    {/* contactUs Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-orange-700 mb-4">Contact Us</h1>
                        <p className="text-xl font-medium text-blue-700 max-w-2xl mx-auto">
                            Have questions about EduMap? We'd love to hear from you. 
                            Send us a message and we'll respond as soon as possible.
                        </p>
                    </div>

                    {/* Enquires Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div className="bg-white/100 backdrop-blur-sm p-8 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6"> Enquires </h2>
                            
                            {submitStatus === 'success' && (
                                <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
                                    Thank you for your message! We'll get back to you soon.
                                </div>
                            )}

                            {/* Email Us Section */}
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                        placeholder="Your full name"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                        placeholder="your.email@example.com"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                        placeholder="What's this about?"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={6}
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
                                        placeholder="Tell us more about your question or concern..."
                                        required
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </button>
                            </form>
                        </div>

                        {/* Contact Information */}
                        <div className="space-y-8">
                            {/* Contact Details */}
                            <div className="bg-white/100 backdrop-blur-sm p-8 rounded-lg">
                                <h3 className="text-2xl font-bold text-black mb-6">Get in Touch</h3>
                                
                                <div className="space-y-6">
                                    <div className="flex items-start space-x-4">
                                        <div className="bg-orange-500 p-3 rounded-lg">
                                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-semibold text-black mb-1">Email</h4>
                                            <a href="mailto:support@edumap.com" className="text-orange-700 hover:text-orange-200 transition-colors">
                                                support@edumap.com
                                            </a>
                                            <p className="text-black text-sm mt-1">
                                                We'll respond within 24 hours
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="bg-orange-500 p-3 rounded-lg">
                                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-semibold text-black mb-1">Phone</h4>
                                            <a href="tel:+61-555-123-456" className="text-orange-700 hover:text-orange-200 transition-colors">
                                                +61 (123456789)
                                            </a>
                                            <p className="text-black text-sm mt-1">
                                                Mon-Fri 9AM-6PM EST
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="bg-orange-500 p-3 rounded-lg">
                                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-semibold text-black mb-1">Office</h4>
                                            <p className="text-orange-700">
                                                123 Education Street<br/>
                                                Learning City, LC 12345
                                            </p>
                                            <p className="text-black text-sm mt-1">
                                                Visit us by appointment
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </Background>
    );
}