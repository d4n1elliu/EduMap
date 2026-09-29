import { useNavigate } from 'react-router-dom';
import studentImg from '../../assets/student.png';
import { EditIcon } from '../../components/ui/Icons';
import { PATHS } from '../../config/routes';
import { QUESTIONNAIRE_STATS } from './profileData';

function StatBar({ title, percent, barClass, text }) {
    return (
        <div className="mb-4">
            <p className="text-gray-800 font-semibold">{title}</p>
            <p className="text-gray-500 text-sm mb-1">
                You alongside <b>{percent}%</b> {text}
            </p>
            <div className="w-full bg-gray-200 rounded-full h-2">
                <div className={`${barClass} h-2 rounded-full`} style={{ width: `${percent}%` }}></div>
            </div>
            <p className="text-right text-sm text-gray-600 mt-1">{percent}%</p>
        </div>
    );
}

export default function ProfileTab() {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4 relative">
                <div className="relative">
                    <img src={studentImg} alt="Student avatar" className="w-25 h-30 rounded-full border-2 border-blue-400" />
                    <button aria-label="Edit avatar" className="absolute bottom-0 right-0 bg-blue-500 text-white p-1 rounded-full w-6 h-6 flex items-center justify-center hover:bg-blue-600 transition-colors">
                        <EditIcon className="w-3 h-3" />
                    </button>
                </div>
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">Student Name</h1>
                    <p className="text-gray-600">Interests/Course Name & Major</p>
                    <p className="text-gray-500">Highschool/University Name</p>
                </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-xl">
                <h2 className="text-lg font-semibold text-gray-800 mb-1">About Me</h2>
                <p className="text-gray-600 text-sm">
                    Description about yourself, goals, and what you're passionate about.
                </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-xl">
                <h2 className="text-lg font-semibold text-gray-800 mb-1">Questionnaire Results</h2>
                <p className="text-gray-500 text-sm mb-3">Visual representation of your preferences and choices</p>
                {QUESTIONNAIRE_STATS.map((stat) => <StatBar key={stat.title} {...stat} />)}
            </div>

            <div className="bg-gray-50 p-4 rounded-xl shadow-sm flex flex-col gap-3">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">Booked Mentor Sessions</h2>
                <p className="text-gray-500 text-sm">None have been booked as of right now.</p>
                <button
                    onClick={() => navigate(PATHS.BUDDY)}
                    className="mt-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
                >
                    Join the Buddy System
                </button>
            </div>
        </div>
    );
}
