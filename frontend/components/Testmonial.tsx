import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import TestimonialList from "@/components/TestimonialList";

type Testimonial = {
  name: string;
  comment: string;
};

export default function TestimonialsPage() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchTestimonials() {
      try {
        const res = await fetch("/api/testimonials");
        if (!res.ok) throw new Error("Ошибка загрузки отзывов");
        const data = await res.json();
        setTestimonials(data);
      } catch (e: any) {
        setError(e.message || "Ошибка");
      } finally {
        setLoading(false);
      }
    }
    fetchTestimonials();
  }, []);

  return (
    <Layout>
      <h1>Отзывы клиентов</h1>
      {loading && <p>Загрузка...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {!loading && !error && <TestimonialList testimonials={testimonials} />}
    </Layout>
  );
}
