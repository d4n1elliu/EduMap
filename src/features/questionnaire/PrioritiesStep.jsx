import { QuestionCard, StepNav } from './QuestionCard';

// Step 5: rank each item 1..N; a rank already used elsewhere is disabled
export default function PrioritiesStep({ items, priorities, onChange, onBack, onNext }) {
    const ranks = items.map((_, i) => i + 1);

    return (
        <QuestionCard
            title="Rank your priorities"
            description={`List your priorities below from 1–${items.length}, where 1 is your top concern and ${items.length} is your least concern.`}
        >
            {items.map((item) => {
                const takenRanks = Object.values(priorities).filter((n) => n !== '' && n !== priorities[item]);

                return (
                    <div key={item} className="flex items-center justify-between mb-2">
                        <label className="text-gray-700">{item}</label>
                        <select
                            className="border rounded px-2 py-1"
                            value={priorities[item] || ''}
                            onChange={(e) => onChange(item, e.target.value)}
                        >
                            <option value="">Select priority</option>
                            {ranks.map((n) => (
                                <option key={n} value={n} disabled={takenRanks.includes(n.toString())}>
                                    {n}
                                </option>
                            ))}
                        </select>
                    </div>
                );
            })}

            <StepNav onBack={onBack} onNext={onNext} />
        </QuestionCard>
    );
}
