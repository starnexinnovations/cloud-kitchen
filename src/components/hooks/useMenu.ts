

import { useMemo, useState } from 'react';
import { getAllMenuItems } from '../../data/menuData';
import type { MenuItem } from '../../types';
interface MenuFilters {
  dietary?: "veg" | "nonveg";
  price?: number;
}
export const useMenu = () => {
  const [filters, setFilters] = useState<MenuFilters>({});
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [inquiry, setInquiry] = useState<MenuItem[]>([]);

  const allItems: MenuItem[] = getAllMenuItems();

  const filteredItems = useMemo(() => {
    return allItems.filter(item => {
      return (
        (!filters.dietary ||
          (filters.dietary === "veg" ? item.isVeg : !item.isVeg)) &&
        (filters.price === undefined || item.price <= filters.price)
      );
    });
  }, [filters, allItems]);



  return {
    filters,
    setFilters,
    selectedItem,
    setSelectedItem,
    filteredItems,


  };
};