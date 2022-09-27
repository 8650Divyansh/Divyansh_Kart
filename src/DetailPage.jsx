import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
// import allData from './Demoproduct';
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";
import { getProductData } from './Api';
import { useState } from 'react';
import Loading from './Loading';
import Notfound from './Notfound';


function DetailPage({ onAddToCart }) {
  const id = +useParams().id;
  const [product, SetProduct] = useState();
  const [loading, SetLoading] = useState(true);
  const [count, setCount] = useState(1);


  useEffect(function () {
    const p = getProductData(id);


    p.then(function (Product) {
      SetProduct(Product);
      SetLoading(false);
      setCount(1);
    }).catch(function () {
      SetLoading(false);
    })
  }, [id]);

  function handleCountChange(event) {
    setCount(+event.target.value);
  };

  function handleButtonClick() {
    onAddToCart(id, count)
  }


  if (loading) {
    return <Loading />
  }
  if (!product) {
    return <Notfound />
  }

  return (
    <div className='md:mx-16 md:my-7 sm:p-7 flex flex-col'>

      <div className="flex md:flex-row flex-col  max-w-6xl p-7 mx-auto md:my-6 my-2 shadow-2xl">
      <Link to="/" className="-mt-7 block md:hidden mb-4 rounded-full self-start border-black border-solid border-2"> <HiArrowNarrowLeft className="text-5xl" /></Link>
        <div className="flex-grow">

          <img src={product.thumbnail} alt="" />
        </div>
        <div className="px-4 py-1">
          <h1 className="font-medium text-xl sm:text-3xl">{product.heading}</h1>
          <h5 className="text-gray-500 md:text-2xl text-xl  font-semibold sm:mb-2 mb-1">{product.category}</h5>
          <p className=" text-lg sm:mb-2 mb-1">
            {product.title}
          </p>
          <h4 className="font-bold sm:my-4 my-1">Rs. {product.price}</h4>
          <h4 className="font-bold sm:my-4 my-1">rating <span className='text-green-400'>{product.rating} </span></h4>
          <p className="text-xl  sm:pr-16 pr-3">{product.description}</p>
          <div className="flex flex-row md:mt-7 mt-2 justify-center">
            <input type="number" value={count} onChange={handleCountChange} className="sm:w-24 w-16 px-2 border-solid border-2 border-black rounded-md mr-4" />
            <button onClick={handleButtonClick} className="sm:px-9 sm:py-2 px-2 py-1 bg-red-600 text-white  text-center sm:text-xl text-sm rounded-md hover:bg-red-500" >ADD TO CART</button>
          </div>
        </div >

        <Link to="/" className="-mt-7 md:block hidden rounded-full self-start border-black border-solid border-2"> <HiArrowNarrowLeft className="text-5xl" /></Link>
      </div>
      <div className='flex justify-between p-2'>

        <div>
          {id > 1 && <div className='rounded-full border-black border-solid border-2 p-4'><Link to={"/products/" + (id - 1)} > <HiArrowNarrowLeft className="md:text-5xl text-2xl text-indigo-400" /></Link></div>}</div>
        <div>
          <div className=' rounded-full border-black border-solid border-2 p-4'><Link to={"/products/" + (id + 1)} > <HiArrowNarrowRight className="md:text-5xl text-2xl text-indigo-400" /></Link></div></div>
      </div>
    </div>
  );
}
export default DetailPage;