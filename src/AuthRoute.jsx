import React from "react";
import { Navigate } from "react-router-dom";

function UserRoute({user,children}) {
    if(user){
        return(<Navigate to="/Dashboard" />)
    }
    return children;
};

export default UserRoute;