function updateCustomer() {
  console.log("PUT CALLED");
  $.ajax({
    url: '/updateCustomer',
    type: 'PUT',
    data: $('#updateCustomer').serialize(),
    success: function(result) {
      window.location.replace("./");
    }
  })
};

function updateTransaction() {
  console.log("PUT CALLED");
  $.ajax({
    url: '/updateTransaction',
    type: 'PUT',
    data: $('#updateTransaction').serialize(),
    success: function(result) {
      window.location.replace("./");
    }
  })
};

function updateShipment() {
  console.log("PUT CALLED");
  $.ajax({
    url: '/updateShipment',
    type: 'PUT',
    data: $('#updateShipment(').serialize(),
    success: function(result) {
      window.location.replace("./");
    }
  })
};

function updateItem() {
  console.log("PUT CALLED");
  $.ajax({
    url: '/updateItem',
    type: 'PUT',
    data: $('#updateItem').serialize(),
    success: function(result) {
      window.location.replace("./");
    }
  })
};

function updateCategory() {
  console.log("PUT CALLED");
  $.ajax({
    url: '/updateCategory',
    type: 'PUT',
    data: $('#updateCategory').serialize(),
    success: function(result) {
      window.location.replace("./");
    }
  })
};
