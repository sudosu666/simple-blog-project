import { useState } from 'react';
import Link from 'next/link';

export default function MainNav() {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menuName) => {
    setOpenMenu(openMenu === menuName ? null : menuName);
  };

  return (
    <nav className="main-nav bg-gray-50 border-b border-gray-200">
      <ul className="menu flex space-x-6 p-4">
        <li className="menu-item relative">
          <span
            onClick={() => toggleMenu('services')}
            className="cursor-pointer text-gray-900 px-4 py-2 block select-none font-semibold"
          >
            Услуги
          </span>
          <ul
            className={`submenu absolute top-full left-0 mt-0 bg-white shadow-lg rounded-md min-w-[180px] z-10
            ${openMenu === 'services' ? 'block' : 'hidden'}`}
          >
            <li>
              <Link href="/services/local-moving" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                Переезд по городу
              </Link>
            </li>
            <li>
              <Link href="/services/long-distance" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                Междугородний переезд
              </Link>
            </li>
            <li>
              <Link href="/services/packing" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                Упаковка
              </Link>
            </li>
          </ul>
        </li>

        <li className="menu-item relative">
          <span
            onClick={() => toggleMenu('about')}
            className="cursor-pointer text-gray-900 px-4 py-2 block select-none font-semibold"
          >
            О нас
          </span>
          <ul
            className={`submenu absolute top-full left-0 mt-0 bg-white shadow-lg rounded-md min-w-[180px] z-10
            ${openMenu === 'about' ? 'block' : 'hidden'}`}
          >
            <li>
              <Link href="/about/team" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                Наша команда
              </Link>
            </li>
            <li>
              <Link href="/about/history" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                История
              </Link>
            </li>
          </ul>
        </li>

        <li className="menu-item">
          <Link href="/contact" className="text-gray-900 px-4 py-2 block font-semibold">
            Контакты
          </Link>
        </li>
      </ul>
    </nav>
  );
}

