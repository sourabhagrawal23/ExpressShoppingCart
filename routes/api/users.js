const {
    request
} = require('express')

const User = require('../../db').User
const route = require('express').Router()

route.get('/', (req, res) => {
    //We want to send an array of allusers from our db here

    //we don`t want where clause and this works using promise api
    User.findAll()
        .then((users) => {
            res.status(200).send(users)
        })
        .catch((err) => {
            res.status(500).send({
                error: "Couldnot retrieve users"
            })
        })
})

route.post('/', (req, res) => {
    //We expect req to have name in it
    //so we will create a new users

    //takes new user object

    User.create({
            name: req.body.name
        })
        .then((user) => {
            res.status(201).send(user)
        })
        .catch((err) => {
            res.status(501).send({
                error: "Couldnot create user"
            })
        })
})

exports = module.exports = route