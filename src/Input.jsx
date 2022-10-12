import React from "react";
import FormikHOC from "./FormikHOC";
function Input({
name,
label,
id,
touched,
error,
className,
...rest
}){
    let borderClass="text-sm dark:text-white"

    if(error && touched){
        borderClass="text-lg dark:text-red-700 animate-pulse"
    }

return(
    <div>
    <label htmlFor={id} className={"block mb-2 text-white font-medium "+
    " "+borderClass}>{label}</label>
    <input  className={"bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700  dark:border-gray-600 dark:placeholder-white dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "+className}
    id={id}
    name={name}
    {...rest}
     />
    {touched && error && <div className="text-red-700 text-md">{error}</div>}
</div>
);
}
export const FormikInput= FormikHOC(Input);
export default Input;