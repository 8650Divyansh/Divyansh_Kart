import { useContext } from "react";
import { UserContext } from "./Contexts";

function withUser(IncomingComponent){
    function OutgoingComponent(props){
        const ContextData= useContext(UserContext)
        return<IncomingComponent {...props} {...ContextData}/>
    }
    return OutgoingComponent;
}
export default withUser;