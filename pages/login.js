import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function login() {
  const [coin, setCoin] = useState(0);

  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen bg-[url('./jungleN.jpg')] font-common-pixel text-black ">
      <h1 className="text-white text-4xl bg-[#102328] bg-opacity-40 w-1/3 text-center rounded-md mb-4">
        SOBRE A ISQUISCO
      </h1>
      <div className="bg-[#102328] bg-opacity-60 w-4/5 h-2/3 rounded-3xl flex justify-around items-center mb-20">
        <div className="bg-white bg-opacity-10 w-2/5 h-3/4 flex justify-evenly flex-col items-center rounded-lg">
          <Image
            className="rounded-full bg-white"
            src="/img/user.png"
            width={200}
            height={200}
          ></Image>
          <h1 className="text-2xl">Carteira</h1>
        </div>

        <div className="flex flex-col w-2/5 h-3/5 justify-between items-center bg bg-white bg-opacity-10 rounded-xl shadow-lg">
          <div className="w-full  flex justify-between items-center mt-4">
            <p className="mx-10">0x03123435f2c12aw4</p>
            <p className="mx-10">{coin} ICS</p>
          </div>
          <div className=" flex flex-col items-center justify-evenly mb-20  h-2/5 overflow-y-auto">
            <ul className="list-none  flex">
              <li className="m-4 ">
                <a>transfer 1</a>
              </li>
              <li className="m-4 ">
                <a>transfer 1</a>
              </li>
              <li className="m-4 ">
                <a>transfer 1</a>
              </li>
              <li className="m-4 ">
                <a>transfer 1</a>
              </li>
            </ul>
            <ul className="list-none  flex">
              <li className="m-4 ">
                <a>transfer 1</a>
              </li>
              <li className="m-4 ">
                <a>transfer 1</a>
              </li>
              <li className="m-4 ">
                <a>transfer 1</a>
              </li>
              <li className="m-4 ">
                <a>transfer 1</a>
              </li>
            </ul>
            <ul className="list-none  flex">
              <li className="m-4 ">
                <a>transfer 1</a>
              </li>
              <li className="m-4 ">
                <a>transfer 1</a>
              </li>
              <li className="m-4 ">
                <a>transfer 1</a>
              </li>
              <li className="m-4 ">
                <a>transfer 1</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-[#102328] bg-opacity-60 w-4/5 h-32 rounded-3xl flex justify-evenly items-center text-center">
        <Link className="bg-white bg-opacity-5 w-52 rounded-lg " href="/home">
          Home
        </Link>
        <Link className="bg-white bg-opacity-5 w-52 rounded-lg" href="/buy">
          Compre Isquisco
        </Link>
        <Link className="bg-white bg-opacity-5 w-52 rounded-lg" href="/transfer">
          Transfira Isquisco
        </Link>
      </div>
    </div>
  );
}
