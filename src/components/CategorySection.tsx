
import { ProductCard } from "./ProductCard";

interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
  isNew?: boolean;
}

interface CategorySectionProps {
  title: string;
  products: Product[];
  onOrder: (product: Product) => void;
}

export const CategorySection = ({ title, products, onOrder }: CategorySectionProps) => {
  return (
    <section className="mb-12 animate-fade-in">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 relative">
        {title}
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-soft-pink-400 to-lavender-400 rounded-full"></div>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onOrder={onOrder} />
        ))}
      </div>
    </section>
  );
};
