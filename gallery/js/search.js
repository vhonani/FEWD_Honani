Element.prototype.Search = function(){
  var search =this;

  //when user focus' on input , clear it's contents
  var search_bar = document.getElementById('search_bar');
  var gallery = document.getElementById('gallery');
  //gallery.children[0].children;

this.getSearch = function(){
  var search_term = search_bar.children[0].value;
  console.log(search_term);

};


  //after user presses enter/return, filter the gallery <li> using tags from the JSON model.

  //create a function using gallery.filter() to parse through the JSON model

  //show hide based on the filter using data tags
  this.init = function(){
    search.addEventListener('keypress', function(e){
      if(e.keyCode ===13){
        search.getSearch();
      }
    });


  };
this.init();

};
