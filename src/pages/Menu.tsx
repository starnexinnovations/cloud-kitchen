import { menuCategories } from '../data/menuData';
import CategoryCard from '../components/sections/CategoryCard';

const Menu = () => {
    return (
        <div className="pt-24 pb-16">
            {/* Page Header */}
            <section className="bg-secondary py-16 md:py-20">
                <div className="container mx-auto px-4 text-center">
                    <span className="text-primary font-medium text-sm uppercase tracking-wider">
                        Authentic Flavors
                    </span>
                    <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mt-2 mb-4">
                        Our Menu
                    </h1>
                    <p className="text-white/80 max-w-2xl mx-auto">
                        Explore our diverse selection of authentic South Indian dishes,
                        from traditional breakfast items to flavorful curries and sweet delights.
                    </p>
                </div>
            </section>

            {/* Category Grid */}
            <section className="py-12 md:py-16 bg-background">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {menuCategories.map((category) => (
                            <CategoryCard key={category.id} category={category} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Info Banner */}
            <section className="py-8 bg-surface">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-text-secondary">
                        <span className="text-primary font-semibold">Note:</span> Prices may vary.
                        All our dishes are prepared fresh to order.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Menu;
