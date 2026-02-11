import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import { getCategoryById, menuCategories } from '../data/menuData';
import MenuCard from '../components/sections/MenuCard';
import Button from '../components/ui/Button';

const MenuCategory = () => {
    const { categoryId } = useParams<{ categoryId: string }>();
    const category = categoryId ? getCategoryById(categoryId) : null;

    if (!category) {
        return (
            <div className="pt-24 pb-16 min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-3xl font-heading font-bold text-secondary mb-4">
                        Category Not Found
                    </h1>
                    <p className="text-text-secondary mb-8">
                        The menu category you're looking for doesn't exist.
                    </p>
                    <Button href="/menu">
                        <ArrowLeft className="w-5 h-5" />
                        Back to Menu
                    </Button>
                </div>
            </div>
        );
    }

    const vegItems = category.items.filter((item) => item.isVeg);
    const nonVegItems = category.items.filter((item) => !item.isVeg);

    return (
        <div className="pt-24 pb-16">
            {/* Page Header */}
            <section
                className="relative py-16 md:py-24 bg-cover bg-center"
                style={{ backgroundImage: `url(${category.image})` }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
                <div className="container mx-auto px-4 relative z-10">
                    {/* Breadcrumb */}
                    <nav className="flex items-center gap-2 text-sm text-white/60 mb-6">
                        <Link to="/" className="hover:text-white transition-colors">Home</Link>
                        <ChevronRight className="w-4 h-4" />
                        <Link to="/menu" className="hover:text-white transition-colors">Menu</Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-white">{category.nameEn}</span>
                    </nav>

                    {/* Title */}
                    <h1 className="font-tamil text-4xl md:text-5xl font-bold text-white mb-2">
                        {category.nameTa}
                    </h1>
                    <p className="text-2xl font-heading text-primary font-medium mb-4">
                        {category.nameEn}
                    </p>
                    <p className="text-white/80 max-w-xl">
                        {category.description}
                    </p>

                    {/* Stats */}
                    <div className="flex items-center gap-6 mt-6">
                        <span className="text-white/80">
                            <span className="text-2xl font-bold text-white">{category.items.length}</span> items
                        </span>
                        {vegItems.length > 0 && (
                            <span className="flex items-center gap-2 text-white/80">
                                <span className="w-3 h-3 rounded-full bg-green-500" />
                                <span className="text-2xl font-bold text-white">{vegItems.length}</span> Veg
                            </span>
                        )}
                        {nonVegItems.length > 0 && (
                            <span className="flex items-center gap-2 text-white/80">
                                <span className="w-3 h-3 rounded-full bg-red-500" />
                                <span className="text-2xl font-bold text-white">{nonVegItems.length}</span> Non-Veg
                            </span>
                        )}
                    </div>
                </div>
            </section>

            {/* Menu Items */}
            <section className="py-12 md:py-16 bg-background">
                <div className="container mx-auto px-4">
                    {/* Back Button */}
                    <Button href="/menu" variant="ghost" className="mb-8">
                        <ArrowLeft className="w-5 h-5" />
                        Back to Menu
                    </Button>

                    {/* Vegetarian Items */}
                    {vegItems.length > 0 && (
                        <div className="mb-12">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="w-4 h-4 rounded-sm border-2 border-green-500 flex items-center justify-center">
                                    <span className="w-2 h-2 rounded-full bg-green-500" />
                                </span>
                                <h2 className="text-2xl font-heading font-bold text-secondary">
                                    Vegetarian
                                </h2>
                                <span className="text-text-secondary">({vegItems.length} items)</span>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {vegItems.map((item, index) => (
                                    <MenuCard
                                        key={item.id}
                                        item={item}
                                        showSerial
                                        serialNumber={index + 1}
                                    />
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Non-Vegetarian Items */}
                    {nonVegItems.length > 0 && (
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <span className="w-4 h-4 rounded-sm border-2 border-red-500 flex items-center justify-center">
                                    <span className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-b-[8px] border-b-red-500" />
                                </span>
                                <h2 className="text-2xl font-heading font-bold text-secondary">
                                    Non-Vegetarian
                                </h2>
                                <span className="text-text-secondary">({nonVegItems.length} items)</span>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {nonVegItems.map((item, index) => (
                                    <MenuCard
                                        key={item.id}
                                        item={item}
                                        showSerial
                                        serialNumber={index + 1}
                                    />
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* Other Categories */}
            <section className="py-12 bg-surface">
                <div className="container mx-auto px-4">
                    <h3 className="text-xl font-heading font-bold text-secondary mb-6">
                        Explore Other Categories
                    </h3>
                    <div className="flex flex-wrap gap-3">
                        {menuCategories
                            .filter((cat) => cat.id !== categoryId)
                            .map((cat) => (
                                <Link
                                    key={cat.id}
                                    to={`/menu/${cat.id}`}
                                    className="px-4 py-2 rounded-full bg-background hover:bg-primary hover:text-white transition-colors text-sm font-medium text-text-primary"
                                >
                                    {cat.nameEn}
                                </Link>
                            ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MenuCategory;
