
function addNewRow(){

    var htmlcontents = document.getElementById('cell-1-stuff').innerHTML;

    var table = document.getElementById('shipment-items');
    var newRow = table.insertRow(-1);
    var cell0 = newRow.insertCell(0);
    var cell1 = newRow.insertCell(1);
    var cell2 = newRow.insertCell(2);

    cell0.innerHTML = htmlcontents;
    cell1.innerHTML = "<input type = 'textbox' class = 'form-control'>";
    cell2.innerHTML = "<input type = 'textbox' class = 'form-control' value = '00.00'>";
}

function removeRow(){

    var rowcount = document.getElementById("shipment-items").rows.length;


    if(rowcount <= 2){
        alert("Error: A new shipment must contain at least 1 or more items!");
    }
    else{
        document.getElementById("shipment-items").deleteRow(-1);
    }

}

