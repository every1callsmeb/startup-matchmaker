

//button to load photo avatar

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
}


function validate() {

  var spans = document.getElementsByTagName("span")''
  var Email = document.login.Email;
  if(Email.value === "")
  {

      spans[0].setAttribute("style","visability:visable");

  }


}
