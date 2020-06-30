const signupForm = document.querySelector("#signup-form");

signupForm.addEventListener("submit", (e) => {
	e.preventDefault();

	// get user email
	const email = signupForm["email"].value;
	// get user email
	const password = signupForm["password"].value;

	firebase
		.auth()
		.createUserWithEmailAndPassword(email, password)
		.catch(function (error) {
			// Handle Errors here.
			var errorCode = error.code;
			var errorMessage = error.message;
			// ...
		});
});
