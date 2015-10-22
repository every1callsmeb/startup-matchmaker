//LOGIN.JS

//grab login button
var login_button = document.getElementById('login_button');


//==== EVENTS =====
login_button.addEventListener('click', function() {
  debugFunction();
});

//FUNCTIONS

function debugFunction() {
  var user_name = document.getElementById('user_name').value;
  var password = document.getElementById('password').value;
  console.log(user_name + ', ' + password);
}

function grabStuff() {
  var request = new xhrHandler();
  
}