import { Car, ShoppingCartSimple } from "phosphor-react"
import { NavLink } from "react-router-dom"

export function Header() {
  return (
    <header className="bg-black p-5 fixed z-30 top-0 left-0 w-full">
      <nav className="flex items-center justify-between max-w-4xl w-90 mx-auto ">
        <NavLink
          to="/"
          className="text-gray-100 text-xl flex items-center gap-2"
        >
          <Car /> Web.Parts
        </NavLink>
        <div className="flex items-center gap-1">
          <NavLink to="/produtos" className="text-gray-100 text-md">
            Shop
          </NavLink>
          <NavLink to="/carrinho" className="hover:scale-110 duration-150">
            <ShoppingCartSimple size={20} color="#fff" />
          </NavLink>
        </div>
      </nav>
    </header>
  )
}
