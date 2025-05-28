import MainNav from "./MainNav"; // путь подкорректируй под свой проект

export default function Header() {
  return (
    <header className="bg-purple-800 text-white p-6 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Gentle Movers</h1>
        <MainNav />
      </div>
    </header>
  );
}
