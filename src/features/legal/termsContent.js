// Terms of Service copy. Each section's `content` is a list of blocks:
//   'text'                 -> paragraph
//   { label, text }        -> paragraph with a bold lead-in
//   { list: [...] }        -> bullet list
//   { contact: true }      -> site contact details box
export const TERMS_LAST_UPDATED = '1st October 2025';

export const TERMS_SECTIONS = [
    {
        title: 'Introduction',
        content: [
            'Welcome to EduMap. These Terms of Service ("Terms") govern your use of our educational platform and services. By accessing or using EduMap, you agree to be bound by these Terms.',
            'EduMap is a student-driven initiative designed to help university students make informed academic and career decisions through course questionnaires, mentorship programs, and networking opportunities.',
        ],
    },
    {
        title: 'Acceptance of Terms',
        content: [
            'By creating an account, accessing our platform, or using any of our services, you acknowledge that you have read, understood, and agree to be bound by these Terms.',
            'If you do not agree to these Terms, you may not access or use our services.',
        ],
    },
    {
        title: 'User Accounts',
        content: [
            { label: 'Account Creation', text: 'You must provide accurate and complete information when creating your account. You are responsible for maintaining the confidentiality of your account credentials.' },
            { label: 'Account Responsibility', text: 'You are responsible for all activities that occur under your account. You must notify us immediately of any unauthorized use of your account.' },
            { label: 'Account Termination', text: 'We reserve the right to suspend or terminate your account if you violate these Terms or engage in inappropriate behavior.' },
        ],
    },
    {
        title: 'Acceptable Use Policy',
        content: [
            { label: 'Permitted Uses', text: 'You may use EduMap for legitimate educational purposes, including:' },
            {
                list: [
                    'Completing course questionnaires to receive recommendations',
                    'Participating in mentorship programs',
                    'Discovering educational and networking events',
                    'Connecting with other students and mentors',
                ],
            },
            { label: 'Prohibited Activities', text: 'You may not:' },
            {
                list: [
                    'Share false or misleading information',
                    'Harass, abuse, or harm other users',
                    'Attempt to gain unauthorized access to our systems',
                    'Use the platform for commercial purposes without permission',
                    'Violate any applicable laws or regulations',
                ],
            },
        ],
    },
    {
        title: 'Privacy and Data Protection',
        content: [
            { label: 'Data Collection', text: 'We collect information you provide directly, such as your profile information, questionnaire responses and communication preferences.' },
            { label: 'Data Usage', text: 'We use your data to provide personalized recommendations, facilitate mentorship connections and improve our services.' },
            { label: 'Data Security', text: 'We implement appropriate security measures to protect your personal information from unauthorized access, alteration or disclosure.' },
            { label: 'Third-Party Sharing', text: 'We do not sell your personal information to third parties. We may share data only as necessary to provide our services or as required by law.' },
        ],
    },
    {
        title: 'Intellectual Property',
        content: [
            { label: 'Our Content', text: 'All content on EduMap, including text, graphics, logos and software is owned by EduMap or our licensors and is protected by copyright and other intellectual property laws.' },
            { label: 'User Content', text: 'You retain ownership of content you submit to our platform. By submitting content, you grant us a license to use, display and distribute it as necessary to provide our services.' },
            { label: 'Prohibited Use', text: 'You may not copy, modify, distribute or create derivative works based on our content without our express written permission.' },
        ],
    },
    {
        title: 'Service Availability',
        content: [
            { label: 'Service Level', text: 'We strive to maintain high service availability, but we do not guarantee uninterrupted access to our platform.' },
            { label: 'Maintenance', text: 'We may perform scheduled maintenance that may temporarily interrupt service. We will provide reasonable notice when possible.' },
            { label: 'Modifications', text: 'We reserve the right to modify, suspend or discontinue any part of our services at any time with or without notice.' },
        ],
    },
    {
        title: 'Disclaimers',
        content: [
            { label: 'Educational Advice', text: 'The recommendations and advice provided through EduMap are for informational purposes only and should not be considered as professional academic or career counseling.' },
            { label: 'Third-Party Content', text: 'We are not responsible for the accuracy or reliability of information provided by mentors, event organizers, or other third parties.' },
            { label: 'No Warranty', text: 'Our services are provided "as is" without warranties of any kind, either express or implied.' },
        ],
    },
    {
        title: 'Limitation of Liability',
        content: [
            'To the maximum extent permitted by law, EduMap shall not be liable for any indirect, incidental, special, consequential or punitive damages including but not limited to loss of profits, data or other intangible losses.',
            'Our total liability to you for any claims arising from or relating to these Terms or our services shall not exceed the amount you paid us, if any for accessing our services.',
        ],
    },
    {
        title: 'Changes to Terms',
        content: [
            'We may update these Terms from time to time. We will notify you of any material changes by posting the new Terms on our website and updating the "Last updated" date.',
            'Your continued use of our services after any changes constitutes acceptance of the new Terms.',
        ],
    },
    {
        title: 'Contact Information',
        content: [
            'If you have any questions about these Terms of Service, please contact us:',
            { contact: true },
        ],
    },
    {
        title: 'Governing Law',
        content: [
            'These terms shall be governed by and construed in accordance with the laws of the jurisdiction where EduMap operates. Any disputes arising from these Terms shall be resolved in the courts of that jurisdiction.',
        ],
    },
];
