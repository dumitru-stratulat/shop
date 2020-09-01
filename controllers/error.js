exports.get404 = (req, res, next) => {
<<<<<<< HEAD
  res.status(404).render('404', 
  { pageTitle: 'Page Not Found', 
    path: '/404',
    isAuthenticated: req.session.isLoggedIn
});
=======
  res.status(404).render('404', { pageTitle: 'Page Not Found', path: '/404' });
>>>>>>> 1c8fab9cf4a02c0e2d795794443176d8f2627ae1
};
