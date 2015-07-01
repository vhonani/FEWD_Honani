Element.prototype.Contact = function(){

var contact = this,
    form = document.getElementById('c_form'),
    submit = document.getElementById('contact-submit'),
    wrapper = document.getElementById('form-wrapper');


this.send =function(){
  //collect form information
  var send_email = 'mailto:vhonani77@gmail.com?subject=Message from '+form.children[0].value+'&body='+form.children[3].value;
  window.location.href=send_email;


  //leave a feedback after form submit
  wrapper.innerHTML ='<div class="center"><h1>Thanks!</h1></div>';
};
this.init = function(){
  //add an EventListener on button to send form
  submit.addEventListener('click', function(ev){
    ev.preventDefault();
    contact.send();
  });

};
this.init();
};
