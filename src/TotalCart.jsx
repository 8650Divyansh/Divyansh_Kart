import React from "react";
import { Link } from "react-router-dom"

function TotalCart() {
    return (
        <div>
            <div className="flex flex-row flex-start hidden md:block" >
                <div className="py-4">
                    <label for="promo" className="font-semibold inline-block mb-3 text-sm uppercase">Promo Code</label>
                    <div className="flex">
                        <input type="text" id="promo" placeholder="Enter your code" className="p-2 text-sm w-full" />
                        <button className="sm:px-16 sm:py-2 px-4 py-1 bg-red-600 text-white  text-center sm:text-xl text-sm rounded-md hover:bg-red-500" >Apply</button>
                    </div>
                </div>

                <div id="summary" className="w-2/5 py-1 ml-auto mr-16">
                    <h1 className="font-semibold text-2xl border-b p-2 bg-gray-200">Order Summary</h1>
                    <div className="flex justify-between mt-10 mb-5 px-8">
                        <span className="font-semibold text-sm uppercase">Items 3</span>
                        <span className="font-semibold text-sm">590$</span>
                    </div>
                    <div>
                        <label className="font-medium inline-block mb-2 px-8 text-sm uppercase">Shipping</label>
                        <select className="block p-2  text-gray-600 w-full text-sm">
                            <option>Standard shipping - $10.00</option>
                        </select>
                    </div>
                    <div className="border-t mt-4">
                        <div className="flex font-semibold justify-between py-6 text-sm px-8 uppercase">
                            <span>Total cost</span>
                            <span>$600</span>
                        </div>
                        <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">Checkout</button>
                    </div>
                </div>
            </div>
            <div id="summary" class="w-full px-4 py-4 md:hidden block">
                <h1 class="font-semibold text-2xl border-b pb-8">Order Summary</h1>
                <div class="flex justify-between mt-2 mb-5">
                    <span class="font-semibold text-md uppercase">Items 3</span>
                    <span class="font-semibold text-md mr-3">590$</span>
                </div>
                <div>
                    <label class="font-medium inline-block mb-3 text-md uppercase">Shipping</label>
                    <select class="block p-2 text-gray-800 w-full text-md">
                        <option>Standard shipping - $10.00</option>
                    </select>
                </div>
                <div class="py-6">
                    <label for="promo" class="font-semibold inline-block mb-3 text-sm uppercase">Promo Code</label>
                    <div className="flex">
                    <input type="text" id="promo" placeholder="Enter your code" class="p-2 text-md w-2/4" />
                    <button class="bg-red-500 hover:bg-red-600 px-16 py-2 text-sm text-white uppercase">Apply</button>
                    </div>
                </div>
                
                <div class="border-t mt-2">
                    <div class="flex font-semibold justify-between py-6 text-md uppercase mr-3">
                        <span>Total cost</span>
                        <span>$600</span>
                    </div>
                    <button class="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">Checkout</button>
                </div>
            </div>
        </div>
    );
}
export default TotalCart;