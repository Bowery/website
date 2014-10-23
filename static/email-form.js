function validateEmail(email) { 
	var re = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return re.test(email);
} 

function submitEmail()
{
	var email = document.getElementById("email").value;
	if (validateEmail(email)) {
		var xmlhttp= window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
		xmlhttp.open("POST","https://formkeep.com/f/a9d9bd96ce41",true);
		xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xmlhttp.send("email=" + encodeURI(email));
		document.getElementById("submit-email-button").value = "Submitted. Thanks!"

		// prevent page refresh on submit
		addEventListener('submit', send, false);
		function send(evt){evt.preventDefault();}
	}

	else {
		document.getElementById("submit-email-button").value = "Error, invalid email.";
	}
}