var socket = io();

function deleteAll(){

    var bool = confirm("Proceed to refund this transaction? All purchased merchandise go back into stock.");
    if(bool){
        var string = window.location.pathname;
        var newstring = string.substring(29);
        window.location.replace("/employee/deletetransaction/" + parseInt(newstring));
    }
}

async function deleteSome(){

    var elements = document.getElementsByClassName('refundable');
    var i;
    var refundcounter = 0;

    var new_total = parseFloat(+document.getElementById('total-val').innerHTML.substring(1));
    console.log(new_total);
    var prices = document.getElementsByClassName('prices');

    var inventory_to_refund = new Array(0);


    for(i = 0; i < elements.length; i++){
        if(elements[i].checked){
            refundcounter = refundcounter + 1;
            new_total = new_total - parseFloat(+prices[i].innerHTML.substring(1));
            inventory_to_refund.push(parseInt(+elements[i].id.substring(9)));
        }

    }

    if(refundcounter === 0){
        alert("You didn't select any items!");
        return;
    }


    var bool = confirm("Proceed to refund these products? All selected merchandise go back into stock.");
    if(bool){

        var string = window.location.pathname;
        var newstring = string.substring(29);
        if(refundcounter === elements.length){
            window.location.replace("/employee/deletetransaction/" + parseInt(newstring));
        }
        else{
            socket.emit("deleteItems",
                        {inventoryToRefund: inventory_to_refund,
                         newTotal: new_total.toFixed(2),
                         transaction: parseInt(newstring)
                        });
            setTimeout(function(){window.location.replace("/employee/transactions");}, 200);
        }

    }
    
}
