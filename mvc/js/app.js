var User = function(user){
  //Class used to create users and push user to JSON
  this.model = user;
};
var Controller = function(){
  //constructor function with empty array
  this.model = [];
};
//view Constructor with 3 elements
var View = function(elem, parent,className){
  //creats element in html
  var self = this;
  this.element = document.createElement(elem);
  this.element.classList.add(className);
  parent.appendChild(self.element);
};
//creates view into html using the new element created above
View.prototype = {
  setContent : function(content){
    this.element.innnerHTML = content;
  }
};

//prototype is equal to a function
//get JSON and parse and display
Controller.prototype ={
  createView: function(){

    this.model.forEach(function(user){
      var v = new View('div', document.body, 'user');
      //set content
      v.setContent('<h3>'+user.model.name+'</h3><h5>'+user.model.age+'</h5><h5>'+user.model.occupation+'</h5>');
    });
  },
  fetchUsers : function(){
     //cache a current value into a variable
     var self =this;
    //Get JSON
      var xhr = new XMLHttpRequest();
      xhr.open("GET", "./model/user.json");
      //sets Header and Type JSON
      xhr.setRequestHeader("Content-Type","application/json");
      //eventListener to hear response
      xhr.onreadystatechange = function(){
        if (xhr.readyState == 4){
          //parse JSON
          console.log(xhr.responseText);
          var model =JSON.parse(xhr.responseText);
          console.log(model);
          model.users.forEach(function(user){
            self.model.push(new User(user));

          });
          self.createView();
          //display JSON
           console.log(self);
        }
      };
      //send request
      xhr.send();
  }

};

var appController = new Controller();

appController.fetchUsers();
