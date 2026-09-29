import MentorCard from './MentorCard';

// Responsive grid of MentorCards
export default function MentorGrid({ mentors, savedIds, onToggleSave, onSelect, actionLabel }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {mentors.map((mentor) => (
                <MentorCard
                    key={mentor.id}
                    mentor={mentor}
                    isSaved={savedIds.includes(mentor.id)}
                    onToggleSave={onToggleSave}
                    onSelect={onSelect}
                    actionLabel={actionLabel}
                />
            ))}
        </div>
    );
}
