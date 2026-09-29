import cx from '../../lib/cx';

const FOCUS_COLORS = {
    orange: 'focus:ring-orange-500',
    blue: 'focus:ring-blue-500',
};

// Labelled input (or textarea) with the site's standard styling
export default function FormField({ label, id, textarea = false, focusColor = 'blue', className, ...inputProps }) {
    const Input = textarea ? 'textarea' : 'input';
    return (
        <div className={className}>
            <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-2">
                {label}
            </label>
            <Input
                id={id}
                className={cx(
                    'w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent',
                    FOCUS_COLORS[focusColor],
                    textarea && 'resize-none'
                )}
                {...inputProps}
            />
        </div>
    );
}
