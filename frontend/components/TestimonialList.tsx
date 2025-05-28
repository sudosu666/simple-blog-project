type Testimonial = {
  name: string;
  comment: string;
};

type Props = {
  testimonials: Testimonial[];
};

export default function TestimonialList({ testimonials }: Props) {
  return (
    <section className="mb-10">
      <h3 className="text-2xl font-semibold mb-4">Отзывы наших клиентов</h3>
      {testimonials.length > 0 ? (
        <ul className="space-y-4">
          {testimonials.map((item, index) => (
            <li key={index} className="border p-4 rounded shadow">
              <p className="text-lg italic">"{item.comment}"</p>
              <p className="text-sm text-right mt-2">- {item.name}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Отзывы отсутствуют.</p>
      )}
    </section>
  );
}
