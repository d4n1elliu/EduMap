import Card from '../../components/ui/Card';
import IconCircle from '../../components/ui/IconCircle';

// Small icon + title + blurb, used in the "Core Values" grid
export function ValueItem({ icon: Icon, title, text }) {
    return (
        <div className="text-center">
            <IconCircle>
                <Icon className="w-8 h-8 text-white" />
            </IconCircle>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
            <p className="text-gray-600 text-sm">{text}</p>
        </div>
    );
}

// Larger card describing one EduMap feature
export function FeatureCard({ icon: Icon, title, text }) {
    return (
        <Card padding="p-6" className="text-center">
            <IconCircle size="lg">
                <Icon className="w-10 h-10 text-white" />
            </IconCircle>
            <h3 className="text-xl font-bold text-gray-800 mb-4">{title}</h3>
            <p className="text-gray-600">{text}</p>
        </Card>
    );
}

export function TeamMember({ initials, name, studentId }) {
    return (
        <div className="text-center">
            <IconCircle>
                <span className="text-white font-bold text-lg">{initials}</span>
            </IconCircle>
            <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
            <p className="text-gray-600 text-sm">Student ID: {studentId}</p>
        </div>
    );
}
