function SendMail() {
    var params = {
        from_name : document.getElementById("name").value,
        Email_Address : document.getElementById("Email_Address").value,
        message : document.getElementById("message").value,
    }
    emailjs.send("service_gkjqzwv","template_nl0q258", params).then(function (res) {
alert("success!" + res.status);
    })
}
