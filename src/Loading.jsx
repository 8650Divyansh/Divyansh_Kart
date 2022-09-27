import React from "react";

function Loading() {
    return (<div className="text-indigo-700 text-3xl grow flex justify-center items-center">
            <div className="w-16 h-16 rounded-full animate-spin absolute border-8 border-solid border-red-500 border-t-transparent"> </div>
    </div>);
};

export default Loading;