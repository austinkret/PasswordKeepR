// const credentials = require("../../routes/credentials");
const express = require('express');
const router  = express.Router();
// const { Pool } = require('pg');

// const pool = new Pool({
//   user: 'vagrant',
//   password: '123',
//   host: 'localhost',
//   database: 'midterm'
// });

module.exports = (db) => {
  router.post("/home", (req, res) => {
    const credentials = req.body;

    const queryString = `
    INSERT INTO credentials (
    website_name,
    website_url,
    website_username,
    website_password,
    user_id,
    created_at,
    modified_at,
    category
  )
  VALUES ($1, $2, $3, $4, 1, NOW(), NOW(), $5)
  RETURNING *;
  `;

    const values = [
      credentials.websitename,
      credentials.websiteurl,
      credentials.username,
      credentials.password,
      credentials.category
    ];

    return db.query(queryString, values)
      .then((result) => {
        res.sendStatus(200);
      })
      .catch((err) => {
        res.sendStatus(400);
        console.log(err.message);
      });
  });

  router.post('/delete/:id', (req, res) => {
    const queryString = `
    DELETE FROM credentials
    WHERE credentials.id = $1;`;

    const values = [ parseInt(req.params.id) ];
    console.log("REQ.PARAMS INFORMATION ------------ ", values);


    return db.query(queryString, values)
      .then(() => {
        res.sendStatus(200);
      })
      .catch((err) => {
        console.log(err.message);
      });
  });

  // router.post('/update-password/:id', (req, res) => {

  //   const queryString = `
  //   UPDATE credentials
  //   SET website_name = $1, website_url = $2, website_password = $3
  //   WHERE credentials.id = $4;`;

  //   const values = [ parseInt(req.params) ];

  //   console.log("REQ.PARAMS INFORMATION UPDATE PASSWORD------------ ", values);
  //   return db.query(queryString, values)
  //     .then(() => {
  //       res.sendStatus(200);
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  // });

  return router;
};




// const submitNewPassword = function(credentials) {
//   const queryString = `
//   INSERT INTO credentials (
//     website_name,
//     website_url,
//     website_username,
//     website_password,
//     user_id,
//     created_at,
//     modified_at,
//     category
//   )
//   VALUES ($1, $2, $3, $4, 1, NOW(), NOW(), $5)
//   RETURNING *;
//   `;

//   const values = [
//     credentials.websitename,
//     credentials.websiteurl,
//     credentials.username,
//     credentials.password,
//     credentials.category
//   ];

//   return pool.query(queryString, values)
//   .then((result) => {
//     result.rows[0];
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });
// }

// exports.submitNewPassword = submitNewPassword;

// CREATE TABLE credentials (
//   id SERIAL PRIMARY KEY NOT NULL,
//   website_name VARCHAR(255) NOT NULL,
//   website_url VARCHAR(255) NOT NULL,
//   website_username VARCHAR(255) NOT NULL,
//   website_password VARCHAR(255) NOT NULL,
//   user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
//   created_at TIMESTAMP,
//   modified_at TIMESTAMP,
//   category VARCHAR(255),
//   thumbnail_logo_url VARCHAR(255)
// );
