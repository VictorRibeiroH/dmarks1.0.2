"use client"

import Link from "next/link"
import Nav from "./Nav"
import CartSidebar from "./CartSidebar"
import { CgShoppingBag } from "react-icons/cg"
import { useShoppingCart } from "use-shopping-cart"
import { useState } from "react"

const Header = () => {
  const { cartCount, handleCartClick } = useShoppingCart()
  const [isClick, setIsClick] = useState(false)
  const toggleNavbar = () => {
    setIsClick(!isClick)
  }

  const handleNavItemClick = () => {
    setIsClick(false)
  }

  return (
    <header className="bg-white shadow-lg sticky top-0 py-8 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="hover:text-current"
          onClick={handleNavItemClick}
        >
          <div className="flex items-center">
            <img
              src="/dmarksLogo.png"
              alt="DMarks Logo"
              style={{ height: "52px" }}
              className="h-8 mr-2"
            />
          </div>
        </Link>
        <div className="flex items-center gap-[26px]">
          <Nav containerStyles="flex gap-[36px] hidden sm:flex" />
          <button className="sm:hidden transition-all" onClick={toggleNavbar}>
            <img src="/menu-hamburger.svg" alt="Menu" />
          </button>
          <div
            onClick={() => handleCartClick()}
            className="relative cursor-pointer"
          >
            <CgShoppingBag className="text-[26px]" />
            <div className="bg-accent w-[18px] h-[18px] absolute -right-1 -bottom-1 rounded-full text-white flex items-center justify-center text-sm font-medium">
              {cartCount}
            </div>
          </div>
          <CartSidebar />
        </div>
      </div>
      {isClick && (
        <div className="navMobile">
          <Nav
            containerStyles="flex p-8 pb-0 text-center flex-col gap-[36px] sm:flex"
            onNavItemClick={handleNavItemClick}
          />
        </div>
      )}
    </header>
  )
}

export default Header
