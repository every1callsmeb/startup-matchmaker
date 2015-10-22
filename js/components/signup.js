

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
  var firstName = document.getElementById('first_name').value;
  var lastName = document.getElementById('last_name').value;
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  var email = document.getElementById('email').value;

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
    console.log(req);
  });
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

//function convertImgToBase64URL(url, callback, outputFormat) {
//  var img = new Image();
//  img.crossOrigin = 'Anonymous';
//  img.onload = function() {
//    var canvas = document.createElement('CANVAS');
//    var ctx = canvas.getContext('2d');
//    canvas.height = this.height;
//    canvas.width = this.width;
//    ctx.drawImage(this,0,0);
//    var dataURL = canvas.toDataURL('image/png');
//    callback(dataURL);
//    canvas = null;
//  };
//  img.src = url;
//}

//convertImgToBase64URL('image/png', function(base64Img){
//    options.avatar.image = base64Img;
//});
