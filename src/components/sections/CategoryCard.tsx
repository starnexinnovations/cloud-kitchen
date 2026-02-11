import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { MenuCategory } from '../../types';

interface CategoryCardProps {
    category: MenuCategory;
}

const CategoryCard = ({ category }: CategoryCardProps) => {
    const itemCount = category.items.length;
    const vegCount = category.items.filter((item) => item.isVeg).length;
    const nonVegCount = itemCount - vegCount;

    return (
        <Link
            to={`/menu/${category.id}`}
            className="group relative block overflow-hidden rounded-2xl aspect-[4/3] hover-lift"
        >
            {/* Background Image */}
            <img
                src={category.image}
                alt={category.nameEn}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

            {/* Content */}
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
                {/* Category Name */}
                <h3 className="font-tamil text-2xl font-bold text-white mb-1">
                    {category.nameTa}
                </h3>
                <p className="text-lg text-white/90 font-heading font-medium mb-2">
                    {category.nameEn}
                </p>

                {/* Description */}
                <p className="text-sm text-white/70 line-clamp-2 mb-3">
                    {category.description}
                </p>

                {/* Stats */}
                <div className="flex items-center gap-4 text-sm mb-4">
                    <span className="text-white/80">
                        {itemCount} items
                    </span>
                    {vegCount > 0 && (
                        <span className="flex items-center gap-1 text-green-400">
                            <span className="w-2 h-2 rounded-full bg-green-400" />
                            {vegCount} Veg
                        </span>
                    )}
                    {nonVegCount > 0 && (
                        <span className="flex items-center gap-1 text-red-400">
                            <span className="w-2 h-2 rounded-full bg-red-400" />
                            {nonVegCount} Non-Veg
                        </span>
                    )}
                </div>

                {/* View Button */}
                <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all duration-300">
                    <span>View Menu</span>
                    <ArrowRight className="w-5 h-5" />
                </div>
            </div>

            {/* Hover Border Effect */}
            <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/50 rounded-2xl transition-colors duration-300" />
        </Link>
    );
};

export default CategoryCard;
