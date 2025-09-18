// src/app/products/page.tsx
import ProductCard from '../../components/features/ProductCard';
import { getProducts } from '../../lib/api';

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center my-6">Todos los Productos</h1>
      
feature/products-list
      {/* Aquí puedes agregar un input de búsqueda y unos botones para filtrar */}
       main
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}