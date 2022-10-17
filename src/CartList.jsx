import React,{useEffect,useState} from "react"
import CartRow from "./CartRow";
import Notfound from "./Notfound";
function CartList({ products,cart,updateCart,count }) {

    const[localcart,setlocalcart]=useState(cart);

    useEffect(
        function(){
        setlocalcart(cart);
         },
         [cart]
         )

         function handleChange(productid,newvalue) {
  
            if(newvalue>=0){
              const newLocalCart ={...localcart,[productid]:newvalue};
              setlocalcart(newLocalCart);
            }
          
          };
          function handleUpdateCartClick(){
            updateCart(localcart)
          };
          function handleRemove(productid) {
   
            const newCart = {...cart};
            delete newCart[productid];
            updateCart(newCart);
          };
    return (
        <div className="">
            
                <div>
                    <div className="flex border-2 bg-gray-300 py-5 pl-12 pr-16 ">
                        <h3 className="font-bold text-gray-600 text-lg uppercase grow ml-44">Product Details</h3>
                        <h3 className="font-bold  text-gray-600 text-lg uppercase  text-start w-20">Price</h3>
                        <h3 className="font-bold  text-gray-600 text-lg uppercase  text-start ml-2 w-20">Quantity</h3>
                        <h3 className="font-bold text-center text-gray-600 text-lg uppercase  text-center ml-5 w-32">Total</h3>
                    </div>
                    
                    {products.map(function (p) {
                        return <CartRow key={p.id} product={p} quantity={localcart[p.id]} onQuantityChange={handleChange} onRemove={handleRemove} />
                    })}
                </div>
                {(count >= 1)?
                <div className="w-full  flex sm:my-3 my-1 pr-16">
                        <button onClick={handleUpdateCartClick} className="ml-auto rounded-lg bg-red-600 font-semibold hover:bg-indigo-600 sm:py-4 py-2 text-sm text-white uppercase sm:w-2/4 w-full" >Update</button>
                    </div>:<div><Notfound/></div>}
        </div>
    );
}
export default CartList;