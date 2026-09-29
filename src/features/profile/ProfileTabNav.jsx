// Book-style tabs hanging off the left edge of the profile card
export default function ProfileTabNav({ tabs, activeTab, onChange }) {
    return (
        <div className="absolute right-359 top-20 h-full flex flex-col items-end space-y-2 z-10">
            {tabs.map((tab) => (
                <button
                    key={tab.id}
                    onClick={() => onChange(tab.id)}
                    className={`flex items-center py-3 rounded-l-lg transition-all transform hover:scale-105 ${activeTab === tab.id
                        ? `w-48 h-15 ${tab.activeClass} text-white shadow-lg -mr-1 justify-left pl-6 pr-4`
                        : 'w-30 h-15 bg-gray-200 text-gray-700 hover:bg-gray-300 justify-end pr-4'
                        }`}
                >
                    <span className="font-medium">{tab.label}</span>
                    <span className="text-lg ml-2">{tab.icon}</span>
                </button>
            ))}
        </div>
    );
}
