import { Link } from 'react-router-dom';
import { FOOTER_LINKS } from '../../config/routes';
import { COPYRIGHT, PORTFOLIO_LINK, PROJECT_CREDIT, SITE_TAGLINE } from '../../config/site';
import { LinkedInIcon, TwitterIcon } from '../ui/Icons';

const SOCIAL_LINKS = [
    { href: '#', label: 'Twitter', Icon: TwitterIcon },
    { href: '#', label: 'LinkedIn', Icon: LinkedInIcon },
];

export default function Footer() {
    return (
        <footer className="text-white w-full bg-slate-900">
            <div className="px-6 py-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">

                    {/* Company Info */}
                    <div className="col-span-1">
                        <h3 className="text-2xl font-bold mb-5 text-white">EduMap</h3>
                        <p className="text-slate-300 mb-5">{SITE_TAGLINE}</p>
                        <div className="flex space-x-4">
                            {SOCIAL_LINKS.map(({ href, label, Icon }) => (
                                <a key={label} href={href} aria-label={label} className="text-blue-300 hover:text-white transition-colors">
                                    <Icon className="w-6 h-6" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Support Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Support</h4>
                        <ul className="space-y-2 mb-6">
                            {FOOTER_LINKS.map(({ to, label }) => (
                                <li key={to}>
                                    <Link to={to} className="text-slate-300 hover:text-white transition-colors">{label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar: copyright in the left corner, project credit in the right */}
                <div className="mt-10 pt-6 border-t border-slate-700 flex flex-col md:flex-row md:justify-between gap-2 text-sm text-slate-400 text-center md:text-left">
                    <p>{COPYRIGHT}</p>
                    <p>
                        {PROJECT_CREDIT} ·{' '}
                        <a
                            href={PORTFOLIO_LINK.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-300 hover:text-white transition-colors"
                        >
                            {PORTFOLIO_LINK.label}
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
