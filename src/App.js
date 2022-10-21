import React, { createContext, useEffect, useState } from 'react';
import Navbar from './Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductListPage from './ProductListPage';
import DetailPage from './DetailPage';
import Footer from './Footer';
import Notfound from './Notfound';
import CartPage from './CartPage';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';
import PageNotFound from './PageNotFound';
import ForgotPassword from './ForgotPassword';
import Test from './Test';
import Dashboard from './Dashboard';
import axios from "axios";
import Loading from './Loading';
import UserRoute from './UserRoute';
import AuthRoute from './AuthRoute';
import Alert from './Alert';
import {UserContext,AlertContext} from './Contexts'


function App() {
  const savedDataString = localStorage.getItem("my-cart") || "{}";
  const savedData = JSON.parse(savedDataString);
  const [cart, setCart] = useState(savedData);
  const [user,setUser]=useState();
  const[loading,setLoading] = useState(true);
  const [alert,setAlert] = useState();

  const removeAlert =() => {
    setAlert(undefined);
};
  console.log("logged in user is",user);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if(token){
    axios.get("https://myeasykart.codeyogi.io/me",{
      headers:{
        Authorization: token,
      },
    }).then((response) =>{
      setUser(response.data)
      setLoading(false);;
    });
  } else{
    setLoading(false);
  }
  },[token]);
  function handleAddToCart(productid, count) {
    const oldCount = cart[productid] || 0;
    const newCart = { ...cart, [productid]: oldCount + count }
    updateCart(newCart);

  }
  function updateCart(newCart){
    setCart(newCart);
    const cartString = JSON.stringify(newCart);
    localStorage.setItem("my-cart", cartString);
  }
  const totalcount = Object.keys(cart).reduce(function (previous, current) {
    return previous + cart[current];
  }, 0);
  if(loading){
    return(<div><Loading/></div>)
  }
  return (
    <BrowserRouter>
    <div className=" h-screen overflow-y-scroll flex flex-col">
    <UserContext.Provider value={{user,setUser}}>
    <AlertContext.Provider value={{alert,setAlert,removeAlert}}>
        <Navbar productCount={totalcount} logo={"https://media.discordapp.net/attachments/1000335750983852062/1016604882813321319/IMG_20220906_123433.jpg"} />
        <Alert/>
        <Routes>
          <Route index element={<ProductListPage />}></Route>
          <Route path="/products/:id" element={<DetailPage onAddToCart={handleAddToCart} />}></Route>
          <Route path="/products/*" element={<Notfound />}></Route>
          <Route path="/CartPage" element={<CartPage cart={cart} count={totalcount} updateCart={updateCart}/>} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
          <Route path="*" element={<PageNotFound />}></Route>
          <Route path="test" element={<Test/>}></Route>
          <Route path="/LoginPage" element={<AuthRoute  ><LoginPage/></AuthRoute>} />
          <Route path="/Dashboard" element={<UserRoute ><Dashboard /></UserRoute>}></Route>
          <Route path="/Signup" element={<AuthRoute  ><SignUpPage /></AuthRoute>} />
        </Routes>


        <Footer logo="https://media.discordapp.net/attachments/1000335750983852062/1016604882813321319/IMG_20220906_123433.jpg" />
        </AlertContext.Provider>
        </UserContext.Provider>
      </div>
    </BrowserRouter>
  );
}
export default App;


