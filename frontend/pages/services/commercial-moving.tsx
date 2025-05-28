import Layout from "../../components/Layout";
import QuoteRequest from "../../components/QuoteRequest";
import TestimonialList from "../../components/TestimonialList";

export default function CommercialMoving() {
  return (
    <Layout>
      <section className="service-hero bg-gray-100 py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Commercial Moving</h1>
        <p className="max-w-3xl mx-auto text-lg text-gray-700">
          Мы помогаем компаниям переезжать без стресса и потерь времени, обеспечивая полный спектр коммерческих услуг по переезду.
        </p>
      </section>

      <section className="service-details max-w-5xl mx-auto my-16 px-4">
        <h2 className="text-3xl font-semibold mb-6">Наши услуги</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-800">
          <li>Планирование и организация переезда офиса</li>
          <li>Упаковка и маркировка техники и мебели</li>
          <li>Профессиональная погрузка и разгрузка</li>
          <li>Перевозка с использованием специализированного транспорта</li>
          <li>Распаковка и расстановка на новом месте</li>
        </ul>
      </section>

      <section className="service-benefits bg-purple-50 py-12 px-6">
        <h2 className="text-3xl font-semibold text-center mb-8">Почему выбирают нас</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-gray-700">
          <div>
            <h3 className="font-bold mb-2">Опыт и профессионализм</h3>
            <p>Многолетний опыт работы с корпоративными клиентами и гарантии качества.</p>
          </div>
          <div>
            <h3 className="font-bold mb-2">Индивидуальный подход</h3>
            <p>Мы учитываем особенности каждого бизнеса и разрабатываем уникальный план.</p>
          </div>
          <div>
            <h3 className="font-bold mb-2">Безопасность и надежность</h3>
            <p>Используем современное оборудование и страхуем все грузы.</p>
          </div>
        </div>
      </section>

      <QuoteRequest />

      <section className="testimonials max-w-5xl mx-auto my-16 px-4">
        <h2 className="text-3xl font-semibold mb-6 text-center">Отзывы клиентов</h2>
      </section>
    </Layout>
  );
}
