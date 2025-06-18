
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Shirt } from "lucide-react";

interface NavigationTabsProps {
  children: React.ReactNode;
  instructionsContent: React.ReactNode;
}

export const NavigationTabs = ({ children, instructionsContent }: NavigationTabsProps) => {
  return (
    <Tabs defaultValue="catalog" className="w-full">
      <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 bg-white/80 backdrop-blur-sm border border-soft-pink-200 mb-8">
        <TabsTrigger 
          value="catalog" 
          className="data-[state=active]:bg-soft-pink-100 data-[state=active]:text-soft-pink-700 text-gray-600"
        >
          <Shirt className="w-4 h-4 mr-2" />
          Каталог
        </TabsTrigger>
        <TabsTrigger 
          value="instructions"
          className="data-[state=active]:bg-soft-pink-100 data-[state=active]:text-soft-pink-700 text-gray-600"
        >
          Как заказать
        </TabsTrigger>
      </TabsList>
      
      <TabsContent value="catalog" className="animate-fade-in">
        {children}
      </TabsContent>
      
      <TabsContent value="instructions" className="animate-fade-in">
        {instructionsContent}
      </TabsContent>
    </Tabs>
  );
};
