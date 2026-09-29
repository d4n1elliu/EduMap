import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import EduMapLogo from '../../assets/EduMap Logo 300dpi.png';
import { GUEST_LINKS, NAV_LINKS, PATHS } from '../../config/routes';
import { clearToken, isLoggedIn } from '../../lib/auth';
import { MenuIcon } from '../ui/Icons';

const MENU_ITEM_CLASS = 'block px-5 py-3 hover:bg-slate-800';

function Navbar() {
    const loggedIn = isLoggedIn();
    const navigate = useNavigate();

    /* Controls the hamburger menu panel */
    const [menuOpen, setMenuOpen] = useState(false);
    const closeMenu = () => setMenuOpen(false);

    const handleLogout = () => {
        closeMenu();
        clearToken();
        navigate(PATHS.HOME);
        window.location.reload();
    };

    // Fixed top bar with a high z-index so it stays above page content and maps
    return (
        <nav className="px-6 py-5 flex justify-between items-center fixed top-0 left-0 right-0 z-[2000] h-24 flex items-center bg-slate-900 text-white px-6">
            <div className="flex items-center space-x-3">
                <img
                    src={EduMapLogo}
                    alt="EduMap Logo"
                    className="h-15 w-auto object-contain"
                />
                <h1 className="text-blue-400 text-2xl font-bold">
                    <NavLink to={PATHS.HOME}>EduMap</NavLink>
                </h1>
            </div>

            <div className="relative">
                <button
                    type="button"
                    onClick={() => setMenuOpen((o) => !o)}
                    aria-label="Open menu"
                    className="p-2 rounded-lg hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                    <MenuIcon className="w-7 h-7" />
                </button>

                {menuOpen && (
                    <div className="fixed right-0 top-23 w-68 z-[2100] rounded-xl bg-slate-900 border border-slate-300 shadow-2xl overflow-hidden">
                        <div className="py-2">
                            {NAV_LINKS.map(({ to, label }) => (
                                <NavLink key={to} to={to} onClick={closeMenu} className={MENU_ITEM_CLASS}>
                                    {label}
                                </NavLink>
                            ))}
                            <div className="border-t border-slate-700 my-2" />

                            {loggedIn ? (
                                <button onClick={handleLogout} className="w-full text-left px-5 py-3 hover:bg-slate-800">Logout</button>
                            ) : (
                                GUEST_LINKS.map(({ to, label }) => (
                                    <NavLink key={to} to={to} onClick={closeMenu} className={MENU_ITEM_CLASS}>
                                        {label}
                                    </NavLink>
                                ))
                            )}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
