// src/components/features/ProductCard.tsx
import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/types';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105">
      <Image 
        src={product.image} 
        alt={product.name} 
        width={250} 
        height={250} 
        className="w-full h-48 object-cover" 
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold truncate">{product.name}</h3>
        <p className="text-sm text-gray-500 my-1">{product.category}</p>
        <p className="text-2xl font-bold text-blue-600">${product.price.toFixed(2)}</p>
        <Link 
          href={`/products/${product.id}`} 
          className="mt-4 block text-center bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Ver detalles
        </Link>
      </div>
    </div>
  );
}