import Link from "next/link";

type MenuItemProps = {
  href: string;
  label: string;
};

export function MenuItem({ href, label }: MenuItemProps) {
  return (
    <li>
      <Link
        href={href}
        className="block px-4 py-3 text-white md:py-4 md:px-0"
      >
        {label}
      </Link>
    </li>
  );
}
