
import { useState } from "react";
import { CategorySection } from "@/components/CategorySection";
import { OrderDialog } from "@/components/OrderDialog";
import { OrderInstructions } from "@/components/OrderInstructions";
import { NavigationTabs } from "@/components/NavigationTabs";
import { AppHeader } from "@/components/AppHeader";
import { Product } from "@/types/product";
import { products, categories } from "@/data/products";

const Index = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isOrderDialogOpen, setIsOrderDialogOpen] = useState(false);
  
  // Фиксированный webhook URL
  const webhookUrl = "https://n8n.zemiai.ru/webhook/Poalina";

  const handleOrder = (product: Product) => {
    setSelectedProduct(product);
    setIsOrderDialogOpen(true);
  };

  return (
    <div className="min-h-screen gradient-bg">
      <div className="container mx-auto px-4 py-8">
        <AppHeader />

        {/* Навигация */}
        <NavigationTabs
          instructionsContent={<OrderInstructions />}
        >
          {/* Каталог товаров */}
          <div className="space-y-16">
            {categories.map((category) => {
              const categoryProducts = products.filter(p => p.category === category);
              if (categoryProducts.length === 0) return null;
              
              return (
                <CategorySection
                  key={category}
                  title={category}
                  products={categoryProducts}
                  onOrder={handleOrder}
                />
              );
            })}
          </div>
        </NavigationTabs>

        {/* Диалог заказа */}
        <OrderDialog
          product={selectedProduct}
          isOpen={isOrderDialogOpen}
          onClose={() => setIsOrderDialogOpen(false)}
          webhookUrl={webhookUrl}
        />
      </div>
    </div>
  );
};

export default Index;
