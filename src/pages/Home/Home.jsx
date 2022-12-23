import { useNavigate } from "react-router-dom"

export function Home() {
  const navigate = useNavigate()
  return (
    <div
      className={"absolute top-0 left-0 h-full w-full bg-red-500 text-white"}
    >
      <div className={"mx-auto w-90 max-w-4xl"}>
        <h2 className={"mt-32 text-2xl"}>Confira nossos produtos premium</h2>
        <h1 className={"mt-14 max-w-screen-md text-5xl"}>
          Crie seu carro dos sonhos. Peças com 15% off..
        </h1>

        <button
          onClick={() => navigate("/produtos")}
          className={
            "mt-14 h-10 w-48 rounded-md bg-black p-1 duration-100 hover:border-2 hover:border-gray-900 hover:bg-transparent"
          }
        >
          Comprar
        </button>
      </div>
    </div>
  )
}
