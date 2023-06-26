import Image from "next/image";
import Link from "next/link";

export default function Buy() {
  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen bg-[url('./jungle.jpg')] font-common-pixel ">
      <h1 className="text-white text-4xl bg-green-950 bg-opacity-40 w-1/3 text-center rounded-md mb-4">
        SOBRE A ISQUISCO
      </h1>
      <div className="flex justify-evenly items-center  bg-[#3E7543] bg-opacity-60 w-4/5 h-2/4 rounded-3xl mb-20 ">
        <div className="w-3/5 h-4/5 bg-black bg-opacity-50 shadow-lg rounded-3xl flex justify-evenly items-center ">
          <div className="w-2/5 h-3/5  items-center flex flex-col justify-evenly rounded-md">
            <input className="text-black rounded-xl text-center" type="number" ></input>
            <button className=" rounded-xl w-1/3"  >Comprar</button>
          </div>
          <div className="w-1/5 h-46 bg-white rounded-md">
            <Image src="/img/qrcode.png" width={10000} height={10000}></Image>
          </div>
        </div>
        
      
      </div>
      <div className="bg-[#3E7543] bg-opacity-60 w-4/5 h-32 rounded-3xl flex justify-evenly items-center text-center">
        <Link className="bg-white bg-opacity-5 w-52 rounded-lg " href="/home">
          Home
        </Link>
        <Link className="bg-white bg-opacity-5 w-52 rounded-lg" href="/transfer">
          Transfira Isquisco
        </Link>
        <Link className="bg-white bg-opacity-5 w-52 rounded-lg" href="/login">
          Veja sua carteira
        </Link>
      </div>
    </div>
  );
}
