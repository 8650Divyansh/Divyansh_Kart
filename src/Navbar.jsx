import React,{memo,useState} from 'react';
import {AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from 'react-router-dom';
import MobileMenu from './MobileMenu';

function Navbar({productCount,logo}){
const [Menuopen,setMenoOpen] = useState(false);

function handleMenuOpen(){
  setMenoOpen(!Menuopen);
}

  return(
 
<nav className="p-3 bg-gray-50 rounded border-gray-200 dark:bg-gray-800 dark:border-gray-700">
  <div className="container flex flex-wrap justify-between items-center mx-auto">
    <Link to="#" className="flex items-center">
        <img src={logo} className="mr-3 h-6 sm:h-10" alt="Logo"/>
    </Link>
    <div className='md:text-6xl text-5xl text-red-700 pr-3 flex relative md:hidden block ml-auto'>
    <span className=' md:text-2xl text-xl text-black font-bold absolute -top-2 right-3 px-0.5 md:px-1  bg-red-400 rounded-full '>{productCount}</span>
   <Link to="/CartPage"><AiOutlineShoppingCart/></Link>
    </div>
    <button onClick={handleMenuOpen}  type="button" className="inline-flex justify-center items-center ml-3 text-gray-400 rounded-lg md:hidden hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:text-gray-400 dark:hover:text-white dark:focus:ring-gray-500">
      <span className="sr-only">Open main menu</span>
      <svg className="md:w-12 md:h-12 w-8 h-8"  fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
      <ul className="flex flex-col mt-4 bg-gray-50 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
        <li>
          <Link to="#" className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent" aria-current="page"><Link to="/">
      Continue Shopping
    </Link>
    </Link>
        </li>
        <li>
          <Link to="#" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</Link>
        </li>
        <li>
          <Link to="#" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</Link>
        </li>
        <li>
          <Link to="#" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</Link>
        </li>
      </ul>
    </div>
    <div className='text-6xl text-red-700 pr-3 flex relative hidden md:block'>
    <Link to="/CartPage"><AiOutlineShoppingCart/>
    <span className=' text-2xl text-black font-bold absolute -top-2 right-3 px-auto  bg-red-400 rounded-full px-1'>{productCount}</span>
   </Link>
    </div>
  </div>
  {Menuopen && <MobileMenu/>}
</nav>
  );
}
export default memo(Navbar);