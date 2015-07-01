Element.prototype.Nav = function(){

  var nav = this,
      navItems = nav.children[0].children,
      btn = document.createElement('div'),
      container = document.getElementById('container')
      section=document.getElementsByTagName('section');

      console.log(navItems);
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

  // hide all the sections that aren't the section showing
  this.hideSection = function(){
    for(var i = 0; i<section.length; i++){
      section[i].style.opacity = '0';
      section[i].style.zIndex = '0';
      section[i].style.display ='none';
    }
  };
  //show a section
 this.showSection = function(id){
   this.hideSection();
   console.log(document.getElementById(id));
  document.getElementById(id).style.display = 'block';
  document.getElementById(id).style.opacity = '1.0';
  document.getElementById(id).style.zIndex = '50';
   };

  this.init = function(){

    nav.createButton();
    //loop through all <li> and add EventListener
    for(var i=0; i<navItems.length; i++){
      navItems[i].addEventListener('click', function(ev){
        var id = ev.target.dataset.section;
        nav.showSection(id);
        nav.toggleNav();

      });
    }

  };

  this.init();
};
