function addNewShipment(){



    var rowcount = document.getElementById("shipment-items").rows.length;

    var supplierName = document.getElementById('supplier-name').value;
    var shipperName = document.getElementById('shipper-name').value;
    if(supplierName === ""){
        alert("Please provide a supplier name.");
        return;
    }
    else if(shipperName === ""){
        alert("Please provide a shipper name.");
        return;
    }

    var prices = document.getElementsByClassName('product-price');
    var serials = document.getElementsByClassName('product-serial');
    var products = document.getElementsByClassName('product-name');

    var i
    for(i = 0; i < prices.length; i++){
       
        console.log(products[i].value); 
        if (parseFloat(prices[i].value) > 0){} 
        else{
            alert("Wholesale amount is invalid");
            return;
        }
        if(parseFloat(+prices[i].value) == parseFloat(+prices[i].value).toFixed(2)){}
        else{
            alert("Wholesale amount is in a fraction of a cent!");
            return;
        }
        if (Number.isInteger(+serials[i].value)){
            //data is an integer
        }
        else{
            alert("Serial number is not an integer");
            return;
        }
        if(parseInt(+serials[i].value) > 0){}
        else{
            alert("Serial number is invalid -- it must be greater than 0");
            return;
        }
    }

    alert("This button doesn't work yet!")


}
