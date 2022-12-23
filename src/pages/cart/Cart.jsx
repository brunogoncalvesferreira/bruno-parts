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
    <div className={"mx-auto my-20 w-90 max-w-4xl"}>
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
              className="w-40 cursor-pointer rounded-md bg-gray-900 p-1 text-gray-300 hover:bg-gray-700"
            >
              Voltar ao Shopping
            </button>
            <button className="w-40 cursor-pointer rounded-md bg-gray-900  p-1 text-gray-300 hover:bg-gray-700">
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
