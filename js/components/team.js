var Team = function(title) {
  this.elem = document.createElement('div');
  this.team = document.createElement('div');
  this.header = document.createElement('header');
  this.addForm = document.createElement('div');
  this.ul = document.createElement('ul');
  this.teamlist = document.createElement('ul');

  this.elem.classList.add('menu');
  this.team.classList.add('team-container');
  this.addForm.classList.add('add-form');
  this.teamlist.setAttribute('id','people');

  this.elem.appendChild(this.header);
  this.elem.appendChild(this.addForm);
  this.elem.appendChild(this.ul);
  this.team.appendChild(this.teamlist);

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
  document.getElementById('TeamMenu').appendChild(this.team)

};

Team.prototype.addItem = function(item) {
    var listItem = document.createElement('li');
    listItem.innerHTML = item.content;
<<<<<<< HEAD
    listItem.setAttribute('ondragover','return false');
    listItem.setAttribute('ondrop',"doDrop(event)")//this isn't the right way
=======
    listItem.classList.add('droppable');
>>>>>>> refs/remotes/origin/master
    this.ul.appendChild(listItem);
};


function doDrop(event)
{
  alert(event.target.outerHTML)
}
//// team section

var candidates  = ["candidate1", "candidate2", "candidate3", "candidate4"];

Team.prototype.create_candidates = function(){
    var items = document.getElementById("people");
for (var i = 0; i < candidates.length; i++ ) {
        var item = document.createElement("li");
        item.innerHTML = "<div id='dragged' class='drag' draggable='true' ondragstart='event.dataTransfer.setData('text/plain',null)'>"+candidates[i]+"</div>";
        items.appendChild(item);

          var dragDrop = document.getElementById('dragged');

            dragDrop.addEventListener("dragstart", function(ev){
              dragged = event.target;
                // make it half transparent
                        event.target.style.opacity = .5;
                        });

            dragDrop.addEventListener("dragend", function( event ) {
            // reset the transparency
                        event.target.style.opacity = "";
                        }, false);

            document.addEventListener("dragover", function( event ) {
                 // prevent default to allow drop
                        event.preventDefault();
                        }, false);

            document.addEventListener("dragenter", function( event ) {
              // highlight potential drop target when the draggable element enters
                if ( event.target.className == "droppable" ) {
                     event.target.style.background = "";
                  }
                    }, false);

            document.addEventListener("dragleave", function( event ) {
       // reset background of potential drop target when the draggable element leaves it
                if ( event.target.className == "droppable" ) {
                     event.target.style.background = "";
                     }
                       }, false);

            document.addEventListener("drop", function( event ) {
  // prevent default action (open as link for some elements)
                  event.preventDefault();
      // move dragged elem to the selected drop target
              if ( event.target.className == "droppable" ) {
                  dragDrop.parentNode.removeChild( dragDrop );
                  event.target.appendChild( dragDrop );
                  dragDrop.classList.remove('drag');
                  dragDrop.classList.add('droppable');
              }
            }, false);

    }
};



Team.prototype.createList = function(list) {
    list.forEach(function(item){
      this.addItem(item);
    }.bind(this));
}; //-- acknowledging that accordian is an object
Team.prototype.sortList = function(flexClass) {
    this.ul.style.flexDirection = flexClass;
};
