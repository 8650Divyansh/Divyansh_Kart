import React from "react";
import Input from "./Input";
import { ImCross } from "react-icons/im"

function CartRow({ product, quantity,onQuantityChange ,onRemove}) {

      function handleChange(event){
        onQuantityChange(product.id,+event.target.value)
      }

      function handleRemoveClick(){
        onRemove(product.id)
      }

    return (<div className="container pl-12 pr-16 py-2 border-b-2  border-gray-500 hidden md:block ">
            <div className="flex items-center space-x-4 ">
                <button className="mr-8 " onClick={handleRemoveClick}> <ImCross className="text-gray-600 hover:text-red-500 hover:text-lg"/></button>
                <div className="object-cover w-24 hover:w-32">
                    <img className="h-20 hover:h-28" src={product.thumbnail} alt="" />
                </div>
                <span className="grow text-red-500 text-lg">{product.title}</span>
               
                <span className="w-20 text-start font-semibold text-sm">$ {product.price}</span>

                <Input onChange={handleChange} className="w-16  font-bold h-10 pl-5 ml-2" value={quantity} type="number" />

                <span className="w-32 text-center font-semibold text-sm ml-8">$ {product.price * quantity}</span>
                 </div>
        </div>
        );
}
        export default CartRow;