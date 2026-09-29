import { UNIVERSITY_INFO } from './questionnaireData';

function ProgramLink({ program }) {
    return (
        <div className="border border-gray-200 rounded-lg p-3 hover:bg-gray-50">
            <a href={program.url} target="_blank" rel="noopener noreferrer" className="block">
                <p className="text-gray-800 font-medium hover:text-blue-600 transition-colors">{program.name}</p>
                <p className="text-sm text-gray-500 mt-1">Related to: {program.area}</p>
            </a>
        </div>
    );
}

// Recommended programs for one university
export default function Recommendations({ programs, university = 'UTS' }) {
    const info = UNIVERSITY_INFO[university];

    return (
        <div className="text-left bg-green-50 p-6 rounded-lg mb-6">
            <h3 className="text-2xl font-semibold text-green-800 mb-4">📚 Recommended {university} Programs</h3>

            {programs.length > 0 ? (
                <div className="mb-6">
                    <p className="text-gray-700 mb-4">
                        Based on your selected areas of interest, here are the recommended {university} programs:
                    </p>
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
                        <p className="text-blue-800 text-sm">
                            <strong>Note:</strong> Your questionnaire results can always be redone at any time
                        </p>
                    </div>

                    <div className="bg-white p-4 rounded-lg border border-green-200">
                        <h4 className="text-lg font-bold text-gray-800 mb-3 flex items-center">🏫 {info.name}</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {programs.map((program) => <ProgramLink key={program.name} program={program} />)}
                        </div>
                    </div>
                </div>
            ) : (
                <div className="mb-6">
                    <p className="text-gray-700 mb-4">
                        No specific programs recommended. Please select areas of interest for personalized recommendations.
                    </p>
                </div>
            )}

            <div className="border-t border-green-200 pt-4">
                <a
                    href={info.coursesUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-semibold text-green-800 hover:text-green-600 mb-3 block"
                >
                    🔗 Click Here To Explore The {university} Official Website
                </a>
            </div>
        </div>
    );
}
