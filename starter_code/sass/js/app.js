var App = function(elem){

  this.elem = elem;

};

App.prototype = {
  init : function(){

    //console.log('App online.', this.elem);

  }
};

var app = new App(document.getElementById('container'));
app.init();
