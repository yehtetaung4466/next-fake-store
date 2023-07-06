"use client"
import CartItem from "./CartItem";
import { useStore } from "@/libs/store";

export default function CartItemsPage() {
  const { cartItemsArray, totalItems, incCartItem, decCartItem,delCartItem,delAll } = useStore();

  const totalPrice = cartItemsArray.reduce((acc, item) => {
    return acc + item.total();
  }, 0);
  function handleClick(){
    if(totalItems!==0){
      delAll()
      alert("success!")
    }
  }

  return (
    <>
      <div className=" w-full" style={{height:"5vh"}}></div>
      <div className=" flex flex-wrap justify-center modsm:justify-normal content-start  overflow-auto" style={{height:"75vh"}}>
        {cartItemsArray.map((item) => {
          return (
            <CartItem
              key={item.id}
              id={item.id}
              title={item.title}
              category={item.category}
              image={item.image}
              price={item.price}
              rating={item.rating}
              count={item.count}
              total={item.total()}
              inc={() => incCartItem(item.id)}
              dec={() => decCartItem(item.id)}
              del={() => delCartItem(item.id)}
            />
          );
        })}
      </div>
      <div className=" w-full" style={{height:"20vh"}}>
        <div className="h-1/2 w-full">
          <h1 className=" text">Total items: {totalItems}</h1>
          <h1 className=" text">Total price: ${totalPrice}</h1>
        </div>
        <div  className="h-1/2 w-full flex flex-col justify-center items-center">
          <button onClick={handleClick} className="active:w-44 active:h-1/3 transition-all ease-in-out duration-100 border shadow-md  bg-primary w-48 rounded-2xl flex justify-center items-center h-1/2 mb-1 hover:bg-blue-700">
            Confirm
          </button>
          <button onClick={()=>delAll()} className=" active:w-44 active:h-1/3 transition-all ease-in-out duration-100 h-1/2 border shadow-md  bg-warning w-48 rounded-2xl flex justify-center items-center hover:bg-orange-300">
            Delete all
          </button>
        </div>
      </div>
    </>
  );
}