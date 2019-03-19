
var socket = io();

function addNewCategory(){


    var categoryName = document.getElementById('category-name').value;

    if(categoryName === ""){
        alert("Please provide a category name.");
        return;
    }
       
    socket.emit('addCategory', {
                                categoryName: categoryName,
                                });

    setTimeout(function(){window.location.replace("/employee/categories");}, 200);

}


