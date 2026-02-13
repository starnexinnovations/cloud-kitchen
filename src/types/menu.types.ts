export interface MenuItem {
  id: number;
  nameEn: string;
  nameTa: string;
  price: number;
  isVeg: boolean;
  isPopular?: boolean;
  isSpicy?: boolean;

  cuisine?: string;
  dietary?: string[];
  eventType?: string[];
  allergens?: string[];
  ingredients?: string[];
  calories?: number;
  image?: string;
}

export interface MenuCategory {
  id: string;
  nameEn: string;
  nameTa: string;
  description: string;
  image: string;
  items: MenuItem[];
}