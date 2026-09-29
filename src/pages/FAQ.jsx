import { Link } from 'react-router-dom';
import ContentPage from '../components/layout/ContentPage';
import Accordion from '../components/ui/Accordion';
import Card from '../components/ui/Card';
import { PATHS } from '../config/routes';
import { CONTACT_INFO } from '../config/site';
import { FAQ_ITEMS } from '../features/legal/faqContent';
import usePageMeta from '../hooks/usePageMeta';

const ACCORDION_ITEMS = FAQ_ITEMS.map(({ question, answer }) => ({ title: question, content: answer }));

export default function FAQ() {
    usePageMeta('FAQ', PATHS.FAQ);
    return (
        <ContentPage title="Frequently Asked Questions">
            <Accordion items={ACCORDION_ITEMS} />

            {/* Call to action for additional support */}
            <Card shadow={false} className="mt-12">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-orange-700 mb-4">Any More Questions?</h2>
                    <p className="text-black mb-6">
                        Can't find the answer you're looking for? Our support team is here to help!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to={PATHS.CONTACT}
                            className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors"
                        >
                            Contact Us
                        </Link>
                        <a
                            href={`mailto:${CONTACT_INFO.email}`}
                            className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors"
                        >
                            Email Support
                        </a>
                    </div>
                </div>
            </Card>
        </ContentPage>
    );
}
