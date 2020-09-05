// Have left some console logs in for error handling and review

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

		// Check email address format
		function emailIsValid(email) {
			return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
		}

		let emailCheck = emailIsValid(email);
		if (emailCheck === false) {
			alert("Please format your email correctly __ @ __ . __");
			return;
		} else {
			// Check password is at least 6 characters
			if (password.length < 6) {
				alert("Password should be at least 6 characters");
				return;
			}
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
				alert(error.message);
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
			} catch (error) {
				console.log(error);
				alert(error.message);
				return;
			}
			try {
				// Upload metadata to Cloud Firestore
				await db
					.collection("imageCollection")
					.doc(fileMetaData.name)
					.set(fileMetaData);
				console.log("Document successfully written to Database!");
			} catch (error) {
				console.log(error);
				alert(error.message);
				return;
			}

			console.log("Double Upload complete!");
			alert("File added to Storage and metadata added to Firestore");
			uploadForm.reset();
		}
		doubleUpload();
	});
} catch (e) {}
