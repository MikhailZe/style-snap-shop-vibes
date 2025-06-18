import { useState } from "react";
import { CategorySection } from "@/components/CategorySection";
import { OrderDialog } from "@/components/OrderDialog";
import { OrderInstructions } from "@/components/OrderInstructions";
import { NavigationTabs } from "@/components/NavigationTabs";
import { WebhookSettings } from "@/components/WebhookSettings";

interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
  isNew?: boolean;
}

const Index = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isOrderDialogOpen, setIsOrderDialogOpen] = useState(false);
  const [webhookUrl, setWebhookUrl] = useState("");

  // Проверяем, находимся ли мы в режиме разработки
  const isDevelopment = import.meta.env.DEV;

  const products: Product[] = [
    // Мужские костюмы
    {
      id: "1",
      name: "Классический мужской костюм",
      description: "Элегантный костюм из качественной шерсти, идеально подходит для деловых встреч",
      price: "от 25 000 ₽",
      image: "photo-1649972904349-6e44c42644a7",
      category: "Мужские костюмы",
      isNew: true
    },
    {
      id: "2",
      name: "Приталенный костюм",
      description: "Современный силуэт с акцентом на фигуру, отличный выбор для особых событий",
      price: "от 28 000 ₽",
      image: "photo-1581091226825-a6a2a5aee158",
      category: "Мужские костюмы"
    },

    // Женские костюмы
    {
      id: "3",
      name: "Деловой женский костюм",
      description: "Стильный комплект пиджак + юбка, создает профессиональный образ",
      price: "от 22 000 ₽",
      image: "photo-1649972904349-6e44c42644a7",
      category: "Женские костюмы",
      isNew: true
    },
    {
      id: "4",
      name: "Вечерний костюм",
      description: "Изысканный наряд для торжественных мероприятий",
      price: "от 30 000 ₽",
      image: "photo-1581091226825-a6a2a5aee158",
      category: "Женские костюмы"
    },

    // Костюмы с шортами
    {
      id: "5",
      name: "Летний костюм с шортами",
      description: "Легкий и стильный комплект для теплой погоды",
      price: "от 18 000 ₽",
      image: "photo-1649972904349-6e44c42644a7",
      category: "Костюмы с шортами",
      isNew: true
    },

    // Рубашки
    {
      id: "6",
      name: "Классическая рубашка",
      description: "Базовая рубашка из качественного хлопка",
      price: "от 5 000 ₽",
      image: "photo-1581091226825-a6a2a5aee158",
      category: "Рубашки"
    },
    {
      id: "7",
      name: "Дизайнерская рубашка",
      description: "Оригинальный крой с интересными деталями",
      price: "от 8 000 ₽",
      image: "photo-1649972904349-6e44c42644a7",
      category: "Рубашки",
      isNew: true
    },

    // Шапки
    {
      id: "8",
      name: "Вязаная шапка",
      description: "Теплая и уютная шапка ручной работы",
      price: "от 2 500 ₽",
      image: "photo-1581091226825-a6a2a5aee158",
      category: "Шапки"
    },

    // Свитшоты
    {
      id: "9",
      name: "Уютный свитшот",
      description: "Комфортная одежда для отдыха и прогулок",
      price: "от 6 000 ₽",
      image: "photo-1649972904349-6e44c42644a7",
      category: "Свитшоты"
    },

    // Футболки
    {
      id: "10",
      name: "Базовая футболка",
      description: "Качественная футболка из мягкого хлопка",
      price: "от 3 000 ₽",
      image: "photo-1581091226825-a6a2a5aee158",
      category: "Футболки"
    },

    // Тренчи
    {
      id: "11",
      name: "Классический тренч",
      description: "Элегантное пальто в стиле Burberry",
      price: "от 35 000 ₽",
      image: "photo-1649972904349-6e44c42644a7",
      category: "Тренчи",
      isNew: true
    }
  ];

  const categories = [
    "Мужские костюмы",
    "Женские костюмы", 
    "Костюмы с шортами",
    "Рубашки",
    "Шапки",
    "Свитшоты",
    "Футболки",
    "Тренчи"
  ];

  const handleOrder = (product: Product) => {
    setSelectedProduct(product);
    setIsOrderDialogOpen(true);
  };

  return (
    <div className="min-h-screen gradient-bg">
      <div className="container mx-auto px-4 py-8">
        {/* Заголовок */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-soft-pink-600 to-lavender-600 bg-clip-text text-transparent">
            Boutique Atelier
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Создаем уникальную одежду специально для вас. Индивидуальный пошив с любовью к деталям ✨
          </p>
        </div>

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
