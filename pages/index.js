import { ethers } from "ethers";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const conectarMetamask = async () => {
    if (window.ethereum && window.ethereum.isMetaMask) {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        router.push("/home");
      } catch (error) {
        console.error("Falha ao conectar à carteira Metamask:", error);
      }
    } else {
      console.error("Metamask não está instalado. Por favor, instalar!");
    }
  };

  // const springs = useSpring({
  //   from: { x: 0 },
  //   to: { x: 100 },
  // })

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-[url('./jungleK.jpg')] ">
      <div className=" bg-white bg-opacity-[6%] w-[30vw] h-[35vw] rounded-2xl shadow-xl flex flex-col items-center justify-around justify-items-center">
        <div className=" bg-black w-80 h-80 "></div>
        <button
          onClick={conectarMetamask}
          className="bg-black bg-opacity-30 text-white rounded-2xl w-1/3 h-10"
        >
          Connect to MetaMask
        </button>
      </div>
    </div>
  );
}
