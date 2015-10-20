

//button to load photo avatar

// function previewFile() {
//   var preview = document.querySelector('img');
//   var file    = document.querySelector('input[type=file]').files[0];
//   var reader  = new FileReader();
//
//   reader.onloadend = function () {
//     preview.src = reader.result;
//   }
//
//   if (file) {
//     reader.readAsDataURL(file);
//   } else {
//     preview.src = "";
//   }
// }

var loadFile = function(event) {
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
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  var email = document.getElementById('email').value;
  var firstName = document.getElementById('first_name').value;
  var lastName = document.getElementById('last_name').value;

  var loadFile = document.getElementById('choose_file');
  //console.log(loadFile);

  encodeImage('/img/logo.png', function(encodedImage) {
      document.getElementById('data').value = encodedImage;
  });


  //console.log(username, password);

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
    console.log(req);
  });
});

function encodeImage(src, callback) {
    var canvas = document.createElement('canvas'),
        ctx = canvas.getContext('2d'),
        img = new Image();

      img.onload = function(){
        canvas.width  = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0, img.width, img.height);
        callback(canvas.toDataURL());
      }
      img.src = src;;
}

// encodeImage('/img/logo.png', function(encodedImage) {
//     document.getElementById('data').value = encodedImage;
// });
