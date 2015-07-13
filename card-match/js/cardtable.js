Element.prototype.CardTable = function(){
  var cardtable = this;
  var table = document.getElementById('cardtable');
  var card = document.createElement('div');
  var ul = document.getElementById('cards');

  //create and Style card table with cards
  this.createGrid = function(){
    //create Array of images
    var cardImage = [];
    for(var i=0; i<8;i++){
      cardImage[i]={
        src:"./img/bicycle-back.jpg"
      };
    }
    console.log(cardImage);
    //insert into HTML document
    for (x=0;x<cardImage.length; x++){
      var li = document.createElement('li');
      //creates and styles li for cards layout
      li.classList.add('card');
      var img = new Image();
      //card.className = 'hearts';
      img.src=cardImage[x].src;
      //img.className ="front";
      //implements array into li format
      li.appendChild(img);
      ul.appendChild(li);
      img.addEventListener('mousedown', cardtable.animate);
    };

  };

  //animate card on click
  this.animate = function(ev){

    //sets the image for the card being clicked on to the suits image

    ev.target.classList.add('flip');
    ev.target.style.backgroundColor = 'white';
  //  ev.target.classList.add('back');

    ev.target.src = "./img/french-suits.svg";



  };
  //init
  this.init=function(){
    cardtable.createGrid();
  };
  this.init();
};
