import {useState} from "react";
import {register} from "../api/auth";
import {useNavigate, Link} from "react-router-dom";
import Footer from './Footer';
import Background from "./Background";

export default function Register() {

    // State variables for form inputs and submission status
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Validate passwords match
        if (password !== confirmPassword) {
            setError("Passwords do not match!");
            return;
        }
        
        setIsSubmitting(true);
        setError("");
        
        try {
            const response = await register(email, password);

            // Save token to localStorage
            localStorage.setItem('authToken', response.data.data.token);

            // Redirect to home page, updating to refresh Navbar state
            navigate('/');
            window.location.reload();
        } catch (err) {
            setError("Registration failed. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    }

    // JSX for the registration form
    return (
        <Background>
            <div className="flex-1 flex items-center justify-center px-4">
                <form
                    onSubmit={handleSubmit}
                    className="bg-white p-8 sm:p-12 rounded-lg shadow-md w-full max-w-md"
                >
                    {/* Sign Up Header */}
                    <h1 className="text-2xl font-bold mb-6 text-center text-orange-500">
                        Sign Up to EduMap
                    </h1>
                    <p className="text-sm text-center text-gray-600 mb-6">
                        Create your EduMap account
                    </p>

                    {error && (
                        <p className="text-red-500 mb-4 text-center">
                            {error}
                        </p>
                    )}
                    
                    {/* Email Input */}
                    <input
                        type="email"
                        placeholder="example@gmail.com"
                        className="w-full p-2 mb-6 border rounded"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        autoComplete="email"
                        required
                    />

                    {/* Password Input */}
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full p-2 mb-6 border rounded"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        autoComplete="new-password"
                        required
                    />

                    {/* Confirm Password Input */}
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        className="w-full p-2 mb-6 border rounded"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        autoComplete="new-password"
                        required
                    />

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3 bg-blue-500 text-white font-semibold rounded hover:bg-orange-600 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? "Creating account..." : "Sign Up"}
                    </button>
                    
                    {/* Link to Login Page */}
                    <p className="text-sm text-center text-gray-600 mt-4">
                        Already have an account?{" "}
                        <Link to="/login" className="text-orange-600 underline">
                            Log in
                        </Link>
                    </p>
                </form>
            </div>
            <Footer/>
        </Background>
    );
}
