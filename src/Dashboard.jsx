import React from "react";
import withUser from "./Withusercontext";

function Dasboard({user ,setUser}) {
  function handleLogout(){
    localStorage.removeItem("token");
    setUser(undefined)
  }
    return (
      <div className="h-screen"> 
          <h1>this is dasboard page
            welcome,{user.full_name}
          </h1>
          
          <button onClick={handleLogout}>Logout</button>
     </div>
);
};

export default withUser(Dasboard);