import React from 'react';

function ServicesSection() {
  return (
    <section id="services" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Наши услуги</h2>
        <div className="service-card bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105">
            <h3 className="text-xl font-semibold mb-2">Электронные приглашения</h3>
            <p className="text-gray-600 mb-4">Создайте стильные и персонализированные электронные приглашения для мероприятий, свадеб или корпоративов. Удобный редактор и адаптивный дизайн.</p>
            <p className="text-lg font-bold text-blue-600 mb-4">от 10,000 ₽</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
              Заказать
            </button>
          </div>
        <div className="services-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="service-card bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105">
            <h3 className="text-xl font-semibold mb-2">Одностраничный сайт</h3>
            <p className="text-gray-600 mb-4">Идеально для быстрого запуска бизнеса или презентации продукта. Простой и эффективный дизайн.</p>
            <p className="text-lg font-bold text-blue-600 mb-4">от 15 000 ₽</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
              Заказать
            </button>
          </div>
          <div className="service-card bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105">
            <h3 className="text-xl font-semibold mb-2">Интернет-магазин</h3>
            <p className="text-gray-600 mb-4">Полнофункциональный магазин с каталогом, корзиной и системой оплаты.</p>
            <p className="text-lg font-bold text-blue-600 mb-4">от 100 000 ₽</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
              Заказать
            </button>
          </div>
          <div className="service-card bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105">
            <h3 className="text-xl font-semibold mb-2">Корпоративный сайт</h3>
            <p className="text-gray-600 mb-4">Многостраничный сайт для компаний с индивидуальным дизайном и функционалом.</p>
            <p className="text-lg font-bold text-blue-600 mb-4">от 150 000 ₽</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
              Заказать
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;