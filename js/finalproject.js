//Website pictures display function on Portfolio//

var webImages =["images/webdesign/advantage.jpg", "images/webdesign/autopro.jpg", "images/webdesign/boulanger.jpg", "images/webdesign/hayco.jpg"]

function showimage(imageSrc) {
debugger;
  var expandImg = document.getElementById("expandedImg");
  var imgText = document.getElementById("imgtext");
  expandImg.src = imageSrc;
 expandImg.parentElement.style.display = "block";
}

//Quote Calculator//

function calculateQuote(){
    var nbHours = parseInt(document.getElementById("hours").value);
    if (nbHours<0){
        alert('I need at least 1 hour to help you! :)');
        return;
    }
    if (nbHours>100) {
        alert('Wow! We are talking business now! For more than 100 hours, please contact me in order to discuss about this project :) ');
        return;
    }
    var calculate= nbHours * 25;
       
       document.getElementById("total").value="$ "+calculate;    
}

//Insure the phone number submited in the eform contains only numbers, and not letters//
function phoneNumberEntered(phoneInput){
    // keep only numbers and '-' character
    // everything else is replaced by an empty string
    // Google helped me on that one :)
    phoneInput.value=phoneInput.value.replace(/[^1-9\-\(\)+]/g,"");
}


//Pop up an alert that says "Thanks for your submission" once the form is properly fillet out.//

function submit(){
    alert ("Thanks for your submission");
}