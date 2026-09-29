import { useState } from 'react';
import { Link } from 'react-router-dom';
import { register } from '../api/auth';
import { PATHS } from '../config/routes';
import { DEMO_NOTICE } from '../config/site';
import { AuthForm, AuthInput, AuthSubmitButton } from '../features/auth/AuthForm';
import { Role, ROLE_OPTIONS } from '../features/auth/roles';
import { CAMPUSES, GENDER_OPTIONS } from '../features/auth/signupOptions';
import { COURSE_OPTIONS } from '../features/buddy/buddyConstants';
import useCompleteLogin from '../features/auth/useCompleteLogin';
import usePageMeta from '../hooks/usePageMeta';
import { courseLabel } from '../lib/courses';

const INITIAL_FORM = {
    firstName: '',
    lastName: '',
    email: '',
    role: Role.STUDENT,
    gender: '',
    course: '',
    about: '',
    campus: '',
    password: '',
    confirmPassword: '',
};

// Returns an error message, or '' when the form is valid
function validate(form) {
    if (!form.firstName.trim() || !form.lastName.trim()) return 'Please enter your first and last name';
    if (form.password.length < 6) return 'Password must be at least 6 characters long';
    if (form.password !== form.confirmPassword) return 'Passwords do not match!';
    if (form.role === Role.MENTOR && !form.about.trim()) return 'Please tell students a little about yourself';
    if (form.role === Role.MENTOR && !form.campus) return 'Please choose your campus';
    return '';
}

export default function Register() {
    usePageMeta('Sign up', PATHS.SIGNUP);
    const [form, setForm] = useState(INITIAL_FORM);
    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const completeLogin = useCompleteLogin();

    const handleChange = (e) => {
        const { name, value } = e.target;
        // <select> values are strings; the backend expects the numeric Role enum
        setForm({ ...form, [name]: name === 'role' ? Number(value) : value });
    };

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
            const isMentor = role === Role.MENTOR;
            const campus = CAMPUSES.find((c) => c.name === form.campus);
            const response = await register({
                email,
                password,
                firstName,
                lastName,
                role,
                gender: form.gender === '' ? null : Number(form.gender),
                course: form.course === '' ? null : Number(form.course),
                about: isMentor ? form.about.trim() : null,
                latitude: isMentor ? campus.latitude : null,
                longitude: isMentor ? campus.longitude : null,
            });
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
            <p className="mb-6 rounded border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-center text-slate-600">
                {DEMO_NOTICE}
            </p>

            <AuthInput name="firstName" type="text" placeholder="First Name" value={form.firstName} onChange={handleChange} autoComplete="given-name" required />
            <AuthInput name="lastName" type="text" placeholder="Last Name" value={form.lastName} onChange={handleChange} autoComplete="family-name" required />
            <AuthInput name="email" type="email" placeholder="example@gmail.com" value={form.email} onChange={handleChange} autoComplete="email" required />

            <select name="role" className="w-full p-2 mb-4 border rounded" value={form.role} onChange={handleChange} required>
                {ROLE_OPTIONS.map(({ value, label }) => (
                    <option key={value} value={value}>{label}</option>
                ))}
            </select>

            <select name="gender" className="w-full p-2 mb-4 border rounded" value={form.gender} onChange={handleChange}>
                <option value="">Gender (optional)</option>
                {GENDER_OPTIONS.map(({ value, label }) => (
                    <option key={value} value={value}>{label}</option>
                ))}
            </select>

            <select name="course" className="w-full p-2 mb-4 border rounded" value={form.course} onChange={handleChange}>
                <option value="">Course (optional)</option>
                {COURSE_OPTIONS.map((name, index) => (
                    <option key={name} value={index}>{courseLabel(name)}</option>
                ))}
            </select>

            {form.role === Role.MENTOR && (
                <>
                    <textarea
                        name="about"
                        placeholder="Tell students a little about yourself"
                        className="w-full p-2 mb-4 border rounded resize-none"
                        rows={4}
                        value={form.about}
                        onChange={handleChange}
                        required
                    />
                    <select name="campus" className="w-full p-2 mb-4 border rounded" value={form.campus} onChange={handleChange} required>
                        <option value="">Choose your campus</option>
                        {CAMPUSES.map(({ name }) => (
                            <option key={name} value={name}>{name}</option>
                        ))}
                    </select>
                </>
            )}

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
