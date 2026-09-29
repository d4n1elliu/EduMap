import { FilterIcon } from '../../components/ui/Icons';
import { COURSE_OPTIONS, GENDER_OPTIONS } from './buddyConstants';

// Sidebar with gender (single) and course (multi) filters
export default function MentorFilters({ filters, onGenderChange, onToggleCourse }) {
    return (
        <div className="w-64 bg-white rounded-lg border border-gray-200 p-4 h-fit">
            <div className="flex items-center gap-2 mb-4">
                <span className="text-lg font-semibold">Filter</span>
                <FilterIcon className="w-5 h-5" />
            </div>

            <div className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
                    {GENDER_OPTIONS.map((gender) => (
                        <label key={gender} className="flex items-center mb-2">
                            <input
                                type="radio"
                                name="gender"
                                value={gender}
                                checked={filters.gender === gender}
                                onChange={(e) => onGenderChange(e.target.value)}
                                className="mr-2"
                            />
                            <span className="capitalize">{gender}</span>
                        </label>
                    ))}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Courses</label>
                    {COURSE_OPTIONS.map((course) => (
                        <label key={course} className="flex items-center mb-2">
                            <input
                                type="checkbox"
                                checked={filters.courses.includes(course)}
                                onChange={() => onToggleCourse(course)}
                                className="mr-2"
                            />
                            <span className="text-sm">{course}</span>
                        </label>
                    ))}
                </div>
            </div>
        </div>
    );
}
