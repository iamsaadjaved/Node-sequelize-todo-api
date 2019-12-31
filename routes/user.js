const express = require('express')
const route = express.Router()
const db = require('../config/database')
const User = require('../model/user')


route.get('/' , async (req , res) => { 
     try{
        const users = await User.findAll()
        res.status(200).send(users)
     }catch(e){
         res.status.send("Error" , e.message)
     } 
})

route.post('/' , async (req , res) => { 
    try{
        const user = await User.create({ name : req.body.name })
        res.status(201).send(user)
  }catch(e){
      res.status(400).send("Error" , e.message)
  }  
 
})

route.get('/:id' , async (req , res) => { 
    try{
       
        const user = await User.findByPk(req.params.id)
         
        user ? (res.status(200).send(user.dataValues)) : (res.status(200).send('user not found'))


  }catch(e){
      console.log(e.message)
      res.status(400).send("Error" , e.message)
  }  
 
})

route.put('/:id' , async (req , res) => { 
    try{
        const user = await User.update(req.body , { where: { id: req.params.id} })
        
        if(user){
             const updatedUser = await User.findOne({ where: { id: req.params.id } })
             res.status(200).send({updatedUser})
         } 

  }catch(e){
      console.log(e.message)
      res.status(400).send("Error" , e.message)
  }  
 
})

route.delete('/:id' , async (req , res) => { 
    try{
        // await db.sync()  
        const userDeleted = await User.destroy({ where: { id: req.params.id } })
        // console.log(user.dataValues)

         if(userDeleted){

             res.status(200).send("User deleted successfully")
         }else {
            res.status(200).send("User already deleted")

         } 


  }catch(e){
      console.log(e.message)
      res.status(400).send("Error" , e.message)
  }  
 
})


module.exports = route