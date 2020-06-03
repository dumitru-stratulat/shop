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