const signupForm = document.querySelector("#signup-form");

signupForm.addEventListener("submit", (e) => {
	e.preventDefault();

	// get user email
	const email = signupForm["email"].value;
	// get user email
	const password = signupForm["password"].value;

	try {
		firebase
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.then(signupForm.reset())
			.then(alert("Congrats! New user account added"));
	} catch (error) {
		// Handle Errors here.
		var errorCode = error.code;
		var errorMessage = error.message;
		alert(error.code, errorMessage, "Please use @ and a valid domain");
	}
});
