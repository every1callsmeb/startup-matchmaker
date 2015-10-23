//LOGIN.JS

//grab login button
var login_button = document.getElementById('login_button');


//==== EVENTS =====
login_button.addEventListener('click', function() {
  e.preventDefault();

  
  var username = document.getElementById('user_name').value;
  var password = document.getElementById('password').value;

  var options = {
    username: username,
    password: password
  };
  //POST http://vvvvvv.club/api/login
  var xhr = new xhrHandler();

  var request = xhr.request('POST', 'http://vvvvvv.club/api/login', options).then(function(req){console.log(req);});
});

//ERROR HANDLING
