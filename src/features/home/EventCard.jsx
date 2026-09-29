// Preview card for an upcoming event
export default function EventCard({ title, host, image, onDetails }) {
    return (
        <div className="bg-white shadow-md rounded-xl overflow-hidden w-72 flex flex-col">
            <img src={image} alt={title} className="w-full h-40 object-cover" />
            <div className="p-4 flex flex-col flex-grow">
                <h3 className="font-semibold text-sm mb-1">{title}</h3>
                <p className="font-semibold text-sm text-blue-600">Hosted by {host}</p>

                <div className="mt-auto flex justify-end">
                    <button onClick={onDetails} className="mt-4 bg-orange-500 hover:bg-orange-600 text-white text-xs px-3 py-1 rounded">
                        See details…
                    </button>
                </div>
            </div>
        </div>
    );
}
