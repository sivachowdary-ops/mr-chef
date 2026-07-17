export interface MenuItem {
  name: string;
  price?: number;
  puffPrice?: number;
  doublePrice?: number;
}

export interface MenuCategory {
  categoryId: string;
  categoryName: string;
  hasMultiPricing?: boolean; // True for Waffles
  items: MenuItem[];
}

export const menuCategories: MenuCategory[] = [
  {
    categoryId: "pizza-veg",
    categoryName: "Pizza — Veg (8 Inches)",
    items: [
      { name: "Classic Veg Pizza", price: 120 },
      { name: "Sweet Corn Pizza", price: 130 },
      { name: "Paneer Pizza", price: 140 },
      { name: "Paneer Corn Pizza", price: 150 },
      { name: "Veg Cheese Burst", price: 170 },
    ],
  },
  {
    categoryId: "pizza-nonveg",
    categoryName: "Pizza — Non-Veg (8 Inches)",
    items: [
      { name: "Chicken Pizza", price: 140 },
      { name: "Double Chicken Pizza", price: 150 },
      { name: "Chicken Sweet Corn", price: 160 },
      { name: "Chicken Paneer Pizza", price: 170 },
      { name: "Mr. Chef Mixed Pizza", price: 180 },
      { name: "Chicken Cheese Burst Pizza", price: 200 },
    ],
  },
  {
    categoryId: "crispy-chicken",
    categoryName: "Crispy Chicken",
    items: [
      { name: "Crispy Chicken Wings (4 pcs)", price: 100 },
      { name: "Crispy Chicken Wings (6 pcs)", price: 150 },
      { name: "Crispy Chicken Lollipop (4 pcs)", price: 150 },
      { name: "Crispy Chicken Lollipop (6 pcs)", price: 180 },
      { name: "Crispy Chicken Popcorn", price: 150 },
    ],
  },
  {
    categoryId: "rolls",
    categoryName: "Rolls",
    items: [
      { name: "Egg Roll", price: 40 },
      { name: "Double Egg Roll", price: 50 },
      { name: "Paneer Roll", price: 60 },
      { name: "Chicken Roll", price: 60 },
      { name: "Cheese Chicken Roll", price: 70 },
      { name: "Double Chicken Roll", price: 80 },
      { name: "Cheese Double Chicken Roll", price: 90 },
      { name: "Crispy Chicken Roll", price: 90 },
    ],
  },
  {
    categoryId: "french-fries",
    categoryName: "French Fries",
    items: [
      { name: "French Fries", price: 70 },
      { name: "Peri Peri French Fries", price: 80 },
    ],
  },
  {
    categoryId: "waffles",
    categoryName: "Waffles",
    hasMultiPricing: true,
    items: [
      { name: "Dark Fantasy", puffPrice: 45, doublePrice: 100 },
      { name: "Milk Fantasy", puffPrice: 45, doublePrice: 100 },
      { name: "White Fantasy", puffPrice: 50, doublePrice: 120 },
      { name: "Dark & Milk", puffPrice: 55, doublePrice: 120 },
      { name: "Triple Chocolate", puffPrice: 65, doublePrice: 130 },
      { name: "Crunchy Oreo", puffPrice: 70, doublePrice: 130 },
      { name: "Crunchy KitKat", puffPrice: 70, doublePrice: 130 },
      { name: "Gems with Milk", puffPrice: 70, doublePrice: 130 },
      { name: "Gems with Dark", puffPrice: 70, doublePrice: 130 },
    ],
  },
  {
    categoryId: "mocktails",
    categoryName: "Mocktails",
    items: [
      { name: "Blue Colourso", price: 60 },
      { name: "Lemon & Mint", price: 60 },
      { name: "Strawberry", price: 60 },
      { name: "Black Currant", price: 60 },
      { name: "Mango", price: 60 },
    ],
  },
];

export const menuDisclaimer =
  "Sample Menu — actual offerings can be customized per franchise outlet requirements.";

export const menuWhatsAppPrompt =
  "Have questions about the menu or want a custom menu for your outlet? Chat with us.";
