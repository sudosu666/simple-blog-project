import Link from "next/link";
import { useState } from "react";

type SubmenuItemProps = {
  title: string;
  items: { href: string; label: string }[];
};

export function SubmenuItem({ title, items }: SubmenuItemProps) {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen((prev) => !prev);

  return (
    <li className="relative group">
      <button
        className="w-full flex justify-between items-center text-white py-3 md:py-4 md:px-0 md:w-auto"
        onClick={toggle}
        aria-expanded={open}
      >
        {title}
        <svg
          className={`ml-2 w-4 h-4 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      <ul
        className={`overflow-hidden transition-[max-height] duration-300 md:absolute md:bg-gray-700 md:top-full md:left-0 md:min-w-[180px] md:shadow-lg md:rounded
          ${
            open
              ? "max-h-40 md:max-h-full md:block"
              : "max-h-0 md:max-h-0 md:hidden"
          }
          group-hover:max-h-full group-hover:block
        `}
      >
        {items.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className="block px-4 py-2 text-white hover:bg-gray-600"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
}
