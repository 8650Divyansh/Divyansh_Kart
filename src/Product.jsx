import React from 'react';
import { Link } from "react-router-dom";
function Product({ thumbnail, category, title, price, id ,rating}) {
  return (
    <Link to={"/products/" + id}>
      <div className="flex justify-center">
        <div className="rounded-lg shadow-lg bg-white max-w-sm aspect-auto flex flex-row sm:flex-col">
          <div>
          <a href="#">
            <img className="rounded-t-lg sm:h-80 h-32 object-contain h-screen w-screen" src={thumbnail} alt="" />
          </a>
          <p className=" sm:text-lg text-indigo-400 text-center text-sm sm:hidden block">
              More Detail
            </p>
          </div>
          <div className="p-6">
            <h5 className="text-gray-500 sm:text-2xl text-xl font-medium sm:mb-2 mb-1">{category}</h5>
            <p className=" md:text-lg text-md md:mb-2 mb-1">
              {title}
            </p>


            <div class="flex flex-row items-center sm:mb-2">
            <p className="text-green-500 text-sm font-medium mb-2 sm:text-lg  text-black">{rating}</p>
              <svg aria-hidden="true" class="w-8 h-8 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              
            </div>

            <p className="text-gray-500 text-sm font-medium sm:mb-2 mb-1">R.s = <span className=" sm:text-lg text-lg mb-4 text-black">{price}</span></p>

            <p className=" sm:text-lg text-sm hidden sm:block">
              More Detail
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
export default Product;