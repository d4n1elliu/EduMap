import ContentPage from '../components/layout/ContentPage';
import Card from '../components/ui/Card';
import LegalSection from '../features/legal/LegalSection';
import { TERMS_LAST_UPDATED, TERMS_SECTIONS } from '../features/legal/termsContent';

export default function TermsOfService() {
    return (
        <ContentPage title="Terms of Service" subtitle={`Last updated: ${TERMS_LAST_UPDATED}`}>
            <Card className="space-y-8">
                {TERMS_SECTIONS.map((section, i) => (
                    <LegalSection key={section.title} number={i + 1} {...section} />
                ))}
            </Card>

            <div className="mt-8 text-center">
                <p className="font-bold text-black text-sm">
                    By using EduMap, you acknowledge that you have read and understood these Terms of Service.
                </p>
            </div>
        </ContentPage>
    );
}
