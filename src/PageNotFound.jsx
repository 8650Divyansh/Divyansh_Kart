import React from "react";
import NotFoundImage from "./not-found.jpeg"

function PageNotFound(){
    return(
        <div >
        <img className="h-screen w-screen object-cover"src={NotFoundImage} alt="not found" />
        </div>
    );
}
export default PageNotFound;