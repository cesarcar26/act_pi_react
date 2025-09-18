// src/lib/api.ts
import { Product } from '@/types';

const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Procesador AMD Ryzen 5 5600X",
    category: 'CPU',
    price: 250.000,
    image: "/images/cpu_amd.jpg",
    description: "Un procesador de alto rendimiento ideal para gaming y productividad."
  },
  {
    id: 2,
    name: "Tarjeta Gráfica NVIDIA GeForce RTX 3060",
    category: 'GPU',
    price: 350.000,
    image: "/images/gpu_nvidia.jpg",
    description: "Gráficos impresionantes con Ray Tracing y DLSS."
  },
  {
    id: 3,
    name: "Memoria RAM Corsair Vengeance 16GB",
    category: 'RAM',
    price: 179.000,
    image: "/images/ram_corsair.jpg",
    description: "Módulos de alta velocidad para un rendimiento fluido."
  },
  {
    id: 4,
    name: "Disco SSD Samsung 970 EVO Plus 1TB",
    category: 'Storage',
    price: 540.000,
    image: "/images/ssd_samsung.jpg",
    description: "Almacenamiento ultra-rápido para tus juegos y aplicaciones."
  },
];

export async function getFeaturedProducts(): Promise<Product[]> {
  return PRODUCTS.slice(0, 3);
}

export async function getProducts(): Promise<Product[]> {
  return PRODUCTS;
}

export async function getProductById(id: number): Promise<Product | undefined> {
  return PRODUCTS.find(product => product.id === id);
}