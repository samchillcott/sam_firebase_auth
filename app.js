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

// // Firestore Database

// const firebase = require("firebase");
// // Required for side-effects
// require("firebase/firestore");


//Upload Image to Storage

const uploadForm = document.querySelector("#upload-form");

uploadForm.addEventListener("submit", (e) => {
	e.preventDefault();



// Upload To Database

// const uploadForm = document.querySelector("#upload-form");

// uploadForm.addEventListener("submit", (e) => {
// 	e.preventDefault();
// 	// console.log(uploadForm);
// 	const myImg = uploadForm["myFile"].value;
// 	console.log(myImg);

// 	//Upload file to Firebase Collection as an Object
// 	db.collection("Images")
// 		.doc("ImagesDoc")
// 		.set({
// 			myImg,
// 		})
// 		.then(function () {
// 			console.log("Document successfully written!");
// 		});
// });
