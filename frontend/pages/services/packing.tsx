import { useRouter } from 'next/router';
import Layout from '../../components/Layout';

export default function PackingPage() {
  const router = useRouter();

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-4">Упаковка</h1>
      <p className="mb-4">
        Мы обеспечиваем качественную упаковку ваших вещей, чтобы гарантировать их сохранность во время перевозки. Используем современные материалы и технологии.
      </p>
      <button
        onClick={() => router.push('/')}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Вернуться на главную
      </button>
    </Layout>
  );
}
