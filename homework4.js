/*
Name: Hafsa Ozmeral
    Date Created: 12/1/2024
    Date Last Updated: 12/4/24
    Assigment: Homework 4
    Purpose: Homework 4 JS File
*/

//dynamic date js code
const d = new Date();
let text = d.toLocaleDateString();
document.getElementById("today").innerHTML = text;

//range slider js code
let slider = document.getElementById("range")
    let output = document.getElementById("rangeslider")
    output.innerHTML = slider.value;

    slider.oninput = function () {output.innerHTML = this.value;};

//first name validation code
function validateFname()
{
    fname = document.getElementById("fname").value.trim();
    var namePattern = /^[a-zA-Z'-]+$/;
    
    //checks if first name field is empty
    if (fname =="") {
        document.getElementById("fname-error").innerHTML = "First name field cannot be left empty.";
        return false;
    } else if (!fname != "") {
        if (!fname.match(namePattern))
        { 
        //checks if name matches pattern
        document.getElementById("fname-error").innerHTML = "Letters, apostrophes, and dashes only.";
        return false;
        }
    } else if (fname.length <2) 
    { //checks if name is at least one character
        document.getElementById("fname-error").innerHTML = "First name cannot be less than 2 characters.";
        return false;
    }else if (fname.length > 30) //checks if name is less than 30 characters
    {
        document.getElementById("fname-error").innerHTML = "First name cannot be more than 30 characters";
        return false;
    } else {
        document.getElementById("fname-error").innerHTML = "";
        return true;
    }

}

//middle initial validation code
function validateMid()
{
   let mid = document.getElementById("mid").value;
   const namePattern = /^[A-Z]$/;

   //convert middle initial to uppercase
   mid = mid.toUpperCase();
   document.getElementById("mid").value= mid;

   //checks that middle initial is one uppercase letter
   if(!mid.match(namePattern)){
    document.getElementById("mid-error").innerHTML = "Middle initial must be a single uppercase letter";
    return false;
   } else {
    document.getElementById("mid-error").innerHTML ="";
    return true;
   }

}


//last name validation code
function validateLname()
{
    lname = document.getElementById("lname").value.trim();
    var namePattern = /^[a-zA-Z'-]+$/;
    
    //checks if last name field is empty
    if (lname =="") {
        document.getElementById("lname-error").innerHTML = "Last name field cannot be left empty.";
        return false;
    } else if (!lname != "") {
        if (!lname.match(namePattern))
        { 
        //checks if name matches pattern
        document.getElementById("lname-error").innerHTML = "Letters, apostrophes, and dashes only.";
        return false;
        }
    } else if (lname.length <2) 
    { //checks if name is at least one character
        document.getElementById("lname-error").innerHTML = "Last name cannot be less than 2 characters.";
        return false;
    }else if (lname.length > 30) //checks if name is less than 30 characters
    {
        document.getElementById("lname-error").innerHTML = "Last name cannot be more than 30 characters";
        return false;
    } else {
        document.getElementById("lname-error").innerHTML = "";
        return true;
    }

}


    
// dob validation code
function validateDob() {
    dob=document.getElementById("dob");
    let date= new Date(dob.value);
    let maxDate = new Date();
    maxDate.setFullYear(maxDate.getFullYear() - 120);


    if (date > new Date()) {
        document.getElementById("dob-error").innerHTML = "Date Cannot be in Future.";
        dob.value="";
        return false;

    } else if(date < new Date(maxDate)) {
        document.getElementById("dob-error").innerHTML = "Date Cannot be more than 120 years ago.";
        dob.value="";
        return false;
    } else {
        document.getElementById("dob-error").innerHTML = "";
        return true;
    }
}

// ssn validation code
function validateSsn() {
    const ssn = document.getElementById("ssn").value;
    // regex for ssn pattern
    const ssnR = /^[0-9]{3}-?[0-9]{2}-?[0-9]{4}$/;

    if (!ssnR.test(ssn)) {
        document.getElementById("ssn-error").innerHTML = "Please enter a valid Social Security Number.";
        return false;
        } else {
        document.getElementById ("ssn-error").innerHTML = "";
        return true;
        }
}
// address validation code
function validateAddress() {
    var ad1 = document.getElementById("address1").value;
    console.log(ad1);
    console.log(ad1.length);

    if (ad1.length < 2) {
        document.getElementById("address1-error").innerHTML = "Please enter your text on Address Line";
        return false;
    } else {
        document.getElementById("address1-error").innerHTML = "";
        return true;
    }

}

//city validation js code
function validateCity() 
{
    city = document.getElementById("city").value.trim();

    if (!city) {
        document.getElementById("city-error").innerHTML = "City cannot be left blank.";
        return false;
    } else {
        document.getElementById("city-error").innerHTML = "";
        return true;
    }
}

//zip code validation js code
function validateZipcode() {
    const zipInput = document.getElementById("zipcode");
    let zip = zipInput.value.replace(/[^\d-]/g,"")// removes any non-number and non-dash character

    if (!zip) {
        document.getElementById("zipcode-error").innerHTML = " Zip Code cannot be left blank";
        return false;
    }

    if (zip.length > 5) {
        zip = zip.slice(0,5); //removes digits after 5
    }  

    zipInput.value = zip;
    document.getElementById ("zipcode-error").innerHTML = "";
    return true; 
 }

 //email validation js code
 function validateEmail() {
    let email= document.getElementById ("email").value;
    var EmailR = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; //regex pattern thing for email

    if (email =="") {
    document.getElementById ("email-error").innerHTML = "Email cannot be empty.";
    return false;

    } else if (!email.match(EmailR)){
    document.getElementById ("email-error").innerHTML = "Please enter a valid email address." ;
    return false;

    } else {
    document.getElementById ("email-error").innerHTML = ""; 
    return true;
    }
 }

 //phone validation js code
 function validatePnum() {
    const phoneInput = document.getElementById("pnum");
    const phone = phoneInput.value.replace(/\D/g, ""); //removes all non number characters

    if (phone.length == 0) {
        document.getElementById("pnum-error").innerHTML = "Phone number cannot be left blank.";
        return false;
    }
    const formattedPhone = phone.slice(0-3) + "-" + phone.slice(3-6) + "-" + phone.slice(6-10);
    phoneInput.value = formattedPhone;
    document.getElementById("pnum-error").innerHTML = "";
    return true;
 }

 //username validation js code
 function validateUname() {
    uname = document.getElementById("uname").value;

    // converts username to lower case
    uname = uname.toLowerCase();

    //display username in lowercase
    document.getElementById("uname").value = uname;

    if (uname.length == 0 ) {
        document.getElementById("uname-error").innerHTML = "Username field cannot be empty.";
        return false;
    }
    //checks username to not start with a number
    if (!isNaN(uname.charAt(0))) {
        document.getElementById("uname-error").innerHTML = "Username cannot start with a number";
        return false;
    }

    //checks username is only consisted of letters, numbers, or underscores
    let regex = /^[a-zA-Z0-9_]+$/;
    if (!regex.test(uname)) {
        document.getElementById("uname-error").innerHTML=" Username only contains letters, numbers, and underscores.";
        return false;
    } else if (uname.length < 5) {
        document.getElementById("uname-error").innerHTML = "Username must be a t least 5 characters.";
        return false;
    }
        
    //checks that username does not have more than 30 characters
       else if(uname.length > 30) {
        document.getElementById("uname-error").innerHTML = "Username cannot exceed 30 characters.";
        return false;
    }   else { //if all the above checks then username is valid
        document.getElementById("uname-error").innerHTML = "";
        return true;
    }

 }

 //password validation js code
 function validatePass() {
    const pass = document.getElementById("pass").value;
    const uname = document.getElementById("uname").value;

    //sets up and initializes array
    const errorMessage = [];

    //check for lowercase letters
    if (!pass.match(/[a-z]/)){
        errorMessage.push("Enter at least one lowercase letter.");
    }
    //checks for uppercase letters
    if (!pass.match(/[A-Z]/)){
        errorMessage.push("Enter at least one uppercase letter.");
    }

    //checks for numbers
    if (!pass.match(/[0-9]/)){
        errorMessage.push("Enter at least one number.");
    }

    //checks for special characters
    if (!pass.match(/[!@#\$%\^&*\-_\.\+\(\)]/)) {
        errorMessage.push("Enter at least one special character.");
    }

    //checks for username so its not same as password
    if (pass == uname || pass.includes(uname)) {
        errorMessage.push("Password cannot contain username.");
    }

    //displayes error messages if there is any errors
    const errorContainer = document.querySelector(".pass-message");
    errorContainer.innerHTML = errorMessage
    .map((message) => `<span>${message}</span><br/>`)
    .join("");
 }

 //confirm password validation js code
 function confirmPass() {
    pass1 = document.getElementById("pass").value;
    pass2 = document.getElementById("pass_conf").value;

    if(pass1 != pass2) {
        document.getElementById("pass2-error").innerHTML = "Passwords do not match.";
        return false;
    } else {
        document.getElementById("pass2-error").innerHTML = "Passwords Match.";
        return true;
    }
 }

 //re-display all the user input back to user-- review button
 function reviewInput() {
    var formcontent = document.getElementById("signup");
    var formoutput= "";
    var i;
    formoutput = "<table class='output'><th colspan='3'>Your Information:</th>";
    for (i = 0; i < formcontent.length; i++) {
        if(formcontent.elements[i].value !="") {
           datatype = formcontent.elements[i].type;
            
            switch (datatype) {
                case "checkbox":
                    if(formcontent.elements[i].checked) {
                        formoutput = formoutput + "<tr><td align='right'>" + formcontent.elements[i].name + "</td>";
                        formoutput = formoutput + "<td class='outputdata'>&#x2713;</td></tr>";

                    }
                    break;
                case "radio":
                    if (formcontent.elements[i].checked) {
                        formoutput = formoutput + "<tr><td align='right'" + formcontent.elements[i].name + "</td>";
                        formoutput = "<td class='outputdata'>" + formcontent.elements[i].value + "</td></tr>";
                    }
                    break;
                case "button":
                case "submit":
                case "reset":
                    break;
                default:
                    formoutput = formoutput + "<tr><td align='right'>" + formcontent.elements[i].name + "</td>";
                    formoutput = formoutput + "<td class='outputdata'>" + formcontent.elements[i].value + "</td></tr>";


            }
        }
    }
    if (formoutput.length > 0 ) {
        formoutput = formoutput + "</table>";
        document.getElementById("showInput").innerHTML = formoutput;
    }
 }

 //remove user input
 function removeReview() {
    document.getElementById("showInput").innerHTML = "";
 }

 //shows alert box when needed js code
 function showAlert() {
    var alertBox = document.getElementById("alert-box");
    var closeAlert = document.getElementById("close-alert");

    alertBox.style.display = "block";
    closeAlert.onclick = function() {
        alertBox.style.display = "none";
    }
 }

 //validate everything on form
 function validateEverything() {
    let valid= true;

    if(!validateFname()) {
        valid = false;
    }
    if(!validateMid()) {
        valid = false;
    }
    if(!validateLname()) {
        valid = false;
    }
    if(!validateDob()) {
        valid = false;
    }
    if(!validateSsn()) {
        valid = false;
    }
    if(!validateAdress()) {
        valid = false;
    }
    if(!validateCity()) {
        valid = false;
    }
    if(!validateZcode()) {
        valid = false;
    }
    if(!validateEmail()) {
        valid = false;
    }
    if(!validatePnum()) {
        valid = false;
    }
    if(!validateUname()) {
        valid = false;
    }
    if(!validatePass()) {
        valid = false;
    }
    if(!confirmPass()) {
        valid = false;
    }
    if (valid) {
    document.getElementById("submit").disabled = false;
    } else {
        showAlert();
    }
}
//cookie for remembering info input form on form//

function setCookie(name, cvalue, expiryDays) {
    const day = new Date();
    day.setTime(day.getTime() + (expiryDays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + day.toUTCString();
    document.cookie = name + "=" + cvalue + ";" + expires + ";path=/";
}

// Function to get the value of a cookie by its name
function getCookie(name) {
    const cookieName = name + "=";
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();
        if (cookie.startsWith(cookieName)) {
            return cookie.substring(cookieName.length);
        }
    }
    return ""; 
}


const inputs = [
    { id: "fname", cookieName: "firstName" },
    { id: "mid", cookieName: "middleInitial" },
    { id: "lname", cookieName: "lastName" },
    { id: "dob", cookieName: "dob" },
    { id: "ssn", cookieName: "ssn" },
    { id: "address1", cookieName: "address1" },
    { id: "city", cookieName: "city" },
    { id: "zipcode", cookieName: "zipcode" },
    { id: "email", cookieName: "email" },
    { id: "pnum", cookieName: "pnum" },
    { id: "uname", cookieName: "userName" },
];


inputs.forEach(function (input) {
    const inputElement = document.getElementById(input.id);

    if (!inputElement) return; 

  
    const cookieValue = getCookie(input.cookieName);
    if (cookieValue !== "") {
        inputElement.value = cookieValue;
    }

    
    inputElement.addEventListener("input", function () {
        setCookie(input.cookieName, inputElement.value, 30);
    });
});

// Greet the user with their name if the cookie is set
const firstName = getCookie("firstName");
if (firstName !== "") {
    document.getElementById("welcome1").innerHTML = "Welcome Back, " + firstName + "!<br/>";
    document.getElementById("welcome2").innerHTML =
        "<a href='#' id='new-user'>Not " + firstName + "? Click here to start a new form.</a>";

    
    document.getElementById("new-user").addEventListener("click", function () {
        inputs.forEach(function (input) {
            setCookie(input.cookieName, "", -1); 
        });
        location.reload();
    });
}
