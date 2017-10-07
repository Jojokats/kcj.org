// Script 8.1 - utilities.js
// This script defines an object that has some utilitarian functions.

var U = {
    // Function for setting the text of an element:
    setText: function(id, message) {
        'use strict';
        if ( (typeof id == 'string')
        && (typeof message == 'string') ) {

            // Get a reference to the element:
            var output = this.$(id);
            if (!output) return false;

            // Set the text
            if (output.textContent !== undefined) {
                output.textContent = message;
            } else {
                output.innerText = message;
            }
            return true;
        } // End of main IF.
    }, // End of setText() function.
    createRequestObject: function() {
      var request;
      if (window.XMLHttpRequest) {
    		request = new XMLHttpRequest();
      } else {
    		request = new ActiveXObject("Microsoft.XMLHTTP");
      }
      return request;
    }
}; // End of U declaration.
