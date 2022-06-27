const express = require('express');
const  GiftExchange  = require('../models/gift-exchange');
const { BadRequestError } = require('../utils/errors');
const router = express.Router();


// request - past by the client
// response - send to the client
router.post('/pairs', (req, res, next) => {
    try {
        if (req.body && req.body.names) {
            res.status(200).send(GiftExchange.pairs(req.body.names))
        } else {
            next (new BadRequestError)
        }
    } catch(e) {
        next(e)
    }
})

router.post('/traditional', (req, res, next) => {
    try {
        if (req.body && req.body.names) {
            res.status(200).send(GiftExchange.traditional(req.body.names))
        } else {
            next (new BadRequestError)
        }
    } catch(e) {
        next(e)
    }
})

module.exports = router

