
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const OrderInstructions = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
        Как сделать заказ
      </h1>
      
      <div className="grid gap-8 md:grid-cols-2">
        <Card className="bg-white/80 backdrop-blur-sm border-soft-pink-200 card-hover">
          <CardHeader>
            <CardTitle className="text-2xl text-soft-pink-600 flex items-center">
              <span className="bg-soft-pink-100 text-soft-pink-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">1</span>
              Выбор товара
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p>• Просмотрите наш каталог и выберите понравившийся товар</p>
            <p>• Нажмите кнопку "Заказать" на карточке товара</p>
            <p>• Опишите свои пожелания по размеру и цвету</p>
          </CardContent>
        </Card>

        <Card className="bg-white/80 backdrop-blur-sm border-soft-pink-200 card-hover">
          <CardHeader>
            <CardTitle className="text-2xl text-soft-pink-600 flex items-center">
              <span className="bg-soft-pink-100 text-soft-pink-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">2</span>
              Общение с менеджером
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p>• Наш AI-менеджер свяжется с вами в Telegram</p>
            <p>• Обсудите детали заказа и получите консультацию</p>
            <p>• Уточните размеры и особые пожелания</p>
          </CardContent>
        </Card>

        <Card className="bg-white/80 backdrop-blur-sm border-soft-pink-200 card-hover">
          <CardHeader>
            <CardTitle className="text-2xl text-soft-pink-600 flex items-center">
              <span className="bg-soft-pink-100 text-soft-pink-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">3</span>
              Способы оплаты
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Badge className="bg-warm-beige-100 text-warm-beige-600 border-warm-beige-200 mr-2">Банковская карта</Badge>
            <Badge className="bg-lavender-100 text-lavender-600 border-lavender-200 mr-2">СБП</Badge>
            <Badge className="bg-soft-pink-100 text-soft-pink-600 border-soft-pink-200">Наличные при получении</Badge>
            <p className="pt-2">• Предоплата 50% для начала пошива</p>
            <p>• Доплата при получении готового заказа</p>
          </CardContent>
        </Card>

        <Card className="bg-white/80 backdrop-blur-sm border-soft-pink-200 card-hover">
          <CardHeader>
            <CardTitle className="text-2xl text-soft-pink-600 flex items-center">
              <span className="bg-soft-pink-100 text-soft-pink-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">4</span>
              Доставка
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p>• Срок изготовления: 7-14 дней</p>
            <p>• Курьерская доставка по городу</p>
            <p>• Почта России в другие города</p>
            <p>• Самовывоз из ателье</p>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-8 bg-gradient-to-r from-soft-pink-50 to-lavender-50 border-soft-pink-200">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold text-center mb-4 text-gray-800">
            Гарантии качества
          </h3>
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl mb-2">✨</div>
              <p className="text-sm">Качественные материалы</p>
            </div>
            <div>
              <div className="text-2xl mb-2">👗</div>
              <p className="text-sm">Индивидуальный пошив</p>
            </div>
            <div>
              <div className="text-2xl mb-2">🔄</div>
              <p className="text-sm">Бесплатная подгонка</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
