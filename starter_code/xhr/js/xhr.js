var xhrHandler = function(){

   // includes a request function that takes 3 arguments
   // path of the request
   // the HTML verb which is the action we want to take (GET, POST)
   // options is a Javascript Object with key value pairs

   this.request = function(path,verb,options){

    // returns a promise
    return new Promise(function(resolve,reject){
      // creates a new request Object, params and boolean for if there are params.
      var xhr = new XMLHttpRequest();
      var params = {};
      var hasParams = false;

      // opens the request and sets headers
      xhr.open(verb, "http://vvvvvv.club/api/"+path, true);
      xhr.setRequestHeader("Content-Type", "application/json");

      // handle changes in the response.
      xhr.onreadystatechange = function() {
        // if the response is ready
        if (xhr.readyState == 4) {
          // if the response returns 401 Unauthorized
          if(xhr.status === 401){
            resp = xhr.responseText;
            resolve(resp);
          }
          // if the response returns 200 OK
          if (xhr.status === 200) {
            try{
              // try to parse the response as JSON
              var resp = JSON.parse(xhr.responseText);
            }
            catch(error){
              // if the parse fails, print the response
              resp = xhr.responseText;
            }
            // resolve the promise with the response (will be inserted in the then)
            resolve(resp);
          }
          else{
             // resolve the promise with the error (will be inserted in the then)
            resolve(xhr);
          }
        }
      };

      // handle network errors
      xhr.onerror = function() {
        reject(Error("Network Error"));
      };

      // construct the JS object.
      if(options !== undefined && options.constructor.name === 'Object'){
        params = {};
        for (var property in options) {
          if (options.hasOwnProperty(property)) {
            params[property] = options[property];
            hasParams = true;
          }
        }
      }
      // if there is an object, pass it with the request
      if(hasParams === true){
        xhr.send(JSON.stringify(params));
    } // otherwise, just send the request
      else{
        xhr.send();
      }

    });

  };

};


window.request = xhrHandler.request;
