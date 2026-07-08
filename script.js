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
        signupForm.reset();
         nameError.innerHTML = "";
        emailError.innerHTML = "";
        passwordError.innerHTML = "";
    document.querySelectorAll(".input-box i").forEach(icon => {
    icon.className = "fa-solid";
    icon.style.color = "transparent"; // to make icon Hidden
});
    }
});


function validateName(){
let icon = nameError.previousElementSibling.querySelector("i");
let fullname =document.getElementById('fullname').value;
if(fullname.length ==0){
    nameError.innerHTML="Name is required";
    icon.classList.remove("fa-check");
    icon.classList.add("fa-xmark");
    icon.style.color = "red";
    return false;
}
 if(!fullname.match(/^[A-Za-z]+(?: [A-Za-z]+)+$/)){
        nameError.innerHTML=" Enter your full name"
        icon.classList.remove("fa-check");
icon.classList.add("fa-xmark");
icon.style.color = "red";
        return false;
    }
    nameError.innerHTML="";
    icon.classList.remove("fa-xmark");
icon.classList.add("fa-check");
icon.style.color = "green";
return true;
}



function validateEmail(){
    let icon = emailError.previousElementSibling.querySelector("i");
    let email =document.getElementById('email').value;
    if( email.length ==0){
    emailError.innerHTML="Email is required";
   icon.classList.remove("fa-check");
    icon.classList.add("fa-xmark");
    icon.style.color = "red";
    return false;
}
 if(!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)){
        emailError.innerHTML="Enter a valid email"
          icon.classList.remove("fa-check");
icon.classList.add("fa-xmark");
icon.style.color = "red";
        return false;
    }
    emailError.innerHTML="";
   icon.classList.remove("fa-xmark");
icon.classList.add("fa-check");
icon.style.color = "green";
return true;
}




function validatePassword() {
     let icon = passwordError.previousElementSibling.querySelector("i");
    let password = document.getElementById("password").value;

    if (password.length == 0) {

        passwordError.innerHTML = "Password is required";
        icon.classList.remove("fa-check","fa-eye");
    icon.classList.add("fa-xmark");
    icon.style.color = "red";
    return false;
    }
    if (!password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)) {
        passwordError.innerHTML = "Enter strong password";
       icon.classList.remove("fa-check");
    icon.classList.add("fa-xmark");
    icon.style.color = "red";
        return false;
    }
    passwordError.innerHTML = "";
     icon.classList.remove("fa-xmark");
icon.classList.add("fa-check");
icon.style.color = "green";
    return true;

}