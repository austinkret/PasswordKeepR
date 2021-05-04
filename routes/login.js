const express = require('express');
const router  = express.Router();

module.exports = () => {
  router.post("/login", (req, res) => {
    if (req.session.userId) {
      return res.render('home');
    }
    req.session.userId = 'userId-cookie';
    return res.render('home');
  });
  return router;
};
