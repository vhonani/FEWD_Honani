Element.prototype.Search = function(){
  var search =this;

  //when user focus' on input , clear it's contents
  var search_bar = document.getElementById('search_bar');
  var gallery = document.getElementById('gallery');

this.getFilter = function(){
  console.log("this is the searchPhotos");
  var search_term = search_bar.children[0].value;
  console.log(search_term);

};


  //after user presses enter/return, filter the gallery <li> using tags from the JSON model.

  //gallery.getFiltered('li');

  //show hide based on the filter using data tags
  this.init = function(){
    search_bar.addEventListener('keyup', function(){
      search.getFilter();
    });
  };
this.init();

};
