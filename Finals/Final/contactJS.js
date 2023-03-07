function validateForm(){
  var FirstName = document.getElementById("FirstName").value;
  var LastName = document.getElementById("LastName").value;
  var Email = document.getElementById("Email").value;
  var Comments = document.getElementById("Comments").value;

  const errorMessages = [];
  for (let i = 0; i < 4; i++) {
    errorMessages.push(true);
   }
  var letters = /^[a-zA-Z\s]+$/;                
  
  if (FirstName === "" || FirstName === "null") {
    document.getElementById("e1").innerHTML = "First name is required.";
  } 
  else {
    if(letters.test(FirstName) === false || FirstName.length <= 1){
      document.getElementById("e1").innerHTML = "Please enter a valid first name.";
    } 
    else {
      document.getElementById("e1").innerHTML = "";
      errorMessages[0] = false;
    }
  }
  
  if (LastName === "" || LastName === "null") {
    document.getElementById("e2").innerHTML = "Last name is required.";
  } 
  else {
    if(letters.test(LastName) === false || LastName.length <= 1) {
      document.getElementById("e2").innerHTML = "Please enter a valid last name.";
    } 
    else {
      document.getElementById("e2").innerHTML = "";
      errorMessages[1] = false;
    }
  }
  
  if (Email === "" || Email === "null") {
    document.getElementById("e3").innerHTML = "Email is required.";
  } 
  else {
    var atpos = Email.indexOf("@");
    var dotpos = Email.lastIndexOf(".");             
    if(atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= Email.length) {
      document.getElementById("e3").innerHTML = "Please enter a valid Email.";
    } 
    else {
      document.getElementById("e3").innerHTML = "";
      errorMessages[2] = false;
    }
  }
  if (Comments === "" || Comments === "null") {
    document.getElementById("e4").innerHTML = "Feedback is required.";
  }
  else {
    document.getElementById("e4").innerHTML = "";
    errorMessages[3] = false;
  }
 
  for (let i = 0; i < errorMessages.length; i++) {
    if(errorMessages[i] === true) {
       return false;
     }
  }
}
