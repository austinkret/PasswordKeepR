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
  "url": "https://www.google.com/",
  "username": "users name here",
  "password": "123"
}];

$(document).ready(function() {

  console.log('Document ready!!!!........');
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
    <div class="dropdown">
    <button onclick="myFunction()" class="dropbtn"><i class="fas fa-ellipsis-h"></i></button>
    <div id="myDropdown" class="dropdown-content">
    <a id="edit" href="/update-password">Edit</a>
    <a href="#">Delete</a>
    </div>
    </div>
    <img class="logo-url" src="https://s.abcnews.com/images/Technology/ht_google_lb_150901_16x9_992.jpg">
    <span>Google</span>
    <span class="url">${passwordData.url}</span>
    <span class="username">${passwordData.username}</span>
    <button type="button" class="copy">copy to clipboard</button>
    </div>
    </article>
    `;
    return newPassword;
  };

  //calls render password function to render the new section article with the correct information onto the page
  renderPassword(passwordData);

  //----CREATE NEW PASSWORD-----//





});



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


            // Adds new credentials just created to the database
              // const addCredential = function(property) {
              //   return pool
              //   .query ( `INSERT INTO credentials (website_name, website_url, website_username, website_password, user_id, created_at, modified_at, category)
              //   VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
              //   RETURNING *;
              //   `, [credentials.website_name, credentials.website_url, credentials.website_username, credentials.website_password, credentials.user_id, credentials.created_at, credentials.modified_at, credentials.category])
              //   .then ((res) => res.rows)

              // }
              // exports.addCredential = addCredential;
