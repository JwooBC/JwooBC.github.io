function validateForm(){
  var FirstName = document.getElementById("FirstName").value;
  var LastName = document.getElementById("LastName").value;
  var Email = document.getElementById("Email").value;
  var Phone = document.getElementById("Phone").value;  
  var Username = document.getElementById("Username").value;
  var Password = document.getElementById("Password").value;
  var Address = document.getElementById("Address").value;
  var City = document.getElementById("City").value;
  var State = document.getElementById("State").value;
  var Country = document.getElementById("Country").value;
  var Zipcode = document.getElementById("Zipcode").value;  
	
  const errorMessages = [];
  for (let i = 0; i < 11; i++) {
    errorMessages.push(true);
   }
  var letters = /^[a-zA-Z\s]+$/;                
  var numbers = /^[0-9]+$/;               
  var chars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  
  if (FirstName === "" || FirstName === "null") {
    document.getElementById("e1").innerHTML = "First name is required.";
  } 
  else {
    if(letters.test(FirstName) === false || FirstName.length > 20 ){
      document.getElementById("e1").innerHTML = "Please enter a valid first name. Maximum 20 characters.";
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
    if(letters.test(LastName) === false || LastName.length > 50) {
      document.getElementById("e2").innerHTML = "Please enter a valid last name. Maximum 50 characters. ";
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

  if (Phone === "" || Phone === "null") {
    document.getElementById("e4").innerHTML = "Phone number is required.";
  } 
  else {
    if(numbers.test(Phone) === false || Phone.length > 15) {
      document.getElementById("e4").innerHTML = "Please enter a valid phone number. Maximum 15 digits. ";
    } 
    else {
      Phone = Phone.substring(0, 3) + "-" + Phone.substring(4, 7) + "-" + Phone.substring(7, Phone.length);
      document.getElementById("Phone").value = Phone;
      document.getElementById("e4").innerHTML = "";
      errorMessages[3] = false;
    }
  }

  if (Username === "" || Username === "null") {
    document.getElementById("e5").innerHTML = "Username is required";
  } 
  else {             
    if(Username.length > 12) {
      document.getElementById("e5").innerHTML = "Username cannot exceed 12 characters.";
    }
    else {
      document.getElementById("e5").innerHTML = "";
      errorMessages[4] = false;
    }
  }

  if (Password === "" || Password === "null") {
    document.getElementById("e6").innerHTML = "Password is required.";
  } 
  else {             
    if(Password.length > 7 || /[A-Z]/.test(Password) === false || /[a-z]/.test(Password) === false ||
       /[0-9]/.test(Password) === false || chars.test(Password) === false) {
      document.getElementById("e6").innerHTML = "The password must:" + 
        '<br>' +  "Not exceed 7 characters" +
        '<br>' +  "Contain an uppercase letter" +
        '<br>' +  "Contain a lowercase letter" +
        '<br>' +  "Contain a number" +
        '<br>' +  "Contain a symbol";
    } 
    else {
      document.getElementById("e6").innerHTML = "";
      errorMessages[5] = false;
    }
  }

  if (Address === "" || Address === "null") {
    document.getElementById("e7").innerHTML = "Address is required.";
  } 
  else {             
    document.getElementById("e7").innerHTML = "";
    errorMessages[6] = false;
  }

  if (City === "" || City === "null") {
    document.getElementById("e8").innerHTML = "City is required.";
  }
  else {             
    document.getElementById("e8").innerHTML = "";
    errorMessages[7] = false;
  }

  if (State === "null") {
    document.getElementById("e9").innerHTML = "State is required.";
  } 
  else {             
    document.getElementById("e9").innerHTML = "";
    errorMessages[8] = false;
  }
  
  if (Country === "null") {
    document.getElementById("e10").innerHTML = "Country is required.";
  } 
  else {             
    document.getElementById("e10").innerHTML = "";
    errorMessages[9] = false;
  }
  
  if ((Country === "USA") && (Zipcode === "" || Zipcode === "null" || Zipcode.length != 5 || numbers.test(Zipcode) === false)) {
    document.getElementById("e11").innerHTML = "Zip code is required. The zip code cannot exceed 5 digits.";
  }
  else {  
    document.getElementById("e11").innerHTML = "";
    errorMessages[10] = false;
  }
 
  for (let i = 0; i < errorMessages.length; i++) {
    if(errorMessages[i] === true) {
       return false;
     }
  }
}
var element = document.getElementById('Zipcodep');

function selected(selection) {
  if (selection === "USA") element.style.display = 'inline';
  else element.style.display = 'none';
}
