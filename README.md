# Firebasic

- Basic web app for registered users to upload files to cloud storage and store metadata in a NoSQL database.
- Challenge set by my mentor with a rule of only using the official docs (no follow along tutorials). Original Spec below.
- App built purely for functionality with no styling to get MVP working ASAP.

## Tech Used

- HTML.
- JavaScript.
- DOM manipulation.
- Firebase Authentication.
- Firebase Storage.
- Firebase Cloud Firestore Database.
- Firebase Hosting.

## Features / User Workflow

### 1. Sign Up Page - User creates an account via Firebase with email and password.

- Success alert OR Appropriate alert fired with message if error (email already used or incomplete password criteria).
- Move user to upload page.

### 2. Upload Page - User selects file to upload to Firebase (Storage and Cloud Firestore).

- If they don't have an account alert request to signup (no uploads executed).
- If authorised, file gets uploaded to Firebase Storage and the metadata (consisting of file name, type and size) ripped from the file gets stored in Firebase Cloud Firestore database as a new document (using the file's name as the document name) in a collection.
- User notified of dual upload success.
- Form cleared for another upload if required.

## What I learned

- Firebase basics - Including the difference between storage, RTDB and Firestore.
- How to use only official docs.
- Authentication and backend database interaction/setup.
- Learned a lot about the diff types of database.
- Got more confident with async await and control flow.
- Refresher on event listeners and handlers.
- How to create, name and manage supporting branches in git.
- How to refactor promises into Async Await.
- Adding client side checks to reduce server requests.
- Try catch and error handling.

## Challenges

- Knowing where to place the code blocks from the docs in my project and what tweaks to make to get it working in my context. Eg the storage reference.
- Overwriting of the data - because I had the storage reference setup wrong.
- Control flow is where I struggled where there was a need for async functions.
- Final success message was firing before the 2 uploads had completed (async functions).

## Improvements

- Security - Move my config elsewhere so peeps can’t get access to my account keys etc.
- Access data offline / persist.
- Have different storage/db dumps for different users.
- Change the use when uploading depending on who is logged in.
- Session storage - Browser remembers who was logged in last and stores to appropriate dump.
- Add multiple files at a time - Multiple attribute in the form.
- Prevent duplicate uploads to storage if filename and meta = the same as one already stored. It doesn't look like it does duplicate it so give user an error message or updated console.log. Not sure if storage and cloud firestore are linked so i would need some sort of query into both storage holds?
- Bespoke error handling - have more understandable alerts for the user rather than alerting the error message.
- Further validation - Add the keyup and disable submit button.

## Watch Me Build This

- #100daysofcode #82 - 94.
- [Daily Videos - Instagram](https://www.instagram.com/samchillcott/)

## Original Spec

This was split into 2 challenges: Basic & Intermediate.

Firebasing Basic

1. Create a Firebase project. Log in to Firebase Console and create your first project.
2. Create a simple web app connected to Firebase - forget the css and styling for now, we're just learning the functionality.
3. Display two input fields for email and password, and a button for submitting.
4. User types in the email and password fields, hits submit and the app creates a new user in Firebase using Firebase's Authentication.
5. Verify in the Firebase Console that the user was created.
6. Display a message that the user was successfully created.

(Optional)
If you feel up for a challenge, try to tackle these once you're finished:
1. Display an error message if email is already taken.
2. Display a generic error message if something else is wrong - eg. too short password is input.

Firebasing Intermediate

1. Add a new page to your app - Image Uploader - and a couple of simple buttons to navigate between it and the Authentication page (or any other way that makes sense to you to switch between the two pages.)
2. In Image Uploader page, add a button that prompts user to upload a photo.
3. When user selects a photo, upload it to the Firebase Storage.
4. At the same time, read the name of the file, its file extension and filesize, and store these as a document in the Firebase Firestore database. There are a number of ways you could structure the database, it's up to you how you do it, just store that data somewhere on Firebase.

truechallenge

This time I'm not going to link you to any resources. I encourage you to attempt approaching this exercise without following specific video tutorials either. How could you go about it then? Try to think about it this way:

1. How do I add a new page? 
2. How do I add a way to navigate between the two pages?
3. How do I add an upload button?
4. How do I upload the selected image to the Firebase Storage?
5. How do I read the data from that image before uploading?
6. How do I upload that data to the Firebase Firestore database?

Each of these questions can be answered without tutorials. Official doucmentation, StackOverflow, forums or other learning platforms are fine, but it would be tempting to just find a 'Firebase Storage tutorial' YouTube video and follow along. What would you do if you didn't have one? I'm trying to prepare you for finding answers when the documentation is the only resource you will have - I think it is a very useful skill later on.

Tutorials on things like 'what are NoSQL databases', 'how to structure your database' or 'Firebase Console overview' are okay. So are ones on bugs or issues you find along the way, eg: 'image upload button not working' or 'Firebase error [some error you encounter]'. Just try to avoid videos that will specifically address the tasks this challenge presents - uploading a file to FB Storage and uploading data to FB Firestore. Try to get all info from the documentation, StackOverflow and other resources.

This means that this exercise may take you longer, have you hit more walls and get you more frustrated. Be prepared for it.


