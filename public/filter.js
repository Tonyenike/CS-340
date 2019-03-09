var socket = io();

function filterproducts(){

    var maxbool = document.getElementById('max-check').checked;

    console.log(maxbool);

    var minbool = document.getElementById('min-check').checked;

    console.log(minbool);

    var maxval = document.getElementById('max-value').value;

    console.log(maxval);

    if (parseFloat(maxval) >= 0) {
    // It's a number
    }
    else {
        alert("Error: the maximum value is not a valid number"); 
        return;
    }


    var minval = document.getElementById('min-value').value;

    console.log(minval);
    if (parseFloat(minval) >= 0) {
    // It's a number
    }
    else {
        alert("Error: the minimum value is not a valid number"); 
        return;
    }

    var nameval = document.getElementById('namesearch').value;

    console.log(nameval);

    var yeet = true;

    if(nameval === ""){
        yeet = false;
        nameval = "NULL";
    }

    window.location = 
    '/customer/filter/' + maxbool.toString() + '/' + maxval + '/'
                        + minbool.toString() + '/' + minval + '/'
                        + yeet.toString()    + '/' + nameval
}

function orderproducts(){
     

    var elements = document.getElementsByClassName('productnum');
    var productQty  = new Array(elements.length);
    var productId = new Array(elements.length);
    var i;
    for(i = 0; i < elements.length; i++){
        if (Number.isInteger(+elements[i].value)){
            //data is an integer
        }
        else{
            alert("Order amount is not an integer");
            return;
        }
        if (parseInt(elements[i].value) >= 0){}
        else{
            alert("Order amount is invalid");
            return;
        }
        productQty[i] = parseInt(elements[i].value);
        productId[i] = parseInt(elements[i].id.substring(7));
    }
    alert("Order succesfully submitted"); 
    socket.emit("products-ordered", {pI: productId, pQ: productQty});
}
