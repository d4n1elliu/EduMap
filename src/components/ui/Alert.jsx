import cx from '../../lib/cx';

const VARIANTS = {
    error: 'bg-red-100 border-red-400 text-red-700',
    success: 'bg-green-100 border-green-400 text-green-700',
};

// Coloured message box for form errors and confirmations
export default function Alert({ variant = 'error', className = 'mb-4 p-3 rounded', children }) {
    if (!children) return null;
    return (
        <div className={cx('border', VARIANTS[variant], className)}>
            {children}
        </div>
    );
}
