import React from "react";
import {Link} from "react-router-dom"

function MobileMenu(){
    return(
        <div className="relative md:sr-only">
        <div className="bg-indigo-400 opacity-90 space-y-2 text-start text-xl font-bold px-7 py-2 absolute right-0 top-15 flex flex-col z-50 rounded-lg">
        <Link>About Us</Link>
        <Link>Home</Link>
        <Link to="/LoginPage" class="hover:underline">Login</Link>
        <Link>Contact Us</Link>
        </div>
        </div>
    );
}
export default MobileMenu;