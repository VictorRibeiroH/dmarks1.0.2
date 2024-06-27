"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Inicio", path: "/" },
  { name: "Produtos", path: "/produtos" },
  { name: "Sobre", path: "/about" },
  { name: "Contato", path: "/contato" },
  // { name: "Portfolio", path: "/portfolio" }
];

const Nav = ({ containerStyles, onNavItemClick }) => {
  const pathname = usePathname()
  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            onClick={onNavItemClick}
            key={index}
            className={`${link.path === pathname && "text-accent"}`}
          >
            {link.name}
          </Link>
        )
      })}
    </nav>
  )
}

export default Nav;