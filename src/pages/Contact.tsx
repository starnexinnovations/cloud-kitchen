import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { contactInfo } from '../data/restaurantData';
import Button from '../components/ui/Button';

const Contact = () => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Form submission is visual only for MVP
        alert('Thank you for your message! We will get back to you soon.');
    };

    return (
        <div className="pt-24 pb-16">
            {/* Page Header */}
            <section className="bg-secondary py-16 md:py-20">
                <div className="container mx-auto px-4 text-center">
                    <span className="text-primary font-medium text-sm uppercase tracking-wider">
                        Get in Touch
                    </span>
                    <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mt-2 mb-4">
                        Contact Us
                    </h1>
                    <p className="text-white/80 max-w-2xl mx-auto">
                        We'd love to hear from you. Reach out to us for any inquiries,
                        feedback, or catering requests.
                    </p>
                </div>
            </section>

            {/* Contact Content */}
            <section className="py-16 bg-background">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <div>
                            <h2 className="text-2xl font-heading font-bold text-secondary mb-6">
                                Contact Information
                            </h2>

                            <div className="space-y-6">
                                {/* Phone */}
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                                        <Phone className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-secondary mb-1">Phone</h3>
                                        <a
                                            href={`tel:${contactInfo.phone}`}
                                            className="text-text-secondary hover:text-primary transition-colors block"
                                        >
                                            {contactInfo.phone}
                                        </a>
                                        {contactInfo.altPhone && (
                                            <a
                                                href={`tel:${contactInfo.altPhone}`}
                                                className="text-text-secondary hover:text-primary transition-colors block"
                                            >
                                                {contactInfo.altPhone}
                                            </a>
                                        )}
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                                        <Mail className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-secondary mb-1">Email</h3>
                                        <a
                                            href={`mailto:${contactInfo.email}`}
                                            className="text-text-secondary hover:text-primary transition-colors"
                                        >
                                            {contactInfo.email}
                                        </a>
                                    </div>
                                </div>

                                {/* Address */}
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                                        <MapPin className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-secondary mb-1">Address</h3>
                                        <p className="text-text-secondary">
                                            {contactInfo.address}<br />
                                            {contactInfo.city} - {contactInfo.pincode}
                                        </p>
                                        <a
                                            href={contactInfo.mapUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-primary hover:text-primary-dark font-medium inline-flex items-center gap-1 mt-2"
                                        >
                                            Get Directions
                                            <MapPin className="w-4 h-4" />
                                        </a>
                                    </div>
                                </div>

                                {/* Opening Hours */}
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                                        <Clock className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-secondary mb-2">Opening Hours</h3>
                                        <div className="space-y-1">
                                            {contactInfo.timings.map((timing, index) => (
                                                <div key={index} className="flex justify-between text-text-secondary text-sm">
                                                    <span className="font-medium">{timing.days}</span>
                                                    <span className="ml-4">{timing.hours}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-surface rounded-2xl p-8 shadow-lg">
                            <h2 className="text-2xl font-heading font-bold text-secondary mb-6">
                                Send us a Message
                            </h2>
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
                                            Your Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            className="w-full px-4 py-3 rounded-lg border border-background-dark bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-text-primary mb-2">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            className="w-full px-4 py-3 rounded-lg border border-background-dark bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                            placeholder="+91 98765 43210"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-background-dark bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-text-primary mb-2">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-background-dark bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                        placeholder="Catering Inquiry"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-background-dark bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                                        placeholder="Tell us about your requirements..."
                                    />
                                </div>

                                <Button type="submit" fullWidth size="lg">
                                    <Send className="w-5 h-5" />
                                    Send Message
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="py-8 bg-surface">
                <div className="container mx-auto px-4">
                    <div className="rounded-2xl overflow-hidden shadow-lg h-[400px]">
                        <iframe
                            src={contactInfo.mapEmbedUrl}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Restaurant Location"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
