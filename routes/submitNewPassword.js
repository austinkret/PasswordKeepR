// const credentials = require("../../routes/credentials");
const express = require('express');
const router  = express.Router();
const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'midterm'
});

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

  return pool.query(queryString, values)
  .then((result) => {
    console.log(result.rows[0]);
    result.rows[0];
    res.send(200);
    return 'success';
  })
  .catch((err) => {
    console.log(err.message);
  });
  });
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
