import { Link } from 'react-router-dom';
import { PATHS } from '../config/routes';

// Shown in place of a page's content when the user isn't logged in
export default function LoginRequired({ feature }) {
    return (
        <div className="text-center py-20">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Authentication Required</h2>
            <p className="text-gray-600 mb-6">Please log in to access the {feature}.</p>
            <Link
                to={PATHS.LOGIN}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
                Go to Login
            </Link>
        </div>
    );
}
