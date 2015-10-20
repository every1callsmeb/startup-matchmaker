var Team = function(title) {

  this.elem = document.createElement('div');
  this.header = document.createElement('header');
  this.addForm = document.createElement('div');
  this.ul = document.createElement('ul');


  this.elem.classList.add('menu');
  this.addForm.classList.add('add-form');

  this.elem.appendChild(this.header);
  this.elem.appendChild(this.addForm);
  this.elem.appendChild(this.ul);

  this.addForm.innerHTML = '<input type="text">'+'<div class="button add">';


  this.addForm.querySelectorAll('.add')[0].addEventListener('click', function() {
      this.addForm.classList.remove('close');
      // addForm is the element we want to open. In order to open it, we need to change it's classes using the classList. We are going to remove the class 'close'
      this.addForm.classList.add('open');
      this.addForm.querySelectorAll('input')[0].focus(); // get a blinking cursor inside the input and you can now type inside of it
  }.bind(this));

  this.addForm.querySelectorAll('input')[0].addEventListener('keydown',function(ev){
    // Grabs the addForm element. Queries its input. Grabs the input and adds the eventlistener for keydown. Keydown event happens when you press a key down on a keyboard.
    if(ev.keyCode === 13) {
      var item = {
        // Creating a single object with a content property. The content property is equal to the inputs value.
        content: this.addForm.querySelectorAll('input')[0].value
   };
   this.addItem(item);
   // Takes a single item and creates an <li>
   this.addForm.querySelectorAll('input')[0].value = '';
   // Sets the input value to a empty string
   this.addForm.classList.remove('open');
   this.addForm.classList.add('close');
    }
  }.bind(this));


  document.getElementById('TeamMenu').appendChild(this.elem)

};

Team.prototype.addItem = function(item) {
    var listItem = document.createElement('li');
    listItem.innerHTML = item.content;
    this.ul.appendChild(listItem);
};

Team.prototype.createList = function(list) {
    list.forEach(function(item){
      this.addItem(item);
    }.bind(this));
}; //-- acknowledging that accordian is an object

Team.prototype.sortList = function(flexClass) {
    this.ul.style.flexDirection = flexClass;
};
