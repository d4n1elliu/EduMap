import { useState } from 'react';
import Card from './Card';
import { ChevronDownIcon } from './Icons';

// One collapsible question/answer row
export function AccordionItem({ title, isOpen, onToggle, children }) {
    return (
        <Card padding="" className="overflow-hidden">
            <button
                onClick={onToggle}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-white/30 transition-colors"
            >
                <h3 className="text-lg font-semibold text-black pr-4">{title}</h3>
                <ChevronDownIcon
                    className={`w-5 h-5 text-orange-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                />
            </button>

            {isOpen && (
                <div className="px-6 pb-4">
                    <div className="border-t border-gray-200 pt-4">
                        <p className="text-black leading-relaxed">{children}</p>
                    </div>
                </div>
            )}
        </Card>
    );
}

// List of independently expandable items: [{ title, content }]
export default function Accordion({ items }) {
    const [openItems, setOpenItems] = useState({});
    const toggle = (index) => setOpenItems((prev) => ({ ...prev, [index]: !prev[index] }));

    return (
        <div className="space-y-4">
            {items.map((item, index) => (
                <AccordionItem
                    key={index}
                    title={item.title}
                    isOpen={Boolean(openItems[index])}
                    onToggle={() => toggle(index)}
                >
                    {item.content}
                </AccordionItem>
            ))}
        </div>
    );
}
