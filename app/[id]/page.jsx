"use client"
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/Button";
import { useStore } from "@/libs/store";
  
// const getData = async () => {
//   const res = await fetch("https://fakestoreapi.com/products?limit=20");
//   return res.json();
// };


export default  function Item({ params }) {
  // const data = await getData();
  const{data}=useStore();
  const index = data.findIndex((item) => item.id == params.id);
  return (
    <div className="h-screen w-screen mx-auto max-w-3xl">
      <Link
        href="/"
        className=" bg-white z-10 hover:h-7 hover:w-7 h-6 w-6 border shadow-md cursor-pointer rounded-full fixed top-4  left-4 flex items-center justify-center"
      >
        &#8592;
      </Link>
      <div className=" w-full flex justify-center items-center h-1/6">
        <Image 
            src={data[index].image}
            className=" h-5/6"
            alt="image"
            height={120}
            width={120}
            />
      </div>
      <div className="  w-full flex flex-col justify-center overflow-y-auto h-4/6">
        <h1 className=" ml-20">Id: {data[index].id}</h1>
        <h1 className=" ml-20">Category: {data[index].category}</h1>
        <h1 className=" ml-20">Title:</h1>
        <h1 className="ml-20 text-sm">{data[index].title}</h1>
        <h1 className="ml-20">Rating: {data[index].rating.rate}</h1>
        <h1 className="ml-20">Price: ${data[index].price}</h1>
        <h1 className="ml-20">Description:</h1>
        <h1 className="ml-20 text-sm mr-1">{data[index].description}</h1>
        
      </div>
      <div className=" w-full flex flex-col justify-center h-1/6">
        <Button text="ADD TO CART" data={data[index]} color="bg-accent" active="bg-teal-200" hover=" bg-red-200"/>
        <Link href="/cart" className="active:w-44 hover:bg-primary active:h-1/3 transition-all ease-in-out duration-100 border shadow-md bg-secondary w-48 rounded-2xl flex justify-center items-center mb-1 mx-auto" >Go to cart</Link>
      </div>
    </div>
  );
}