var express = require('express');
var router = express.Router();
const User = require('../models/users');

const passport = require('passport');
const LocalStrategy = require('passport-local');
var bcrypt = require('bcrypt');

const { saveUserToDB } = require('../services/users');

passport.use(new LocalStrategy(async function verify(username, password, cb) {
  const user = await User.byUsername(username);
  if (!user) { return cb(null, false, { message: 'Incorrect username or password.' }); }
  if (!user.salt) { return cb(null, false, { message: 'Incorrect username or password.' }); }

  // hash the password and check.
  bcrypt.hash(password, user.salt, function (err, hash) {
    if (err) return next(err);
    if (hash == user.password) {
      return cb(null, user);
    }
    return cb(null, false, {message: 'Incorrect username or password.'});
  });
}));

passport.serializeUser(function(user, cb) {
  process.nextTick(function() {
    cb(null, { username: user.username, password: user.password });
  });
});

passport.deserializeUser(function(user, cb) {
  process.nextTick(function() {
    return cb(null, user);
  });
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* Register a new user */
router.post('/', async function(req, res, next) {
  const username = req.body.username;
  const password = req.body.password;
  if (!username) {
    res.render("register", {err: "invalid username"})
  }
  if (!password) {
    res.render("register", {err: "invalid password"})
  }
  const newUser = {
    username: username,
    password: password,
  };
  // push to database and see if its duplicated username.
  const err = await saveUserToDB(newUser);
  if (err) {
    res.render("register", {err: err})
    return;
  }

  req.login(newUser, function(err) {
    if (err) { return next(err); }
    res.redirect('/');
  });
});

/* Login with an existing user */
router.post('/authorize', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login'
}));

router.post('/logout', function(req, res, next) {
  req.logout(function(err) {
    if (err) { return next(err); }
    res.redirect('/');
  });
});
module.exports = router;
