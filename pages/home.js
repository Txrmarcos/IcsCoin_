import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen bg-[url('./jungle.jpg')] font-common-pixel ">
      <h1 className="text-white text-4xl bg-green-950 bg-opacity-40 w-1/3 text-center rounded-md mb-4">
        SOBRE A ISQUISCO
      </h1>
      <div className="flex justify-evenly items-center  bg-[#3E7543] bg-opacity-60 w-4/5 h-2/4 rounded-3xl mb-20 ">
        <div className="w-3/5 h-4/5 bg-black bg-opacity-50 shadow-lg rounded-3xl flex justify-center">
          <h1 className="px-7 py-7 text-xl">
            A ISQUISCO COIN É UMA MOEDA DIGITAL DIVERTIDA CRIADA PARA INCENTIVAR
            INTERAÇÕES SOCIAIS ENTRE AMIGOS E PROPORCIONAR UMA EXPERIÊNCIA
            EMOCIONANTE. BASEADA EM TECNOLOGIA BLOCKCHAIN, TODAS AS TRANSAÇÕES
            SÃO REGISTRADAS DE FORMA SEGURA E CONFIÁVEL. OS USUÁRIOS PODEM
            PARTICIPAR DE ATIVIDADES COMO JOGOS, DESAFIOS, APOSTAS E
            COMPETIÇÕES, PAGANDO COM ISQUISCO COIN, O QUE TORNA A EXPERIÊNCIA
            MAIS EMPOLGANTE, POIS ENVOLVE RISCO E RECOMPENSA. A MOEDA BUSCA
            PROPORCIONAR DIVERSÃO E OFERECER A POSSIBILIDADE DE RESGATE DE
            PRÊMIOS AOS PARTICIPANTES.
          </h1>
        </div>
        <Image
          className="w-72 h-72 rounded-full bg-black bg-opacity-50 "
          src="/moeda.png"
          width={500}
          height={500}
        />
      </div>
      <div className="bg-[#3E7543] bg-opacity-60 w-4/5 h-32 rounded-3xl flex justify-evenly items-center text-center">
        <Link className="bg-white bg-opacity-5 w-52 rounded-lg " href="/buy">
          Compre Isquisco
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
