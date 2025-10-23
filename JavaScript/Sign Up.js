
function required() {
    const fullname = document.getElementById("firstname").value;
    const fullnames = document.getElementById("lastname").value;
    if (document.myform.email1.value != document.myform.email2.value && document.myform.psw1.value != document.myform.psw2.value) {
        alert("Both your email and Password are not the same !!!");
        return false;
    }
    else if (document.myform.email1.value != document.myform.email2.value) {
        alert("Your Email Address are Not The Same !!!");
        return false;
    } else if (document.myform.psw1.value != document.myform.psw2.value) {
        alert("Your Passwords are Not The Same !!!");
        return false;
    } else {
        if (confirm("Hello!" + "  " + fullname + " " + fullnames + "  " + "  " + "I hope your will enjoy our foodsite for easy food ordering!!!")) {
            alert("Successful Submitted");
        } else {
            alert("Submittion has Been Canceled");
            return false;
        }

        return true;
    }
}


