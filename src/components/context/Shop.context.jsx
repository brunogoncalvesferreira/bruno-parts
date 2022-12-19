import { createContext, useState } from "react"
import { DATABASE } from "../../database/db"

export const ShopContext = createContext(null)

const getDefaultCart = () => {
  let cart = {}
  for (let i = 1; i < DATABASE.length + 1; i++) {
    cart[i] = 0
  }
  return cart
}

export function ShopContextProvider(props) {
  const [cartItems, setCartItems] = useState(getDefaultCart())

  const getTotalCartAmount = () => {
    let totalAmount = 0
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = DATABASE.find((product) => product.id === Number(item))
        totalAmount += cartItems[item] * itemInfo.price
      }
    }
    return totalAmount
  }

  const handleAddToCart = (itemID) => {
    setCartItems((prevState) => ({
      ...prevState,
      [itemID]: prevState[itemID] + 1,
    }))
  }

  const handleRemoveFromCart = (itemID) => {
    setCartItems((prevState) => ({
      ...prevState,
      [itemID]: prevState[itemID] - 1,
    }))
  }

  const updateCartItemCout = (newAmount, itemID) => {
    setCartItems((prevState) => ({ ...prevState, [itemID]: newAmount }))
  }

  const contextValue = {
    cartItems,
    handleAddToCart,
    handleRemoveFromCart,
    updateCartItemCout,
    getTotalCartAmount,
  }
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  )
}
