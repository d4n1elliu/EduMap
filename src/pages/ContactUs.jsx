import { useState } from 'react';
import ContentPage from '../components/layout/ContentPage';
import Alert from '../components/ui/Alert';
import Card from '../components/ui/Card';
import FormField from '../components/ui/FormField';
import { LocationIcon, MailIcon, PhoneIcon } from '../components/ui/Icons';
import { CONTACT_INFO } from '../config/site';

const EMPTY_FORM = { name: '', email: '', subject: '', message: '' };

const FIELDS = [
    { name: 'name', label: 'Full Name', type: 'text', placeholder: 'Your full name' },
    { name: 'email', label: 'Email Address', type: 'email', placeholder: 'your.email@example.com' },
    { name: 'subject', label: 'Subject', type: 'text', placeholder: "What's this about?" },
    { name: 'message', label: 'Message', textarea: true, rows: 6, placeholder: 'Tell us more about your question or concern...' },
];

const LINK_CLASS = 'text-orange-700 hover:text-orange-200 transition-colors';

const CONTACT_METHODS = [
    {
        icon: MailIcon,
        title: 'Email',
        value: <a href={`mailto:${CONTACT_INFO.email}`} className={LINK_CLASS}>{CONTACT_INFO.email}</a>,
        note: CONTACT_INFO.responseTime,
    },
    {
        icon: PhoneIcon,
        title: 'Phone',
        value: <a href={CONTACT_INFO.phoneHref} className={LINK_CLASS}>{CONTACT_INFO.phone}</a>,
        note: CONTACT_INFO.phoneHours,
    },
    {
        icon: LocationIcon,
        title: 'Office',
        value: (
            <p className="text-orange-700">
                {CONTACT_INFO.addressLines[0]}<br />{CONTACT_INFO.addressLines[1]}
            </p>
        ),
        note: CONTACT_INFO.addressNote,
    },
];

function ContactMethod({ icon: Icon, title, value, note }) {
    return (
        <div className="flex items-start space-x-4">
            <div className="bg-orange-500 p-3 rounded-lg">
                <Icon className="w-6 h-6 text-white" />
            </div>
            <div>
                <h4 className="text-lg font-semibold text-black mb-1">{title}</h4>
                {value}
                <p className="text-black text-sm mt-1">{note}</p>
            </div>
        </div>
    );
}

export default function ContactUs() {
    const [formData, setFormData] = useState(EMPTY_FORM);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulated submission until a backend endpoint exists
        setTimeout(() => {
            setSubmitted(true);
            setFormData(EMPTY_FORM);
            setIsSubmitting(false);
        }, 1000);
    };

    return (
        <ContentPage title="Contact Us">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <Card>
                    <h2 className="text-2xl font-bold text-gray-800 mb-6"> Enquires </h2>

                    {submitted && (
                        <Alert variant="success" className="mb-6 p-4 rounded">
                            Thank you for your message! We'll get back to you soon.
                        </Alert>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {FIELDS.map(({ name, ...field }) => (
                            <FormField
                                key={name}
                                id={name}
                                name={name}
                                value={formData[name]}
                                onChange={handleChange}
                                focusColor="orange"
                                required
                                {...field}
                            />
                        ))}

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>
                </Card>

                <div className="space-y-8">
                    <Card shadow={false}>
                        <h3 className="text-2xl font-bold text-black mb-6">Get in Touch</h3>
                        <div className="space-y-6">
                            {CONTACT_METHODS.map((method) => <ContactMethod key={method.title} {...method} />)}
                        </div>
                    </Card>
                </div>
            </div>
        </ContentPage>
    );
}
