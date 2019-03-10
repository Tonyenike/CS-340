var socket = io();

async function filterproducts(){

    var maxbool = document.getElementById('max-check').checked;

    var minbool = document.getElementById('min-check').checked;

    var miscbool = document.getElementById('misc-cat').checked;

    var maxval = document.getElementById('max-value').value;

    if (parseFloat(maxval) >= 0) {
    // It's a number
    }
    else {
        alert("Error: the maximum value is not a valid number"); 
        return;
    }


    var minval = document.getElementById('min-value').value;

    if (parseFloat(minval) >= 0) {
    // It's a number
    }
    else {
        alert("Error: the minimum value is not a valid number"); 
        return;
    }

    var nameval = document.getElementById('namesearch').value;


    var yeet = true;

    if(nameval === ""){
        yeet = false;
        nameval = "NULL";
    }


    var categories = document.getElementsByClassName('catbox');
    var categoryIds = new Array(0);
    var totalcategories = new Array(0);

    var i;
    for(i=0; i < categories.length; i++){
        totalcategories.push(parseInt(categories[i].id));
        //push categoryids that we WANT TO PRESERVE in our search.
        if(categories[i].checked)
            categoryIds.push(parseInt(categories[i].id));        
    }


    socket.emit('applyf', {maxbool: maxbool,
                           maxval: maxval,
                           minbool: minbool,
                           minval: minval,
                           namebool: yeet,
                           nameval: nameval,
                           miscbool: miscbool,
                           categories: categoryIds,
                           totalcategories: totalcategories});

   setTimeout(function(){window.location.reload();}, 200);

}
