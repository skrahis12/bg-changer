import { useState } from "react";
function Bg(){

const [color, setcolor]=useState("gray");

    return(
        <>
        <div className="w-full h-screen duration-500 flex justify-center items-end " style={{backgroundColor:color}}>

            <div className="fixed flex flex-wrap bg-white mb-10 rounded-xl  p-2 shadow-lg ">
                <div className="flex gap-2">
                    <button className="bg-blue-900 text-white px-4 py-1 rounded-full" onClick={()=>setcolor("blue")}>Blue</button>
                    <button className="bg-green-900 text-white px-4 py-1 rounded-full" onClick={()=>setcolor("green")}>Green</button>
                    <button className="bg-red-900 text-white px-4 py-1 rounded-full" onClick={()=>setcolor("red")}>Red</button>
                    <button className="bg-black text-white px-4 py-1 rounded-full" onClick={()=>setcolor("black")}>Black</button>
                    <button className="bg-purple-900 text-white px-4 py-1 rounded-full" onClick={()=>setcolor("purple")}>Purple</button>
                    <button className="bg-pink-900 text-white px-4 py-1 rounded-full" onClick={()=>setcolor("pink")}>Pink</button>



                </div>

            </div>
        </div>
        </>
    )
}


export default Bg;