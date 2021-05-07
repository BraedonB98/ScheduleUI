var memStorage = window.sessionStorage;
var locStorage = window.localStorage;

var profile = JSON.parse(memStorage.getItem("googleUser"));
console.log (profile);

console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
console.log('Name: ' + profile.getName());
console.log('Image URL: ' + profile.getImageUrl());
console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.