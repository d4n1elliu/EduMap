import { SearchIcon } from '../../components/ui/Icons';
import { mentorEmoji } from '../buddy/mentorUtils';

// Floating search box with a dropdown of matching markers
export default function MapSearch({ query, onQueryChange, results, onSelect }) {
    return (
        <div className="absolute top-4 left-15 right-auto w-full max-w-md z-[1000]">
            <div className="rounded-full bg-white/80 shadow ring-1 ring-slate-300 px-4 py-2 flex items-center gap-4">
                <SearchIcon className="h-5 w-5 text-slate-500" />
                <input
                    value={query}
                    onChange={(e) => onQueryChange(e.target.value)}
                    placeholder="Search mentors..."
                    className="w-full bg-transparent outline-none text-slate-800 placeholder-slate-400"
                />
            </div>
            {query && results.length > 0 && (
                <div className="mt-2 max-h-56 overflow-auto rounded-xl bg-white shadow ring-1 ring-slate-200">
                    {results.map((m) => (
                        <button key={m.id} onClick={() => onSelect(m)} className="w-full text-left px-3 py-2 hover:bg-slate-50">
                            <div className="font-medium text-slate-800">{mentorEmoji(m)} {m.name}</div>
                            <div className="text-sm text-slate-500">{m.course}</div>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
