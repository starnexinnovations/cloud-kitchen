import { ArrowRight } from 'lucide-react';
import { getPopularItems } from '../../data/menuData';
import Button from '../ui/Button';
import MenuCard from './MenuCard';

const FeaturedMenu = () => {
    const popularItems = getPopularItems().slice(0, 6);

    return (
        <section className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
                    <div>
                        <span className="text-primary font-medium text-sm uppercase tracking-wider">
                            Most Loved
                        </span>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mt-2">
                            Popular Dishes
                        </h2>
                        <p className="text-text-secondary mt-2 max-w-xl">
                            Discover our customers' favorite dishes, prepared with authentic recipes
                            and the finest ingredients.
                        </p>
                    </div>
                    <Button href="/menu" variant="outline">
                        View Full Menu
                        <ArrowRight className="w-5 h-5" />
                    </Button>
                </div>

                {/* Popular Items Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {popularItems.map((item) => (
                        <MenuCard key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedMenu;
