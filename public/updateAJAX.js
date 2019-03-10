function updateCustomer(id) {
  $.ajax({
    url: '/updateCustomer/' + id,
    type: 'PUT',
    data: $('#updateCustomer').serialize(),
    success: function(result) {
      window.location.replace("./");
    }
  })
};

function updateTransaction(id) {
  $.ajax({
    url: '/updateTransaction/' + id,
    type: 'PUT',
    data: $('#updateTransaction').serialize(),
    success: function(result) {
      window.location.replace("./");
    }
  })
};

function updateShipment(id) {
  $.ajax({
    url: '/updateShipment/' + id,
    type: 'PUT',
    data: $('#updateShipment(').serialize(),
    success: function(result) {
      window.location.replace("./");
    }
  })
};

function updateItem(id) {
  $.ajax({
    url: '/updateItem/' + id,
    type: 'PUT',
    data: $('#updateItem').serialize(),
    success: function(result) {
      window.location.replace("./");
    }
  })
};

function updateCategory(id) {
  $.ajax({
    url: '/updateCategory/' + id,
    type: 'PUT',
    data: $('#updateCategory').serialize(),
    success: function(result) {
      window.location.replace("./");
    }
  })
};
