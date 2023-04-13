const express=require('express')
const router =require('express').Router()
const userController = require('./userController')

router.get('/user',userController.get)
router.post('/add',userController.add)
router.post('/update',userController.update)
router.delete('/delete',userController.delete)



module.exports=router