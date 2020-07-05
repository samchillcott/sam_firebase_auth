// // Sign Up

// const signupForm = document.querySelector("#signup-form");

// signupForm.addEventListener("submit", (e) => {
// 	e.preventDefault();

// 	// get user email
// 	const email = signupForm["email"].value;
// 	// get user email
// 	const password = signupForm["password"].value;

// 	const firebaseCreate = async () => {
// 		let response = null;

// 		try {
// 			response = await firebase
// 				.auth()
// 				.createUserWithEmailAndPassword(email, password);

// 			// if the response was successful, let the user know and reset the form
// 			if (response.additionalUserInfo.isNewUser) {
// 				signupForm.reset();
// 				alert("Congrats! New user account added");
// 			}
// 		} catch (error) {
// 			// Handle Errors here.
// 			let errorCode = error.code;
// 			let errorMessage = error.message;
// 			alert(errorMessage);
// 		}
// 	};
// 	firebaseCreate();
// });

const uploadForm = document.querySelector("#upload-form");

uploadForm.addEventListener("submit", (e) => {
	e.preventDefault();

	const file = document.querySelector("#myFile");
	const fileToUpload = file.files[0];

	var storageRef = firebase.storage().ref().child(file.files[0].name);

	const fileMetaData = {
		name: file.files[0].name,
		size: file.files[0].size,
		extension: file.files[0].type,
	};

	console.log(fileMetaData);

	storageRef.put(fileToUpload).then(function (snapshot) {
		console.log("Uploaded file to Storage!");
	});

	// Upload metadata to DB

	db.collection("imageCollection")
		// .doc("imageDocument")
		.add(fileMetaData)
		.then(function () {
			console.log("Document successfully written to Database!");
		})
		.catch(function (error) {
			console.error("Error writing document: ", error);
		});
});
