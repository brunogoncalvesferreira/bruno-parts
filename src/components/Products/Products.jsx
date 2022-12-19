import { ShoppingCart } from "phosphor-react"
import { ShopContext } from "../context/Shop.context"
import { useContext } from "react"

export function Products({ id, imageProduct, title, price }) {
  const { handleAddToCart, cartItems } = useContext(ShopContext)
  const cartItemAmount = cartItems[id]
  return (
    <div className="flex flex-col gap-2 shadow-2xl p-4 h-auto ">
      <img
        className="w-40 h-40 m-auto hover:scale-110 duration-300 cursor-pointer"
        src={imageProduct}
        alt={title}
      />
      <strong className="text-sm m-auto text-center">{title}</strong>
      <p className="m-auto">R$ {price.toFixed(2)}</p>
      <button
        onClick={() => handleAddToCart(id)}
        className="flex items-center justify-center gap-2 w-40 h-10 bg-cyan-600 hover:bg-cyan-500 hover:text-gray-100 duration-300 rounded-md border-none text-sm  m-auto "
      >
        Adicionar <ShoppingCart />
        {cartItemAmount > 0 && <>({cartItemAmount})</>}
      </button>
    </div>
  )
}
