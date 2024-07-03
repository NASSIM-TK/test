function sendMail(){
    var params = {
        from_name : document.getElementById("name").value,
        message : document.getElementById("message").value,
        to_name : document.getElementById("subjec").value,

    }

    emailjs.send("service_pxn7ujg", "template_0m436ld",params).then(function (res) {
        alert("Success! " + res.status);
    })
}