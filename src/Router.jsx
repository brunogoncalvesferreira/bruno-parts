import { Routes, Route } from "react-router-dom"
import { Shop } from "./pages/shop/Shop"
import { Cart } from "./pages/cart/Cart"
import { Home } from "./pages/Home/Home"
export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/produtos" element={<Shop />} />
      <Route path="/carrinho" element={<Cart />} />
    </Routes>
  )
}
