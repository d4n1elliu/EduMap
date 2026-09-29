import cx from '../../lib/cx';
import PageLayout from '../../components/layout/PageLayout';

// Centered white card form shared by Login and Register
export function AuthForm({ title, subtitle, error, onSubmit, className, wrapperClassName, children }) {
    return (
        <PageLayout>
            <div className={cx('flex-1 flex items-center justify-center px-4', wrapperClassName)}>
                <form onSubmit={onSubmit} className={cx('bg-white rounded-lg shadow-md', className)}>
                    <h1 className="text-2xl font-bold mb-6 text-center text-orange-500">{title}</h1>
                    {subtitle && <p className="text-sm text-center text-gray-600 mb-6">{subtitle}</p>}
                    {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
                    {children}
                </form>
            </div>
        </PageLayout>
    );
}

// Plain bordered input used inside AuthForm
export function AuthInput({ className = 'mb-4', ...props }) {
    return <input className={cx('w-full p-2 border rounded', className)} {...props} />;
}

export function AuthSubmitButton({ disabled, children }) {
    return (
        <button
            type="submit"
            disabled={disabled}
            className="w-full py-3 bg-blue-500 text-white font-semibold rounded hover:bg-orange-600 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
        >
            {children}
        </button>
    );
}
