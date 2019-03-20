// Javascript for making an order.
var socket = io();

function orderproducts(){
     
    // Every element is a product. 
    // elements is the table of products from the textbox in the HTML page.
    var elements = document.getElementsByClassName('productnum');
    var quantities = document.getElementsByClassName('product-qty');
    

    var returnbool = document.getElementById('customer-return').checked;
    var returnval = parseInt(+document.getElementById('customer-select').value);

    // payment method element in the HTML page 
    var paymentMethod = document.getElementById('payment-method').value;

    //Figure out how much of every product was purchased.
    var productQty  = new Array(elements.length);
    //Figure out the product ID for each product
    var productId = new Array(elements.length);
    var orderamount = 0;
    var pricetotal = 0;
    var i;

    //Check the inputs to make sure they are valid, store productQty and productId
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
        if (parseInt(+elements[i].value) <= parseInt(+quantities[i].innerHTML)){}
        else{
            alert("Order amount exceeds available quantity");
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

    //Get customer info, if it exists.
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

    // If count === 3, then the customer didn't enter anything.
    // If count === 0, then the customer filled out everything.
    // Otherwise, there's an error!
    if(count === 0 || count === 3){}
    else{alert("You must fill out all fields or leave all fields blank for customer info"); return;}

    if(count === 0){
        if (Number.isInteger(+customerpnumber)){
            //data is an integer
        }
        else{
            alert("Phone number is not an integer. It may NOT have dashes or spaces.");
            return;
        }
        if (parseInt(customerpnumber) >= 1000000000 && parseInt(customerpnumber) < 100000000000){}
        else{
            alert("Phone number is invalid. It is too big or too small.");
            return;
        }
    }

    var customerbool = (count === 0);


    // toFixed function prints a two-point floating point value (the dollars and cents!)
    alert("Order succesfully submitted. Your total is: $" + pricetotal.toFixed(2)); 
    socket.emit("products-ordered", {paymentMethod: paymentMethod, 
                                     paymentTotal: pricetotal.toFixed(2), 
                                     productID: productId, 
                                     productQTY: productQty,
                                     returnbool: returnbool,
                                     returnval: returnval,
                                     customerbool: customerbool,
                                     fname: customerfname,
                                     lname: customerlname,
                                     pnumber: customerpnumber});

   setTimeout(function(){window.location.reload();}, 200);
}
