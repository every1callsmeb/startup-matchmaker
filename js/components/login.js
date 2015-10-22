//LOGIN.JS

//grab container handle

var login_button = document.getElementById('login_button');



login_button.addEventListener('click', function() {
  
  var user_name = document.getElementById('user_name').value;

  var password = document.getElementById('password').value;
  
  alert(user_name + ', ' + password);

});