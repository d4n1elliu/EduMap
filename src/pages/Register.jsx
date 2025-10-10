import {useState} from "react";
import {register} from "../api/auth";
import {useNavigate, Link} from "react-router-dom";
import Footer from './Footer';
import Background from "./Background";

export default function Register() {

    // Account fields 
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [role, setRole] = useState("Student"); // Default to Student
    const [course, setCourse] = useState("");
    const [error, setError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Validate form fields
        if (!firstName.trim() || !lastName.trim()) {
            setError("Please enter your first and last name");
            return;
        }
        
        if (!course) {
            setError("Please select your course");
            return;
        }
        
        if (password.length < 6) {
            setError("Password must be at least 6 characters long");
            return;
        }
        
        if (password !== confirmPassword) {
            setError("Passwords do not match!");
            return;
        }
        
        setIsSubmitting(true);
        setError("");
        
        try {
            const response = await register(email, password, firstName, lastName, role, course);
            if (response.data && response.data.data?.jwtToken)
            // Save token to localStorage
            localStorage.setItem('authToken', response.data.data.token);

            // Redirect to home page, updating to refresh Navbar state
            navigate('/');
            window.location.reload();
        } catch (err) {
            setError(err.response?.data?.message || "Server Error");
        } finally {
            setIsSubmitting(false);
        }
    }

    // JSX for the registration form
    return (
        <Background>
            <div className="pt-5 pb-5 flex-1 flex items-center justify-center px-4">
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
                    
                    {/* First Name Input */}
                    <input
                        type="text"
                        placeholder="First Name"
                        className="w-full p-2 mb-4 border rounded"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        autoComplete="given-name"
                        required
                    />

                    {/* Last Name Input */}
                    <input
                        type="text"
                        placeholder="Last Name"
                        className="w-full p-2 mb-4 border rounded"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        autoComplete="family-name"
                        required
                    />

                    {/* Email Input */}
                    <input
                        type="email"
                        placeholder="example@gmail.com"
                        className="w-full p-2 mb-4 border rounded"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        autoComplete="email"
                        required
                    />

                    {/* Role Selection */}
                    <select
                        className="w-full p-2 mb-4 border rounded"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        required
                    >
                        <option value="Student">Student</option>
                        <option value="Mentor">Mentor</option>
                    </select>

                    {/* Course Selection */}
                    <select
                        className="w-full p-2 mb-4 border rounded"
                        value={course}
                        onChange={(e) => setCourse(e.target.value)}
                        required
                    >
                        <option value="">Select your course</option>
                        <option value="Computer Science">Computer Science</option>
                        <option value="Information Technology">Information Technology</option>
                        <option value="Business">Business</option>
                        <option value="Law">Law</option>
                        <option value="Engineering">Engineering</option>
                        <option value="Medicine">Medicine</option>
                        <option value="Arts">Arts</option>
                        <option value="Science">Science</option>
                        <option value="Education">Education</option>
                        <option value="Architecture">Architecture</option>
                        <option value="Mathematics">Mathematics</option>
                        <option value="International Studies">International Studies</option>
                        <option value="Communications">Communications</option>
                        <option value="Health Sciences">Health Sciences</option>
                    </select>

                    {/* Password Input */}
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full p-2 mb-4 border rounded"
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
