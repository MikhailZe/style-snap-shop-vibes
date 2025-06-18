
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface WebhookSettingsProps {
  webhookUrl: string;
  onWebhookChange: (url: string) => void;
}

export const WebhookSettings = ({ webhookUrl, onWebhookChange }: WebhookSettingsProps) => {
  const [tempUrl, setTempUrl] = useState(webhookUrl);

  const handleSave = () => {
    onWebhookChange(tempUrl);
  };

  return (
    <Card className="mb-6 bg-white/80 backdrop-blur-sm border-soft-pink-200">
      <CardHeader>
        <CardTitle className="text-lg text-gray-800">Настройки интеграции</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label htmlFor="webhook">Webhook URL для n8n</Label>
          <div className="flex space-x-2">
            <Input
              id="webhook"
              value={tempUrl}
              onChange={(e) => setTempUrl(e.target.value)}
              placeholder="https://your-n8n-instance.com/webhook/..."
              className="border-soft-pink-200 focus:border-soft-pink-400"
            />
            <Button
              onClick={handleSave}
              variant="outline"
              className="border-soft-pink-200 text-soft-pink-600 hover:bg-soft-pink-50"
            >
              Сохранить
            </Button>
          </div>
        </div>
        <p className="text-sm text-gray-600">
          Введите URL webhook из n8n для получения заявок на заказ
        </p>
      </CardContent>
    </Card>
  );
};
