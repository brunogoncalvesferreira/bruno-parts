import { useNavigate } from "react-router-dom"

export function Home() {
  const navigate = useNavigate()
  return (
    <div className="bg-red-500 text-white w-full h-full absolute top-0 left-0">
      <div className="max-w-4xl w-90 mx-auto">
        <h2 className="mt-32 text-2xl">Confira nossos produtos premium</h2>
        <h1 className="mt-14 text-5xl max-w-screen-md">
          Crie seu carro dos sonhos. Peças com 15% off..
        </h1>

        <button
          onClick={() => navigate("/produtos")}
          className="bg-black p-1 w-48 h-10 rounded-md mt-14 hover:bg-transparent hover:border-2 hover:border-gray-900 duration-100"
        >
          Comprar
        </button>
      </div>
    </div>
  )
}
