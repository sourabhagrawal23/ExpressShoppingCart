const {
    request
} = require('express')

const Product = require('../../db').Product
const route = require('express').Router()

route.get('/', (req, res) => {
    //Get all products

    Product.findAll()
        .then((products) => {
            res.status(200).send(products)
        })
        .catch((err) => {
            res.status(500).send({
                error: "Couldnot retrieve products"
            })
        })
})

route.post('/', (req, res) => {
    //Add a new Product

    Product.create({
            name: req.body.name,
            price: req.body.price,
            manufacturer: request.body.manufacturer
        })
        .then((product) => {
            res.status(201).send(product)
        })
        .catch((err) => {
            res.status(501).send({
                error: "Couldnot create product"
            })
        })

})

exports = module.exports = route