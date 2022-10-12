import React, { useEffect, useState } from "react";
import { getProductData } from "./Api";
import Input from "./Input";
import { ImCross } from "react-icons/im"
import { number } from "yup";
import Loading from "./Loading";

function CartPage({ cart,updateCart }) {
  const [products, setProducts] = useState([]);
  const[loading, setLoading] = useState(true);
  const[localcart,setlocalcart]=useState(cart)

  const productIds = Object.keys(cart);

  useEffect(function(){
 setlocalcart(cart);
  },[cart])

  useEffect(function () {
    const myProductPromises = productIds.map(function (id) {
      return getProductData(id);
    });
    Promise.all(myProductPromises).then(function (products) {
      setProducts(products);
      setLoading(false);
    });
  }, [cart]);

  function handleRemove(event) {
    const productid = event.currentTarget.getAttribute("productid");
    const newCart = {...cart};
    delete newCart[productid];
    updateCart(newCart);
    setLoading(true);
  };
  function handleupdateCart(){ 
    updateCart(localcart);
  }
  
  function handleChange(event) {
  const newvalue = +event.target.value;
  const productid = event.target.getAttribute('productid')
  const newLocalCart ={...localcart,[productid]:newvalue};
  setlocalcart(newLocalCart);
  };

if(loading){
  return <Loading/>
}
  return (
    <div>
      {products.map(function (p) {
        return (
      
          <div className="flex items-center gap-5">
            <div key={p.id}>{p.title}</div>
            <Input className="w-20 h-10 pl-5" value={localcart[p.id]} type="number" onChange={handleChange} productid={p.id}/>
            <button productid={p.id} onClick={handleRemove}><ImCross /></button>
            

          </div>
         
            
          
          
        )
      })}
       <button className="bg-red-500 px-2 py-3 rounded-lg"  onClick={handleupdateCart}>updateCart</button>
    </div>
  );
}
export default CartPage