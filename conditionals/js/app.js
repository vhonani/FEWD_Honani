var compare = function(){

  //selects element and gets the value as a string
  var a = document.getElementById('a').value;
  a = parseFloat(a);
  //note: parseInt allows to compare numbers but Float allows with decimal points
  var b = document.getElementById('b').value;
  b = parseFloat(b);

  var comparison; //allows to use this to reference a comparison later on

  if(a > b){
    comparison = ">";

  }
  else if (a < b){
    comparison = "<";

  }
  else if (a === b){
    comparison = "=";
  }

  document.getElementById('comparison').innerHTML = comparison;

};

var compareElement = document.getElementById('submit');
compareElement.addEventListener('click', compare);
