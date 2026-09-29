import { ChevronLeftIcon } from '../../components/ui/Icons';
import Modal from '../../components/ui/Modal';
import StarRating from '../../components/ui/StarRating';
import BookingForm from './BookingForm';
import { mentorCourse, mentorEmoji, mentorFullName } from './mentorUtils';

function MentorInfo({ mentor }) {
    const skills = mentor.skills ?? [];
    return (
        <div className="text-center">
            <div className="text-7xl mb-6">{mentorEmoji(mentor)}</div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">{mentorFullName(mentor)}</h2>
            <p className="text-lg text-gray-600 mb-2">{mentorCourse(mentor)}</p>
            <p className="text-base text-gray-500 mb-6">{mentor.university}</p>

            <div className="flex items-center justify-center mb-6">
                <StarRating rating={mentor.rating} starClassName="w-6 h-6" />
                <span className="ml-3 text-gray-600 font-medium">{mentor.reviews} Reviews</span>
            </div>

            <div className="flex flex-wrap gap-2 justify-center mb-6">
                {skills.length > 0 ? (
                    skills.map((skill) => (
                        <span key={skill} className="px-4 py-2 bg-slate-100 text-slate-800 text-sm rounded-full font-medium">
                            {skill}
                        </span>
                    ))
                ) : (
                    <span className="text-sm text-gray-500">No skills listed</span>
                )}
            </div>
        </div>
    );
}

// Mentor details + booking form in a modal
export default function MentorProfileModal({ mentor, onClose, onBook }) {
    return (
        <Modal>
            <div className="w-full max-w-7xl bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
                <div className="flex items-center justify-between px-6 py-4 border-b bg-gray-50">
                    <h3 className="text-xl font-semibold text-gray-800">Mentor Profile</h3>
                    <button
                        type="button"
                        onClick={onClose}
                        className="p-2 rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors"
                        aria-label="Close profile"
                    > ✕ </button>
                </div>

                <div className="p-6">
                    <div className="bg-white rounded-lg">
                        <button
                            onClick={onClose}
                            className="text-blue-600 hover:text-blue-800 mb-6 flex items-center text-sm font-medium"
                        >
                            <ChevronLeftIcon className="w-4 h-4 mr-2" />
                            Back to Mentors
                        </button>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            <div className="lg:col-span-1">
                                <MentorInfo mentor={mentor} />
                            </div>

                            <div className="lg:col-span-2">
                                <div className="space-y-8">
                                    <div>
                                        <h3 className="text-2xl font-semibold text-blue-800 mb-4">About {mentorFullName(mentor)}</h3>
                                        <p className="text-blue-600 leading-relaxed text-lg">{mentor.about}</p>
                                    </div>
                                    <BookingForm onBook={onBook} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
}
