import Header from './header';
import Footer from './footer';
import ChatButton from './ChatButton';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-4xl mx-auto p-6 flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {children}
      </main>

      <Footer />

      <ChatButton />
    </div>
  );
}


