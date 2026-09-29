import ContentPage from '../components/layout/ContentPage';
import Card from '../components/ui/Card';
import { FeatureCard, TeamMember, ValueItem } from '../features/about/AboutCards';
import { CORE_VALUES, FEATURES, MISSION, TEAM, TEAM_INTRO, VISION } from '../features/about/aboutContent';

export default function About() {
    return (
        <ContentPage title="About EduMap" maxWidth="max-w-6xl" headerClassName="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                <Card>
                    <h2 className="text-3xl font-bold text-orange-500 mb-6">Our Mission</h2>
                    {MISSION.map((paragraph, i) => (
                        <p key={i} className="text-lg text-gray-800 leading-relaxed mb-4 last:mb-0">{paragraph}</p>
                    ))}
                </Card>

                <Card>
                    <h2 className="text-3xl font-bold text-orange-500 mb-6">Our Vision</h2>
                    <p className="text-lg text-gray-800 leading-relaxed">{VISION}</p>
                </Card>

                <Card className="lg:col-span-2">
                    <h2 className="text-3xl pb-5 font-bold text-orange-500 mb-6 text-center">Our Core Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {CORE_VALUES.map((value) => <ValueItem key={value.title} {...value} />)}
                    </div>
                </Card>
            </div>

            <div className="mb-16">
                <h2 className="text-5xl md:text-5xl font-bold text-center text-blue-700 mb-6">How EduMap Works</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {FEATURES.map((feature) => <FeatureCard key={feature.title} {...feature} />)}
                </div>
            </div>

            <Card>
                <h2 className="text-4xl font-bold text-orange-500 text-center mb-8">Meet Our Team</h2>
                <p className="text-lg text-gray-800 text-center mb-8 max-w-2xl mx-auto">{TEAM_INTRO}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {TEAM.map((member) => <TeamMember key={member.studentId} {...member} />)}
                </div>
            </Card>
        </ContentPage>
    );
}
