/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    db.query(`
    SELECT credentials.id, website_name, website_url, website_username, website_password, category
    FROM credentials
    JOIN users ON users.id = user_id
    WHERE users.organization_id = 1
    AND credentials.category = 'entertainment'
    ORDER BY website_name DESC;
    `)
      .then(data => {
        const entertainment = data.rows;
        res.json({ entertainment });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  return router;
};
