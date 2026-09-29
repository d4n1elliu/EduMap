import { useState } from 'react';
import { login } from '../api/auth';
import { AuthForm, AuthInput, AuthSubmitButton } from '../features/auth/AuthForm';
import useCompleteLogin from '../features/auth/useCompleteLogin';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const completeLogin = useCompleteLogin();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await login(email, password);
            completeLogin(response.data.data.jwtToken);
        } catch {
            setError('Invalid Login Credentials!');
        }
    };

    return (
        <AuthForm
            title="Login to EduMap"
            error={error}
            onSubmit={handleSubmit}
            className="p-20 max-w-md sm:max-w-lg lg:max-w-xl"
        >
            <AuthInput
                type="email"
                placeholder="Email"
                className="mb-6"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <AuthInput
                type="password"
                placeholder="Password"
                className="mb-6"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <AuthSubmitButton>Login</AuthSubmitButton>
        </AuthForm>
    );
}
