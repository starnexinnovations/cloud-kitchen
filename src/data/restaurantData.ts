import type { RestaurantInfo, ContactInfo, Feature, HeroSlide, NavItem, SocialLink } from '../types';
import leaf from "../assets/hero/leaf.jpeg";


// Restaurant Information
export const restaurantInfo: RestaurantInfo = {
    name: 'Krishna Catering',
    nameEn: 'Krishna Catering',
    nameTa: 'கிருஷ்ணா கேட்டரிங்',
    tagline: 'Authentic South Indian Cuisine',
    story: `Founded with a passion for preserving the rich culinary heritage of Tamil Nadu, Krishna Catering has been serving authentic South Indian delicacies since our inception. Our journey began with a simple dream - to bring the traditional flavors of home-cooked Tamil cuisine to every table.

Every dish we prepare is a tribute to the centuries-old recipes passed down through generations. From the soft, fluffy idlis that melt in your mouth to the aromatic biryanis that transport you to the royal kitchens, we pour our heart and soul into every preparation.

Our commitment to quality is unwavering. We source the freshest ingredients, use traditional cooking methods, and believe that food made with love tastes the best. Whether it's a family gathering, a wedding celebration, or a simple meal, we bring the same dedication and passion to every order.`,
    philosophy: `At Krishna Catering, we believe that food is not just sustenance - it's an experience that brings people together. Our philosophy centers around three core values:

• **Authenticity**: We stay true to traditional recipes while maintaining the highest standards of hygiene and quality.

• **Freshness**: Every ingredient is carefully selected, and meals are prepared fresh to preserve their natural flavors and nutrients.

• **Love**: We cook with love because we believe it's the secret ingredient that makes our food truly special.`,
    established: '2015'
};

// Contact Information
export const contactInfo: ContactInfo = {
    phone: '+91 93440 20405',
    altPhone: '+91 82483 50005',
    email: 'krishnaafoodservices@gmail.com',
    address: 'Saibaba colony',
    city: 'Coimbatore',
    pincode: '641011',
    mapUrl: 'https://maps.google.com/?q=9.9252,78.1198',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.122!2d78.1198!3d9.9252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwNTUnMzAuNyJOIDc4wrAwNycxMS4zIkU!5e0!3m2!1sen!2sin!4v1234567890',
    timings: [
        { days: 'Monday - Friday', hours: '7:00 AM - 10:00 PM' },
        { days: 'Saturday - Sunday', hours: '6:30 AM - 11:00 PM' },
        { days: 'Public Holidays', hours: '7:00 AM - 10:00 PM' }
    ]
};

// Features / Highlights
export const features: Feature[] = [
    {
        id: 1,
        title: 'Authentic Recipes',
        description: 'Traditional Tamil Nadu recipes passed down through generations',
        icon: 'ChefHat'
    },
    {
        id: 2,
        title: 'Fresh Ingredients',
        description: 'We source the freshest ingredients daily for quality taste',
        icon: 'Leaf'
    },
    {
        id: 3,
        title: 'Hygiene First',
        description: 'Highest standards of cleanliness in our kitchen',
        icon: 'ShieldCheck'
    },
    {
        id: 4,
        title: 'Expert Chefs',
        description: 'Experienced chefs with years of culinary expertise',
        icon: 'Award'
    },
    {
        id: 5,
        title: 'Bilingual Menu',
        description: 'Menu available in both Tamil and English',
        icon: 'Languages'
    },
    {
        id: 6,
        title: 'Catering Services',
        description: 'Professional catering for all occasions',
        icon: 'PartyPopper'
    }
];

// Hero Slides
export const heroSlides: HeroSlide[] = [
    {
        id: 1,
        title: 'Authentic South Indian Flavors',
        image: leaf,
        subtitle: 'Experience the taste of traditional Tamil Nadu cuisine',
        ctaText: 'View Menu',
        ctaLink: '/menu'
    },
    {
        id: 2,
        title: 'Made with Love & Tradition',
        subtitle: 'Every dish tells a story of our rich culinary heritage',
        image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=1600',
        ctaText: 'Our Story',
        ctaLink: '/about'
    },
    {
        id: 3,
        title: 'Catering for Every Occasion',
        subtitle: 'From intimate gatherings to grand celebrations',
        image: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=1600',
        ctaText: 'Contact Us',
        ctaLink: '/contact'
    }
];

// Navigation Items
export const navItems: NavItem[] = [
    { label: 'Home', path: '/' },
    { label: 'Menu', path: '/menu' },
    { label: 'About Us', path: '/about' },
    { label: 'Contact', path: '/contact' },
    { label: 'Book an Appointment', path: '/book-appointment', type: 'button' }
];

// Social Links
export const socialLinks: SocialLink[] = [
    { name: 'Facebook', url: 'https://facebook.com/krishnacatering', icon: 'Facebook' },
    { name: 'Instagram', url: 'https://instagram.com/krishnacatering', icon: 'Instagram' },
    { name: 'Twitter', url: 'https://twitter.com/krishnacatering', icon: 'Twitter' },
    { name: 'YouTube', url: 'https://youtube.com/krishnacatering', icon: 'Youtube' }
];

// Quick Links for Footer
export const quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'Menu', path: '/menu' },
    { label: 'About Us', path: '/about' },
    { label: 'Contact', path: '/contact' },
  
];

// Stats for About Page
export const stats = [
    { value: '10+', label: 'Years of Experience' },
    { value: '50k+', label: 'Happy Customers' },
    { value: '100+', label: 'Delicious Dishes' },
    { value: '500+', label: 'Events Catered' }
];
