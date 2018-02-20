$(document).ready(function () {
  $('.signin-form').submit(function (e) {
    e.preventDefault();
    var email = $("#email").val();
    var password = $("#password").val();
    console.log(email, password);
    if((email.toLowerCase() == 'sudeep.takkar93@gmail.com' && password == 'Sudeep@123') || (email.toLowerCase() == 'shubhamarya9@gmail.com' && password == 'Shubham9')){
    	window.location.href = './views/dashboard.html';
    	localStorage.setItem('email', email.toLowerCase());
    	localStorage.setItem('password', password);
    }
  });

});

function searchTable() {
	  // Declare variables 
	  var input, filter, table, tr, tds, td, i, j;
	  input = document.getElementById("searchInput");
	  filter = input.value.toUpperCase();
	  table = document.getElementById("transactionTable");
	  tr = table.getElementsByTagName("tr");

	  // Loop through all table rows, and hide those who don't match the search query
	  for (i = 0; i < tr.length; i++) {
	  	tds = tr[i].children;
	  	tr[i].customDisplay = false;
	  	for(j = 0; j< tds.length; j++){
		    td = tr[i].getElementsByTagName("td")[j];
		    if (td) {
		      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
		        tr[i].style.display = "";
		        tr[i].customDisplay = true;
		        console.log(tr[i]);
		      } else if(tr[i].customDisplay != true){
		        tr[i].style.display = "none";
		      }
		    } 
		}
	  }
}

function sortTable(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("transactionTable");
  switching = true;
  dir = "asc"; 
  while (switching) {
    switching = false;
    rows = table.getElementsByTagName("TR");
    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          shouldSwitch= true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          shouldSwitch= true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      switchcount ++; 
    } else {
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}

function logout(){
	window.location.href = '../views/index.html';
	localStorage.removeItem("email");
	localStorage.removeItem("password");
}
