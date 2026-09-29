import { CONTACT_INFO } from '../../config/site';

function ContactBox() {
    return (
        <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-gray-800">
                <strong>Email:</strong> {CONTACT_INFO.email}<br />
                <strong>Phone:</strong> {CONTACT_INFO.phone}<br />
                <strong>Address:</strong> {CONTACT_INFO.addressLines.join(', ')}
            </p>
        </div>
    );
}

// Render one content block (see termsContent.js for the block formats)
function Block({ block }) {
    if (typeof block === 'string') {
        return <p className="text-gray-800 leading-relaxed">{block}</p>;
    }
    if (block.list) {
        return (
            <ul className="list-disc list-inside text-gray-800 ml-4 space-y-2">
                {block.list.map((item) => <li key={item}>{item}</li>)}
            </ul>
        );
    }
    if (block.contact) {
        return <ContactBox />;
    }
    return (
        <p className="text-gray-800 leading-relaxed">
            <strong>{block.label}:</strong> {block.text}
        </p>
    );
}

// Numbered heading followed by its content blocks
export default function LegalSection({ number, title, content }) {
    return (
        <section>
            <h2 className="text-2xl font-bold text-orange-500 mb-4">{number}. {title}</h2>
            <div className="space-y-4">
                {content.map((block, i) => <Block key={i} block={block} />)}
            </div>
        </section>
    );
}
