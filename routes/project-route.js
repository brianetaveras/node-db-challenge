const express = require('express');

const router = express.Router();

const db = require('../models/project-models')


router.get('/', async (req, res, next)=>{
    try{
       res.json(await db.getAll())
    } catch(err){
        next(err)
    }
})
router.get('/:id', async (req, res, next)=>{
    try{
        res.json(await db.getById(req.params.id))
    } catch(err){
        next(err)
    }
})


module.exports = router;