let email =document.getElementById('email');
let password =document.getElementById('password');
let signupForm =document.getElementById('signupForm');
let nameError =document.getElementById('nameError');

let submitBtn =document.getElementById('submitBtn');
let emailError =document.getElementById('emailError');
let passwordError =document.getElementById('passwordError');


submitBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    if(validateName()&&validateEmail()&&validatePassword()){
        alert("form is submited sussfully");
    }
});


function validateName(){
let icon = nameError.previousElementSibling;
let fullname =document.getElementById('fullname').value;
if(fullname.length ==0){
    nameError.innerHTML="Name is required";
    icon.classList.remove("fa-check");
    icon.classList.add("fa-xmark");
    return false;
}
 if(!fullname.match(/^[A-Za-z]+(?: [A-Za-z]+)+$/)){
        nameError.innerHTML=" Enter your full name"
        icon.classList.remove("fa-check");
        icon.classList.add("fa-xmark");
        return false;
    }
    nameError.innerHTML="";
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-check");
return true;
}



function validateEmail(){
    let icon = emailError.previousElementSibling;
    let email =document.getElementById('email').value;
    if( email.length ==0){
    emailError.innerHTML="Email is required";
   icon.classList.remove("fa-check");
    icon.classList.add("fa-xmark");
    return false;
}
 if(!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)){
        emailError.innerHTML="Enter a valid email"
         icon.classList.remove("fa-check");
         icon.classList.add("fa-xmark");
        return false;
    }
    emailError.innerHTML="";
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-check");
return true;
}




function validatePassword() {
     let icon = passwordError.previousElementSibling;
    let password = document.getElementById("password").value;

    if (password.length == 0) {

        passwordError.innerHTML = "Password is required";
        icon.classList.remove("fa-check");
        icon.classList.add("fa-xmark");
        return false;
    }
    if (!password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)) {
        passwordError.innerHTML = "Enter strong password";
        icon.classList.remove("fa-check");
        icon.classList.add("fa-xmark");
        return false;
    }
    passwordError.innerHTML = "";
     icon.classList.remove("fa-xmark");
    icon.classList.add("fa-check");
    return true;

}