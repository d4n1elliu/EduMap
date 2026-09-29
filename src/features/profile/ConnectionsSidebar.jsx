import { Link } from 'react-router-dom';
import { PATHS } from '../../config/routes';
import { CONNECTED_BUDDIES, CONNECTED_MENTORS } from './profileData';

// "Mentor Jacob" -> "J"
const initialOf = (name) => name.split(' ')[1]?.[0] ?? name[0];

function SidebarSection({ icon, title, children, footer }) {
    return (
        <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-3">
                <span className="text-2xl">{icon}</span> {title}
            </h2>
            <div className="space-y-4">{children}</div>
            <div className="mt-4 pt-4 border-t border-gray-300">{footer}</div>
        </div>
    );
}

// Avatar + details + action button row
function PersonCard({ name, status, actionLabel, children }) {
    return (
        <div className="bg-blue-100 rounded-xl p-4 flex items-center gap-4 hover:bg-blue-200 transition-colors">
            <div className="relative">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                    <span className="text-gray-600 font-semibold">{initialOf(name)}</span>
                </div>
                {status && (
                    <div className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${status === 'Online' ? 'bg-green-500' : 'bg-gray-400'}`}></div>
                )}
            </div>
            <div className="flex-1">
                <p className="font-semibold text-gray-800 text-lg">{name}</p>
                {children}
            </div>
            <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm py-1 px-3 rounded-lg">{actionLabel}</button>
        </div>
    );
}

export default function ConnectionsSidebar({ mentors = CONNECTED_MENTORS, buddies = CONNECTED_BUDDIES }) {
    return (
        <div className="w-1/3 flex flex-col gap-6">
            <SidebarSection
                icon="👩‍🏫"
                title="Mentors Connected With"
                footer={
                    <Link
                        to={PATHS.BUDDY}
                        className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2"
                    >
                        <span role="img" aria-label="search">🔍</span>
                        Find More Mentors
                    </Link>
                }
            >
                {mentors.map((mentor) => (
                    <PersonCard key={mentor.name} name={mentor.name} actionLabel="Message">
                        <p className="text-sm text-gray-600 mb-1">{mentor.specialty}</p>
                        <p className="text-sm text-gray-600">Mentored: <b>{mentor.time}</b></p>
                    </PersonCard>
                ))}
            </SidebarSection>

            <SidebarSection
                icon="👥"
                title="Buddies Connected With"
                footer={
                    <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2">
                        <span>➕</span>
                        Connect with More Buddies
                    </button>
                }
            >
                {buddies.map((buddy) => (
                    <PersonCard key={buddy.name} name={buddy.name} status={buddy.status} actionLabel="Chat">
                        <p className="text-sm text-gray-600">{buddy.course}</p>
                        <p className={`text-xs ${buddy.status === 'Online' ? 'text-green-600' : 'text-gray-500'}`}>{buddy.status}</p>
                    </PersonCard>
                ))}
            </SidebarSection>
        </div>
    );
}
