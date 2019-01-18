const express = require('express');
const router = express.Router();

 




router.get('/', (req, res) => {
    res.render('index')
  })
  
  // GET /signup
  router.get('/signup', (req, res) => {
    res.render('signup', {message: req.flash('signupMessage')})
  })
  
  // POST /signup
  router.post('/signup', (req, res) => {
    var signupStrategy = passport.authenticate('local-signup', {
      successRedirect: '/',
      failureRedirect: '/signup',
      failureFlash: true
    })
    return signupStrategy(req, res)
  })
  
  // GET /login
  router.get('/login', (req, res) => {
    res.render('login', {message: req.flash('loginMessage')})
  })
  
  // POST /login
  router.post('/login', (req, res) => {
    var loginProperty = passport.authenticate('local-login', {
      successRedirect: '/',
      failureRedirect: '/login',
      failureFlash: true
    })
    return loginProperty(req, res)
  })
  
  // GET /logout
  router.get('/logout', (req, res) => {
    req.logout()
    res.redirect('/')
  })
  
  // Restricted (cool people only!)
  router.get('/secret', (req, res) => {
    if (req.isAuthenticated()) { 
      res.render('secret')
    }
    else {
      res.redirect('/')
    }
  })

module.exports = router;
