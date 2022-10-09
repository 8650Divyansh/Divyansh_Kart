import { Formik,Form} from "formik";
import React from "react";
import { Link } from "react-router-dom"
import * as yup from "yup";
import Input from "./Input";

function LoginPage() {
    function callLoginApi(values) {
        console.log("callLoginApi called",values.email ,values.password);  
    }

    const schema = yup.object().shape({
        email:yup.string().email().required(),
        password:yup.string().min(8).required(),
    })

    
    const initialValues ={
        email: '',
        password: '',
    }
    return (
        <section className="p-4 ">
            <Link to="/" className="flex font-semibold text-indigo-600 text-sm ">
                <svg className="fill-current mr-2 text-black w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" /></svg>
                Continue Shopping
            </Link>
            <div className="flex flex-col items-center justify-center  mx-auto  lg:py-0">

                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-indigo-400 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl dark:text-white">
                            Sign in to your account
                        </h1>
                        <Formik 
                        initialValues={initialValues}
                        onSubmit={callLoginApi}
                        validationSchema={schema}
                        validateOnMount
                        >
                        <Form className="space-y-4 md:space-y-6" action="#">
                            <Input
                              label="Your email"
                              id="email" 
                              name="email" 
                              type="email" 
                              autoComplete="email" 
                              placeholder="name@company.com" 
                              />
                            <Input
                              label="Password"
                              id="password" 
                              name="password" 
                              type="password" 
                              autoComplete="password" 
                              placeholder="••••••••" 
                           
                              />
                            <div className="flex items-center justify-between">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                                    </div>
                                    <div className="ml-3 text-md">
                                        <label htmlFor="remember" className="text-white dark:text-white">Remember me</label>
                                    </div>
                                </div>
                                <Link to="/ForgotPassword" className="text-md font-bold text-primary-600 hover:underline dark:text-primary-500">Forgot password?</Link>
                            </div>
                            <button type="submit"  className="w-full  text-white disabled:dark:bg-indigo-500 bg-gray-900 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-md px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                            <p className="text-md font-semibold text-black dark:text-black">
                                Don’t have an account yet? <Link to="/Signup" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</Link>
                            </p>
                           
                        </Form>
                        </Formik>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default LoginPage;