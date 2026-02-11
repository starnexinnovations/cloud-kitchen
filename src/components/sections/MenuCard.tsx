import { Flame } from 'lucide-react';
import type { MenuItem } from '../../types';
import Badge from '../ui/Badge';

interface MenuCardProps {
    item: MenuItem;
    showSerial?: boolean;
    serialNumber?: number;
}

const MenuCard = ({ item, showSerial = false, serialNumber }: MenuCardProps) => {
    return (
        <div className="group flex items-start gap-4 p-4 rounded-xl bg-surface hover:shadow-md transition-all duration-300 border border-transparent hover:border-primary/20">
            {/* Serial Number */}
            {showSerial && serialNumber && (
                <span className="w-8 h-8 flex-shrink-0 rounded-full bg-background flex items-center justify-center text-sm font-medium text-text-secondary">
                    {serialNumber}
                </span>
            )}

            {/* Veg/Non-Veg Indicator */}
            <div className="flex-shrink-0 mt-1">
                <Badge variant={item.isVeg ? 'veg' : 'nonveg'} />
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                    <div>
                        {/* Tamil Name */}
                        <h3 className="font-tamil text-lg font-semibold text-secondary group-hover:text-primary transition-colors">
                            {item.nameTa}
                        </h3>
                        {/* English Name */}
                        <p className="text-sm text-text-secondary">
                            {item.nameEn}
                        </p>
                    </div>

                    {/* Price */}
                    {item.price && (
                        <span className="flex-shrink-0 text-lg font-semibold text-primary">
                            ₹{item.price}
                        </span>
                    )}
                </div>

                {/* Description */}
                {item.description && (
                    <p className="mt-1 text-sm text-text-light line-clamp-2">
                        {item.description}
                    </p>
                )}

                {/* Tags */}
                <div className="flex items-center gap-2 mt-2">
                    {item.isPopular && (
                        <Badge variant="popular">Popular</Badge>
                    )}
                    {item.isSpicy && (
                        <Badge variant="spicy">
                            <Flame className="w-3 h-3 mr-0.5" />
                            Spicy
                        </Badge>
                    )}
                    {item.quantity && (
                        <Badge>{item.quantity}</Badge>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MenuCard;
