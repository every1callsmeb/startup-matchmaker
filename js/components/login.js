//LOGIN.JS

//grab login button

var xhr = new xhrHandler();

var loginButton = document.getElementById('loginbutton');

loginbutton.addEventListener('click', function(e) {
  e.preventDefault();

  function validateForm() {
    var username = document.forms["loginForm"]["username"].value;
    var password = document.forms["loginForm"]["password"].value;

    if (username == null || username == "") {
      alert("Username must be filled out");
      return false;
    }
    else if (password == null || password == "") {
      alert("Password must be filled out");
      return false;
    }
    else {
    var username = document.getElementById('user_name').value;
    var password = document.getElementById('password').value;

    var options = {
      username: username,
      password: password
    };
    //POST http://vvvvvv.club/api/login


    var request = xhr.request('POST', 'http://vvvvvv.club/api/login', options).then(function(req){

    window.location.href = ("../views/team.html")
    });

  }
  }
validateForm();
});

//ERROR HANDLING
