import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, UtensilsCrossed } from 'lucide-react';
import { navItems, restaurantInfo } from '../../data/restaurantData';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsMenuOpen(false);
    }, [location]);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? 'glass shadow-lg py-2'
                    : 'bg-transparent py-4'
                }`}
        >
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link
                        to="/"
                        className="flex items-center gap-3 group"
                    >
                        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                            <UtensilsCrossed className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl font-heading font-bold text-secondary">
                                {restaurantInfo.nameEn}
                            </span>
                            <span className="text-xs font-tamil text-text-secondary">
                                {restaurantInfo.nameTa}
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`relative text-base font-medium transition-colors hover:text-primary ${location.pathname === item.path
                                        ? 'text-primary'
                                        : 'text-text-primary'
                                    }`}
                            >
                                {item.label}
                                {location.pathname === item.path && (
                                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full" />
                                )}
                            </Link>
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden w-10 h-10 rounded-lg bg-surface shadow-md flex items-center justify-center text-text-primary hover:text-primary transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div
                className={`md:hidden fixed inset-x-0 top-full transition-all duration-300 ${isMenuOpen
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 -translate-y-4 pointer-events-none'
                    }`}
            >
                <nav className="glass mx-4 mt-2 rounded-xl shadow-xl overflow-hidden">
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`block px-6 py-4 text-base font-medium border-b border-background-dark last:border-0 transition-colors ${location.pathname === item.path
                                    ? 'text-primary bg-background'
                                    : 'text-text-primary hover:text-primary hover:bg-background'
                                }`}
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
};

export default Header;
