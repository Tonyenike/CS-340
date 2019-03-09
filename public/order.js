// Javascript for making an order.
var socket = io();

function orderproducts(){
     

    var elements = document.getElementsByClassName('productnum'); 


    var productQty  = new Array(elements.length);
    var productId = new Array(elements.length);
    var orderamount = 0;
    var pricetotal = 0;
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

        var amount = elements[i].getAttribute('data-priceval'); 
        productQty[i] = parseInt(+elements[i].value);
        productId[i] = parseInt(+elements[i].id.substring(7));
        orderamount = productQty[i] + orderamount;
        pricetotal = productQty[i] * parseFloat(amount) + pricetotal;
    }

    if(orderamount === 0){
        alert("You didn't order anything!");
        return;
    }
    console.log("Total of order is", pricetotal);

    var customerfname = document.getElementById('fname').value;
    var customerlname = document.getElementById('lname').value;
    var customerpnumber = document.getElementById('pnumber').value;

    var count = 0;

    if(customerfname === ""){
        count++;
    }
    if(customerlname === ""){
        count++;
    }
    if(customerpnumber === ""){
        count++;
    }

    if(count === 0 || count === 3){}
    else{alert("You must fill out all fields or leave all fields blank for customer info"); return;}

    if(count === 0){
        if (Number.isInteger(+customerpnumber)){
            //data is an integer
        }
        else{
            alert("Phone number is not an integer");
            return;
        }
        if (parseInt(customerpnumber) >= 1000000000 && parseInt(customerpnumber) <= 10000000000){}
        else{
            alert("Phone number is invalid");
            return;
        }
    }

    alert("Order succesfully submitted. Your total is: $" + pricetotal); 
    socket.emit("products-ordered", {total: pricetotal, pI: productId, pQ: productQty});

    window.location = '/customer/order';
}
