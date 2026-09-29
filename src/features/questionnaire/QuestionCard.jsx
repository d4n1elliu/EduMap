import cx from '../../lib/cx';

export const PRIMARY_BUTTON = 'py-2 px-4 rounded-lg bg-orange-500 text-white font-semibold hover:bg-orange-600';
export const SECONDARY_BUTTON = 'py-2 px-4 rounded-lg bg-gray-200 text-gray-700 font-semibold hover:bg-gray-300';

// White card wrapping one questionnaire step
export function QuestionCard({ title, description, className, children }) {
    return (
        <section className={cx('rounded-xl border border-gray-200 p-6 shadow-sm bg-white', className)}>
            {title && <div className="text-2xl font-semibold text-blue-800 mb-4">{title}</div>}
            {description && <p className="text-gray-600 mb-4">{description}</p>}
            {children}
        </section>
    );
}

// Back / Continue buttons; Back is hidden when onBack is not given
export function StepNav({ onBack, onNext }) {
    return (
        <div className="flex justify-between mt-6">
            {onBack && <button onClick={onBack} className={SECONDARY_BUTTON}>Back</button>}
            <button onClick={onNext} className={cx(PRIMARY_BUTTON, 'ml-auto')}>Continue</button>
        </div>
    );
}

export function ValidationMessage({ children }) {
    if (!children) return null;
    return (
        <div className="mt-4 p-3 bg-red-100 border border-red-300 rounded-lg">
            <p className="text-red-700 text-sm font-medium">{children}</p>
        </div>
    );
}
