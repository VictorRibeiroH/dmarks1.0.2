import React from "react";
import Link from "next/link";
import {
  RiMailLine,
  RiMapPinLine,
  RiPhoneLine,
  RiWhatsappLine,
} from "react-icons/ri";
import { FaClock } from "react-icons/fa";

import { Input } from "./ui/input";

const Footer = () => {
  return (
    <footer className="pt-12 xl:pt-24 bg-primary text-white text-center">
      <div className="container mx-auto">
        <div className="flex flex-col gap-9">
          {/* Categorias */}
          <div className="flex flex-row gap-4 justify-between">
            <div>
              <h2 className="capitalize leading-tight mb-2 text-3xl">
                Categorias
              </h2>
              <ul className="text-white/60">
                <li>
                  <Link href="/produtos">Produtos</Link>
                </li>
                <li>
                  <Link href="/about">Sobre</Link>
                </li>
                <li>
                  <Link href="/contato">Contato</Link>
                </li>
                <li>
                  <Link href="/portfolio">Portfolio</Link>
                </li>
              </ul>
            </div>
            {/* Onde Estamos */}
            <div style={{ marginLeft: '180px' }}>
              <h2 className="capitalize leading-tight mb-2 text-3xl">
                Onde Estamos
              </h2>
              <div className="flex flex-col gap-2 text-white/60">
                <div className="flex items-start">
                  <RiMapPinLine className="mr-2 mt-1" />
                  Av. Rancho Alegre, 207 - Barracão B <br />
                  Jardim Pioneiro, Campo Magro | PR
                </div>
                <div className="flex items-start ">
                  <FaClock className="mr-2 mt-1" />
                  Segunda a Sexta-feira das 8h30 às 18h <br />
                  Sábado das 9h às 12h
                </div>
                <div className="flex items-start">
                  <RiMailLine className="mr-2 mt-1" /> dmarks@dmarks.com.br
                </div>
                <div className="flex items-start">
                  <RiPhoneLine className="mr-2 mt-1" /> 41 99162-5742
                </div>
              </div>
            </div>
            {/* Siga Nossas Redes Sociais */}
            <div>
              <h2 className="capitalize leading-tight mb-2 text-3xl">
                Siga Nossas Redes Sociais
              </h2>
              <div className="flex flex-col gap-4 text-[18px] text-white/60 mb-20">
                <Link href="https://www.facebook.com/dmarkslocacoesdemoveis/?locale=pt_BR" target="_blank">
                  <span>Facebook</span>
                </Link>
                <Link href="https://www.instagram.com/dmarkslocacoes/" target="_blank">
                  <span>Instagram</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Cr */}
      <div className="py-6 border-t border-white/5 text-white/60 text-center">
        Copyright &copy; 2024 Dmarks. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
