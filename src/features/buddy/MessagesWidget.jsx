import { ChatIcon } from '../../components/ui/Icons';
import { mentorEmoji } from './mentorUtils';

// Floating chat button that toggles a list of recent conversations
export default function MessagesWidget({ isOpen, onToggle, messages, mentors, onOpenMentor }) {
    return (
        <>
            {isOpen && (
                <div className="fixed bottom-5 right-6 z-50 w-96 bg-white rounded-lg border border-blue-200 shadow-2xl">
                    <div className="bg-green-600 text-white p-4 rounded-t-lg flex items-center justify-between">
                        <div className="flex items-center">
                            <ChatIcon className="w-5 h-5 mr-2" />
                            <span className="font-semibold">Messages</span>
                        </div>
                        <button onClick={onToggle}>✕</button>
                    </div>

                    <div className="max-h-80 overflow-y-auto p-4 space-y-3">
                        {messages.map((message) => {
                            const mentor = mentors.find((m) => m.id === message.mentorId);
                            return (
                                <div
                                    key={message.mentorId}
                                    onClick={() => mentor && onOpenMentor(mentor)}
                                    className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg cursor-pointer border"
                                >
                                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-xl">
                                        {mentorEmoji(mentor)}
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-medium text-blue-800">{message.mentorName}</h4>
                                        <p className="text-sm text-blue-600 truncate">{message.lastMessage}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}

            <button
                onClick={onToggle}
                aria-label="Toggle messages"
                className="fixed bottom-6 right-6 bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition-colors"
            >
                <ChatIcon className="w-6 h-6" />
            </button>
        </>
    );
}
