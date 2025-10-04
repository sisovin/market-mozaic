import { Card } from "@/components/ui/card";

interface CategoryCardProps {
  name: string;
  khmer: string;
  icon: string;
  language: 'en' | 'km';
}

export const CategoryCard = ({ name, khmer, icon, language }: CategoryCardProps) => {
  return (
    <Card className="p-6 text-center hover:scale-105 transition-transform duration-300 cursor-pointer bg-gradient-card border-border/50 hover:shadow-lg">
      <div className="text-4xl mb-3">{icon}</div>
      <h3 className="font-semibold text-foreground">{language === 'km' ? khmer : name}</h3>
    </Card>
  );
};
