$(document).ready(function () {
  $('.signin-form').submit(function (e) {

    e.preventDefault();

    var email = $("#email").val();
    var password = $("#password").val();
    console.log(email, password);
    if((email.toLowerCase() == 'sudeep.takkar93@gmail.com' && password == 'Sudeep@1993') || (email.toLowerCase() == 'shubham@gmail.com' && password == 'Shubham')){
    	window.location.href = './dashboard.html';
    }
  });


});
