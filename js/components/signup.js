var previewFile = function(event) {
  var reader = new FileReader();
  reader.onload = function(){
    var output = document.getElementById('output');
    output.src = reader.result;
  };
  reader.readAsDataURL(event.target.files[0]);
};

var xhr = new xhrHandler();

var submit = document.getElementById('submit');
submit.addEventListener('click', function(e){
 e.preventDefault();

  function validateForm() {
      var email = document.forms["myForm"]["emailaddress"].value;
      var userid = document.forms["myForm"]["userid"].value;
      var password = document.forms["myForm"]["password"].value;
      var firstName = document.forms["myForm"]["firstname"].value;
      var lastName = document.forms["myForm"]["lastname"].value;

      if (email == null || email == "") {
          alert("Email must be filled out");
          return false;
      }
      else if (userid == null || userid == "") {
          alert("Userid must be filled out");
          return false;
      }
      else if (password == null || password == "") {
          alert("Password must be filled out");
          return false;
      }
      else if (firstName == null || firstName == "") {
          alert("First Name must be filled out");
          return false;
      }
      else if (lastName == null || lastName == "") {
          alert("Last Name must be filled out");
          return false;
      }
      else  {
        var firstName = document.getElementById('first_name').value;
        var lastName = document.getElementById('last_name').value;
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
        var email = document.getElementById('email').value;

        var button = document.getElementById('button');

        var loadElement = document.getElementById('choose_file');

        var options = {
          firstName: firstName,
          lastName: lastName,
          username: username,
          password: password,
          email: email,
          avatar: {
            image: 'signup.png'
          }
        };

        var request = xhr.request('POST', 'http://vvvvvv.club/api/user', options).then(function(req){

          window.location.href = ("../views/team.html");
        });
      }
  }
validateForm(); // function call for the function definition above
});

function previewFile() {
  var preview = document.querySelector('img');
  var file    = document.querySelector('input[type=file]').files[0];
  var reader  = new FileReader();

  reader.onloadend = function () {
    preview.src = reader.result;
  }

  if (file) {
    reader.readAsDataURL(file);
  } else {
    preview.src = "";
  }
};
