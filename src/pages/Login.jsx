import {useState} from "react";
import {login} from "../api/auth";
import {useNavigate} from "react-router-dom";
import Footer from './Footer';

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(email);
        console.log(password);

        try {
            const response = await login(email, password );

            // Save token to localStorage
            localStorage.setItem('authToken', response.data.data.token);

            // Redirect to home page, updating to refresh Navbar state
            navigate('/');
            window.location.reload();
        } catch (err) {
            setError("Invalid Login Credentials!");
        }
    }

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-300 via-blue-100 via-orange-100 to-orange-300">
            <div className="flex-1 flex items-center justify-center px-4">
                <form
                    onSubmit={handleSubmit}
                    className="bg-white p-20 rounded-lg shadow-md max-w-md sm:max-w-lg lg:max-w-xl"
                >
                    <h2 className="text-2xl font-bold mb-6 text-center text-orange-500">
                        Login to EduMap
                    </h2>
                    {error && <p className="text-red-500 mb-4">{error}</p>}

                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full p-2 mb-6 border rounded"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full p-2 mb-6 border rounded"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <button
                        type="submit"
                        className="w-full py-3 bg-blue-500 text-white font-semibold rounded hover:bg-orange-600 transition-colors"
                    >
                        Login
                    </button>
                </form>
            </div>
            <Footer/>
        </div>
    );
}
