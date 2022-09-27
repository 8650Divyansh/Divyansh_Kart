import React from 'react';
import Pagination from './Pagination';
import Product from './Product';

function ProductList({products}){
  return(
  <div className="flex flex-wrap lg:justify-start justify-center pt-3 lg:pt-0 md:gap-11 sm:gap-7 gap-3 xl:p-16 bg-gray-300">
    {products.map(function(item){
    return (
        
      <Product key={item.title} {...item}/>)})}
      <Pagination/>
  </div>
  );
};
export default ProductList;