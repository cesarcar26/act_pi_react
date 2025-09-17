// src/types/index.ts
export type Product = {
  id: number;
  name: string;
  category: 'CPU' | 'GPU' | 'RAM' | 'Storage' | 'Motherboard';
  price: number;
  image: string;
  description: string;
};