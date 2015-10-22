//LOGIN.JS

//grab login button
var login_button = document.getElementById('login_button');


//==== EVENTS =====
login_button.addEventListener('click', function() {
  grabStuff();

});

//FUNCTIONS

function debugFunction() {
  var user_name = document.getElementById('user_name').value;
  var password = document.getElementById('password').value;
  console.log(user_name + ', ' + password);
}

function grabStuff() {
  
  console.log('XHR is running');
  //parameters to pass
  var para = {username:'JRHD', password:'JRHD'};
  var xhr = new xhrHandler();
  xhr.request('GET', 'http://vvvvvv.club/api/login', para);
  
  
  console.log(xhr);
}