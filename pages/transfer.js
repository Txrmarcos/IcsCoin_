import Link from "next/link";

export default function Transfer() {
  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen bg-[url('./jungleO.jpg')] font-common-pixel ">
      <h1 className="text-white text-4xl bg-[#634d22] bg-opacity-40 w-1/3 text-center rounded-md mb-4">
        SOBRE A ISQUISCO
      </h1>
      <div className="flex flex-col justify-center items-center bg-[#634d22] bg-opacity-60 w-4/5 h-2/4 rounded-3xl mb-20 ">
        <input
          type="text"
          className="w-2/5 h-10 rounded-3xl mb-5 border-none "
          placeholder="Digite a carteira para transferencia "
        ></input>
        <button
          className="bg-black bg-opacity-50 w-1/6 h-8 rounded-2xl "
          placeholder="Digite a carteira para transferencia"
        >
          Enviar
        </button>
      </div>
      <div className="bg-[#634d22] bg-opacity-60 w-4/5 h-32 rounded-3xl flex justify-evenly items-center text-center">
        <Link className="bg-white bg-opacity-5 w-52 rounded-lg " href="/home">
          Home
        </Link>
        <Link className="bg-white bg-opacity-5 w-52 rounded-lg" href="/buy">
          Compre Isquisco
        </Link>
        <Link className="bg-white bg-opacity-5 w-52 rounded-lg" href="/login">
          Veja sua carteira
        </Link>
      </div>
    </div>
  );
}
