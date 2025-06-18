
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useOrderSubmission } from "@/hooks/useOrderSubmission";

interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
  isNew?: boolean;
}

interface OrderDialogProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  webhookUrl?: string;
}

export const OrderDialog = ({ product, isOpen, onClose, webhookUrl }: OrderDialogProps) => {
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    phone: "",
    size: "",
    comments: "",
  });

  const { submitOrder, isSubmitting } = useOrderSubmission();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!product) return;

    const success = await submitOrder(
      {
        product,
        customerInfo,
      },
      webhookUrl
    );

    if (success) {
      setCustomerInfo({ name: "", phone: "", size: "", comments: "" });
      onClose();
    }
  };

  if (!product) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-white/95 backdrop-blur-sm border-soft-pink-200">
        <DialogHeader>
          <DialogTitle className="text-2xl text-center text-gray-800">
            Оформление заказа
          </DialogTitle>
        </DialogHeader>
        
        <div className="flex items-center space-x-4 p-4 bg-soft-pink-50 rounded-lg mb-4">
          <img
            src={`https://images.unsplash.com/${product.image}?w=100&h=100&fit=crop`}
            alt={product.name}
            className="w-16 h-16 object-cover rounded-lg"
          />
          <div>
            <h3 className="font-semibold text-gray-800">{product.name}</h3>
            <p className="text-soft-pink-600 font-bold">{product.price}</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Ваше имя</Label>
            <Input
              id="name"
              value={customerInfo.name}
              onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })}
              placeholder="Как к вам обращаться?"
              className="border-soft-pink-200 focus:border-soft-pink-400"
            />
          </div>
          
          <div>
            <Label htmlFor="phone">Телефон</Label>
            <Input
              id="phone"
              value={customerInfo.phone}
              onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
              placeholder="+7 (999) 123-45-67"
              className="border-soft-pink-200 focus:border-soft-pink-400"
            />
          </div>
          
          <div>
            <Label htmlFor="size">Размер</Label>
            <Input
              id="size"
              value={customerInfo.size}
              onChange={(e) => setCustomerInfo({ ...customerInfo, size: e.target.value })}
              placeholder="XS, S, M, L, XL или ваши мерки"
              className="border-soft-pink-200 focus:border-soft-pink-400"
            />
          </div>
          
          <div>
            <Label htmlFor="comments">Пожелания</Label>
            <Textarea
              id="comments"
              value={customerInfo.comments}
              onChange={(e) => setCustomerInfo({ ...customerInfo, comments: e.target.value })}
              placeholder="Цвет, особые пожелания..."
              className="border-soft-pink-200 focus:border-soft-pink-400"
              rows={3}
            />
          </div>

          <div className="flex space-x-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1 border-soft-pink-200 text-gray-600"
            >
              Отмена
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 button-gradient text-white border-0"
            >
              {isSubmitting ? "Отправляем..." : "Заказать 💕"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
