
import { useState } from "react";
import { CategorySection } from "@/components/CategorySection";
import { OrderDialog } from "@/components/OrderDialog";
import { OrderInstructions } from "@/components/OrderInstructions";
import { NavigationTabs } from "@/components/NavigationTabs";
import { WebhookSettings } from "@/components/WebhookSettings";
import { AppHeader } from "@/components/AppHeader";
import { Product } from "@/types/product";
import { products, categories } from "@/data/products";

const Index = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isOrderDialogOpen, setIsOrderDialogOpen] = useState(false);
  const [webhookUrl, setWebhookUrl] = useState("");

  // Проверяем, находимся ли мы в режиме разработки
  const isDevelopment = import.meta.env.DEV;

  const handleOrder = (product: Product) => {
    setSelectedProduct(product);
    setIsOrderDialogOpen(true);
  };

  return (
    <div className="min-h-screen gradient-bg">
      <div className="container mx-auto px-4 py-8">
        <AppHeader />

        {/* Настройки webhook - только для режима разработки */}
        {isDevelopment && (
          <WebhookSettings 
            webhookUrl={webhookUrl}
            onWebhookChange={setWebhookUrl}
          />
        )}

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
