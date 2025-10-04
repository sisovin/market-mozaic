import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Star, MapPin } from "lucide-react";

interface VendorCardProps {
  name: string;
  products: number;
  rating: number;
  location: string;
}

export const VendorCard = ({ name, products, rating, location }: VendorCardProps) => {
  const initials = name.split(' ').map(n => n[0]).join('').toUpperCase();
  
  return (
    <Card className="w-80 flex-shrink-0 snap-start p-6 bg-gradient-card border-border/50 hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center gap-4 mb-4">
        <Avatar className="h-16 w-16 border-2 border-primary/20">
          <AvatarFallback className="bg-primary/10 text-primary font-semibold text-lg">
            {initials}
          </AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <h3 className="font-semibold text-lg text-foreground">{name}</h3>
          <div className="flex items-center gap-1 text-muted-foreground text-sm">
            <MapPin className="h-3 w-3" />
            <span>{location}</span>
          </div>
        </div>
      </div>
      
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${i < Math.floor(rating) ? 'fill-secondary text-secondary' : 'text-muted'}`}
            />
          ))}
          <span className="ml-2 font-medium text-foreground">{rating.toFixed(1)}</span>
        </div>
        <span className="text-sm text-muted-foreground">{products} products</span>
      </div>
      
      <Button className="w-full bg-primary hover:bg-primary-dark text-primary-foreground">
        Visit Store
      </Button>
    </Card>
  );
};
