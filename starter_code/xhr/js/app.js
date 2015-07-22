// show the login form
var showLogin = function(){
  document.getElementById('login-form').style.display='block';
  document.getElementById('signup-form').style.display='none';
  document.getElementById('welcome').style.display='none';
  document.getElementById('logout').style.display='none';
  if(document.body.classList.contains('welcome-page')){
    document.body.classList.remove('welcome-page');
  }
};

// show the user list
var showHome = function(){
  document.getElementById('login-form').style.display='none';
  document.getElementById('signup-form').style.display='none';
  document.getElementById('welcome').style.display='block';
  document.getElementById('logout').style.display='block';
  document.body.classList.toggle('welcome-page');
  document.getElementById('bg').style.display='none';
  getUsers();
};

// show the signup form
var showSignup = function(){
  document.getElementById('login-form').style.display='none';
  document.getElementById('signup-form').style.display='block';
  document.getElementById('welcome').style.display='none';
  document.getElementById('logout').style.display='none';
  if(document.body.classList.contains('welcome-page')){
    document.body.classList.remove('welcome-page');
  }
};

// fetch all the users and create cards for them.
var getUsers = function(){
    var container = document.getElementById('welcome');
    // start xhr request for users
      res.forEach(function(card){
          var div = document.createElement('div');
          div.classList.add('card');
          var img = new Image();
          img.src = 'http://vvvvvv.club/'+card.avatar.image;
          img.classList.add('photo');
          div.appendChild(img);
          var h3 = document.createElement('h3');
          h3.innerHTML = card.firstName+' '+card.lastName;
          div.appendChild(h3);
          container.appendChild(div);
      });
    // end xhr
};

// signup form functionality
var signup = function(){

  var that = this;

  this.canvas = document.getElementById('sf-image-canvas');
  this.ctx = this.canvas.getContext('2d');
  this.currentUser = {};
  this.xhr = new xhrHandler();
  this.user = {};
  this.image;

  // creates a user
  this.createUser = function(user){
    console.log(user);
    // start xhr request for signup
      that.currentUser = res;
      showLogin();
    // end xhr

  };

  // displays the dropped in image into a canvas element.
  this.handleImage = function(e){

    var reader = new FileReader();
    reader.onload = function(event){
        var img = new Image();
        img.onload = function(){
            that.canvas.width = 240;
            that.canvas.height = 240;
            that.ctx.drawImage(img,0,0);
            setTimeout(function(){
                var data = that.canvas.toDataURL("image/jpeg", 0.8);
                that.image = data;
            },1000);
        }
        img.src = event.target.result;
    }
    reader.readAsDataURL(e.target.files[0]);

  };
  // initializes the sign up form
  this.init = function(){

    var imageLoader = document.getElementById('sf-image-loader');
    imageLoader.addEventListener('change', that.handleImage, false);

    var submit = document.getElementById('sf-submit');
    submit.addEventListener("mousedown",function(ev){

      ev.preventDefault();

      that.user.email = document.getElementById('sf-email').value,
      that.user.firstName = document.getElementById('sf-fname').value,
      that.user.lastName = document.getElementById('sf-lname').value,
      that.user.username = document.getElementById('sf-username').value,
      that.user.password = document.getElementById('sf-password').value;
      that.user.avatar = {
          image : that.image
      };

      // calls a method to create the user
      that.createUser(that.user);


      return false;
  },false);

  };

};

// actually calls the signup form function
var signupForm = document.getElementById('signup-form');
if(signupForm){
  signup.call(signupForm);
  signupForm.init();
}
document.getElementById('sf-link').addEventListener('mousedown',showLogin);



// all the functionality for the login form
var login = function(){

  var that = this;

  this.currentUser = {};

  this.init = function(){
    console.log('login form is online.');
    var that = this;


    var submit = document.getElementById('lf-submit');
    submit.addEventListener("mousedown",function(ev){
      var xhr = new xhrHandler();
      ev.preventDefault();

      var user = {
        username: document.getElementById('lf-username').value,
        password: document.getElementById('lf-password').value
      }

      // start xhr request for login
        console.log(res);
        if(res!=='Unauthorized'){
            showHome();
        }
        else{
            document.getElementById('lf-username').value = "";
            document.getElementById('lf-password').value = "";
        }

        document.getElementById('lf-username').value = "";
        document.getElementById('lf-password').value = "";
      // end xhr


      return false;
    });

  };

};

// actually calls the login form function
var loginForm = document.getElementById('login-form');
if(loginForm){
  login.call(loginForm);
  loginForm.init();
}
document.getElementById('lf-link').addEventListener('mousedown',showSignup);


// logout functionality
var logoutButton = document.getElementById('logout');
if(logoutButton){
  logoutButton.addEventListener("mousedown",function(ev){
      var xhr = new xhrHandler();
      document.getElementById('bg').style.display='block';
      // start xhr request for logout
        showLogin();
        // clean up cards
        var cards = document.querySelectorAll('.card');
        for(var i=0; i < cards.length; i++){
            cards[i].parentNode.removeChild(cards[i]);
        }
     // end xhr

    });
}

//prove we are not authorized here
var xhr = new xhrHandler();
// start xhr request for users
 // console.log(res);
// end xhr

// show the login screen by default
showLogin();
