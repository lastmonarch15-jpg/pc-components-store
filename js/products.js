
const products = [
  {
    id: 1,
    name: "NVIDIA GeForce RTX 4070 SUPER 12GB",
    category: "GPU",
    categoryName: "Graphics Card",
    brand: "NVIDIA",
    price: 59999,
    oldPrice: 69999,
    rating: 4.8,
    reviews: 124,
    badge: "BESTSELLER",
    image: "https://placehold.co/600x500/182130/ff6b2c?text=RTX+4070+SUPER",
    description: "High-performance graphics card designed for gaming, streaming, and creative workloads."
  },
  {
    id: 2,
    name: "AMD Ryzen 7 7800X3D Desktop Processor",
    category: "CPU",
    categoryName: "Processor",
    brand: "AMD",
    price: 38999,
    oldPrice: 44999,
    rating: 4.9,
    reviews: 216,
    badge: "TOP RATED",
    image: "https://placehold.co/600x500/182130/ff6b2c?text=RYZEN+7",
    description: "A gaming-focused processor with exceptional performance and advanced 3D V-Cache technology."
  },
  {
    id: 3,
    name: "Corsair Vengeance RGB 32GB DDR5 6000MHz",
    category: "RAM",
    categoryName: "Memory",
    brand: "Corsair",
    price: 10999,
    oldPrice: 12999,
    rating: 4.7,
    reviews: 98,
    badge: "POPULAR",
    image: "https://placehold.co/600x500/182130/ff6b2c?text=DDR5+RAM",
    description: "Fast DDR5 memory with RGB lighting, built for demanding gaming and multitasking."
  },
  {
    id: 4,
    name: "Samsung 990 PRO 1TB NVMe M.2 SSD",
    category: "Storage",
    categoryName: "Storage",
    brand: "Samsung",
    price: 8499,
    oldPrice: 9999,
    rating: 4.8,
    reviews: 185,
    badge: "FAST SELLING",
    image: "https://placehold.co/600x500/182130/ff6b2c?text=990+PRO+SSD",
    description: "Ultra-fast PCIe 4.0 NVMe storage for quick boot times and rapid file transfers."
  },
  {
    id: 5,
    name: "ASUS ROG STRIX B650E-F Gaming WiFi",
    category: "Motherboard",
    categoryName: "Motherboard",
    brand: "ASUS",
    price: 24999,
    oldPrice: 28999,
    rating: 4.6,
    reviews: 72,
    badge: "FEATURED",
    image: "https://placehold.co/600x500/182130/ff6b2c?text=ROG+STRIX",
    description: "Feature-rich AM5 motherboard with WiFi, premium power delivery, and PCIe 5.0 support."
  },
  {
    id: 6,
    name: "Cooler Master MWE Gold 850W Fully Modular",
    category: "PSU",
    categoryName: "Power Supply",
    brand: "Cooler Master",
    price: 10499,
    oldPrice: 11999,
    rating: 4.7,
    reviews: 63,
    badge: "RELIABLE",
    image: "https://placehold.co/600x500/182130/ff6b2c?text=850W+PSU",
    description: "Reliable 80 Plus Gold power supply with fully modular cables for clean builds."
  },
  {
    id: 7,
    name: "ZOTAC GeForce RTX 4060 Twin Edge 8GB",
    category: "GPU",
    categoryName: "Graphics Card",
    brand: "ZOTAC",
    price: 29999,
    oldPrice: 34999,
    rating: 4.5,
    reviews: 88,
    badge: "VALUE PICK",
    image: "https://placehold.co/600x500/182130/ff6b2c?text=RTX+4060",
    description: "Efficient 1080p gaming graphics card with modern ray tracing and DLSS support."
  },
  {
    id: 8,
    name: "AMD Ryzen 5 7600X 6-Core Processor",
    category: "CPU",
    categoryName: "Processor",
    brand: "AMD",
    price: 19999,
    oldPrice: 23999,
    rating: 4.6,
    reviews: 143,
    badge: "GAMING PICK",
    image: "https://placehold.co/600x500/182130/ff6b2c?text=RYZEN+5",
    description: "Excellent mainstream processor for gaming, productivity, and everyday performance."
  }
];

function formatPrice(price) {
  return "₹" + price.toLocaleString("en-IN");
}
