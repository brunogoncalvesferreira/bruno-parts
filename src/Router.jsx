import { Routes, Route } from "react-router-dom"
import { Shop } from "./pages/shop/Shop"
import { Cart } from "./pages/cart/Cart"

export function Router() {
  return (
    <Routes>
      <Route path="/" />
      <Route path="/produtos" element={<Shop />} />
      <Route path="/carrinho" element={<Cart />} />
    </Routes>
  )
}
