import Link from "next/link"
import CartItemsPage from "@/components/CartItemsPage"
export default function CartPage(){
    return(
        <div className=" h-screen w-screen">
            <Link href="/" className=" bg-white z-10 hover:h-7 hover:w-7 h-6 w-6 border shadow-md cursor-pointer rounded-full fixed top-4  left-4 flex items-center justify-center">
            &#8592;
            </Link>
            <CartItemsPage />
        </div>
    )
}