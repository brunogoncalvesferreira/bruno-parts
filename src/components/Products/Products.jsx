import { ShoppingCart } from "phosphor-react"
import { ShopContext } from "../context/Shop.context"
import { useContext } from "react"

export function Products({ id, imageProduct, title, price }) {
  const { handleAddToCart, cartItems } = useContext(ShopContext)
  const cartItemAmount = cartItems[id]
  return (
    <div className={"flex h-auto flex-col gap-2 p-4 shadow-2xl "}>
      <img
        className={
          "m-auto h-40 w-40 cursor-pointer duration-300 hover:scale-110"
        }
        src={imageProduct}
        alt={title}
      />
      <strong className={"m-auto text-center text-sm"}>{title}</strong>
      <p className={"m-auto"}>R$ {price.toFixed(2)}</p>
      <button
        onClick={() => handleAddToCart(id)}
        className={
          "m-auto flex h-10 w-40 items-center justify-center gap-2 rounded-md border-none bg-cyan-600 text-sm duration-300 hover:bg-cyan-500  hover:text-gray-100 "
        }
      >
        Adicionar <ShoppingCart />
        {cartItemAmount > 0 && <>({cartItemAmount})</>}
      </button>
    </div>
  )
}
