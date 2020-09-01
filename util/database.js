
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