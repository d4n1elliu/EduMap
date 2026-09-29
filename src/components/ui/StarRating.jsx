import { StarIcon } from './Icons';

// Five stars with the first `rating` highlighted
export default function StarRating({ rating = 0, starClassName = 'w-4 h-4', max = 5 }) {
    return Array.from({ length: max }, (_, i) => (
        <StarIcon
            key={i}
            className={`${starClassName} ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        />
    ));
}
