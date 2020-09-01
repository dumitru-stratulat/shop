const path = require('path');

const express = require('express');
<<<<<<< HEAD

const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const csrf = require('csurf');
const flash = require('connect-flash')

const errorController = require('./controllers/error');
const User = require('./models/user');

const MONGODB_URI = 'mongodb+srv://dimka:qwe123@cluster0-none3.mongodb.net/shop?retryWrites=true&w=majority';

const app = express();
const store = new MongoDBStore({
  uri: MONGODB_URI,
  collection: 'sessions'
});

const csrfProtection = csrf();
=======
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const sequelize = require('./util/database')


const app = express();
>>>>>>> 1c8fab9cf4a02c0e2d795794443176d8f2627ae1

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
<<<<<<< HEAD
const authRoutes = require('./routes/auth');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({secret: 'my secret', resave: false, saveUninitialized: false, store:store}))
app.use(csrfProtection);
app.use(flash());

app.use((req,res,next)=>{
  if(!req.session.user){
    return next();
  }
  User.findById(req.session.user._id)
  .then(user => {
    req.user = user;
    next()
  })
  .catch(err => console.log(err));
})
app.use((req,res,next)=>{
  res.locals.isAuthenticated = req.session.isLoggedIn;
  res.locals.csrfToken = req.csrfToken();
  next();
})

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(authRoutes);

app.use(errorController.get404);
mongoose
.connect(MONGODB_URI)
.then(result=>{
  User
  .findOne()
  .then(user=>{
    app.listen(3000);
  })
 
})
.catch(err=>
  console.log(err)
)

// mongoConnect(()=>{
// app.listen(3000)
// })
=======

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

sequelize.sync().then(result => {
    console.log(result)
    app.listen(3001)
})
.catch(err => {
    console.log(err)
})

// app.listen(3001);
>>>>>>> 1c8fab9cf4a02c0e2d795794443176d8f2627ae1
