import React from "react";
import { Navigate } from "react-router-dom";
import withUser from "./Withusercontext";

function UserRoute({user,children}) {
    if(user){
        return(<Navigate to="/Dashboard" />)
    }
    return children;
};

export default withUser(UserRoute);