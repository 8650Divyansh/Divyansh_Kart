import { useField } from "formik";
import React from "react";
function Input({
name,
label,
id,
className,
...rest
}){
    const field= useField(name);
    const [data,meta] = field;
    const {value,onBlur,onChange} = data;
    const {error,touched} = meta;
    let borderClass="text-sm dark:text-white"

    if(error && touched){
        borderClass="text-lg dark:text-red-700 animate-pulse"
    }
return(
    <div>
    <label htmlFor={id} className={"block mb-2 text-white font-medium"+
    " "+borderClass}>{label}</label>
    <input  className={"bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700  dark:border-gray-600 dark:placeholder-white dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"+className}
    id={id}
    value={value}
    onChange={onChange}
    onBlur={onBlur}
    name={name}
    {...rest}
     />
    {touched && error && <div className="text-red-700 text-md">{error}</div>}
</div>
);
}
export default Input;