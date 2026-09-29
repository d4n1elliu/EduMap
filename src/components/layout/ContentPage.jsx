import cx from '../../lib/cx';
import PageLayout from './PageLayout';

// Layout for text-heavy pages (About, Contact, FAQ, Terms): centered column with a big title
export default function ContentPage({ title, subtitle, maxWidth = 'max-w-4xl', headerClassName = 'mb-12', children }) {
    return (
        <PageLayout>
            <div className="flex-1 flex items-center justify-center px-4 py-12">
                <div className={cx('w-full', maxWidth)}>
                    <div className={cx('text-center', headerClassName)}>
                        <h1 className="text-5xl md:text-6xl font-bold text-blue-700 mb-6">{title}</h1>
                        {subtitle && <p className="font-bold text-black text-sm">{subtitle}</p>}
                    </div>
                    {children}
                </div>
            </div>
        </PageLayout>
    );
}
