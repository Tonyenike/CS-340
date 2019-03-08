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
