import Head from 'next/head';
import Layout from '../components/Layout';
import Header from '../components/header';
import Footer from '../components/footer';
import ChatButton from '../components/ChatButton';
import QuoteRequest from '../components/QuoteRequest';
import TestimonialList from '../components/TestimonialList';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Главная - Моя компания</title>
        <meta name="description" content="Переезды, услуги, отзывы, контактная информация" />
      </Head>

      <Header />

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Добро пожаловать!</h1>


      </main>
      <ChatButton />
      <Footer />
    </>
  );
}

