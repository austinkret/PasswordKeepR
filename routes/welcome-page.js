const express = require('express');
const router  = express.Router();

module.exports = () => {
  router.get("/", (req, res) => {
    if (req.session.test) {
      return res.sendFile(path.join(__dirname + "/public/home.html"));
    }
    return res.render('welcome-page');
  });
  return router;
};


