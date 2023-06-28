import Link from "next/link";
import { useEffect } from "react";
import {TransferWeb3} from "../pages/services/ICS.js";
import {getBalance} from "../pages/services/ICS.js";
import { ethers } from "ethers";
import { useState } from "react";
import Web3 from "web3";

export default function Transfer() {
  const [provider, setProvider] = useState(null);
  const [valor, setValor] = useState(0);
  const [carteira, setCarteira] = useState("");
  const [saldo, setSaldo] = useState("00");
  const [isc, setIsc] = useState("")
  // const [balance, setBalance] = useState('');

  // useEffect(()=>{
  //     initializeContrato();
  //     user();
  // },[])

  useEffect(() => {
    setProvider(new ethers.BrowserProvider(window.ethereum));
    connect();
    

    console.log(provider);
    async function connect() {
      const provedor = new ethers.BrowserProvider(window.ethereum);
      const accounts = await provedor.send("eth_requestAccounts", []);
      const balances = await provedor.getBalance(accounts[0]);

      setSaldo(balances.toString());
      console.log(accounts[0]);
      

    };
    
  }, []);

  

  const valorTransfer = (e) => {
    setValor(e.target.value);
    console.log(setValor(e.target.value));
  };
  const carteiraTransfer = (e) => {
    setCarteira(e.target.value);
    console.log(setCarteira(e.target.value));
  };

  async function enviar() {
    const resultado = await TransferWeb3(provider, valor, carteira);
    console.log(resultado);
  }



  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen bg-[url('./jungleO.jpg')] font-common-pixel text-black ">
      <h1 className="text-white text-4xl bg-[#634d22] bg-opacity-40 w-1/3 text-center rounded-md mb-4">
        SOBRE A ISQUISCO
      </h1>
      <div className="flex flex-col justify-center items-center bg-[#634d22] bg-opacity-60 w-4/5 h-2/4 rounded-3xl mb-20 ">
        <input
          type="text"
          className="w-2/5 h-10 rounded-3xl mb-5 border-none text-center "
          placeholder="Valor "
          value={valor}
          onChange={valorTransfer}
        ></input>
        <input
          type="text"
          className="w-3/5 h-10 rounded-3xl mb-5 border-none text-center "
          placeholder="Digite a carteira para transferencia "
          value={carteira}
          onChange={carteiraTransfer}
        ></input>
        <button
          className="bg-black bg-opacity-50 w-1/6 h-8 rounded-2xl text-center "
          placeholder="Digite a carteira para transferencia"
          onClick={enviar}
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
