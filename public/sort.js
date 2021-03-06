function sortTable(name, style, n) {
  //style == 1: strings
  //style == 2: numbers
  //style == 3: $numbers (money)
  //style == 4: dates
  //style == 5: linked numbers

  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById(name);
  switching = true;
  //Set the sorting direction to ascending:
  dir = "asc";
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 1; i < (rows.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      if(style === 5){
        x = x.childNodes[0];
        y = y.childNodes[0];
      }
      /*check if the two rows should switch place,
      based on the direction, asc or desc:*/
      if (dir == "asc") {
        if(style === 1){
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                //if so, mark as a switch and break the loop:
                shouldSwitch= true;
                break;
            }
        }
        else if(style === 2 || style === 5){
            var yeet = parseFloat(x.innerHTML);
            var yote = parseFloat(y.innerHTML);
            if(yeet > yote){
                shouldSwitch=true;
                break;
            }
        }
        else if(style === 3){
            var yeet = parseFloat(x.innerHTML.substring(1));
            var yote = parseFloat(y.innerHTML.substring(1));
            if(yeet > yote){
                shouldSwitch=true;
                break;
            }
        }
      } else if (dir == "desc") {
        if(style === 1){
            if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                //if so, mark as a switch and break the loop:
                shouldSwitch = true;
                break;
            }
        }
        else if(style === 2 || style === 5){
            var yeet = parseFloat(x.innerHTML);
            var yote = parseFloat(y.innerHTML);
            if(yeet < yote){
                shouldSwitch=true;
                break;
            }
        }
        else if(style === 3){
            var yeet = parseFloat(x.innerHTML.substring(1));
            var yote = parseFloat(y.innerHTML.substring(1));
            if(yeet < yote){
                shouldSwitch=true;
                break;
            }
        }
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      //Each time a switch is done, increase this count by 1:
      switchcount ++;
    } else {
      /*If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again.*/
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}
