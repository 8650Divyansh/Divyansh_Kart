import React from "react";

function Dasboard({user,setUser}) {
 
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

export default Dasboard;