import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const products = [
    {
      id: 1,
      name: "Blue Thunder",
      price: 199,
      image: "https://cdn.poehali.dev/projects/2ce927b3-b9df-4efc-a914-7c58398f0872/files/181d5ba8-0a70-4474-86cc-6403c68bacfe.jpg",
      description: "Взрывная энергия",
    },
    {
      id: 2,
      name: "Red Storm",
      price: 219,
      image: "https://cdn.poehali.dev/projects/2ce927b3-b9df-4efc-a914-7c58398f0872/files/cf0d75be-838a-4aff-afe9-64e3c696a2fd.jpg",
      description: "Максимум драйва",
    },
    {
      id: 3,
      name: "Green Wave",
      price: 189,
      image: "https://cdn.poehali.dev/projects/2ce927b3-b9df-4efc-a914-7c58398f0872/files/cd7fd0ff-9054-4f7b-99cd-90f9f1f4fa5b.jpg",
      description: "Свежесть и сила",
    },
  ];

  const promos = [
    {
      title: "2 + 1 в подарок",
      subtitle: "На всю линейку Thunder",
      discount: "-30%",
    },
    {
      title: "Скидка при заказе от 10 банок",
      subtitle: "Специальное предложение",
      discount: "-20%",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-tight">ЭНЕРГИЯ</h1>
          <div className="flex gap-8 items-center">
            <a href="#products" className="text-sm font-medium hover:text-accent transition-colors">
              Продукты
            </a>
            <a href="#promos" className="text-sm font-medium hover:text-accent transition-colors">
              Акции
            </a>
            <Button variant="outline" size="sm" className="gap-2">
              <Icon name="ShoppingCart" size={16} />
              Корзина
            </Button>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-8">
            <div className="inline-block">
              <h2 className="text-7xl md:text-8xl font-bold tracking-tighter mb-4">
                Волна энергии
              </h2>
              <div className="flex justify-center gap-2">
                <div className="w-3 h-3 bg-accent rounded-full animate-wave"></div>
                <div className="w-3 h-3 bg-accent rounded-full animate-wave" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-3 h-3 bg-accent rounded-full animate-wave" style={{ animationDelay: '0.4s' }}></div>
                <div className="w-3 h-3 bg-accent rounded-full animate-wave" style={{ animationDelay: '0.6s' }}></div>
                <div className="w-3 h-3 bg-accent rounded-full animate-wave" style={{ animationDelay: '0.8s' }}></div>
              </div>
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
              Премиальные энергетические напитки для тех, кто не останавливается
            </p>
            <Button size="lg" className="text-base px-8 py-6 rounded-full">
              Смотреть каталог
            </Button>
          </div>
        </div>
      </section>

      <section id="products" className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-4xl font-bold mb-12 text-center">Популярное</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card
                key={product.id}
                className="p-6 hover:shadow-2xl transition-all duration-300 animate-fade-in border-0 bg-white"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-square mb-6 flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="space-y-3">
                  <h4 className="text-2xl font-semibold">{product.name}</h4>
                  <p className="text-muted-foreground text-sm">{product.description}</p>
                  <div className="flex justify-between items-center pt-4">
                    <span className="text-3xl font-bold">{product.price} ₽</span>
                    <Button size="sm" className="rounded-full">
                      <Icon name="Plus" size={16} />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="promos" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-4xl font-bold mb-12 text-center">Акции</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {promos.map((promo, index) => (
              <Card
                key={index}
                className="p-12 bg-gradient-to-br from-black to-gray-800 text-white border-0 hover:scale-105 transition-transform duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <Badge className="mb-6 text-lg px-4 py-2 bg-accent text-white">
                  {promo.discount}
                </Badge>
                <h4 className="text-3xl font-bold mb-3">{promo.title}</h4>
                <p className="text-gray-300 text-lg mb-6">{promo.subtitle}</p>
                <Button variant="secondary" className="rounded-full">
                  Подробнее
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-gray-100">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 ЭНЕРГИЯ. Все права защищены
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
