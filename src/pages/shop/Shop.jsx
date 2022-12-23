import { Products } from "../../components/Products/Products"
import { DATABASE } from "../../database/db"

export function Shop() {
  return (
    <div
      className={
        "mx-auto mt-32 mb-20 w-90 max-w-4xl items-center md:grid md:grid-cols-3 md:gap-7  "
      }
    >
      {DATABASE.map((items) => (
        <Products
          id={items.id}
          imageProduct={items.imageProduct}
          title={items.tile}
          price={items.price}
          key={items.id}
        />
      ))}
    </div>
  )
}
