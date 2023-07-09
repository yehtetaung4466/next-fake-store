/* eslint-disable react/no-unescaped-entities */
"use client"
import { useState } from "react";
import filter from "@/public/filter.svg";
import Link from "next/link";
import cart from "@/public/cart.svg";
import Image from "next/image";
import { useStore } from "@/libs/store";

export default function Nav() {
  const { totalItems,setCategory,category,min,setMin,max,setMax } = useStore();
  const [isFilterClicked, setIsFilterClicked] = useState(false);

  const handleFilterClick = () => {
    setIsFilterClicked(!isFilterClicked);
  };

  return (
    <nav className=" z-50 h-14 border-b-2 bg-slate-50 w-[120%] sticky top-0  flex justify-center">
      <div className={` transition-all delay-1000 ease-in-out duration-1000 rounded-md border bg-white w-56 h-24 top-14 right-10 absolute ${
                  isFilterClicked ? "" : "hidden"
                }`}
              >
              <div>category: <select  name="" id="" className="select select-xs focus:outline-none">
                  <option onClick={()=> setCategory("all")} value="" selected={
                    category=="all" ? true:false
                  }>all</option>
                  <option onClick={()=> setCategory("jewelery")} value="" selected={category=="jewelery" ? true:false}> Jewelery</option>
                  <option onClick={()=> setCategory("electronics")} value="" selected={category=="electronics" ? true:false}>Electronics</option>
                  <option onClick={()=> setCategory("men's clothing")} value="" selected={category=="men's clothing" ? true:false}>Men's clothing</option>
                  <option onClick={()=> setCategory("women's clothing")} value="" selected={category=="women's clothing" ? true:false}>Women's clothing</option>
                </select>
              </div>
              <div className=" flex items-center">
                min:<input type="range" className=" w-32" value={min} onChange={(e)=> setMin(e.target.value)} min={0} max={1000} /> ${min}
              </div>
              <div className=" flex items-center">
                max:<input type="range" className=" w-32" value={max} onChange={e=> setMax(e.target.value)} min={0} max={1000}/> ${max}
              </div>
              <div className=" flex justify-center items-center">
                <span onClick={handleFilterClick} className=" hover:underline cursor-pointer">close</span>
              </div>
       </div>
      <div className="max-w-[75rem] flex justify-between w-11/12 h-full">
        <h1 className="flex items-center text-xl font-semibold">Mystore</h1>
        <div className="flex w-28 sm:w-32 sm:mr-4 md:mr-6">
          <div
            tabIndex={0}
            onClick={handleFilterClick}
            // onBlur={handleFilterClick}
            className=" my-auto w-8 h-7  flex items-center justify-center">
              <Image src={filter} width={27} height={27} alt="filter" />
              
          </div>
          <Link href="/cart" className=" items-center justify-center indicator flex w-8 h-7 m-auto">
            {totalItems === 0 ? null : (
              <span className="indicator-item badge badge-secondary badge-sm">
                {totalItems}
              </span>
            )}
            <Image src={cart} width={27} height={27} alt="cart" />
          </Link>
        </div>
      </div>
    </nav>
  );
}