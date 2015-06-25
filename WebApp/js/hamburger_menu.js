Element.prototype.Hamburger= function(){
  var hamburger = this;
  var btn = document.createElement('div');
  var container = document.getElementById('container');

  this.toggleNav = function(){
    if(container.style.left == '0px'){
      container.style.left ='320px';
    }
    else {
      container.style.left ==='0px';
    }

  };

  this.createButton = function(){
    btn.class.add('hamburger');
    btn.addEventListener('mousedown', hamburger.toggleNav);
    container.insertBefore(btn, document.getElementById('hamburger'));
  };

  this.init = function(){
    this.createButton();
  };

};
