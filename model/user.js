const Sequelize = require('sequelize')
const db = require('../config/database')

const Users = db.define('Users' , {
 
    name: {
        type : Sequelize.STRING
    }
} , { timestamps: false })

// db.sync({ force: false }).then(() => {})

module.exports = Users

