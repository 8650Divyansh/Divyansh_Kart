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
    <div className='mx-16 my-7 p-7 flex flex-col'>

      <div className="flex md:flex-row flex-col  max-w-6xl p-7 mx-auto my-6 shadow-2xl">
        <div className="flex-grow">

          <img src={product.thumbnail} alt="" />
        </div>
        <div className="px-4">
          <h1 className="font-medium text-2xl text-3xl">{product.heading}</h1>
          <h5 className="text-gray-500 text-2xl font-medium mb-2">{product.category}</h5>
          <p className=" text-lg mb-2">
            {product.title}
          </p>
          <h4 className="font-bold my-4">Rs. {product.price}</h4>
          <p className="text-xl pr-16">{product.description}</p>
          <div className="flex flex-row mt-7">
            <input type="number" value={count} onChange={handleCountChange} className="w-24 px-2 border-solid border-2 border-black rounded-md mr-4" />
            <button onClick={handleButtonClick} className="px-9 pl-3 py-2 bg-red-600 text-white text-xl rounded-md hover:bg-red-500" >ADD TO CART</button>
          </div>
        </div >

        <Link to="/" className="-mt-7 rounded-full self-start border-black border-solid border-2"> <HiArrowNarrowLeft className="text-5xl" /></Link>
      </div>
      <div className='flex justify-between p-2'>

        <div>
          {id > 1 && <div className='rounded-full border-black border-solid border-2 p-4'><Link to={"/products/" + (id - 1)} > <HiArrowNarrowLeft className="text-5xl" /></Link></div>}</div>
        <div>
          <div className=' rounded-full border-black border-solid border-2 p-4'><Link to={"/products/" + (id + 1)} > <HiArrowNarrowRight className="text-5xl" /></Link></div></div>
      </div>
    </div>
  );
}
export default DetailPage;