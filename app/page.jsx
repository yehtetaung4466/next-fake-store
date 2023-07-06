"use client"
import Item from "@/components/Item";
import Nav from "@/components/Nav";
import { useStore } from "@/libs/store";
import { useState, useEffect } from "react";

const Home = () => {
  const {category,min,max,data,setData} = useStore();
  useEffect(()=>{
    setData()
  },[])

  return (
    <div className="flex flex-wrap justify-normal w-11/12 mx-auto items-center">
      <Nav/>
      {data.map((item) =>
        (category === "all" || category === item.category) && item.price > min && item.price < max ? (
          <Item
            preload={true}
            key={item.id}
            id={item.id}
            title={item.title}
            category={item.category}
            image={item.image}
            description={item.description}
            price={item.price}
            rating={item.rating.rate}
          />
        ) : null
      )}
    </div>
  );
};

export default Home;