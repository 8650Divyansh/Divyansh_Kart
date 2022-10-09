import React from "react";
import {useField} from "formik"

function FormikHOC(InComingComponent){
    function OutComingComponent({
        name,
        ...rest
        }){
            const field= useField(name);
            const [data,meta] = field;
            const {value,onBlur,onChange} = data;
            const {error,touched} = meta;
           
        return(
           <InComingComponent value={value} onBlur={onBlur} onChange={onChange} error={error} touched={touched} name={name} {...rest}/>
        );
        }
        return OutComingComponent;
}
export default FormikHOC;