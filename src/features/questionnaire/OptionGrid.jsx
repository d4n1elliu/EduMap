import cx from '../../lib/cx';

const SELECTED = {
    green: { on: 'bg-green-500 text-white border-green-600', off: 'hover:bg-green-50' },
    blue: { on: 'bg-blue-500 text-white border-blue-600', off: 'hover:bg-blue-50' },
};

const LAYOUTS = {
    // Large equal-width tiles in a grid
    tiles: {
        container: 'grid grid-cols-2 sm:grid-cols-3 gap-3',
        option: 'w-full text-center px-4 py-3 rounded border text-base font-medium transition-colors',
    },
    // Compact wrapping chips
    chips: {
        container: 'flex flex-wrap gap-2',
        option: 'px-3 py-1 rounded border text-gray-700 transition-colors',
    },
};

// Multi-select list of options rendered as toggleable tiles or chips
export default function OptionGrid({ options, selected, onToggle, color = 'blue', layout = 'tiles' }) {
    const { container, option } = LAYOUTS[layout];
    const colors = SELECTED[color];

    return (
        <div className={container}>
            {options.map((opt) => {
                const isSelected = selected.includes(opt);
                return (
                    <label key={opt} className="flex items-center cursor-pointer">
                        <input
                            type="checkbox"
                            checked={isSelected}
                            onChange={() => onToggle(opt)}
                            className="hidden"
                        />
                        <span className={cx(option, isSelected ? colors.on : colors.off)}>{opt}</span>
                    </label>
                );
            })}
        </div>
    );
}
