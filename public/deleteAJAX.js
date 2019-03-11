function deleteItem(id){
  console.log("DELETE CALLED");
  $.ajax({
      url: '/deleteItem/' + id,
      type: 'DELETE',
      success: function(result){
          window.location.reload(true);
      }
  })
};

function deleteProduct(id){
  console.log("DELETE CALLED");
  $.ajax({
      url: '/deleteProduct/' + id,
        type: 'DELETE',
        success: function(result){
            window.location.reload(true);
        }
    })
};

function deleteTransaction(id){
  console.log("DELETE CALLED");
    $.ajax({
        url: '/deleteTransaction/' + id,
        type: 'DELETE',
        success: function(result){
            window.location.reload(true);
        }
    })
};

function deleteShipment(id){
  console.log("DELETE CALLED");
    $.ajax({
        url: '/deleteShipment/' + id,
        type: 'DELETE',
        success: function(result){
            window.location.reload(true);
        }
    })
};

function deleteCategory(id){
  console.log("DELETE CALLED");
    $.ajax({
        url: '/deleteCategory/' + id,
        type: 'DELETE',
        success: function(result){
            window.location.reload(true);
        }
    })
};

function deleteCustomer(id){
  console.log("DELETE CALLED");
  console.log(id);
    $.ajax({
        url: '/deleteCustomer/' + id,
        type: 'DELETE',
        success: function(result){
            window.location.reload(true);
        }
    })
};
