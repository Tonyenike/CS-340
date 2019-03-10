function deletePerson(id){
    $.ajax({
        url: '/people/' + id,
        type: 'DELETE',
        success: function(result){
            window.location.reload(true);
        }
    })
};

function deleteItem(id){
  $.ajax({
      url: '/deleteItem/' + id,
      type: 'DELETE',
      success: function(result){
          window.location.reload(true);
      }
  })
};

function deleteProduct(id){
  $.ajax({
      url: '/deleteProduct/' + id,
      type: 'DELETE',
      success: function(result){
          window.location.reload(true);
      }
  })
};

function deleteTransaction(id){
  $.ajax({
      url: '/deleteTransaction/' + id,
      type: 'DELETE',
      success: function(result){
          window.location.reload(true);
      }
  })
};

function deleteShipment(id){
  $.ajax({
      url: '/deleteShipment/' + id,
      type: 'DELETE',
      success: function(result){
          window.location.reload(true);
      }
  })
};

function deleteCategory(id){
  $.ajax({
      url: '/deleteCategory/' + id,
      type: 'DELETE',
      success: function(result){
          window.location.reload(true);
      }
  })
};
