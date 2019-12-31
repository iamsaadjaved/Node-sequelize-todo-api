const express = require('express')
const app = express()

const db =  require('./config/database')

db.authenticate()
   .then(() => console.log('connected'))
   .catch((e) => console.log(e.message))


app.use(express.json())   
app.use('/crud' , require('./routes/user'))


app.listen('5000' , () => console.log('server up and running'))