// Menu Item Interface
export interface MenuItem {
    id: number;
    nameEn: string;
    nameTa: string;
    description?: string;
    quantity?: string;
    price: number;
    isVeg: boolean;
    isPopular?: boolean;
    isSpicy?: boolean;
    image?: string;
}

// Menu Category Interface
export interface MenuCategory {
    id: string;
    nameEn: string;
    nameTa: string;
    description: string;
    image: string;
    icon?: string;
    items: MenuItem[];
}

// Restaurant Information
export interface RestaurantInfo {
    name: string;
    nameEn: string;
    nameTa: string;
    tagline: string;
    story: string;
    philosophy: string;
    established?: string;
}

// Contact Information
export interface ContactInfo {
    phone: string;
    altPhone?: string;
    email: string;
    address: string;
    city: string;
    pincode: string;
    mapUrl: string;
    mapEmbedUrl: string;
    timings: TimingInfo[];
}

// Timing Information
export interface TimingInfo {
    days: string;
    hours: string;
}

// Feature/Highlight
export interface Feature {
    id: number;
    title: string;
    description: string;
    icon: string;
}

// Navigation Item
export interface NavItem {
    label: string;
    path: string;
    type?: 'link' | 'button';
    isActive?: boolean;
}

// Hero Slide
export interface HeroSlide {
    id: number;
    title: string;
    subtitle: string;
    image: string;
    ctaText?: string;
    ctaLink?: string;
}

// Social Links
export interface SocialLink {
    name: string;
    url: string;
    icon: string;
}
