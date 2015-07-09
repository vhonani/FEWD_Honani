Element.prototype.CardTable = function(){
  var cardtable = this;
  var table = document.getElementById('cardtable');
  var card = document.createElement('div');
  //create and Style card table with cards
  this.createGrid = function(){

    card.classList.add('card-style');
    cardtable.appendChild(card);
  };
  //animate card on click
  this.animate = function(){
    console.log("animate call");
  };
  //init
  this.init=function(){
    cardtable.createGrid();
    card.addEventListener('mousedown', function(){
      cardtable.animate();
    });
  };
  this.init();
};
