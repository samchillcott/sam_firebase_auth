# Firebasic

- Basic web app for registered users to upload files to cloud storage and store metadata in a NoSQL database.
- Challenge set by my mentor with a rule of only using the official docs (no follow along tutorials).
- App built purely for functionality with no styling to get MVP working ASAP.

## Tech Used

- HTML.
- JavaScript.
- DOM manipulation.
- Firebase Authentication.
- Firebase Storage.
- Firebase Cloud Firestore Database (NoSQL).
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
