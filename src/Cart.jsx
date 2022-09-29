import React, { useState } from "react";

function Index() {
    const [show, setShow] = useState(false);
    return (
        <>
            <div className="flex md:flex-row flex-col w-screen overflow-hidden">
                            <div className="lg:w-1/2 bg-white p-0 items-center">

                                <div className="md:flex  py-4 border-t border-gray-200">
                                <div className="pl-7">
                                    <div className="w-2/4">
                                        <img src="https://cdn.tuk.dev/assets/templates/e-commerce-kit/bestSeller3.png" alt className="w-full h-full object-center object-cover" />
                                    </div>

                                    
                                    <p className="text-xs leading-3 text-gray-800 md:pt-0 pt-4">RF293</p>
                                    <div className="flex items-center justify-between w-full pt-1">
                                        <p className="text-base font-black leading-none text-gray-800">North wolf bag</p>
                                        <select className="py-2 px-1 border border-gray-200 mr-6 focus:outline-none">
                                            <option>01</option>
                                            <option>02</option>
                                            <option>03</option>
                                        </select>
                                    </div>
                                    <p className="text-xs leading-3 text-gray-600 pt-2">Height: 10 inches</p>
                                    <p className="text-xs leading-3 text-gray-600 py-4">Color: Black</p>
                                    <p className="w-96 text-xs leading-3 text-gray-600">Composition: 100% calf leather</p>
                                    <div className="flex items-center justify-between pt-5 pr-6">
                                        <div className="flex itemms-center">
                                            <p className="text-xs leading-3 underline text-gray-800 cursor-pointer">Add to favorites</p>
                                            <p className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer">Remove</p>
                                        </div>
                                        <p className="text-base font-black leading-none text-gray-800">$9,000</p>
                                    </div>
                                    </div>
                                </div>

                            </div>

                        </div>


        </>
    );
}

export default Index;
