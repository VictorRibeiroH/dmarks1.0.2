"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", path: "/" },
  { name: "Nossos Produtos", path: "/produtos" },
  { name: "Sobre", path: "/about" }
];

const Nav = ({ containerStyles }) => {
  const pathname = usePathname();
  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => {
        return (
          <Link href={link.path} key={index} className={`${link.path === pathname && 'text-accent'}`}> 
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
