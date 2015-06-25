Element.prototype.Nav = function(){

  var nav = this,
      btn = document.createElement('div'),
      container = document.getElementById('container');

  this.toggleNav = function(){
    if(container.style.left === "0px"){
      container.style.left = "320px";
    }
    else{
      container.style.left = "0px";
    }
  };

  this.createButton = function(){

    btn.classList.add('hamburger');

    btn.addEventListener('mousedown',nav.toggleNav);

    container.appendChild(btn);

  };

  this.init = function(){

    nav.createButton();

  };

  this.init();
};
