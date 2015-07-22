Element.prototype.hasClass = function(className) {
   return this.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(this.className);
};

Element.prototype.CardTable = function(){
  var cardtable = this;
  var table = document.getElementById('cardtable');
  var card = document.createElement('div');
  var ul = document.getElementById('cards');

  //create and Style card table with cards
  this.createGrid = function(){
    //create Array of images
    var cardImage = [];
    for(var i=0; i<12;i++){
      cardImage[i]={
        src:"./img/bicycle-back.jpg",
        suit:"diamond"
      };
    }
    console.log(cardImage);

    //create suit variable to randomize and shuffle later
    var suits = ['diamond','heart','spade','club'];
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
      // Set random var, depending value set suit
     var suit = suits[Math.floor(Math.random()*suits.length)];
     img.classList.add(suit); // set suits

     //eventListeners
      img.addEventListener('mousedown', cardtable.animate);
      img.addEventListener('mousedown', cardtable.checkMatch);
    };

  };
  this.checkMatch = function(ev) {
  var cardsFlipped = document.getElementsByClassName("flip");
  // If two cards are flipped, check for match
  if (cardsFlipped.length == 2) {
    // console.log(cardsFlipped);//
    // Check if cards match
    if (cardsFlipped[0].hasClass('diamond') && cardsFlipped[1].hasClass('diamond')) {
      console.log("the cards MATCH");
    }
    else {
      console.log("the cards DO NOT MATCH");
      // Reset cards and remove "flip" class
    }
  }
  else {
    return;
  }
};



  //animate card on click
  this.animate = function(ev){

    //sets the image for the card being clicked on to the suits image
ev.target.classList.toggle('flip');
ev.target.style.backgroundColor = 'white';
//  ev.target.classList.add('back');

// Check element's class for suit, then assign image based on suit
if (ev.target.hasClass("heart")) {
  ev.target.src = "./img/bicycle-back.jpg";
} else {
  ev.target.src = "./img/french-suits.svg";
}

  };
  //init
  this.init=function(){
    cardtable.createGrid();
  };
  this.init();
};
