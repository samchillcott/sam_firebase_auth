# sam_firebase_auth aka "Firebasic"

Basic web app that utilizes Firebase's Authentication, Storage and Cloud Firestore Database.

Challenge set by my mentor with a rule of only using the official docs (no follow along tutorials).

[Challenge Spec to be copied over shortly]

## User Workflow

### 1. Sign Up Page - User creates an account via Firebase with email and password.

- Success alert OR Appropriate alert fired with message if error.
- Move user to upload page.

### 2. Upload Page - User selects file to upload to Firebase (Storage and Cloud Firestore).

- If they don't have an account alert request to signup (no uploads executed).
- If authorised, file gets uploaded to Firebase Storage and the metadata (consisting of file name, type and size) ripped from the file gets stored in Firebase Cloud Firestore database as a new document (using the file's name as the document name) in a collection.
- User notified of dual upload success.
- Form cleared for another upload if required.
