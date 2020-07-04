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

// const uploadForm = document.querySelector("#upload-form");

// uploadForm.addEventListener("submit", (e) => {
// 	e.preventDefault();
// 	var ref = firebase.storage().ref();

// 	const file = new File(uploadForm["myFile"]);
// 	ref.put(file).then(function (snapshot) {
// 		console.log("Uploaded a blob or file!");
// 	});
// });

// Upload Image Dcode version

const uploadForm = document.querySelector("#upload-form");

uploadForm.addEventListener("submit", (e) => {
	e.preventDefault();

	// Create a root reference
	var storageRef = firebase.storage().ref();

	console.log(storageRef);

	// // Create a reference to 'mountains.jpg'
	// var imgName = storageRef.child("mountains.jpg");

	// // Create a reference to 'images/mountains.jpg'
	// var mountainImagesRef = storageRef.child("images/mountains.jpg");

	const file = document.querySelector("#myFile");
	const fileToUpload = file.files[0];
	console.log(file.files[0].type);
	// file.addEventListener('change', function() {
	// 	console.log(file.files);
	// } );

	const metaData = {
		name: file.files[0].name,
		size: file.files[0].size,
		extension: file.files[0].type
	};

	console.log(metaData);

	storageRef.put(fileToUpload).then(function (snapshot) {
		console.log("Uploaded a blob or file!");
	});
});

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
