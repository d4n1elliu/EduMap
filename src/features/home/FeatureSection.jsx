import { Link } from 'react-router-dom';
import cx from '../../lib/cx';

const HEIGHT = 'h-[480px] md:h-[520px]';

// Half image, half text + call-to-action; imageSide picks which half gets the image
export default function FeatureSection({ title, text, image, imageAlt, imageSide = 'left', dark = false, cta }) {
    const imageBlock = (
        <div className={cx('w-full', HEIGHT)}>
            <img src={image} alt={imageAlt} className="w-full h-full object-cover" />
        </div>
    );

    const textBlock = (
        <div className={cx('flex flex-col justify-center px-10 py-12', HEIGHT, dark ? 'bg-[#1c2955] text-white' : 'bg-white')}>
            <h2 className="text-3xl font-bold mb-4">{title}</h2>
            <p className={cx('mb-6 max-w-md', dark ? 'text-gray-200' : 'text-gray-700')}>{text}</p>
            <Link
                to={cta.to}
                className="block w-full max-w-[300px] text-center bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg font-semibold transition-colors"
            >
                {cta.label}
            </Link>
        </div>
    );

    return (
        <section className="w-full grid grid-cols-1 md:grid-cols-2">
            {imageSide === 'left' ? <>{imageBlock}{textBlock}</> : <>{textBlock}{imageBlock}</>}
        </section>
    );
}
