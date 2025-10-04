import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

interface HeaderProps {
  language: 'en' | 'km';
  onLanguageToggle: () => void;
}

export const Header = ({ language, onLanguageToggle }: HeaderProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">M</span>
            </div>
            <span className="font-bold text-xl text-foreground">MarketHub</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <a href="#categories" className="text-foreground hover:text-primary transition-colors">
              Categories
            </a>
            <a href="#vendors" className="text-foreground hover:text-primary transition-colors">
              Vendors
            </a>
            <a href="#how-it-works" className="text-foreground hover:text-primary transition-colors">
              How It Works
            </a>
          </nav>
          
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={onLanguageToggle}
              className="gap-2"
            >
              <Globe className="h-4 w-4" />
              <span>{language === 'en' ? 'English' : 'ភាសាខ្មែរ'}</span>
            </Button>
            <Button variant="outline" size="sm">
              Sign In
            </Button>
            <Button size="sm" className="bg-primary hover:bg-primary-dark text-primary-foreground">
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
