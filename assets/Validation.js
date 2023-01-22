function validate() {
   let email = document.getElementById("email"); 
   let message = document.getElementById("message");
   let errorBox = document.getElementById("errorMessage");
   let alertDiv = `<div class="alert alert-danger alert-dismissible" role="alert">`;
   let alertBtn = `<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hiddens="true">&times;</span></button>;
}

function sendEmail (){
Email.send({
    Host : "smtp.gmail.com",
    Username : "saleiux99@gmail.com",
    Password : "Ktm34_99",
    To : "saleiux99@gmail.com", 
    From : document.getElementById("email").value, 
    Subject : "New Contact Form Enquiry",
    Body : "message: " + document.getElementById("message").value
    + <br> Email: " + document.getElementById("email").value
}).then(
    message => alert("Message sent succesfully")
    );
}

email.style.border = "1px solid #ccc"
message.style.border = "1px solid #ccc"

// check email

if (email.value == ""){
    errorBox.InnerHTML = alertDiv + alertBtn + "<strong>Wait!</strong> You forgot to write your email" + </div>
    email.focus();
    email.style.border = "3px solid #990033"
    return false;
}

// check message

if (message.value == ""){
    errorBox.InnerHTML = alertDiv + alertBtn + "<strong>Wait!</strong> You forgot to write me something" + </div>
    message.focus();
    message.style.border = ""3px solid #990033""
    return false;
}

return true; 
