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

    if (isNaN(req.body.price)) {
        return res.status(403).send({
            error: "Price is not a valid number"
        })
    }
    Product.create({
            name: req.body.name,
            price: parseFloat(req.body.price),
            manufacturer: req.body.manufacturer
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