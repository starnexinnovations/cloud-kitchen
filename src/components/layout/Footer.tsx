import { Link } from 'react-router-dom';
import {
    Phone,
    Mail,
    MapPin,
    Clock,
    Facebook,
    Instagram,
    Twitter,
    Youtube,
    UtensilsCrossed,
    Heart
} from 'lucide-react';
import { contactInfo, restaurantInfo, quickLinks, socialLinks } from '../../data/restaurantData';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    Facebook,
    Instagram,
    Twitter,
    Youtube
};

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-secondary text-white">
            {/* Main Footer Content */}
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Brand Column */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                                <UtensilsCrossed className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h3 className="text-xl font-heading font-bold">
                                    {restaurantInfo.nameEn}
                                </h3>
                                <p className="text-sm font-tamil text-white/70">
                                    {restaurantInfo.nameTa}
                                </p>
                            </div>
                        </div>
                        <p className="text-white/80 text-sm leading-relaxed">
                            {restaurantInfo.tagline}. Serving authentic South Indian cuisine with love and tradition.
                        </p>
                        {/* Social Links */}
                        <div className="flex items-center gap-3">
                            {socialLinks.map((social) => {
                                const IconComponent = iconMap[social.icon];
                                return (
                                    <a
                                        key={social.name}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                                        aria-label={social.name}
                                    >
                                        {IconComponent && <IconComponent className="w-5 h-5" />}
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-heading font-semibold mb-4 text-accent">
                            Quick Links
                        </h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.path}>
                                    <Link
                                        to={link.path}
                                        className="text-white/80 hover:text-primary transition-colors text-sm flex items-center gap-2"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-heading font-semibold mb-4 text-accent">
                            Contact Us
                        </h4>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3 text-sm">
                                <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                <div>
                                    <p className="text-white/80">{contactInfo.phone}</p>
                                    {contactInfo.altPhone && (
                                        <p className="text-white/60">{contactInfo.altPhone}</p>
                                    )}
                                </div>
                            </li>
                            <li className="flex items-start gap-3 text-sm">
                                <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                <a
                                    href={`mailto:${contactInfo.email}`}
                                    className="text-white/80 hover:text-primary transition-colors"
                                >
                                    {contactInfo.email}
                                </a>
                            </li>
                            <li className="flex items-start gap-3 text-sm">
                                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                <p className="text-white/80">
                                    {contactInfo.address},<br />
                                    {contactInfo.city} - {contactInfo.pincode}
                                </p>
                            </li>
                        </ul>
                    </div>

                    {/* Opening Hours */}
                    <div>
                        <h4 className="text-lg font-heading font-semibold mb-4 text-accent">
                            Opening Hours
                        </h4>
                        <ul className="space-y-3">
                            {contactInfo.timings.map((timing, index) => (
                                <li key={index} className="flex items-start gap-3 text-sm">
                                    <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <div>
                                        <p className="text-white font-medium">{timing.days}</p>
                                        <p className="text-white/70">{timing.hours}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-2 text-sm text-white/60">
                        <p>
                            © {currentYear} {restaurantInfo.nameEn}. All rights reserved.
                        </p>
                        <p className="flex items-center gap-1">
                            Made with <Heart className="w-4 h-4 text-primary fill-primary" /> in India
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
