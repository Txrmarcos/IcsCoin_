import Image from "next/image";


export default function login(){
    return (

        <div className="flex flex-col justify-evenly items-center w-screen h-screen bg-[url('./jungleN.jpg')] ">
            <div className="bg-[#102328] bg-opacity-60 w-4/5 h-2/3 rounded-3xl flex justify-around items-center ">
                <div >
                    <Image className=" w-72 h-72 bg-white rounded-full" scr="moeda.png" width={500} height={500} />
                    <p>Carteira</p>
                </div>


                <div className="flex flex-col justify-evenly items-center">
                    <div className="flex justify-around items-center">
                        <p>0x03123435f2c12aw4</p>
                        <p>10 ICS</p>
                    </div>
                    <ul>
                        <li>transfer 1</li>
                        <li>transfer 1</li>
                        <li>transfer 1</li>
                        <li>transfer 1</li>
                        <li>transfer 1</li>
                    </ul>
                    <div></div>

                </div>



            </div>

        
        </div>

    )
}