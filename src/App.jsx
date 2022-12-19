import { BrowserRouter } from "react-router-dom"
import { Header } from "./components/Header/Header"
import { Router } from "./Router"
import { Footer } from "./components/Footer/Footer"
import { ShopContextProvider } from "./components/context/Shop.context"

export function App() {
  return (
    <div className="flex flex-col h-screen">
      <ShopContextProvider>
        <BrowserRouter>
          <Header />
          <main className="flex-auto mt-20">
            <Router />
          </main>
          <Footer />
        </BrowserRouter>
      </ShopContextProvider>
    </div>
  )
}
