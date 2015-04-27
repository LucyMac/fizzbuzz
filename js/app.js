$(document).ready(function(){

  var fizzyBuzzy = function(max) {
          for (var i = 1; i <= max; i++) {
            if (i % 15 === 0) {
              var node = document.createElement("P");         
              var textnode = document.createTextNode("FizzyBuzzy");
              node.appendChild(textnode);
              document.getElementById("numbers").appendChild(node);
            }
            else if (i % 3 === 0) {
              var node = document.createElement("P");         
              var textnode = document.createTextNode("Fizzy");
              node.appendChild(textnode);
              document.getElementById("numbers").appendChild(node);
            }
            else if (i % 5 === 0) {
              var node = document.createElement("P");         
              var textnode = document.createTextNode("Buzzy");
              node.appendChild(textnode);
              document.getElementById("numbers").appendChild(node);
            }
            else {
              var node = document.createElement("P");         
              var textnode = document.createTextNode(i);
              node.appendChild(textnode);
              document.getElementById("numbers").appendChild(node);
            }
          }
        }

  document.getElementById("submit").onclick = function() {   //only execute the following if button is clicked
      var userNumber = document.getElementById("input").value; //retrieve user-inputted value
      if (userNumber <= 100) {   //if this value is <100 then run fizzyBuzzy() (declared above)
        fizzyBuzzy(userNumber);
      } 
   }
});
