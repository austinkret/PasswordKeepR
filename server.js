

// load .env data into process.env
require('dotenv').config();

// Web server config
const PORT       = process.env.PORT || 8080;
const ENV        = process.env.ENV || "development";
const express    = require("express");
const bodyParser = require("body-parser");
const sass       = require("node-sass-middleware");
const app        = express();
const morgan     = require('morgan');
const cookieSession = require('cookie-session');
const path = require('path');

// PG database client/connection setup
const { Pool } = require('pg');
// const dbParams = require('./lib/db.js');
// const db = new Pool(dbParams);
// db.connect();

const db = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'midterm'
});

// pool.query('SELECT NOW()', (err, res) => {
//   console.log(err, res)
//   pool.end()
// })

// pool.connect((err, client, done) => {
//   if (err) throw err
//   client.query('SELECT * FROM credentials', (err, res) => {
//     done()
//     if (err) {
//       console.log(err.stack)
//     } else {
//       console.log(res.rows)
//     }
//   })
// })

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/styles", sass({
  src: __dirname + "/styles",
  dest: __dirname + "/public/styles",
  debug: true,
  outputStyle: 'expanded'
}));
app.use(express.static("public"));
app.use(cookieSession({
  name:'session',
  keys: ['myKeys'],
}));

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const credentialsRoute = require("./routes/credentials");
const myCredentialsRoute = require("./routes/mycredentials");
const socialRoute = require("./routes/social");
const workRoute = require("./routes/work");
const entertainmentRoute = require("./routes/entertainment");
const submitNewPassword = require("./routes/submitNewPassword");
const welcomePage = require("./routes/welcome-page");


// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
app.use("/credentials", credentialsRoute(db));
app.use("/mycredentials", myCredentialsRoute(db));
app.use("/social", socialRoute(db));
app.use("/work", workRoute(db));
app.use("/entertainment", entertainmentRoute(db));
app.use("/home", submitNewPassword(db));

// Note: mount other resources here, using the same pattern above

// api routers (/api/whatever) -> these don't direct to new pages, these are functionality


// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).
app.get("/", (req, res) => {
  return res.render('welcome-page');
});

// app.post("/home", (req, res) => {
//   console.log(req.body);
//   submitNewPassword(req.body);
//   // return res.redirect("/home")
// });

app.post("/logout", (req, res) => {
  req.session = null;
  res.redirect("/");
});

app.get("/home", (req, res) => {
  if (req.session.userId) {
    return res.render('home');
  }
  req.session.userId = 'userId-cookie';
  return res.render('home');
});

app.post("/home", (req, res) => {
  if (req.session.userId) {
    return res.render('home');
  }
  req.session.userId = 'userId-cookie';
  return res.render('home');
});

app.get("/create-new", (req, res) => {
  return res.render('createNewPassword');
});

app.post("/create-new", (req, res) => {
  return res.render('createNewPassword');
});

app.get("/mycredentials", (req, res) => {
  return res.render('mycredentials');
});

app.post("/mycredentials", (req, res) => {
  return res.render('mycredentials');
});

app.get("/social", (req, res) => {
  return res.render('social-media');
});

app.post("/social", (req, res) => {
  return res.render('social-media');
});

app.get("/work", (req, res) => {
  return res.render('work');
});

app.post("/work", (req, res) => {
  return res.render('work');
});

app.get("/entertainment", (req, res) => {
  return res.render('entertainment');
});

app.post("/entertainment", (req, res) => {
  return res.render('entertainment');
});

app.post("/update-password/:id", (req, res) => {
  console.log("req body here------------------->", req.body)

  // const websiteUsername = req.body.username;
  const websitePassword = req.body.password;
  // const category = req.body.category;

  // return res.render('updatePassword');
  //1. Receive the data from the AJAX req.body
  //2. Create a function in server.js to actually update the table with the new
  // values.

  //3. Then return the res.json({result: "done"}) back to the Ajax call.
  // console.log("req body for update password!!", req.body)
  const updatePassword = function(request) {

    const queryString = `
    UPDATE credentials
    SET website_password = $1
    WHERE credentials.id = $2;`;

    const values = [request.websitePassword, req.params.id];

    return db.query(queryString, values)

  };
  updatePassword({ websitePassword})
  .then((result)=>{
    res.json({result: "done"});
  });
});


app.get("/update-password/:id", (req, res) => {
  return res.render('updatePassword', {id: req.params.id});
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
