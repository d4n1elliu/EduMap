import { SaveStarIcon } from '../../components/ui/Icons';
import StarRating from '../../components/ui/StarRating';
import { DEFAULT_MENTOR_EMOJI } from './buddyConstants';
import { mentorCourse, mentorFullName } from './mentorUtils';

// Summary card for one mentor with a save toggle and a primary action
export default function MentorCard({ mentor, isSaved, onToggleSave, onSelect, actionLabel = 'View Profile' }) {
    return (
        <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
            <div className="text-center mb-3">
                <div className="text-4xl mb-2">{mentor.profileEmoji || DEFAULT_MENTOR_EMOJI}</div>
                <h3 className="font-semibold text-gray-800">{mentorFullName(mentor)}</h3>
                <p className="text-sm text-gray-600">{mentorCourse(mentor)}</p>
                <p className="text-xs text-gray-500">{mentor.university}</p>
            </div>

            <div className="flex items-center justify-between mb-3">
                <div className="flex items-center">
                    <StarRating rating={mentor.rating} />
                    <span className="ml-1 text-sm text-gray-600">{mentor.reviews} reviews</span>
                </div>
                <button
                    onClick={() => onToggleSave(mentor.id)}
                    aria-label={isSaved ? 'Unsave mentor' : 'Save mentor'}
                    className={`p-2 rounded-full ${isSaved ? 'text-yellow-500' : 'text-gray-400'} hover:bg-gray-100`}
                >
                    <SaveStarIcon className="w-5 h-5" filled={isSaved} />
                </button>
            </div>

            <div className="mt-auto">
                <button
                    onClick={() => onSelect(mentor)}
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                >
                    {actionLabel}
                </button>
            </div>
        </div>
    );
}
