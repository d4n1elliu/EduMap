import cx from '../../lib/cx';

const SIZES = {
    md: 'w-16 h-16 mb-4',
    lg: 'w-20 h-20 mb-6',
};

// Orange circular badge holding an icon or initials
export default function IconCircle({ size = 'md', className, children }) {
    return (
        <div className={cx('bg-orange-500 rounded-full flex items-center justify-center mx-auto', SIZES[size], className)}>
            {children}
        </div>
    );
}
