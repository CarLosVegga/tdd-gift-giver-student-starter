const express = require('express')
var morgan = require('morgan')
// setup server
const app = express()
const giftRouter = require("./routes/gift-exchange.js")
const { NotFoundError } = require('./utils/errors')
const giftError = require("./utils/errors")

module.exports = app;

// MIDDLEWARE
// parse the information
app.use(express.json());
app.use(morgan("tiny"))
// midlleware what happens before the endpoints happen

app.get("/", (req, res) => {
    res.status(200).send({"ping": "pong"})
})

// endpoints in the router
app.use("/gift-exchange", giftRouter)
// app.use("/errors", giftError)
app.use((req, res, next) => {
    next(new NotFoundError())
})



app.use((error, req, res, next) => {
    let message = "Something wen't wrong in the application"
    let status = 500
    if (error.message)
        message = error.message
    if (error.status)
        status = error.status
    const errorObject = {
        "status": status,
        "message": message
    }
    res.status(status).send({ "error" : errorObject})
    next()
})



