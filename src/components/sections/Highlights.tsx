import {
    ChefHat,
    Leaf,
    ShieldCheck,
    Award,
    Languages,
    PartyPopper
} from 'lucide-react';
import { features } from '../../data/restaurantData';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    ChefHat,
    Leaf,
    ShieldCheck,
    Award,
    Languages,
    PartyPopper
};

const Highlights = () => {
    return (
        <section className="py-16 md:py-24 bg-surface">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <span className="text-primary font-medium text-sm uppercase tracking-wider">
                        Why Choose Us
                    </span>
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mt-2 mb-4">
                        What Makes Us Special
                    </h2>
                    <p className="text-text-secondary">
                        We take pride in serving authentic South Indian cuisine with the finest ingredients
                        and traditional cooking methods.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => {
                        const IconComponent = iconMap[feature.icon];

                        return (
                            <div
                                key={feature.id}
                                className="group relative bg-background rounded-xl p-6 hover-lift cursor-default"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                {/* Icon */}
                                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
                                    {IconComponent && (
                                        <IconComponent className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />
                                    )}
                                </div>

                                {/* Content */}
                                <h3 className="text-lg font-heading font-semibold text-secondary mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-text-secondary text-sm leading-relaxed">
                                    {feature.description}
                                </p>

                                {/* Decorative Element */}
                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent rounded-b-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Highlights;
