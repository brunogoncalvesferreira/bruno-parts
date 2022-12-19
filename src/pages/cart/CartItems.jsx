import { useContext } from "react"
import { ShopContext } from "../../components/context/Shop.context"

export function CartItem({ id, imageProduct, title, price }) {
  const {
    cartItems,
    handleAddToCart,
    handleRemoveFromCart,
    updateCartItemCout,
  } = useContext(ShopContext)
  return (
    <div className=" flex flex-col items-center gap-4 shadow-2xl w-3/6 m-auto mb-4 p-4 h-auto max-md:w-full">
      <img
        className="w-40 h-40 m-auto  hover:scale-110 duration-300 cursor-pointer"
        src={imageProduct}
      />

      <strong className="text-sm  text-center">{title}</strong>
      <p>R$ {price.toFixed(2)}</p>
      <div className="flex gap-1">
        <button
          onClick={() => handleRemoveFromCart(id)}
          className="flex items-center justify-center gap-2 w-10 h-10 bg-cyan-600 hover:bg-cyan-500 hover:text-gray-100 duration-300 rounded-md border-none text-sm  m-auto "
        >
          -
        </button>
        <input
          value={cartItems[id]}
          className="w-10 border-2  border-gray-900 rounded-md text-center"
          onChange={(e) => updateCartItemCout(Number(e.target.value), id)}
        />
        <button
          onClick={() => handleAddToCart(id)}
          className="flex items-center justify-center gap-2 w-10 h-10 bg-cyan-600 hover:bg-cyan-500 hover:text-gray-100 duration-300 rounded-md border-none text-sm  m-auto "
        >
          +
        </button>
      </div>
    </div>
  )
}
