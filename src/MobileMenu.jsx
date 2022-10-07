import React from "react";
import {Link} from "react-router-dom"

function MobileMenu(){
    return(
        <div className="bg-gray-100 opacity-90 space-y-2 text-center text-xl font-bold px-8 py-2 absolute right-2 top-15 flex flex-col z-50">
        <Link>About Us</Link>
        <Link>Home</Link>
        <Link>Login</Link>
        <Link>Contact Us</Link>
        </div>
    );
}
export default MobileMenu;