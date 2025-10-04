import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Header } from "@/components/Header";
import { CategoryCard } from "@/components/CategoryCard";
import { VendorCard } from "@/components/VendorCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import {
  Search,
  Store,
  Globe,
  Shield,
  Smartphone,
  User,
  Package,
  TrendingUp,
  CreditCard,
  Grid,
  ShoppingCart,
  MessageSquare,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  MapPin,
  Mail,
} from "lucide-react";

const Index = () => {
  const [language, setLanguage] = useState<'en' | 'km'>('en');

  const categories = [
    { name: "Fashion", khmer: "ម៉ូដ", icon: "👕" },
    { name: "Electronics", khmer: "អេឡិចត្រូនិក", icon: "📱" },
    { name: "Home & Living", khmer: "ផ្ទះនិងជីវិត", icon: "🏠" },
    { name: "Crafts", khmer: "សិប្បកម្ម", icon: "🎨" },
    { name: "Food", khmer: "អាហារ", icon: "🍜" },
  ];

  const vendors = [
    { name: "Sokha's Boutique", products: 247, rating: 4.8, location: "Phnom Penh" },
    { name: "Tech Haven", products: 189, rating: 4.9, location: "Siem Reap" },
    { name: "Handmade Treasures", products: 156, rating: 4.7, location: "Battambang" },
    { name: "Fresh Market Co", products: 312, rating: 4.6, location: "Kampot" },
  ];

  const testimonials = [
    {
      quote: "MarketHub transformed my small business into a thriving online store. The platform is intuitive and my sales have tripled!",
      name: "Chenda Phal",
      role: "Vendor",
      rating: 5,
    },
    {
      quote: "I love the variety of local products available. Supporting local vendors has never been easier!",
      name: "David Chen",
      role: "Customer",
      rating: 5,
    },
    {
      quote: "The payment system is secure and the delivery is always on time. Highly recommend!",
      name: "Sopheak Mao",
      role: "Customer",
      rating: 5,
    },
  ];

  const benefits = [
    {
      icon: Store,
      title: "Easy Store Setup",
      description: "Launch your online store in minutes with our intuitive platform",
    },
    {
      icon: Globe,
      title: "Reach Global Markets",
      description: "Connect with customers locally and internationally",
    },
    {
      icon: Shield,
      title: "Secure Transactions",
      description: "Bank-level security for all payments and data",
    },
    {
      icon: Smartphone,
      title: "Mobile First",
      description: "Manage your business on the go with our mobile app",
    },
  ];

  const vendorSteps = [
    { icon: User, title: "Register", description: "Create your vendor account in minutes" },
    { icon: Package, title: "List Products", description: "Add your products with photos and details" },
    { icon: TrendingUp, title: "Sell & Grow", description: "Reach customers and grow your business" },
    { icon: CreditCard, title: "Get Paid", description: "Receive payments securely and on time" },
  ];

  const customerSteps = [
    { icon: Grid, title: "Browse", description: "Explore thousands of products from local vendors" },
    { icon: Search, title: "Search", description: "Find exactly what you need with smart filters" },
    { icon: ShoppingCart, title: "Purchase", description: "Secure checkout with multiple payment options" },
    { icon: MessageSquare, title: "Review", description: "Share your experience and help others" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header language={language} onLanguageToggle={() => setLanguage(language === 'en' ? 'km' : 'en')} />

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pb-32 px-4 sm:px-6 lg:px-8 bg-gradient-hero">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
            Shop Local. Sell Global.
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-in">
            Empowering vendors, delighting customers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
            <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary-dark text-primary-foreground shadow-lg">
              Start Selling
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6">
              Browse Marketplace
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section id="categories" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            {language === 'km' ? 'ប្រភេទពេញនិយម' : 'Featured Categories'}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {categories.map((category) => (
              <CategoryCard key={category.name} {...category} language={language} />
            ))}
          </div>
        </div>
      </section>

      {/* Vendor Spotlight */}
      <section id="vendors" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            {language === 'km' ? 'អ្នកលក់ពេញនិយម' : 'Vendor Spotlight'}
          </h2>
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-4 scrollbar-hide">
            {vendors.map((vendor) => (
              <VendorCard key={vendor.name} {...vendor} />
            ))}
          </div>
        </div>
      </section>

      {/* Search & Discovery */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="relative mb-8">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 h-6 w-6 text-muted-foreground" />
            <Input
              type="text"
              placeholder={language === 'km' ? 'ស្វែងរកផលិតផល...' : 'Search products...'}
              className="text-lg py-6 pl-16 pr-4 rounded-full border-2 focus-visible:ring-primary"
            />
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <Card className="p-4 flex items-center gap-3">
              <MapPin className="h-5 w-5 text-primary" />
              <span className="text-foreground">All Categories</span>
            </Card>
            <Card className="p-4 flex items-center gap-3">
              <CreditCard className="h-5 w-5 text-primary" />
              <span className="text-foreground">All Price Ranges</span>
            </Card>
            <Card className="p-4 flex items-center gap-3">
              <MapPin className="h-5 w-5 text-primary" />
              <span className="text-foreground">All Locations</span>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            How It Works
          </h2>
          <Tabs defaultValue="vendors" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="vendors">For Vendors</TabsTrigger>
              <TabsTrigger value="customers">For Customers</TabsTrigger>
            </TabsList>
            
            <TabsContent value="vendors">
              <div className="grid md:grid-cols-4 gap-6">
                {vendorSteps.map((step, index) => (
                  <Card key={index} className="p-6 text-center bg-gradient-card border-border/50">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                      <step.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2 text-foreground">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="customers">
              <div className="grid md:grid-cols-4 gap-6">
                {customerSteps.map((step, index) => (
                  <Card key={index} className="p-6 text-center bg-gradient-card border-border/50">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary/10 mb-4">
                      <step.icon className="h-6 w-6 text-secondary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2 text-foreground">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Platform Benefits */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Why Choose MarketHub
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300 bg-gradient-card border-border/50">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                  <benefit.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            What Our Community Says
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Mobile App Promotion */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <Card className="p-8 md:p-12 bg-gradient-hero border-border/50">
            <div className="text-center max-w-2xl mx-auto">
              <Smartphone className="h-16 w-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Get the MarketHub App
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Manage your store or shop on the go with our mobile app
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90">
                  <svg className="h-6 w-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  App Store
                </Button>
                <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90">
                  <svg className="h-6 w-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  Google Play
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <Card className="p-8 md:p-12 max-w-2xl mx-auto text-center bg-gradient-card border-border/50">
            <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Stay Updated
            </h2>
            <p className="text-muted-foreground mb-6">
              Subscribe to get special offers, free giveaways, and updates
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder={language === 'km' ? 'អ៊ីមែលរបស់អ្នក...' : 'Your email...'}
                className="flex-1"
              />
              <Button className="bg-primary hover:bg-primary-dark text-primary-foreground">
                Subscribe
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 border-t border-border pt-16 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-xl">M</span>
                </div>
                <span className="font-bold text-2xl text-foreground">MarketHub</span>
              </div>
              <p className="text-muted-foreground mb-4">
                Connecting vendors and customers across Cambodia and beyond. Building a thriving marketplace for everyone.
              </p>
              <div className="flex gap-3">
                <Button size="icon" variant="ghost">
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button size="icon" variant="ghost">
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button size="icon" variant="ghost">
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button size="icon" variant="ghost">
                  <Youtube className="h-5 w-5" />
                </Button>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-foreground mb-4">About</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Careers</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Press</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-foreground mb-4">Help Center</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">FAQ</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Shipping</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Returns</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-foreground mb-4">Vendor Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Become Vendor</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Dashboard</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Support</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Success Stories</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2025 MarketHub. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</a>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setLanguage(language === 'en' ? 'km' : 'en')}
                className="gap-2"
              >
                <Globe className="h-4 w-4" />
                <span>{language === 'en' ? 'English' : 'ភាសាខ្មែរ'}</span>
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
