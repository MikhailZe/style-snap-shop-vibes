
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingBag } from "lucide-react";
import { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
  onOrder: (product: Product) => void;
}

export const ProductCard = ({ product, onOrder }: ProductCardProps) => {
  return (
    <Card className="card-hover bg-white/80 backdrop-blur-sm border-soft-pink-200 overflow-hidden">
      <div className="aspect-square overflow-hidden">
        <img
          src={`https://images.unsplash.com/${product.image}?w=400&h=400&fit=crop`}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-semibold text-lg text-gray-800">{product.name}</h3>
          {product.isNew && (
            <Badge className="bg-soft-pink-100 text-soft-pink-600 border-soft-pink-200">
              Новинка
            </Badge>
          )}
        </div>
        <p className="text-gray-600 text-sm mb-3 leading-relaxed">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-soft-pink-600">{product.price}</span>
          <Button 
            onClick={() => onOrder(product)}
            className="button-gradient text-white border-0 hover:bg-none px-6 py-2 rounded-full"
          >
            <ShoppingBag className="w-4 h-4 mr-2" />
            Заказать
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
