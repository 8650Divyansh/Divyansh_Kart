import React, { useEffect, useState } from "react";
import { getProductData } from "./Api";
import Loading from "./Loading";
import CartList from "./CartList";

function CartPage({ cart, updateCart, count }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(function () {
    const productIds = Object.keys(cart);
    const myProductPromises = productIds.map(function (id) {
      return getProductData(id);
    });
    Promise.all(myProductPromises).then(function (products) {
      setProducts(products);
      setLoading(false);
    });
  }, [cart]);
  if (loading) {
    return <Loading />
  }
  return (
    <div className="bg-gray-200 mx-28 my-5 h-screen">
      <CartList count={count} products={products} cart={cart} updateCart={updateCart} />
    </div>
  )
}
export default CartPage