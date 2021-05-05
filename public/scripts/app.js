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
// const passwordData = [{
//   "logoUrl": "https://s.abcnews.com/images/Technology/ht_google_lb_150901_16x9_992.jpg",
//   "websiteName": "Google",
//   "url": "https://www.google.com/",
//   "username": "username,",
//   "password": "password: 123"
// }];

$(document).ready(function() {

  // // Render password function which takes the new object and displays it onto the page
  // const renderPassword = function(passwords) {
  //   for (let values of passwords) {
  //     console.log("-----------paswordData object key values", values);
  //     const $password = createPasswordElement(values);
  //     $('#allPasswordsPosted').prepend($password);
  //   }
  // };

  // GET or POST requests to back-end
  $(() => {
    $.getJSON({
      method: "GET",
      url: "/credentials/"
    }).done((credentials) => {
    // console.log('credentials before loop', credentials);
      let user = credentials.credentials;
      for (let i = 0; i < user.length; i++) {
      // console.log(user)
        const $password = createPasswordElement(user[i]);
        $('#allPasswordsPosted').prepend($password);
      }
    });
  });

  // GET or POST requests to back-end
  $(() => {
    $.getJSON({
      method: "GET",
      url: "/social/"
    }).done((social) => {
      // console.log('credentials before loop', credentials);
      let user = social.social;
      for (let i = 0; i < user.length; i++) {
        // console.log(user)
        const $password = createPasswordElement(user[i]);
        $('#socialPasswordsPosted').prepend($password);
      }
    });
  });

  // GET or POST requests to back-end
  $(() => {
    $.getJSON({
      method: "GET",
      url: "/work/"
    }).done((work) => {
      // console.log('credentials before loop', credentials);
      let user = work.work;
      for (let i = 0; i < user.length; i++) {
        // console.log(user)
        const $password = createPasswordElement(user[i]);
        $('#workPasswordsPosted').prepend($password);
      }
    });
  });

  // GET or POST requests to back-end
  $(() => {
    $.getJSON({
      method: "GET",
      url: "/entertainment/"
    }).done((entertainment) => {
      // console.log('credentials before loop', credentials);
      let user = entertainment.entertainment;
      for (let i = 0; i < user.length; i++) {
        // console.log(user)
        const $password = createPasswordElement(user[i]);
        $('#entertainmentPasswordsPosted').prepend($password);
      }
    });
  });

  // GET or POST requests to back-end
  $(() => {
    $.getJSON({
      method: "GET",
      url: "/mycredentials/"
    }).done((mycredentials) => {
      // console.log('credentials before loop', credentials);
      let user = mycredentials.mycredentials;
      for (let i = 0; i < user.length; i++) {
        // console.log(user)
        const $password = createPasswordElement(user[i]);
        $('#myPasswordsPosted').prepend($password);
      }
    });
  });

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
        <img class="logo-url" src="https://logo.clearbit.com/${passwordData.website_url}">
    </div>
    <div class="credential-content">
      <span class = "websiteName">${passwordData.website_name}</span>
      <span class="url">${passwordData.website_url}</span>
      <span class="username">Username: ${passwordData.website_username}</span>
      <span>Password:</span>
      <span id="${passwordData.website_name}" class="password">${passwordData.website_password}</span>
      <button class="copy" onclick="CopyToClipboard('${passwordData.website_name}')">Copy to Clipboard</button>
    </div>
    </div>
    </article>
    `;
    return newPassword;
  };

  //calls render password function to render the new section article with the correct information onto the page
  // renderPassword(passwordData);

  // document.getElementById("submitNewPasswordButton").addEventListener('click', function(e) {
  //   console.log("button clicked", $('#submitNewPasswordButton'))
  //   e.preventDefault();
  //   const form = $('#newForm').serialize();

  //   $.ajax({
  //     type: 'POST',
  //     data: form,
  //     url: '/create-new'
  //   })
  //   .then(function() {
  //     loadPaswords();
  //   })
  // })

  // const loadPaswords = function() {
  //   $.ajax("/api/users")
  //   .then(function(data) {
  //     renderPassword(data)
  //   })
  // }
  // loadPaswords()


  $("#submitNewPasswordButton").on('click', function(event) {
    event.preventDefault();

    const data = {
      websitename: $("#websitename").val(),
      websiteurl: $("#websiteurl").val(),
      username: $("#username").val(),
      password: $("#password").val(),
      category: $("#category").val()
    };
    console.log(data);
    location.replace('/home');
    $.ajax({
      method: "POST",
      url: "/home/home",
      data: data
    })
      .then((result) => {

        console.log("result--------", result);
      })
      .catch((error) => {
        console.error(error);
      });
  });

});
