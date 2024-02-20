import React from "react";
import Link from "next/link";
import { RiFacebookFill, RiInstagramFill } from "react-icons/ri";
import { Input } from "./ui/input";

const Footer = () => {
  return (
    <footer className="pt-12 xl:pt-24 bg-primary text-white text-center">
      <div className="container mx-auto">
        <div className="flex flex-col gap-9">
          <div>
            <h2 className="capitalize leading-tight mb-2">
              Fique ligado nas novidades
            </h2>
            <p className="text-white/60">
              seja o primeiro a receber novos produtos, promoções, e muito mais!
            </p>
          </div>
          {/* Socials */}
          <div className="flex gap-8 mx-auto text-[20px] text-white/60 mb-20">
            <Link href="">
              <RiFacebookFill />
            </Link>
            <Link href="">
              <RiInstagramFill />
            </Link>
          </div>
          {/* form */}
          {/* <form className="flex flex-col xl:flex-row w-full max-w-[720px] mx-auto"> 
          <Input placeholder="Faça sua cotação via WhatsApp"/>
            <button className="btn w-full xl:max-w-[150px] h-[60px] btn-accent">WhatsApp!</button>
          </form> */}
        </div>
      </div>
      {/* Cr */}
      <div className="py-6 border-t border-white/5 text-white/60">
        Copyright &copy; 2024 Dmarks. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
