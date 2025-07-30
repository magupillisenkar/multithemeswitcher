import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { useTheme } from '../contexts/ThemeContext';

export default function Home() {
  const [products, setProducts] = useState([]);
  const { theme } = useTheme();

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then(setProducts);
  }, []);

  return (
   <main className={` ${theme.background} ${theme.text} min-h-screen ${theme.font}`}>
     <main className={`pt-30 max-w-6xl mx-auto `}>
      <div className="p-6 text-center">
      <h1 className="text-3xl font-bold mb-4">Our Products</h1>

      <p className="text-lg mb-6 max-w-2xl mx-auto">
        At Loop Products, we craft innovative, user-friendly technology designed to enhance everyday life. Explore our curated collection of smart lifestyle tools, built with precision, sustainability, and a passion for simplicity.
      </p>
      </div>

      <div className={theme.layout}>
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </main>
   </main>
  );
}