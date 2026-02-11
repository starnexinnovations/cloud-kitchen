import Hero from '../components/sections/Hero';
import Highlights from '../components/sections/Highlights';
import FeaturedMenu from '../components/sections/FeaturedMenu';
import { contactInfo } from '../data/restaurantData';
import { Phone, MapPin, ArrowRight } from 'lucide-react';
import Button from '../components/ui/Button';

const Home = () => {
    return (
        <>
            {/* Hero Section */}
            <Hero />

            {/* Highlights Section */}
            <Highlights />

            {/* Featured Menu Section */}
            <FeaturedMenu />

            {/* CTA Section */}
            <section className="py-16 md:py-24 bg-secondary relative overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                            Ready to Experience Authentic Flavors?
                        </h2>
                        <p className="text-white/80 mb-8 text-lg">
                            Visit us today and indulge in the rich culinary heritage of Tamil Nadu.
                            We promise an unforgettable dining experience.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button href="/menu" size="lg">
                                Explore Menu
                                <ArrowRight className="w-5 h-5" />
                            </Button>
                            <Button href="/contact" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-secondary">
                                Contact Us
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Info Bar */}
            <section className="py-8 bg-background-dark">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                <Phone className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <p className="text-sm text-text-secondary">Call us at</p>
                                <a href={`tel:${contactInfo.phone}`} className="font-semibold text-secondary hover:text-primary transition-colors">
                                    {contactInfo.phone}
                                </a>
                            </div>
                        </div>
                        <div className="hidden md:block w-px h-12 bg-text-light/20" />
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                <MapPin className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <p className="text-sm text-text-secondary">Visit us at</p>
                                <p className="font-semibold text-secondary">
                                    {contactInfo.address}, {contactInfo.city}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
