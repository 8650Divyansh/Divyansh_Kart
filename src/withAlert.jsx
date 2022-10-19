import { useContext } from "react";
import { AlertContext } from "./App";

function withAlert(IncomingComponent){
    function OutgoingComponent(props){
        const {alert,setAlert,HandleRemoveAlert}= useContext(AlertContext)
        return<IncomingComponent {...props} alert={alert} setAlert={setAlert} removeAlert={HandleRemoveAlert}/>
    }
    return OutgoingComponent;
}
export default withAlert;