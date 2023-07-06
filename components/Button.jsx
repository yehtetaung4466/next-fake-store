"use client"
import { useStore } from "@/libs/store";
export default function Button(props){
    const {text,color,active,data} = props;
    const {setTotalItems,setCartItemsArray} = useStore();
    const {id,title,category,price,image,description,rating} = data;
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
        
      )
    }
    return(
        <button onClick={handleClick} className={`active:w-44 active:${active} mx-auto hover:bg-red-300 transition-all ease-in-out duration-100 border shadow-md   w-48 rounded-2xl flex justify-center items-center  my-1   ${color}`}>
        {text}
      </button>
    )
}