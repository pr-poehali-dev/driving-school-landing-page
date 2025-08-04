import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";  
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-muted/20 to-accent/10">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Icon name="Car" className="text-primary" size={32} />
            <h1 className="text-2xl font-bold text-secondary">АвтоПрофи</h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#hero" className="text-secondary hover:text-primary transition-colors">Главная</a>
            <a href="#instructors" className="text-secondary hover:text-primary transition-colors">Преподаватели</a>
            <a href="#prices" className="text-secondary hover:text-primary transition-colors">Цены</a>
            <a href="#reviews" className="text-secondary hover:text-primary transition-colors">Отзывы</a>
            <a href="#contacts" className="text-secondary hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button className="bg-primary hover:bg-primary/90">
            Записаться
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
            🎯 97% учеников сдают с первого раза
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold text-secondary mb-6 leading-tight">
            Получи права с
            <span className="text-primary block">первой попытки</span>
          </h2>
          <p className="text-xl text-secondary/70 mb-8 max-w-2xl mx-auto">
            Профессиональная подготовка к экзаменам в ГИБДД. Опытные инструкторы, современные методы обучения и гарантия результата.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6">
              <Icon name="Phone" className="mr-2" size={20} />
              Записаться на обучение
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 text-lg px-8 py-6">
              <Icon name="Play" className="mr-2" size={20} />
              Посмотреть видео
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">97%</div>
              <div className="text-secondary/70">Сдают с первого раза</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-secondary/70">Лет опыта</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">2000+</div>
              <div className="text-secondary/70">Довольных учеников</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center text-secondary mb-12">
            Почему выбирают нашу автошколу
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Award" className="mx-auto text-primary mb-4" size={48} />
                <CardTitle className="text-lg">Лицензированная школа</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-secondary/70">Официальная лицензия и все необходимые разрешения</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Users" className="mx-auto text-primary mb-4" size={48} />
                <CardTitle className="text-lg">Опытные инструкторы</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-secondary/70">Квалифицированные преподаватели с многолетним стажем</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Clock" className="mx-auto text-primary mb-4" size={48} />
                <CardTitle className="text-lg">Гибкий график</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-secondary/70">Занятия в удобное для вас время, включая выходные</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Car" className="mx-auto text-primary mb-4" size={48} />
                <CardTitle className="text-lg">Современный автопарк</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-secondary/70">Новые автомобили с двойным управлением</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Instructors */}
      <section id="instructors" className="py-16 px-4">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center text-secondary mb-12">
            Наши преподаватели
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <img 
                  src="/img/e9a28b87-2938-473e-909b-f8961bd9f7b0.jpg" 
                  alt="Алексей Петров" 
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <CardTitle>Алексей Петров</CardTitle>
                <CardDescription>Главный инструктор</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-center text-secondary/70 mb-4">
                  Стаж: 12 лет. Специализация: подготовка к экзаменам в ГИБДД
                </p>
                <div className="flex justify-center">
                  <Badge variant="secondary">98% успешной сдачи</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <img 
                  src="/img/622d6163-0900-4193-9eff-2f25bf9ec7d5.jpg" 
                  alt="Марина Смирнова" 
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <CardTitle>Марина Смирнова</CardTitle>
                <CardDescription>Инструктор по вождению</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-center text-secondary/70 mb-4">
                  Стаж: 8 лет. Специализация: обучение женщин и новичков
                </p>
                <div className="flex justify-center">
                  <Badge variant="secondary">96% успешной сдачи</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-32 h-32 rounded-full mx-auto mb-4 bg-primary/10 flex items-center justify-center">
                  <Icon name="User" size={48} className="text-primary" />
                </div>
                <CardTitle>Дмитрий Козлов</CardTitle>
                <CardDescription>Инструктор-методист</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-center text-secondary/70 mb-4">
                  Стаж: 15 лет. Специализация: теоретическая подготовка
                </p>
                <div className="flex justify-center">
                  <Badge variant="secondary">99% успешной сдачи</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Prices */}
      <section id="prices" className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center text-secondary mb-12">
            Прозрачные цены
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-center">Базовый</CardTitle>
                <CardDescription className="text-center">
                  <span className="text-3xl font-bold text-primary">25 000₽</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Icon name="Check" className="text-primary mr-2" size={16} />
                    Теоретический курс
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="text-primary mr-2" size={16} />
                    30 часов вождения
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="text-primary mr-2" size={16} />
                    Подготовка к экзамену
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="text-primary mr-2" size={16} />
                    Медсправка в подарок
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-primary hover:bg-primary/90">
                  Выбрать курс
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-primary border-2 relative">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary">
                Популярный
              </Badge>
              <CardHeader>
                <CardTitle className="text-center">Стандартный</CardTitle>
                <CardDescription className="text-center">
                  <span className="text-3xl font-bold text-primary">35 000₽</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Icon name="Check" className="text-primary mr-2" size={16} />
                    Теоретический курс
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="text-primary mr-2" size={16} />
                    40 часов вождения
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="text-primary mr-2" size={16} />
                    Индивидуальная подготовка
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="text-primary mr-2" size={16} />
                    Медсправка в подарок
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="text-primary mr-2" size={16} />
                    Сопровождение на экзамен
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-primary hover:bg-primary/90">
                  Выбрать курс
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-center">VIP</CardTitle>
                <CardDescription className="text-center">
                  <span className="text-3xl font-bold text-primary">50 000₽</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Icon name="Check" className="text-primary mr-2" size={16} />
                    Индивидуальное обучение
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="text-primary mr-2" size={16} />
                    60 часов вождения
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="text-primary mr-2" size={16} />
                    Персональный инструктор
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="text-primary mr-2" size={16} />
                    Все документы включены
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="text-primary mr-2" size={16} />
                    Гарантия пересдачи
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-primary hover:bg-primary/90">
                  Выбрать курс
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-16 px-4">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center text-secondary mb-12">
            Отзывы наших учеников
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="User" className="text-primary" size={24} />
                  </div>
                  <div>
                    <CardTitle className="text-base">Анна Волкова</CardTitle>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Icon key={i} name="Star" className="text-yellow-400 fill-current" size={16} />
                      ))}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-secondary/70">
                  "Сдала экзамен с первого раза! Инструкторы очень терпеливые и профессиональные. Особенно понравился индивидуальный подход."
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="User" className="text-primary" size={24} />
                  </div>
                  <div>
                    <CardTitle className="text-base">Михаил Сидоров</CardTitle>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Icon key={i} name="Star" className="text-yellow-400 fill-current" size={16} />
                      ))}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-secondary/70">
                  "Отличная автошкола! Современные машины, опытные преподаватели. Теория объясняется понятно, на практике чувствуешь себя уверенно."
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="User" className="text-primary" size={24} />
                  </div>
                  <div>
                    <CardTitle className="text-base">Елена Кузнецова</CardTitle>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Icon key={i} name="Star" className="text-yellow-400 fill-current" size={16} />
                      ))}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-secondary/70">
                  "Рекомендую всем! Удобный график занятий, приемлемые цены. Самое главное - реально готовят к экзамену, а не просто катают."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center text-secondary mb-12">
            Свяжитесь с нами
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h4 className="text-xl font-semibold text-secondary mb-6">Контактная информация</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" className="text-primary" size={20} />
                  <span className="text-secondary/70">+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" className="text-primary" size={20} />
                  <span className="text-secondary/70">info@avtoprofi.ru</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="MapPin" className="text-primary" size={20} />
                  <span className="text-secondary/70">г. Москва, ул. Автомобильная, д. 15</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Clock" className="text-primary" size={20} />
                  <span className="text-secondary/70">Пн-Сб: 9:00-20:00, Вс: 10:00-18:00</span>
                </div>
              </div>
              
              <div className="mt-8">
                <img 
                  src="/img/61cfa1e9-f3ab-4709-88ce-b2075cb572db.jpg" 
                  alt="Здание автошколы" 
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-secondary mb-6">Записаться на обучение</h4>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-secondary/70 mb-2">
                    Ваше имя
                  </label>
                  <Input placeholder="Введите ваше имя" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-secondary/70 mb-2">
                    Телефон
                  </label>
                  <Input placeholder="+7 (___) ___-__-__" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-secondary/70 mb-2">
                    Email
                  </label>
                  <Input type="email" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-secondary/70 mb-2">
                    Сообщение
                  </label>
                  <Textarea placeholder="Расскажите о ваших пожеланиях" />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90">
                  Отправить заявку
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Car" className="text-primary" size={24} />
                <h5 className="text-xl font-bold">АвтоПрофи</h5>
              </div>
              <p className="text-gray-300">
                Профессиональная автошкола с высоким процентом успешной сдачи экзаменов.
              </p>
            </div>
            
            <div>
              <h6 className="font-semibold mb-4">Услуги</h6>
              <ul className="space-y-2 text-gray-300">
                <li>Обучение вождению</li>
                <li>Теоретические курсы</li>
                <li>Подготовка к экзаменам</li>
                <li>Переподготовка</li>
              </ul>
            </div>
            
            <div>
              <h6 className="font-semibold mb-4">Информация</h6>
              <ul className="space-y-2 text-gray-300">
                <li>О школе</li>
                <li>Лицензии</li>
                <li>Отзывы</li>
                <li>Контакты</li>
              </ul>
            </div>
            
            <div>
              <h6 className="font-semibold mb-4">Контакты</h6>
              <div className="space-y-2 text-gray-300">
                <p>+7 (495) 123-45-67</p>
                <p>info@avtoprofi.ru</p>
                <p>г. Москва, ул. Автомобильная, 15</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 АвтоПрофи. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;