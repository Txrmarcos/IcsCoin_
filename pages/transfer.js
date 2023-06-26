export default function Transfer(){


    return (

        <div className="flex flex-col justify-evenly items-center w-screen h-screen bg-[url('./jungleO.jpg')] ">
            <div className="bg-[#634D22] bg-opacity-60 w-4/5 h-3/4 rounded-3xl flex flex-col justify-center items-center ">
                <input type="text" className="w-2/5 h-10 rounded-3xl mb-5 border-none " placeholder="Digite a carteira para transferencia "></input>
                <button className="bg-black bg-opacity-50 w-1/6 h-8 rounded-2xl font-common-pixel" placeholder="Digite a carteira para transferencia">Enviar</button>

            </div>
        
        </div>

    )
}