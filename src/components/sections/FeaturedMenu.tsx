import { ArrowRight } from 'lucide-react';
import { getPopularItems } from '../../data/menuData';
import Button from '../ui/Button';
import MenuCard from './MenuCard';

const FeaturedMenu = () => {
    const popularItems = getPopularItems().slice(0, 6);

    return (
       <section className="py-20 md:py-28 bg-gradient-to-b from-background to-white">
  <div className="container mx-auto px-4">

    {/* Section Header */}
    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">

      <div className="max-w-2xl">
        <span className="text-secondary uppercase tracking-widest text-xs font-medium">
          Most Loved
        </span>

        <h2 className="text-4xl md:text-5xl font-heading text-text-primary mt-3">
          Popular Dishes
        </h2>

        <div className="w-16 h-1 bg-secondary mt-4 rounded-full" />

        <p className="text-text-secondary mt-6">
          Discover our customers' favorite dishes, prepared with authentic
          recipes and the finest ingredients.
        </p>
      </div>

      <Button
        href="/menu"
        variant="outline"
        className="border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
      >
        View Full Menu
        <ArrowRight className="w-5 h-5" />
      </Button>

    </div>

    {/* Popular Items Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {popularItems.map((item) => (
        <MenuCard key={item.id} item={item} />
      ))}
    </div>

  </div>
</section>

    );
};

export default FeaturedMenu;
