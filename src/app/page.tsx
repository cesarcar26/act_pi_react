// src/app/page.tsx
import Link from 'next/link';
import ProductCard from '../components/features/ProductCard';
import { getFeaturedProducts } from '../lib/api';

export default async function HomePage() {
  const featuredProducts = await getFeaturedProducts();

  return (
    <main className="container mx-auto p-4">
      <section className="text-center my-8">
        <h1 className="text-4xl font-bold text-gray-800">Bienvenidos a TechParts 🚀</h1>
        <p className="mt-2 text-lg text-gray-600">Tu tienda de confianza para partes de computadores de alta calidad.</p>
      </section>
      
      <section className="my-12">
        <h2 className="text-3xl font-semibold text-center text-gray-700">Productos Destacados</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
      
      <section className="text-center my-8">
        <Link href="/products" className="bg-blue-600 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300">
          Ver todos los productos
        </Link>
      </section>
    </main>
  );
}