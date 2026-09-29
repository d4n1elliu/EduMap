import { Link } from 'react-router-dom';
import Modal from '../../components/ui/Modal';
import { PATHS } from '../../config/routes';

export default function BookingSuccessModal({ onClose }) {
    return (
        <Modal backdropClassName="bg-black/60">
            <div className="bg-white p-6 rounded-xl shadow-2xl text-center max-w-md">
                <h2 className="text-2xl font-bold text-green-600 mb-2">🎉 Booking Confirmed!</h2>
                <p className="text-gray-700">Your mentor session has been successfully booked.</p>
                <Link
                    to={PATHS.EVENTS_MAP}
                    className="mt-6 px-4 py-2 rounded bg-purple-600 text-white inline-block"
                    onClick={onClose}
                >
                    Proceed to Events Map
                </Link>
            </div>
        </Modal>
    );
}
