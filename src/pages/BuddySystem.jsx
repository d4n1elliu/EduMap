import { useEffect, useState } from 'react';
import PageLayout from '../components/layout/PageLayout';
import LoginRequired from '../components/LoginRequired';
import SearchInput from '../components/ui/SearchInput';
import Tabs from '../components/ui/Tabs';
import { toggleItem } from '../lib/array';
import { getToken } from '../lib/auth';
import BookingsList from '../features/buddy/BookingsList';
import BookingSuccessModal from '../features/buddy/BookingSuccessModal';
import {
    BUDDY_TABS,
    DEFAULT_SAVED_MENTOR_IDS,
    INITIAL_FILTERS,
    MOCK_MESSAGES,
    SAVED_MENTORS_STORAGE_KEY,
} from '../features/buddy/buddyConstants';
import MentorFilters from '../features/buddy/MentorFilters';
import MentorGrid from '../features/buddy/MentorGrid';
import MentorProfileModal from '../features/buddy/MentorProfileModal';
import MessagesWidget from '../features/buddy/MessagesWidget';
import { filterMentors } from '../features/buddy/mentorUtils';
import { useBookings, useMentors } from '../features/buddy/useBuddyData';

export default function BuddySystem() {
    const token = getToken();
    const { mentors } = useMentors();
    const { bookings, isLoading: isLoadingBookings, reload: reloadBookings, book, confirm } = useBookings(token);

    const [activeTab, setActiveTab] = useState('mentors');
    const [selectedMentor, setSelectedMentor] = useState(null);
    const [showSuccess, setShowSuccess] = useState(false);
    const [showMessages, setShowMessages] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [filters, setFilters] = useState(INITIAL_FILTERS);
    const [savedMentorIds, setSavedMentorIds] = useState(DEFAULT_SAVED_MENTOR_IDS);

    // Refresh bookings whenever the user switches tabs
    useEffect(() => {
        reloadBookings();
    }, [activeTab, reloadBookings]);

    const toggleSavedMentor = (mentorId) => {
        const next = toggleItem(savedMentorIds, mentorId);
        setSavedMentorIds(next);
        localStorage.setItem(SAVED_MENTORS_STORAGE_KEY, JSON.stringify(next));
    };

    const handleBook = async (details) => {
        const error = await book({ mentorId: selectedMentor.id, ...details });
        if (!error) {
            setSelectedMentor(null);
            setShowSuccess(true);
        }
        return error;
    };

    const openMentorFromMessages = (mentor) => {
        setSelectedMentor(mentor);
        setShowMessages(false);
    };

    const gridProps = { savedIds: savedMentorIds, onToggleSave: toggleSavedMentor, onSelect: setSelectedMentor };

    const renderTab = () => {
        switch (activeTab) {
            case 'saved':
                return (
                    <MentorGrid
                        mentors={mentors.filter((m) => savedMentorIds.includes(m.id))}
                        actionLabel="Book Session"
                        {...gridProps}
                    />
                );
            case 'bookings':
                return (
                    <BookingsList
                        bookings={bookings}
                        mentors={mentors}
                        isLoading={isLoadingBookings}
                        onConfirm={confirm}
                    />
                );
            default:
                return (
                    <div className="flex gap-6">
                        <MentorFilters
                            filters={filters}
                            onGenderChange={(gender) => setFilters({ ...filters, gender })}
                            onToggleCourse={(course) => setFilters({ ...filters, courses: toggleItem(filters.courses, course) })}
                        />
                        <div className="flex-1">
                            <div className="mb-4">
                                <SearchInput value={searchQuery} onChange={setSearchQuery} />
                            </div>
                            <MentorGrid mentors={filterMentors(mentors, searchQuery, filters)} {...gridProps} />
                        </div>
                    </div>
                );
        }
    };

    return (
        <PageLayout>
            <div className="w-full max-w-6xl px-20 pt-10 mx-auto flex-1">
                {!token ? (
                    <LoginRequired feature="Buddy System" />
                ) : (
                    <>
                        <header className="w-full max-w-6xl bg-white/50 rounded-2xl shadow-xl px-10 py-10 text-center mb-12">
                            <h1 className="text-5xl md:text-6xl font-extrabold text-blue-700 mb-3">Buddy Program</h1>
                            <p className="text-lg md:text-xl font-bold text-black max-w-3xl mx-auto">
                                Connect with peers, mentors and study partners who share your goals.
                            </p>
                        </header>

                        <main className="flex-1">
                            <div className="bg-white rounded-lg border border-blue-200 shadow-sm mb-6">
                                <Tabs tabs={BUDDY_TABS} activeTab={activeTab} onChange={setActiveTab} />
                                <div className="p-6">{renderTab()}</div>
                            </div>

                            <MessagesWidget
                                isOpen={showMessages}
                                onToggle={() => setShowMessages(!showMessages)}
                                messages={MOCK_MESSAGES}
                                mentors={mentors}
                                onOpenMentor={openMentorFromMessages}
                            />

                            {selectedMentor && (
                                <MentorProfileModal
                                    mentor={selectedMentor}
                                    onClose={() => setSelectedMentor(null)}
                                    onBook={handleBook}
                                />
                            )}
                        </main>
                    </>
                )}
            </div>

            {showSuccess && <BookingSuccessModal onClose={() => setShowSuccess(false)} />}
        </PageLayout>
    );
}
