var socket = io();

function revealNew(){
    document.getElementById('customer-new').classList.remove('invisible')
    document.getElementById('customer-old').classList.add('invisible')



}

function revealOld(){


    document.getElementById('customer-new').classList.add('invisible')
    document.getElementById('customer-old').classList.remove('invisible')

}


function addInfo(){

    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var pnumber = document.getElementById('pnumber').value;

    if(fname === ""){
        alert("You left a field empty.")
        return;
    }
    if(lname === ""){
        alert("You left a field empty.")
        return;
    }
    if(pnumber === ""){
        alert("You left a field empty.")
        return;
    }

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
    socket.emit('newCustomer', {
                               fname: fname,
                               lname: lname,
                               pnumber: pnumber
                              });
}


function viewInfo(){

    var id = document.getElementById('choose-old').value;

    window.location.replace('/customer/inspect/' + id);

}
