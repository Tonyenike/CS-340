var socket = io();

function addNewProduct(){


    var productName = document.getElementById('product-name').value;
    var productPrice = document.getElementById('product-price').value;

    if(productName === ""){
        alert("Please provide a product name.");
        return;
    }
       
        if (parseFloat(productPrice) > 0){} 
        else{
            alert("Price amount is invalid");
            return;
        }
        if(parseFloat(+productPrice) == parseFloat(+productPrice).toFixed(2)){}
        else{
            alert("Price amount is in a fraction of a cent!");
            return;
        }

    socket.emit('addProduct', {
                                productName: productName,
                                productPrice: productPrice
                                });

    setTimeout(function(){window.location.replace("/employee/products");}, 200);

}


