import { useState } from 'react';
import { Link } from 'react-router-dom';
import { register } from '../api/auth';
import { PATHS } from '../config/routes';
import { AuthForm, AuthInput, AuthSubmitButton } from '../features/auth/AuthForm';
import { Role, ROLE_OPTIONS } from '../features/auth/roles';
import useCompleteLogin from '../features/auth/useCompleteLogin';

const INITIAL_FORM = {
    firstName: '',
    lastName: '',
    email: '',
    role: Role.STUDENT,
    password: '',
    confirmPassword: '',
};

// Returns an error message, or '' when the form is valid
function validate(form) {
    if (!form.firstName.trim() || !form.lastName.trim()) return 'Please enter your first and last name';
    if (form.password.length < 6) return 'Password must be at least 6 characters long';
    if (form.password !== form.confirmPassword) return 'Passwords do not match!';
    return '';
}

export default function Register() {
    const [form, setForm] = useState(INITIAL_FORM);
    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const completeLogin = useCompleteLogin();

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();

        const validationError = validate(form);
        if (validationError) {
            setError(validationError);
            return;
        }

        setIsSubmitting(true);
        setError('');

        try {
            const { email, password, firstName, lastName, role } = form;
            const response = await register({ email, password, firstName, lastName, role });
            completeLogin(response.data?.data?.jwtToken);
        } catch (err) {
            setError(err.response?.data?.message || 'Server Error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <AuthForm
            title="Sign Up to EduMap"
            subtitle="Create your EduMap account"
            error={error}
            onSubmit={handleSubmit}
            wrapperClassName="pt-5 pb-5"
            className="p-8 sm:p-12 w-full max-w-md"
        >
            <AuthInput name="firstName" type="text" placeholder="First Name" value={form.firstName} onChange={handleChange} autoComplete="given-name" required />
            <AuthInput name="lastName" type="text" placeholder="Last Name" value={form.lastName} onChange={handleChange} autoComplete="family-name" required />
            <AuthInput name="email" type="email" placeholder="example@gmail.com" value={form.email} onChange={handleChange} autoComplete="email" required />

            <select name="role" className="w-full p-2 mb-4 border rounded" value={form.role} onChange={handleChange} required>
                {ROLE_OPTIONS.map(({ value, label }) => (
                    <option key={value} value={value}>{label}</option>
                ))}
            </select>

            <AuthInput name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} autoComplete="new-password" required />
            <AuthInput name="confirmPassword" type="password" placeholder="Confirm Password" className="mb-6" value={form.confirmPassword} onChange={handleChange} autoComplete="new-password" required />

            <AuthSubmitButton disabled={isSubmitting}>
                {isSubmitting ? 'Creating account...' : 'Sign Up'}
            </AuthSubmitButton>

            <p className="text-sm text-center text-gray-600 mt-4">
                Already have an account?{' '}
                <Link to={PATHS.LOGIN} className="text-orange-600 underline">
                    Log in
                </Link>
            </p>
        </AuthForm>
    );
}
