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
    listItem.innerHTML = "<div class='droppable'>"+item.content+"</div>";
    //listItem.classList.add('droppable');
    this.ul.appendChild(listItem);
};


Team.prototype.create_candidates = function(candidates){
    var items = document.getElementById("people");
      for (var i = 0; i < candidates.length; i++ ) {
        var item = document.createElement('nav');

        item.innerHTML = "<div>"+"<img src='http://vvvvvv.club/"+candidates[i].avatar.image+"'> <br>@"+candidates[i].firstName+"</div>";
        item.id = 'dragged';
        item.className = 'drag';
        item.setAttribute('draggable', 'true');
        item.setAttribute('ondragstart', 'event.dataTransfer.setData("text/plain",null)');
        items.appendChild(item);

          var dragDrop = document.getElementById('dragged');

            dragDrop.addEventListener("dragstart", function( ev ){
              dragged = event.target;
                        event.target.style.opacity = .5;
                        });

            dragDrop.addEventListener("dragend", function( ev ) {
                        event.target.style.opacity = "";
                        }, false);

            document.addEventListener("dragover", function( ev ) {
                        event.preventDefault();
                        }, false);

            document.addEventListener("dragenter", function( ev ) {
                if ( event.target.className == "droppable" ) {
                     event.target.style.background = "";
                  }
                    }, false);

            document.addEventListener("dragleave", function( ev ) {
                if ( event.target.className == "droppable" ) {
                     event.target.style.background = "";
                     }
                       }, false);

            document.addEventListener("drop", function( ev ) {
                  event.preventDefault();
              if ( event.target.className == "droppable" ) {
                  dragDrop.parentNode.removeChild( dragDrop );
                  console.log(event.target)
                  dragDrop.classList.remove('drag');
                  dragDrop.classList.add('droppable');
                  var image = dragDrop.querySelector('img');
                  event.target.appendChild( image );
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
