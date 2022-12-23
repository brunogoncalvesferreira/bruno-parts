import { Car, ShoppingCartSimple } from "phosphor-react"
import { NavLink } from "react-router-dom"

export function Header() {
  return (
    <header className={"fixed top-0 left-0 z-30 w-full bg-black p-5"}>
      <nav
        className={"mx-auto flex w-90 max-w-4xl items-center justify-between "}
      >
        <NavLink
          to="/"
          className={"flex items-center gap-2 text-xl text-gray-100"}
        >
          <Car /> Web.Parts
        </NavLink>
        <div className={"flex items-center gap-1"}>
          <NavLink to="/produtos" className={"text-md text-gray-100"}>
            Shop
          </NavLink>
          <NavLink to="/carrinho" className={"duration-150 hover:scale-110"}>
            <ShoppingCartSimple size={20} color="#fff" />
          </NavLink>
        </div>
      </nav>
    </header>
  )
}
