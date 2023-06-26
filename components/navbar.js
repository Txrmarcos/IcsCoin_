import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

export default function NavBar() {
  const [saldo, setSaldo] = useState(0);

  const router = useRouter();

  const handdle = (event) => {
    event.preventDefault();

    router.back();
  };

  return (
    <div className="w-screen h-28  flex justify-between items-center bg-opacity-20 fixed font-common-pixel">
      <div className="  w-16 h-16 ml-8 rounded-md flex items-center">
        <a href="#" onClick={handdle}>
          <Image className="" src="/newS.png" width={100} height={100} />
        </a>
      </div>
      <div className="  w-72 h-16 mr-8 flex justify-around items-center rounded-md">
        <div className="flex justify-evenly items-center w-28 h-16 bg-white bg-opacity-25 rounded-md">
          <h1 className="text-2xl">{saldo}</h1>
          <Image
            className="rounded-full"
            src="/moeda.png"
            width={30}
            height={30}
          ></Image>
        </div>
        <div className=" w-16 h-16 flex justify-center items-center rounded-full ">
          <Image src="/img/user.png" width={64} height={64}></Image>
        </div>
      </div>
    </div>
  );
}
