import cx from '../../lib/cx';

// Full-height brand gradient; className controls the inner layout
export default function Background({ className = 'flex flex-col', children }) {
    return (
        <div className={cx('min-h-screen bg-gradient-to-br from-blue-800 via-blue-300 via-orange-300 to-orange-800', className)}>
            {children}
        </div>
    );
}
