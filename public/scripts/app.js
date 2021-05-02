// $(() => {
//   $.ajax({
//     method: "GET",
//     url: "/api/users"
//   }).done((users) => {
//     for(user of users) {
//       $("<div>").text(user.name).appendTo($("body"));
//     }
//   });;
// });


//----Fake tester object----//
const passwordData = [{
  "logoUrl": "abcdefghi",
  "url": "https://www.google.com/",
  "username": "users name here",
  "password": "123"
}]

$(document).ready(function() {
  console.log('Document ready!!!!........');
  // Render password function which takes the new object and displays it onto the page
  const renderPassword = function(passwords) {
    for (let values of passwords) {
      console.log("-----------paswordData object key values", values);
      const $password = createPasswordElement(values)
      $('#allPasswordsPosted').prepend($password);
    }
  };

  // prepend credential to homepage
  const createPasswordElement = function(passwordData) {
    const newPassword =
    `<article id="passwordPost">
    <div class="dropdown">
    <button onclick="myFunction()" class="dropbtn">Dropdown</button>
    <div id="myDropdown" class="dropdown-content">
    <a href="#">Edit</a>
    <a href="#">Delete</a>
    </div>
    </div>
    <div class="credentialsInfo">
    <button type="button" class="url">${passwordData.url}</button>
    <button type="button" class="username">${passwordData.username}</button>
    <button type="button" class="copy">copy to clipboard</button>
    </div>
    </article>
    `;
    return newPassword;
  };

  renderPassword(passwordData)

  //----CREATE NEW PASSWORD-----//





})



// function that loads the passwords from the database to show them on the screen.
// const loadPasswords = function() {
//   $.ajax('url to password data')
//   .done(function(data) {
//     renderPasswords(data)
//   });
// }
// loadPasswords();

// //On click of 'Create new Credential"
// $('#createPasswordSubmitButton').click(function() {
//   fetchDataAndDisplay();
// });

// const fetchDataAndDisplay = function() {
//   $.ajax({
//     url: "url goes here",
//     type: 'GET'
//   }).then (function() {
//     loadPasswords();
//   })
// }
