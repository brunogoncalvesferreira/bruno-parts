import { DATABASE } from "../../database/db"
import { ShopContext } from "../../components/context/Shop.context"
import { CartItem } from "./CartItems"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"

export function Cart() {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext)
  const totalAmount = getTotalCartAmount()

  const navigate = useNavigate()
  return (
    <div className="max-w-4xl w-90 mx-auto my-20">
      <h1>Esses são seus items</h1>
      <div className="flex flex-col ">
        {DATABASE.map((product) => {
          if (cartItems[product.id] !== 0) {
            return (
              <CartItem
                id={product.id}
                imageProduct={product.imageProduct}
                title={product.tile}
                price={product.price}
                key={product.id}
              />
            )
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div>
          <p className="p-1">
            Subtotal: R$ {totalAmount.toFixed(2).replace(".", ",")}
          </p>
          <div className="flex gap-8">
            <button
              onClick={() => navigate("/produtos")}
              className="bg-gray-900 w-40 p-1 hover:bg-gray-700 rounded-md text-gray-300 cursor-pointer"
            >
              Voltar ao Shopping
            </button>
            <button className="bg-gray-900 w-40 p-1 hover:bg-gray-700  rounded-md text-gray-300 cursor-pointer">
              Checkout
            </button>
          </div>
        </div>
      ) : (
        <h1>Seu carrinho está vazio</h1>
      )}
    </div>
  )
}
