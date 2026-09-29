import cx from '../../lib/cx';

// Full-screen dimmed overlay that centers its children
export default function Modal({ backdropClassName = 'bg-black/40 p-4', children }) {
    return (
        <div className={cx('fixed inset-0 z-50 flex items-center justify-center', backdropClassName)}>
            {children}
        </div>
    );
}
