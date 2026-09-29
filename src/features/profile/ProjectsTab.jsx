import { PROJECTS } from './profileData';

export default function ProjectsTab({ projects = PROJECTS }) {
    return (
        <div className="flex flex-col gap-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">My Projects</h1>

            <div className="bg-gray-50 p-6 rounded-xl shadow-sm flex flex-col gap-6">
                {projects.map((project) => (
                    <div key={project.title} className="border-b border-gray-200 pb-6 last:border-b-0">
                        <p className="font-semibold text-gray-800 text-lg mb-2">{project.title}</p>
                        <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                        <div className="flex gap-4 flex-wrap">
                            {project.images.map((img, i) => (
                                <img
                                    key={img}
                                    src={img}
                                    alt={`${project.title} ${i + 1}`}
                                    className="w-48 h-32 object-cover rounded-lg"
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg self-start">
                + Add New Project
            </button>
        </div>
    );
}
