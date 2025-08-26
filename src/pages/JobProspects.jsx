export default function JobProspects() {
    return (
        <div className="w-full max-w-6xl px-6 pt-4">
            <section className="text-center mb-10">
                <h1 className="text-5xl md:text-6xl font-extrabold text-orange-500 mb-3">Job Prospects</h1>
                <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">Explore career paths, required skills, and current market trends.</p>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="rounded-xl border border-gray-200 p-6 shadow-sm bg-white">
                    <div className="text-2xl font-semibold text-blue-800 mb-2">Trending Roles</div>
                    <p className="text-gray-600">See roles in demand across industries and regions.</p>
                </div>
                <div className="rounded-xl border border-gray-200 p-6 shadow-sm bg-white">
                    <div className="text-2xl font-semibold text-blue-800 mb-2">Skills & Tools</div>
                    <p className="text-gray-600">Understand essential skills and the tools employers expect.</p>
                </div>
                <div className="rounded-xl border border-gray-200 p-6 shadow-sm bg-white">
                    <div className="text-2xl font-semibold text-blue-800 mb-2">Salary Insights</div>
                    <p className="text-gray-600">Review typical salary ranges to plan your learning path.</p>
                </div>
            </section>
        </div>
    )
}