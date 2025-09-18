// src/components/layout/Navbar.tsx
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          TechParts
        </Link>
        <div className="space-x-4">
          <Link href="/products" className="hover:text-blue-400 transition duration-300">
            Productos
          </Link>
          <Link href="/about" className="hover:text-blue-400 transition duration-300">
            Acerca de
          </Link>
        </div>
      </div>
    </nav>
  );
}