import { Products } from "../../components/Products/Products"
import { DATABASE } from "../../database/db"

export function Shop() {
  return (
    <div className="md:grid md:grid-cols-3 md:gap-7 items-center max-w-4xl w-90 mx-auto my-8  ">
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
