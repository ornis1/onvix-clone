import firebase from 'firebase';

console.log('user js');
/* eslint-disable */
function updateProfile(name, pass, email, photo) {
  if (name) updateName(name);
  if (pass) updatePassword(pass);
  if (name) updatePhoto(photo);
  if (email) updateEmail(email);
}
/**
 *
 * @param {URL} photo
 */
function updatePhoto(photo) {
  if (!photo) throw new Error();
  const user = firebase.auth().currentUser;

  user
    .updateProfile({
      photoURL: photo,
    })
    .then(function() {
      // Update successful.
    })
    .catch(function(error) {
      // An error happened.
    });
}
function updateName(name) {
  const user = firebase.auth().currentUser;

  user
    .updateProfile({
      displayName: name,
    })
    .then(function() {
      // Update successful.
    })
    .catch(function(error) {
      // An error happened.
    });
}
function updatePassword(pass) {
  const user = firebase.auth().currentUser;

  user
    .updatePassword(pass)
    .then(() => {
      // Update successful.
    })
    .catch(function(error) {
      // An error happened.
    });
}
function updateEmail(email) {
  const user = firebase.auth().currentUser;

  user
    .updateEmail(email)
    .then(function() {
      // Update successful.
    })
    .catch(function(error) {
      // An error happened.
    });
}
function deleteUser() {
  var user = firebase.auth().currentUser;

  user
    .delete()
    .then(function() {
      // User deleted.
    })
    .catch(function(error) {
      // An error happened.
    });
}
function sendVerificationEmail() {
  var user = firebase.auth().currentUser;

  user
    .sendEmailVerification()
    .then(function() {
      // Email sent.
    })
    .catch(function(error) {
      // An error happened.
    });
}

// updatePhoto();
