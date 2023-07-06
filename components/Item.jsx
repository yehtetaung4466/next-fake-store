"use client"
import Link from "next/link";
import Image from "next/image"
import { useStore } from "@/libs/store"
export default function Item({title,category,price,image,id,description,rating}){
    const {setTotalItems, setCartItemsArray, cartItemsArray} = useStore();
    function handleClick(){
      
      setTotalItems();
      setCartItemsArray(
       {
        id:id,
        title:title,
        category:category,
        price:price,
        image:image,
        description:description,
        rating:rating,
        count: 1,
        total: function (){
          return this.price*this.count;
        },
      }
      );
    }
    return(
        <div className="  border border-black card w-72 bg-base-100 shadow-xl max-w-sm h-96 m-2">
          <Link href={`/${id}`} className=" absolute w-full h-full bg-slate-400 opacity-0"></Link>
        <figure>
            <Image 
            className=""
            src={image} 
            alt="Shoes"
            width={100}
            height={100}/>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{category}</h2>
          <p className="">{title}</p>
          <div className="flex justify-between">
            <div className=" text-md font-semibold flex items-center">price:${price}</div>
            <button  onClick={handleClick} className="btn btn-primary z-30">Add to cart</button>
          </div>
        </div>
      </div>
    )
}