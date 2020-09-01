<<<<<<< HEAD

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback)=>{
MongoClient.connect('mongodb+srv://dimka:qwe123@cluster0-none3.mongodb.net/shop?retryWrites=true&w=majority')
.then(client=>{
  _db = client.db()
  callback(client)
})
.catch(err => {throw err})
}

const getDb  = () =>{
  if(_db){
    return _db;
  }
  throw 'No datatabase found'
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
=======
// const mysql = require('mysql2');

// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     database: 'e-shop',
//     password: '12345678',
// })

// module.exports = pool.promise()

const Sequelize = require('sequelize')

const sequelize = new Sequelize('e-shop','root','12345678',{dialect: 'mysql',host:'localhost'})

module.exports = sequelize
>>>>>>> 1c8fab9cf4a02c0e2d795794443176d8f2627ae1
