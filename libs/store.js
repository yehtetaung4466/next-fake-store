import { create } from "zustand";

export const useStore = create((set) => ({
  totalItems: 0,
  category:"all",
  min:0,
  max:1000,
  data:[],
  cartItemsArray: [],
  totalItemsArray: [],
  setData:async()=>{
    const res = await fetch("https://fakestoreapi.com/products?limit=20");
    const json = await res.json();
    set({data:[...json]});
  },
  setMin:arg=>set({min:arg}),
  setMax:arg=>set({max:arg}),
  setTotalItemsArray:async(arg)=> set(
    {totalItemsArray: [...arg]}
  ) ,
  setCategory:arg=>set({category: arg}),
  setTotalItems: () => set((state) => ({ totalItems: state.totalItems + 1 })),
  decTotalItems: () => set(state=> ({totalItems: state.totalItems - 1})),
  delAll: ()=> {
    set({totalItems:0});
    set({cartItemsArray:[]});
  },
  setCartItemsArray: (arg) => set((state) => {
    const index = state.cartItemsArray.findIndex(item => item.id === arg.id);
    if (index !== -1) {
      const newArray = [...state.cartItemsArray];
      newArray[index] = { ...newArray[index], count: newArray[index].count + 1 };
      return { cartItemsArray: newArray };
    } else {
      return { cartItemsArray: [...state.cartItemsArray, { ...arg, count: 1 }] };
    }
  }),
  incCartItem: (id) => set((state) => {
    const index = state.cartItemsArray.findIndex(item => item.id === id);
    if (index !== -1) {
      const newArray = [...state.cartItemsArray];
      newArray[index] = { ...newArray[index], count: newArray[index].count + 1 };
      return { cartItemsArray: newArray };
    } else {
      return { cartItemsArray: state.cartItemsArray };
    }
  }),
  decCartItem: (id) => set((state) => {
    const index = state.cartItemsArray.findIndex(item => item.id === id);
    if (index !== -1) {
      const newArray = [...state.cartItemsArray];
      newArray[index] = { ...newArray[index], count: newArray[index].count - 1 };
      return { cartItemsArray: newArray };
    } else {
      return { cartItemsArray: state.cartItemsArray };
    }
  }),
  delCartItem: (id) => set((state)=>{
    const index = state.cartItemsArray.findIndex(item => item.id === id);
    if (index !== -1){
      const newArray=[...state.cartItemsArray];
      newArray.splice(index,1);
      return {cartItemsArray: newArray}; 
    }else{
      return{cartItemsArray: state.cartItemsArray};
    }
  })
}));