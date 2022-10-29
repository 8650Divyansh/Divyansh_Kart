import React, { useEffect, useState} from 'react';
import ProductList from './ProductList';
// import allData from './Demoproduct';
import NoMacthing from './NoMacthing';
import { getProductList } from "./Api";
import Loading from './Loading';
import Pagination from './Pagination';
import { Link,useSearchParams } from 'react-router-dom';

function ProductListPage() {
  const [productData, setproducData] = useState({});  // jise ke productlist mai data ka lose na ho jab tak use effect wala code run na ho tab tak phele wala code usestat mai rahe
  const [loading,SetLoading] =useState(true);
 
  

const [searchParams,setSearchParams] = useSearchParams();

const params = Object.fromEntries([...searchParams]);
 
let { query,sort,page } = params;

 query = query|| "";
 page = +page || 1;
 sort = sort || "default";


page = page || 1;



  useEffect(function () {     
    
    let sortBy;  
    let sortType;

    if(sort ==='title'){
      sortBy ='title' ;
    }
    else if(sort ==='lowPrice'){
      sortBy ='price' ;
    }
    else if(sort ==='highPrice'){
      sortBy ='price' ;
      sortType ='desc';
    }    //product ke mount unmount hone per code run hoga 

  getProductList({sortBy,query,page,sortType}).then(function(xyz){
    setproducData(xyz);
      SetLoading(false);
    })
    }, [sort,query,page]); // jab bhi user page pr kux bhi change kre tw function bar bar run na ho



  function handlequeryChange(event) {
    setSearchParams( 
      {...searchParams,query: event.target.value},
      {realace:false});
  };

  function handleSortChange(event) {
    setSearchParams(
      {...searchParams,sort: event.target.value},
      {replace:false});
  };


  if (loading) {
    return <Loading/>
  }

  return (
    <div className=''>

      <div className='flex md:flex-row flex-col-reverse justify-end gap-2 lg:pr-16 lg:mt-5 mt-3'>



        <select onChange={handleSortChange} value={sort} className=" text-center md:w-1/4 bg-gray-50 border border-gray-300 text-gray-900 text-sm md:rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option value="default">Default Sort</option>
          <option value="name">Sort by name</option>
          <option value="highPrice">Sort by price : Low to high</option>
          <option value="lowPrice">Sort by price : High to low</option>
        </select>

        <div>
          <div class="relative">
            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
            <input
              className="placeholder-gray-400 block md:max-w-xl w-screen px-4 md:py-4 py-2 pl-10 text-lg text-gray-900 bg-gray-50 md:rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={query}
              placeholder='search'
              onChange={handlequeryChange} />
          </div>
        </div>
      </div>
      <div className='md:py-7 py-4 md:px-16 px-1'>
        {productData.data.length > 0 && <ProductList products={productData.data} />}
        {productData.data.length === 0 && <NoMacthing />}
        
       {[...Array(productData.meta.last_page).keys()].map((pageNo) =>(
        <Link className={"py-4 px-3  ml-3 rounded-lg " + (pageNo+1 === page ? "bg-red-500" : "bg-indigo-700")} 
        to={"?" +new URLSearchParams({...params,page:pageNo+1})} key={pageNo}>
          {pageNo+1}
          </Link>
        ))}

      </div>
     
  
    </div>
  );
}
export default ProductListPage;