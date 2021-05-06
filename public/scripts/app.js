// $(() => {
//   $.ajax({{
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
  console.log("start of document ready");
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


      window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
          let dropdowns = document.getElementsByClassName(`dropdown-content`);

          for (let j = 0; j < dropdowns.length; j++) {
            let openDropdown = dropdowns[j];
            if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
            }
          }
        }
        if (!event.target.matches('.delete')) {
          let deletions = document.getElementsByClassName(`delete`);
          // console.log(deletions);
          // for (let i = 0; i < user.length; i++) {
          //   // console.log(user[i].id);
          //   // console.log(object);

          //   // const data = {
          //   //   id: user
          //   // };

          //   // $.ajax({
          //   //   method: "POST",
          //   //   url: "/home/delete/",
          //   //   data,
          //   // })
          //   //   .then((result) => {
          //   //     console.log("result--------", result);
          //   //     location.replace('/home');
          //   //   })
          //   //   .catch((error) => {
          //   //     console.error(error);
          //   //   });
          // }
        }
      };

      for (let i = 0; i < user.length; i++) {
      // console.log(user)
        const $password = createPasswordElement(user[i]);
        $('#allPasswordsPosted').prepend($password);
      }
      // const myFunction = function() {
      //   console.log("dsfsdfsdfsdfsdfsdf", user[i].id);
      //   // document.getElementById("myDropdown").classList.toggle("show");
      //   document.getElementsByClassName(`dropdown-content ${user[i].id}`).toggle("show");
      // };



      // document.querySelectorAll(".delete").forEach((el) => {
      //   for (let i = 0; i < user.length; i++) {
      //     console.log(user[i].id);
      //     el.onclick = () => {

      //       const data = {
      //         id: $(".delete").val(),
      //       };
      //       console.log("this is data-----------------",data);
      //       $.ajax({
      //         method: "POST",
      //         url: "/home/delete/",
      //         data,
      //       })
      //         .then((result) => {
      //           console.log("result--------", result);
      //           location.replace('/home');
      //         })
      //         .catch((error) => {
      //           console.error(error);
      //         });

      //     };
      //   }
      // });

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
    `<article id="passwordPost" class="${passwordData.id}">
    <div class="credentialsInfo">
    <div class="image-drop">
    <div class="dropdown" id="${passwordData.website_name}">
      <button onclick=myFunction(${passwordData.id}) id="${passwordData.id}" class="dropbtn"><i id="${passwordData.id}" onclick=myFunction(${passwordData.id}) class="fas fa-ellipsis-h"></i></button>
      <div id="myDropdown" class="dropdown-content ${passwordData.id}">
        <a id="edit" class="edit">Edit</a>
        <a type="button" id="${passwordData.id}" onclick=deleteFunction(${passwordData.id}) class="delete ${passwordData.id}">Delete</a>
      </div>
    </div>
    <img class="logo-url" src="https://logo.clearbit.com/${passwordData.website_url}">
    </div>
    <div class="credential-content">
      <span class = "websiteName">${passwordData.website_name}</span>
      <span class="url">${passwordData.website_url}</span>
      <span class="username">Username: ${passwordData.website_username}</span>
      <span>Password:</span>
      <span id="${passwordData.website_password}" class="password">${passwordData.website_password}</span>
      <button class="copy" onclick="CopyToClipboard('${passwordData.website_password}')">Copy to Clipboard</button>
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
    $.ajax({
      method: "POST",
      url: "/home/home",
      data: data
    })
      .then((result) => {
        console.log("result--------", result);
        location.replace('/home');
      })
      .catch((error) => {
        console.error(error);
      });
  });







  // $(".delete").on("click", function(event) {
  //   console.log("this------------this-----------------", this);
  //   event.preventDefault();


  // });

  console.log("document finished");


  $("#updatePasswordButton").on('click', function(event) {
    event.preventDefault();
    console.log("UPDATE BUTTON WAS CLICKED!!!!!!!!");

    const data = {
      username: $("#newUsername").val(),
      password: $("#newPassword").val(),
      category: $("#newCategory").val()
    };
    console.log(data);
    $.ajax({
      method: "POST",
      url: "update-password",
      data: data
    })
      .then((result) => {
        console.log("result--------", result);
        location.replace('/home');
      })
      .catch((error) => {
        console.error(error);
      });
  });


});
