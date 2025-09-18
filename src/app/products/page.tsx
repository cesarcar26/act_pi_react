// src/app/products/[id]/page.tsx
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getProductById } from '@/lib/api';

interface ProductPageProps {
  params: {
    id: string;
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await getProductById(Number(params.id));

  if (!product) {
    notFound();
  }

  return (
    <main className="container mx-auto p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 md:flex md:items-center">
        <div className="md:w-1/2">
          <Image 
            src={product.image} 
            alt={product.name} 
            width={500} 
            height={500} 
            className="rounded-lg shadow-md"
          />
        </div>
        <div className="md:w-1/2 md:pl-8 mt-6 md:mt-0">
          <h1 className="text-4xl font-bold text-gray-800">{product.name}</h1>
          <p className="text-2xl font-bold text-blue-600 mt-2">${product.price.toFixed(2)}</p>
          <p className="text-gray-700 mt-4 leading-relaxed">{product.description}</p>
          <div className="mt-8">
            <button className="bg-blue-600 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300">
              Agregar al Carrito
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}