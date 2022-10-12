import React, { useEffect, useState } from "react";
import { getProductData } from "./Api";
import Cart from "./Cart";
import CartProduct from "./CartProduct";
import TotalCart from "./TotalCart";

function CartPage({cart}){
  const[products,setProducts]=useState([]);
  const productIds = Object.keys(cart);
 
  useEffect(function(){
    for (let i=0;i<productIds.length; i++){
     getProductData(productIds[i]).then(function(product){
      setProducts([...products,product]);

     });
    }
  }, []);
    return(
    <div>
      {products.map(function(p){
        return(
          <div className="container mx-auto mt-1">
    <div className="flex flex-col shadow-md sm:my-4 my-2 items-center">
      <div className="sm:w-4/5 bg-white sm:py-6 py-2">
        <div>
        <div className="flex justify-between sm:p-4 p-2 bg-gray-200 rounded-lg">
          <h1 className="font-semibold sm:text-2xl text-md">Shopping Cart</h1>
          <h2 className="font-semibold sm:text-2xl t2xt-md">3 Items</h2>
        </div>
        <div className="flex sm:mt-7 sm:mt-4 mt-2 mb-5  border-b py-2 sm:px-0 px-2">
          <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
          <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Quantity</h3>
          <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Price</h3>
          <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Total</h3>

          <div>{p.title}</div>
          <div><img src={p.thumbnail} alt="" /></div>
        </div>
       <CartProduct/>
       <Cart/>

      </div>
      <div className="w-full  flex sm:my-3 my-1">
      <button className="ml-auto rounded-lg bg-red-600 font-semibold hover:bg-indigo-600 sm:py-4 py-2 text-sm text-white uppercase sm:w-2/4 w-full">Update</button>
      </div>
     <TotalCart/>
     </div>
    </div>
  </div>
        )
      })}
    
    
  </div>
  
  );
}
export default CartPage