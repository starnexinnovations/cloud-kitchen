import { restaurantInfo, stats } from '../data/restaurantData';
import Button from '../components/ui/Button';
import { ArrowRight, Quote } from 'lucide-react';

const About = () => {
    return (
        <div className="pt-24 pb-16">
            {/* Page Header */}
            <section className="bg-secondary py-16 md:py-20">
                <div className="container mx-auto px-4 text-center">
                    <span className="text-primary font-medium text-sm uppercase tracking-wider">
                        Our Story
                    </span>
                    <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mt-2 mb-4">
                        About Us
                    </h1>
                    <p className="font-tamil text-2xl text-accent">
                        {restaurantInfo.nameTa}
                    </p>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-16 md:py-24 bg-background">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Image */}
                        <div className="relative">
                            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                                <img
                                    src="https://images.unsplash.com/photo-1567337710282-00832b415979?w=800"
                                    alt="South Indian Cuisine"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            {/* Decorative Element */}
                            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 rounded-2xl -z-10" />
                            <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent/20 rounded-2xl -z-10" />

                            {/* Established Badge */}
                            {restaurantInfo.established && (
                                <div className="absolute bottom-4 left-4 bg-white rounded-xl p-4 shadow-lg">
                                    <p className="text-sm text-text-secondary">Established</p>
                                    <p className="text-2xl font-heading font-bold text-secondary">
                                        {restaurantInfo.established}
                                    </p>
                                </div>
                            )}
                        </div>

                        {/* Content */}
                        <div>
                            <span className="text-primary font-medium text-sm uppercase tracking-wider">
                                Our Journey
                            </span>
                            <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mt-2 mb-6">
                                A Legacy of Authentic Flavors
                            </h2>
                            <div className="prose prose-lg text-text-secondary">
                                {restaurantInfo.story.split('\n\n').map((paragraph, index) => (
                                    <p key={index} className="mb-4">{paragraph}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="py-16 md:py-24 bg-surface">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <span className="text-primary font-medium text-sm uppercase tracking-wider">
                                What We Believe
                            </span>
                            <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mt-2">
                                Our Philosophy
                            </h2>
                        </div>

                        {/* Quote Box */}
                        <div className="relative bg-background rounded-2xl p-8 md:p-12">
                            <Quote className="absolute top-4 left-4 w-12 h-12 text-primary/20" />
                            <div className="relative z-10 text-text-secondary leading-relaxed">
                                {restaurantInfo.philosophy.split('\n\n').map((paragraph, index) => (
                                    <div key={index} className="mb-4" dangerouslySetInnerHTML={{
                                        __html: paragraph.replace(/\*\*(.*?)\*\*/g, '<strong class="text-secondary">$1</strong>')
                                    }} />
                                ))}
                            </div>
                            <Quote className="absolute bottom-4 right-4 w-12 h-12 text-primary/20 rotate-180" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-secondary">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <p className="text-4xl md:text-5xl font-heading font-bold text-primary mb-2">
                                    {stat.value}
                                </p>
                                <p className="text-white/80">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 md:py-24 bg-background">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-4">
                        Come, Taste the Tradition
                    </h2>
                    <p className="text-text-secondary max-w-xl mx-auto mb-8">
                        Experience the authentic flavors of South India at Krishna Catering.
                        We look forward to serving you.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button href="/menu" size="lg">
                            Explore Our Menu
                            <ArrowRight className="w-5 h-5" />
                        </Button>
                        <Button href="/contact" variant="outline" size="lg">
                            Contact Us
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
