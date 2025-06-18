
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Product } from "@/types/product";

interface OrderData {
  product: Product;
  customerInfo?: {
    name?: string;
    phone?: string;
    size?: string;
    comments?: string;
  };
}

export const useOrderSubmission = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const submitOrder = async (orderData: OrderData, webhookUrl?: string) => {
    setIsSubmitting(true);
    console.log("Отправка заказа:", orderData);

    try {
      // Отправка в Telegram (через Telegram Web App API)
      if (window.Telegram?.WebApp) {
        const telegramData = {
          product_name: orderData.product.name,
          product_price: orderData.product.price,
          product_category: orderData.product.category,
          customer_info: orderData.customerInfo,
          timestamp: new Date().toISOString(),
        };

        window.Telegram.WebApp.sendData(JSON.stringify(telegramData));
        console.log("Данные отправлены в Telegram:", telegramData);
      }

      // Отправка webhook в n8n с плоской структурой данных
      if (webhookUrl) {
        const webhookData = {
          // Информация о продукте
          product_id: orderData.product.id,
          product_name: orderData.product.name,
          product_description: orderData.product.description,
          product_price: orderData.product.price,
          product_category: orderData.product.category,
          product_image: orderData.product.image,
          product_is_new: orderData.product.isNew || false,
          
          // Информация о клиенте
          customer_name: orderData.customerInfo?.name || "",
          customer_phone: orderData.customerInfo?.phone || "",
          customer_size: orderData.customerInfo?.size || "",
          customer_comments: orderData.customerInfo?.comments || "",
          
          // Системная информация
          source: "telegram_mini_app",
          timestamp: new Date().toISOString(),
          order_date: new Date().toLocaleDateString('ru-RU'),
          order_time: new Date().toLocaleTimeString('ru-RU'),
        };

        await fetch(webhookUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          mode: "no-cors",
          body: JSON.stringify(webhookData),
        });
        console.log("Webhook отправлен в n8n с структурированными данными:", webhookData);
      }

      toast({
        title: "Заказ отправлен! 💕",
        description: "Наш менеджер свяжется с вами в ближайшее время",
      });

      return true;
    } catch (error) {
      console.error("Ошибка при отправке заказа:", error);
      toast({
        title: "Ошибка отправки",
        description: "Попробуйте еще раз или свяжитесь с нами напрямую",
        variant: "destructive",
      });
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  return { submitOrder, isSubmitting };
};
