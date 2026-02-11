import type { MenuCategory } from '../types';

export const menuCategories: MenuCategory[] = [
    {
        id: 'breakfast',
        nameEn: 'Breakfast',
        nameTa: 'காலை உணவு',
        description: 'Start your day with our authentic South Indian breakfast items',
        image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800',
        items: [
            { id: 1, nameEn: 'Idli (2 pcs)', nameTa: 'இட்லி', price: 40, isVeg: true, isPopular: true },
            { id: 2, nameEn: 'Sambar Idli (2 pcs)', nameTa: 'சாம்பார் இட்லி', price: 50, isVeg: true },
            { id: 3, nameEn: 'Ghee Pongal', nameTa: 'நெய் பொங்கல்', price: 60, isVeg: true, isPopular: true },
            { id: 4, nameEn: 'Ven Pongal', nameTa: 'வெண் பொங்கல்', price: 50, isVeg: true },
            { id: 5, nameEn: 'Plain Dosa', nameTa: 'தோசை', price: 45, isVeg: true },
            { id: 6, nameEn: 'Masala Dosa', nameTa: 'மசாலா தோசை', price: 65, isVeg: true, isPopular: true },
            { id: 7, nameEn: 'Onion Dosa', nameTa: 'வெங்காய தோசை', price: 55, isVeg: true },
            { id: 8, nameEn: 'Ghee Roast', nameTa: 'நெய் ரோஸ்ட்', price: 70, isVeg: true },
            { id: 9, nameEn: 'Paniyaram (5 pcs)', nameTa: 'பணியாரம்', price: 50, isVeg: true },
            { id: 10, nameEn: 'Kuzhi Paniyaram', nameTa: 'குழி பணியாரம்', price: 55, isVeg: true },
            { id: 11, nameEn: 'Medu Vadai (2 pcs)', nameTa: 'மெது வடை', price: 40, isVeg: true, isPopular: true },
            { id: 12, nameEn: 'Sambar Vadai', nameTa: 'சாம்பார் வடை', price: 50, isVeg: true },
            { id: 13, nameEn: 'Curd Vadai', nameTa: 'தயிர் வடை', price: 55, isVeg: true },
            { id: 14, nameEn: 'Uthappam', nameTa: 'உத்தாப்பம்', price: 55, isVeg: true },
            { id: 15, nameEn: 'Onion Uthappam', nameTa: 'வெங்காய உத்தாப்பம்', price: 65, isVeg: true },
            { id: 16, nameEn: 'Poori (3 pcs)', nameTa: 'பூரி', price: 50, isVeg: true },
            { id: 17, nameEn: 'Chapathi (2 pcs)', nameTa: 'சப்பாத்தி', price: 40, isVeg: true },
            { id: 18, nameEn: 'Parotta (2 pcs)', nameTa: 'பரோட்டா', price: 50, isVeg: true, isPopular: true },
        ]
    },
    {
        id: 'rice',
        nameEn: 'Rice Varieties',
        nameTa: 'சாத வகைகள்',
        description: 'Flavorful rice dishes prepared with traditional recipes',
        image: 'https://images.unsplash.com/photo-1596097635121-14b63a7a8c14?w=800',
        items: [
            { id: 19, nameEn: 'Plain Rice', nameTa: 'வெள்ளை சாதம்', price: 40, isVeg: true },
            { id: 20, nameEn: 'Sambar Rice', nameTa: 'சாம்பார் சாதம்', price: 60, isVeg: true },
            { id: 21, nameEn: 'Rasam Rice', nameTa: 'ரசம் சாதம்', price: 55, isVeg: true },
            { id: 22, nameEn: 'Curd Rice', nameTa: 'தயிர் சாதம்', price: 50, isVeg: true, isPopular: true },
            { id: 23, nameEn: 'Lemon Rice', nameTa: 'எலுமிச்சை சாதம்', price: 60, isVeg: true, isPopular: true },
            { id: 24, nameEn: 'Tomato Rice', nameTa: 'தக்காளி சாதம்', price: 65, isVeg: true },
            { id: 25, nameEn: 'Tamarind Rice', nameTa: 'புளியோதரை', price: 65, isVeg: true, isPopular: true },
            { id: 26, nameEn: 'Coconut Rice', nameTa: 'தேங்காய் சாதம்', price: 70, isVeg: true },
            { id: 27, nameEn: 'Vegetable Biryani', nameTa: 'காய்கறி பிரியாணி', price: 100, isVeg: true },
            { id: 28, nameEn: 'Ghee Rice', nameTa: 'நெய் சாதம்', price: 80, isVeg: true },
            { id: 29, nameEn: 'Jeera Rice', nameTa: 'சீரக சாதம்', price: 75, isVeg: true },
            { id: 30, nameEn: 'Mint Rice', nameTa: 'புதினா சாதம்', price: 70, isVeg: true },
        ]
    },
    {
        id: 'gravies',
        nameEn: 'Gravies & Kuzhambu',
        nameTa: 'குழம்பு வகைகள்',
        description: 'Traditional Tamil Nadu style curries and gravies',
        image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800',
        items: [
            { id: 31, nameEn: 'Sambar', nameTa: 'சாம்பார்', price: 40, isVeg: true, isPopular: true },
            { id: 32, nameEn: 'Rasam', nameTa: 'ரசம்', price: 35, isVeg: true },
            { id: 33, nameEn: 'Vathal Kuzhambu', nameTa: 'வத்தக்குழம்பு', price: 50, isVeg: true, isPopular: true },
            { id: 34, nameEn: 'Mor Kuzhambu', nameTa: 'மோர் குழம்பு', price: 45, isVeg: true },
            { id: 35, nameEn: 'Puli Kuzhambu', nameTa: 'புளி குழம்பு', price: 50, isVeg: true },
            { id: 36, nameEn: 'Kootu', nameTa: 'கூட்டு', price: 55, isVeg: true },
            { id: 37, nameEn: 'Poriyal', nameTa: 'பொரியல்', price: 45, isVeg: true },
            { id: 38, nameEn: 'Aviyal', nameTa: 'அவியல்', price: 60, isVeg: true },
            { id: 39, nameEn: 'Kadai Paneer', nameTa: 'கடாய் பன்னீர்', price: 120, isVeg: true },
            { id: 40, nameEn: 'Paneer Butter Masala', nameTa: 'பன்னீர் பட்டர் மசாலா', price: 130, isVeg: true, isPopular: true },
            { id: 41, nameEn: 'Aloo Gobi', nameTa: 'உருளை காலிஃப்ளவர்', price: 80, isVeg: true },
            { id: 42, nameEn: 'Dal Fry', nameTa: 'பருப்பு', price: 70, isVeg: true },
        ]
    },
    {
        id: 'nonveg',
        nameEn: 'Non-Vegetarian',
        nameTa: 'அசைவ உணவுகள்',
        description: 'Succulent meat dishes with authentic spices',
        image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=800',
        items: [
            { id: 43, nameEn: 'Chicken Curry', nameTa: 'சிக்கன் கறி', price: 150, isVeg: false, isPopular: true, isSpicy: true },
            { id: 44, nameEn: 'Chicken Fry', nameTa: 'சிக்கன் ஃப்ரை', price: 160, isVeg: false, isSpicy: true },
            { id: 45, nameEn: 'Chicken 65', nameTa: 'சிக்கன் 65', price: 180, isVeg: false, isPopular: true, isSpicy: true },
            { id: 46, nameEn: 'Chicken Biryani', nameTa: 'சிக்கன் பிரியாணி', price: 180, isVeg: false, isPopular: true },
            { id: 47, nameEn: 'Butter Chicken', nameTa: 'பட்டர் சிக்கன்', price: 200, isVeg: false },
            { id: 48, nameEn: 'Mutton Curry', nameTa: 'மட்டன் கறி', price: 220, isVeg: false, isPopular: true, isSpicy: true },
            { id: 49, nameEn: 'Mutton Fry', nameTa: 'மட்டன் ஃப்ரை', price: 240, isVeg: false, isSpicy: true },
            { id: 50, nameEn: 'Mutton Biryani', nameTa: 'மட்டன் பிரியாணி', price: 250, isVeg: false, isPopular: true },
            { id: 51, nameEn: 'Fish Curry', nameTa: 'மீன் குழம்பு', price: 180, isVeg: false, isSpicy: true },
            { id: 52, nameEn: 'Fish Fry', nameTa: 'மீன் வறுவல்', price: 200, isVeg: false, isPopular: true },
            { id: 53, nameEn: 'Prawn Masala', nameTa: 'இறால் மசாலா', price: 280, isVeg: false, isSpicy: true },
            { id: 54, nameEn: 'Prawn Biryani', nameTa: 'இறால் பிரியாணி', price: 300, isVeg: false },
            { id: 55, nameEn: 'Egg Curry', nameTa: 'முட்டை கறி', price: 80, isVeg: false },
            { id: 56, nameEn: 'Egg Biryani', nameTa: 'முட்டை பிரியாணி', price: 120, isVeg: false },
        ]
    },
    {
        id: 'sweets',
        nameEn: 'Sweets & Payasam',
        nameTa: 'இனிப்புகள்',
        description: 'Traditional South Indian desserts and sweet delicacies',
        image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800',
        items: [
            { id: 57, nameEn: 'Kesari', nameTa: 'கேசரி', price: 50, isVeg: true, isPopular: true },
            { id: 58, nameEn: 'Payasam', nameTa: 'பாயசம்', price: 60, isVeg: true, isPopular: true },
            { id: 59, nameEn: 'Pal Payasam', nameTa: 'பால் பாயசம்', price: 65, isVeg: true },
            { id: 60, nameEn: 'Semiya Payasam', nameTa: 'சேமியா பாயசம்', price: 55, isVeg: true },
            { id: 61, nameEn: 'Paruppu Payasam', nameTa: 'பருப்பு பாயசம்', price: 60, isVeg: true },
            { id: 62, nameEn: 'Gulab Jamun (2 pcs)', nameTa: 'குலாப் ஜாமூன்', price: 50, isVeg: true, isPopular: true },
            { id: 63, nameEn: 'Jangiri', nameTa: 'ஜாங்கிரி', price: 40, isVeg: true },
            { id: 64, nameEn: 'Mysore Pak', nameTa: 'மைசூர் பாக்', price: 45, isVeg: true },
            { id: 65, nameEn: 'Badam Halwa', nameTa: 'பாதாம் அல்வா', price: 70, isVeg: true },
            { id: 66, nameEn: 'Carrot Halwa', nameTa: 'கேரட் அல்வா', price: 55, isVeg: true },
            { id: 67, nameEn: 'Double Ka Meetha', nameTa: 'டபுள் கா மீஃட்', price: 65, isVeg: true },
            { id: 68, nameEn: 'Ice Cream', nameTa: 'ஐஸ் கிரீம்', price: 50, isVeg: true },
        ]
    }
];

// Get all menu items as a flat array
export const getAllMenuItems = () => {
    return menuCategories.flatMap(category => category.items);
};

// Get popular items
export const getPopularItems = () => {
    return getAllMenuItems().filter(item => item.isPopular);
};

// Get category by ID
export const getCategoryById = (id: string) => {
    return menuCategories.find(category => category.id === id);
};

// Get items by category ID
export const getItemsByCategoryId = (categoryId: string) => {
    const category = getCategoryById(categoryId);
    return category ? category.items : [];
};
