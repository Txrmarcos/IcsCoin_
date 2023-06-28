import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ethers } from "ethers";
import { getBalance } from "./services/ICS.js";

export default function login() {
  const [coin, setCoin] = useState(0);
  const [account, setAccount] = useState("");
  const [eth, setEth] = useState("");
  

  useEffect(() => {
    connect();
    async function connect() {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const account = await provider.send("eth_requestAccounts", []);
      const balance = await getBalance(provider);
      const balances = await provider.getBalance(account[0])
      setCoin(balance.toString());
      console.log(balance.toString());
      setEth(ethers.formatEther(balances.toString()));
      setAccount(account[0]);
      console.log(account[0]);
    }
  }, []);

  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen bg-[url('./jungleN.jpg')] font-common-pixel text-black ">
      <h1 className="text-white text-4xl bg-[#102328] bg-opacity-40 w-1/3 text-center rounded-md mb-4">
        SOBRE A ISQUISCO
      </h1>
      <div className="bg-black bg-opacity-60 w-4/5 h-2/4 rounded-3xl flex justify-around items-center mb-20">
        <div className="bg-white bg-opacity-10 w-2/5 h-3/4 flex justify-evenly flex-col items-center rounded-lg">
          <Image
            className="rounded-full bg-white"
            src="/img/qrcode.png"
            width={210}
            height={210}
          ></Image>
          <h1 className="text-xl">{account}</h1>
        </div>

        <div className="flex flex-col w-2/5 h-3/5 justify-between items-center bg bg-white bg-opacity-10 rounded-xl shadow-lg">
          <div className="w-full  flex justify-center items-center h-3/5 mt-4">
            <p className="ml-4">{account}</p>
          </div>
          <div className=" w-full flex items-center justify-evenly mb-10  h-3/5">
            <div className=" flex flex-col justify-between items-center">
              <p className="mx-10 h-1/5 w-32  break-words my-2">{eth} </p>
            <Image className="rounded-md" src={"/img/eth.png"} width={32} height={32}></Image>
            </div>
            <div className=" flex flex-col justify-between items-center">
              <p className="mx-10 h-2/5 w-16  break-words my-2">{coin} </p>
              <Image src="/img/user.png" width={32} height={32}></Image>
            </div>
            <div className=" flex flex-col justify-between items-center">
              <p className="mx-10 h-2/5 w-16  break-words my-2">{coin} </p>
              <Image></Image>
            </div>
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
        <Link
          className="bg-white bg-opacity-5 w-52 rounded-lg"
          href="/transfer"
        >
          Transfira Isquisco
        </Link>
      </div>
    </div>
  );
}
