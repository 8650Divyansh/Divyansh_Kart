import React from "react";

function TestDetail(){
    return(
<div>

<div class="flex flex-row  max-w-6xl p-4 mx-auto my-6 shadow-md">
<div class="flex-grow">

  <img src="https://cdn.discordapp.com/attachments/992343608189526056/1002832090527711283/mug-white-4.jpeg" alt=""/>
</div>
<div class="px-4">
<h1 class="font-medium text-2xl text-3xl">Black Printed Coffee Mug</h1>
<h4 class="font-bold my-4">$15.00</h4>
<p class="text-xl pr-16"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, fugit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel a tempora illum explicabo ratione neque earum doloribus quasi officiis praesentium.</p>
<div class="flex flex-row mt-7">
  <input type="text" placeholder="1" value="" class="w-14 px-3 border-solid border-2 border-black rounded-md mr-4"/>
  <a href=""> <button class="px-9 py-2 bg-red-600 text-white text-xl rounded-md">ADD TO CART</button></a>
</div>
</div>
</div>
</div>
);

};

export default TestDetail;