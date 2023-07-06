"use client"
import Image from "next/image"
import Link from "next/link"
import { useStore } from "@/libs/store"
export default function CartItem({id,image,price,count,total,inc,dec,del,}){
    const {setTotalItems,decTotalItems} = useStore()
    function handleDe(){
        if(count===1){
            del()
        }else{
            dec()
        }
        decTotalItems()
    }
    return(
        <div className=" shadow-md border w-64  h-28 bg-white grid grid-cols-8 grid-rows-3 rounded-md mx-1 my-1 ">
            <Link href={`/${id}`} className=" absolute w-64 h-28 opacity-80"></Link>
            <div className=" col-span-3 row-span-2">
            
            <Image 
                className=" mx-auto my-4"
                src={image}
                width={35}
                height={35}
                alt="item-image"
                />
            </div>
            
            <div className=" col-span-3 row-span-2 flex items-center text-sm overflow-hidden">
                $/item:${price !==null ? price: 0} <br />
                total:${total}
            </div>
            <div className=" row-span-3 flex items-center justify-center text-gray-400 text-5xl">x</div>
            <div className={`row-span-3 flex items-center justify-center text-gray-400 ${count<10?"text-5xl":"text-4xl"}`}>{count}</div>
            <div  className=" col-span-6 flex justify-start items-center">
                <button onClick={()=>{inc();setTotalItems();}} className="btn z-50 btn-sm mr-2 ml-1 btn-primary ">Inc</button>
                <button onClick={handleDe} className=" z-50 btn btn-sm btn-warning">{count===1? "Del":"Dec"}</button>
            </div>
        </div>
    )
}