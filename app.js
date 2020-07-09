// Sign Up

const signupForm = document.querySelector("#signup-form");

try {
	// .addEventListener here

	signupForm.addEventListener("submit", (e) => {
		e.preventDefault();

		// get user email
		const email = signupForm["email"].value;
		// get user password
		const password = signupForm["password"].value;
		
		if (password.length < 6) {
			alert("Password should be at least 6 characters");
			return
		}

		const firebaseCreate = async () => {
			let response = null;

			try {
				response = await firebase
					.auth()
					.createUserWithEmailAndPassword(email, password);

				// if the response was successful, let the user know and reset the form
				if (response.additionalUserInfo.isNewUser) {
					signupForm.reset();
					alert("Congrats! New user account added");
					window.location.replace("./upload.html");
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
} catch (e) {}

// Upload File & Data

const uploadForm = document.querySelector("#upload-form");

try {
	uploadForm.addEventListener("submit", (e) => {
		e.preventDefault();

		console.log("submit fired");

		const file = document.querySelector("#myFile");
		const fileToUpload = file.files[0];

		let storageRef = firebase.storage().ref();
		let child = "Uploads/" + file.files[0].name;
		let fileRef = storageRef.child(child);

		//Convert bytes to size
		function bytesToSize(bytes) {
			const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
			if (bytes === 0) return "n/a";
			const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);
			if (i === 0) return `${bytes} ${sizes[i]})`;
			return `${(bytes / 1024 ** i).toFixed(1)} ${sizes[i]}`;
		}

		// Pull out metadata from file
		const fileMetaData = {
			name: file.files[0].name,
			size: bytesToSize(file.files[0].size),
			extension: file.files[0].type,
		};

		// async function for both uploads
		async function doubleUpload() {
			// Check if (a) user is logged in
			let user = firebase.auth().currentUser;

			if (user === null) {
				alert("Please sign up for an account to upload");
				window.location.replace("./index.html");
				return;
			}

			try {
				// Upload to Storage
				await fileRef.put(fileToUpload);
				console.log("Uploaded file to Storage!");

				// Upload metadata to Cloud Firestore
				await db
					.collection("imageCollection")
					.doc(fileMetaData.name)
					.set(fileMetaData);

				console.log("Document successfully written to Database!");
				console.log("Double Upload complete!");
				alert("File added to Storage and metadata added to Firestore");
				uploadForm.reset();
			} catch (error) {
				// Handle errors from both uploads here.
				let errorCode = error.code;
				let errorMessage = error.message;
				alert(errorMessage);

				// 	if (error.code === "storage/unauthorized") {
				// 		console.log(error);
				// 		alert("Error uploading to Storage: Please sign up for an account");
				// 		uploadForm.reset();

				// }
				// .catch(function (error) {
				// 	console.error("Error writing document: ", error);
				// });
			}
		}
		doubleUpload();
	});
} catch (e) {}
