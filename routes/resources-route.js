const express = require('express');

const router = express.Router();

const db = require('../models/resources-models')

router.get('/', async (req, res, next)=>{
    try {
        res.json(await db.getAll())
    } catch(err){
        next(err)
    }
})

router.post('/', async (req, res, next)=>{
    res.json(await db.insert(req.body))
})

module.exports = router;