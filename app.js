const signupForm = document.querySelector("#signup-form");

signupForm.addEventListener("submit", (e) => {
	e.preventDefault();
	console.log("FB triggered");

	// get user email
	const email = signupForm["email"].value;
	// get user email
	const password = signupForm["password"].value;

	const firebaseCreate = async () => {
		let response = null;
		console.log("FB create triggered");

		try {
			response = await firebase
				.auth()
				.createUserWithEmailAndPassword(email, password);

			// if the response was successful, let the user know and reset the form

			if (response.additionalUserInfo.isNewUser) {
				signupForm.reset();
				alert("Congrats! New user account added");
			}
		} catch (error) {
			// Handle Errors here.
			let errorCode = error.code;
			let errorMessage = error.message;
			alert(errorMessage);
		}
	};

	firebaseCreate();
});
