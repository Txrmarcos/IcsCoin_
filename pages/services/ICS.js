import Contract from "../../icsProject/build/contracts/ICS.json"
import {ethers} from "ethers";

const prepare= (provider) =>{
    const enderecoContrato ="0x06AaA2eFa8CE73A810f7c011982A3715B77Bf5D9";

    const contratoABI = Contract.abi;

    const contrato = new ethers.Contract(enderecoContrato, contratoABI, provider);

    return [contrato, enderecoContrato, contratoABI];
}

export async function TransferWeb3(provider, valor, address){

    const [contrato] = prepare(provider);

    const assinante = await provider.getSigner();


    const contratoAssinado = contrato.connect(assinante);

    try{
        const transacao = await contratoAssinado.transfer(address,valor);
        transacao.wait();
        return "ok"
    }catch(e){
        console.log(e)
        return "erro"
    }



}

export async function getBalance(provider){

    const[contrato] = prepare(provider);

    const assing = await provider.getSigner(); //minha carteira

    const assinarContrato = contrato.connect(assing)

    try{
        const balancaT = await assinarContrato.balanceOf(assing)
        return balancaT.toString()
    }catch(e){
        console.log(e);
        return "erro macaco"
    }
}



