// Define prototypical Slider function
Element.prototype.Slider = function(){
  var slider = this;
  var wrapper = slider.children[0];
  var slides = wrapper.children;
  var position = 0;
  var width = window.innerWidth;
  //creating elements below
  var leftButton = document.createElement('div');
  var rightButton = document.createElement('div');

  //using .this here

  this.createButtons = function(){
    //adds the variables and classes "left" and "right" to the element 'div'
    leftButton.classList.add('left');
    rightButton.classList.add('right');

    //inserts leftButton and rightButton to DOM using a method in the Element prototype
    slider.appendChild(leftButton);
    slider.appendChild(rightButton);

    //adding EventListeners to move the images left and right
    rightButton.addEventListener('mousedown', function(){
      if(position > (width * (slides.length - 1))*-1){
      position = position - width;
      wrapper.style.marginLeft = position + 'px';
    }


    });

    leftButton.addEventListener('mousedown', function(){
      if(position < 0){
      position = position + width;
      wrapper.style.marginLeft = position + 'px';
    }

    });
  };

  this.resize = function(){
    width = window.innerWidth;
    wrapper.style.width = slides.length * width + 'px';
    wrapper.style.height = '100%';

    for (var i =0; i<slides.length; i++){
      slides[i].style.width = width + 'px';
    }



  };

  this.init = function(){
    this.createButtons();
    this.resize();

    //using object - Window - displays entire view
    window.addEventListener('resize', slider.resize);
  };

  this.init();

};
/* end Slider */
