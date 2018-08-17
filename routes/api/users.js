const express = require('express');
const route = express.Router();

//@route  GET api/users/test
//@desc   Test users route
//@access Public

route.get('/test', (req, res) => {
  res.send({ msg: 'Users work' })
});

module.exports = route;