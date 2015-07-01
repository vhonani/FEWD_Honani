//Define prototypical Gallery function
Element.prototype.Gallery = function(){
  var gallery = this;
  var ul = gallery.children[0];
  var photos = new Object();
  // Define global variables
  var container = document.getElementById('container');

  this.singlePhoto = function(ev){
    //create a section div with class single-photo
    //allow the picture to appear on top
    //user clicks 'x' - section closes and returns previous layout

    //section must appear on top of the other one
    console.log(ev.target.style.backgroundImage);
    var section = document.createElement('section');
    section.classList.add('single-photo');

    section.innerHTML = ev.target.innerHTML;
    section.style.backgroundImage = ev.target.style.backgroundImage;
    section.style.fontFamily = 'Indie Flower,cursive';
    //section.style.backgroundRepeat ='no-repeat';
    //section.style.backgroundSize = '400 x 400';
    //section.style.backgroundPosition = 'center center';
    //duh
    var p = document.createElement('p');
    p.innerHTML = ev.target.dataset.description;



    var closeButton = document.createElement('div');
    closeButton.classList.add('close');

    closeButton.addEventListener('click', function(){
      section.style.display = 'none';
    });
    section.children[0].appendChild(p);
    section.appendChild(closeButton);
    container.appendChild(section);

  };

  this.layoutPhotos = function(){
      // add logic for each photo in here

      photos.forEach(function(photo,index){

        var li = document.createElement('li');

        li.style.backgroundImage ='url("'+photo.image_url+'")';

        li.style.backgroundSize='cover';

        li.innerHTML = '<div class="meta"><h5>'+photo.name+'</h5><h6>'+photo.user.fullname+'</h6></div><div class="stats"><div>'+photo.rating+'</div></div></div>';

        li.dataset.description = photo.description;
        li.addEventListener('mousedown', gallery.singlePhoto);
        ul.appendChild(li);
      });
  };

  this.connect = function(){
      var xhr = new XMLHttpRequest();
      xhr.open("GET", "./models/popular-photos.json", true);
      xhr.setRequestHeader("Content-Type", "application/json");

      xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
          var response = JSON.parse(xhr.responseText);
          photos = response.photos;
          gallery.layoutPhotos();



          // JSON.parse does not evaluate the attacker's scripts via xhr.responseText.

        }
      }
      xhr.send();
  };

  this.init = function(){

    this.connect();

  };


  this.init(); // do tasks on initialization.


};
/* end Gallery */
