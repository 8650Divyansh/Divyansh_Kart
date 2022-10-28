import {useState,useEffect} from "react";
import { UserContext } from "../Contexts";
import axios from "axios";
import Loading from '../Loading';

function UserProvider({children}) {
    const [user,setUser]=useState();
    const[loading,setLoading] = useState(true);
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
    }).catch(() => {
      localStorage.removeItem("token")
      setLoading(false);
    });
  } else{
    setLoading(false);
  }
  },[token]);
  if(loading){
    return(<div><Loading/></div>)
  }
    return ( <UserContext.Provider value={{user,setUser}}>{children}</UserContext.Provider>
);
};

export default UserProvider;