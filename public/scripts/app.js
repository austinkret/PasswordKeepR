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

// const { Pool } = require('pg');

// const pool = new Pool({
//   user: 'labber',
//   password: '123',
//   host: 'localhost',
//   database: 'midterm'
// });

//----Fake tester object----//
const passwordData = [{
  "logoUrl": "https://s.abcnews.com/images/Technology/ht_google_lb_150901_16x9_992.jpg",
  "websiteName": "Google",
  "url": "https://www.google.com/",
  "username": "username,",
  "password": "password: 123"
}];

$(document).ready(function() {
  // Render password function which takes the new object and displays it onto the page
  const renderPassword = function(passwords) {
    for (let values of passwords) {
      console.log("-----------paswordData object key values", values);
      const $password = createPasswordElement(values);
      $('#allPasswordsPosted').prepend($password);
    }
  };

  // prepend credential to homepage
  // function that inserts the object data into the html format that we want to display onto the page.
  const createPasswordElement = function(passwordData) {
    const newPassword =
    `<article id="passwordPost">
    <div class="credentialsInfo">
    <div class="image-drop">
      <div class="dropdown">
        <button onclick="myFunction()" class="dropbtn"><i class="fas fa-ellipsis-h"></i></button>
        <div id="myDropdown" class="dropdown-content">
        <a id="edit" href="/update-password">Edit</a>
        <a href="#">Delete</a>
        </div>
        </div>
        <img class="logo-url" src="${passwordData.logoUrl}">
    </div>
    <div class="credential-content">
      <span class = "websiteName">${passwordData.websiteName}</span>
      <span class="url">${passwordData.url}</span>
      <span class="username">${passwordData.username}</span>
      <span class="password">${passwordData.password}</span>
      <button type="button" class="copy">Copy to Clipboard</button>
    </div>
    </div>
    </article>
    `;
    return newPassword;
  };

  //calls render password function to render the new section article with the correct information onto the page
  renderPassword(passwordData);

  document.getElementById("submitNewPasswordButton").addEventListener('click', function(e) {
    console.log("button clicked", $('#submitNewPasswordButton'))
    e.preventDefault();
    const form = $('#newForm').serialize();

    $.ajax({
      type: 'POST',
      data: form,
      url: '/create-new'
    })
    .then(function() {
      loadPaswords();
    })
  })

  const loadPaswords = function() {
    $.ajax("/api/users")
    .then(function(data) {
      renderPassword(data)
    })
  }
  loadPaswords()

});
