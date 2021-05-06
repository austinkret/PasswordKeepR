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
    SELECT users.*, organizations.name as organization_name FROM users
    JOIN organizations ON organizations.id = organization_id
    WHERE organization_id = 1;
    `)
      .then(data => {
        const myorganization = data.rows;
        res.json({ myorganization });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  return router;
};
