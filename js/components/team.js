var xhr = new xhrHandler();

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
      this.addForm.classList.add('open');
      this.addForm.querySelectorAll('input')[0].focus();
  }.bind(this));

  this.addForm.querySelectorAll('input')[0].addEventListener('keydown',function(ev){
    if(ev.keyCode === 13) {
      var item = {
        content: this.addForm.querySelectorAll('input')[0].value
   };
   this.addItem(item);
   this.addForm.querySelectorAll('input')[0].value = '';
   this.addForm.classList.remove('open');
   this.addForm.classList.add('close');
    }
  }.bind(this));

  document.getElementById('TeamMenu').appendChild(this.elem)
  document.getElementById('TeamMenu').appendChild(this.team)

};

Team.prototype.addItem = function(item) {
    var listItem = document.createElement('li');
<<<<<<< HEAD
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
=======
    listItem.innerHTML = "<div class='droppable'>"+item.content+"</div>";
    //listItem.classList.add('droppable');
    this.ul.appendChild(listItem);
};

>>>>>>> refs/remotes/origin/master

Team.prototype.create_candidates = function(candidates){
    var items = document.getElementById("people");
      candidates.forEach(function(val,i){
        var item = document.createElement("nav");
        item.innerHTML = "<div>"+"<img src='http://vvvvvv.club/"+val.avatar.image+"'> <br>@"+val.firstName+"</div>";
        // item.id = 'dragged';
        item.className = 'drag';
        item.draggable = true;


          // var item = document.getElementById('dragged');
            item.addEventListener("dragstart", function(ev){
              dragged = event.target;
                        event.target.style.opacity = .5;
              ev.dataTransfer.setData("text/plain",item);
            });

            item.addEventListener("dragend", function( event ) {
                    event.preventDefault();
                        event.target.style.opacity = "";
                        }, false);

          item.addEventListener("dragover", function( event ) {
                        event.preventDefault();
                        console.log(event.target);
                event.dataTransfer.dropEffect = "move";
                }, false);

          item.addEventListener("dragenter", function( event ) {
                event.preventDefault();
                if ( event.target.className == "droppable" ) {
                     event.target.style.background = "";
                  }
                    }, false);

          item.addEventListener("dragleave", function( event ) {
                if ( event.target.className == "droppable" ) {
                     event.target.style.background = "";
                     }
                       }, false);

            item.addEventListener("drop", function( event ) {
                  event.preventDefault();
                  console.log(item)
                  console.log(event.target)
              if ( event.target.className === "droppable" ) {
                  // item.parentNode.removeChild( item );
                  // item.classList.remove('drag');
                  // item.classList.add('droppable');
                var image = item.querySelector('img');
                  event.target.appendChild( image );
              }
            }, false);
      items.appendChild(item);
    });
};



Team.prototype.createList = function(list) {
    list.forEach(function(item){
      this.addItem(item);
    }.bind(this));
}; //-- acknowledging that accordian is an object
Team.prototype.sortList = function(flexClass) {
    this.ul.style.flexDirection = flexClass;
};
