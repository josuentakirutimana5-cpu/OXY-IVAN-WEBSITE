/* ==================================
   OXY & IVAN'S SHOP
   SCRIPT.JS
================================== */


// ==============================
// PRODUCT DATA
// ==============================


const product = {

    name: "Champion Chunky Sneakers Black",

    price: 15000

};



let cart = JSON.parse(localStorage.getItem("cart")) || [];




// ==============================
// PAGE START
// ==============================


window.onload = function(){

    updateCart();

};






// ==============================
// GO TO SHOP
// ==============================


function goShop(){

    document
    .getElementById("shop")
    .scrollIntoView({
        behavior:"smooth"
    });

}







// ==============================
// ADD TO CART
// ==============================


function addCart(){


    let quantity =

    Number(
        document.getElementById("quantity").value
    );



    if(quantity < 1){

        quantity = 1;

    }



    cart = [];



    for(let i=0;i<quantity;i++){


        cart.push(product);


    }



    saveCart();


    updateCart();



    alert(
        "Added to cart 👟"
    );


}







// ==============================
// SAVE CART
// ==============================


function saveCart(){


    localStorage.setItem(

        "cart",

        JSON.stringify(cart)

    );


}







// ==============================
// UPDATE CART
// ==============================


function updateCart(){


    let box =

    document.getElementById("cartBox");



    let total =

    document.getElementById("total");



    let count =

    document.getElementById("cartCount");




    if(cart.length === 0){


        box.innerHTML =
        "Your cart is empty 🛒";


        total.innerHTML =
        "Total: 0 RWF";


        count.innerHTML =
        "0";


        return;

    }





    box.innerHTML = "";



    cart.forEach((item,index)=>{


        box.innerHTML += `

        <div class="cart-item">


        👟 ${item.name}


        <br>


        Price:
        ${item.price.toLocaleString()} RWF


        <br><br>


        <button onclick="removeItem(${index})">

        Remove

        </button>


        </div>


        `;


    });





    let amount =

    cart.length * product.price;



    total.innerHTML =

    "Total: "

    +

    amount.toLocaleString()

    +

    " RWF";





    count.innerHTML = cart.length;



}








// ==============================
// REMOVE CART ITEM
// ==============================


function removeItem(index){


    cart.splice(index,1);



    saveCart();


    updateCart();


}









// ==============================
// GET CUSTOMER LOCATION
// ==============================


function getLocation(){



    if(!navigator.geolocation){


        alert(
            "GPS is not supported"
        );


        return;

    }




    navigator.geolocation.getCurrentPosition(



    function(position){



        let latitude =

        position.coords.latitude;



        let longitude =

        position.coords.longitude;





        let map =

        `https://maps.google.com/?q=${latitude},${longitude}`;




        document
        .getElementById("location")
        .value = map;




        alert(
        "Location added successfully 📍"
        );



    },



    function(){


        alert(
        "Please allow location access"
        );


    }



    );



}









// ==============================
// SEND ORDER TO WHATSAPP
// ==============================


function sendOrder(){



    if(cart.length === 0){


        alert(
        "Your cart is empty"
        );


        return;

    }




    let name =

    document.getElementById("name").value;



    let phone =

    document.getElementById("phone").value;




    let address =

    document.getElementById("address").value;




    let location =

    document.getElementById("location").value;




    let total =

    cart.length * product.price;






    let message =



    `🔥 OXY & IVAN'S SHOP ORDER 🔥

Customer:
${name}

Phone:
${phone}

Address:
${address}


Product:
${product.name}

Quantity:
${cart.length}


Total:
${total.toLocaleString()} RWF


Delivery Location:
${location}`;





    let whatsapp =

    "https://wa.me/250794036864?text="

    +

    encodeURIComponent(message);





    window.open(

        whatsapp,

        "_blank"

    );


}









// ==============================
// SEND CUSTOMER MESSAGE
// ==============================


function sendMessage(){



    let message =

    document
    .getElementById("message")
    .value;



    if(message.trim()===""){


        alert(
        "Write a message first"
        );


        return;

    }




    let whatsapp =


    "https://wa.me/250794036864?text="

    +

    encodeURIComponent(

    "Hello OXY & IVAN'S SHOP 👟\n\n"

    +

    message

    );





    window.open(

    whatsapp,

    "_blank"

    );



}