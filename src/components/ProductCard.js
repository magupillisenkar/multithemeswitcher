import { motion } from 'framer-motion';

export default function ProductCard({ product }) {
  return (
   <motion.div
  className="border p-4 rounded-xl shadow-md bg-white text-dark  duration-300"
>
  <div className="overflow-hidden rounded-md">
    <motion.img
      src={product.image}
      alt={product.title}
      className="h-32 object-contain mx-auto mb-2"
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.4 }}
    />
  </div>
  <h3 className="font-bold text-md mb-1 text-black">{product.title}</h3>
  <p className="text-sm text-black">${product.price}</p>
</motion.div>

  );
}
