import cx from '../../lib/cx';

// White content panel used across the static pages
export default function Card({ as: Tag = 'div', padding = 'p-8', shadow = true, className, children }) {
    return (
        <Tag className={cx('bg-white/100 backdrop-blur-sm rounded-lg', padding, shadow && 'shadow-lg', className)}>
            {children}
        </Tag>
    );
}
