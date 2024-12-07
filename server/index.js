const express = require('express')
const mongoose = require('mongoose');
const morgan = require('morgan')
const cors = require('cors')
require('dotenv').config();
const Product = require("./models/product.model")

const app = express()
const port = 5000 || process.env.PORT

app.use(morgan('combined'))
app.use(cors())
app.use(express.json())

// DB connection
mongoose.connect(process.env.MONGOBD_URI)
    .then(() => console.log('Connected!'));

app.get('/', function (req, res) {
    res.send('Welcome to server')
})

// routes
app.post('/api/v1/product', async function (req, res) {
    try {
        const { product } = req.body;

        // Create the product
        const response = await Product.create(product);

        if (response) {
            return res.status(200).json({ message: "Product created successfully", response });
        }

        return res.status(400).json({ message: "Something went wrong" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }
});

app.get('/api/v1/home-products', async function (req, res) {
    try {
        const response = await Product.find().limit(6);

        if (response && response.length > 0) {
            return res.status(200).json({ products: response });
        }

        return res.status(400).json({ message: "No products found" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }
});

app.get('/api/v1/product', async function (req, res) {
    try {
        const response = await Product.find();

        if (response && response.length > 0) {
            return res.status(200).json({ products: response });
        }

        return res.status(400).json({ message: "No products found" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }
});

app.get('/api/v1/product/:id', async function (req, res) {
    try {
        const productId = req.params.id

        const response = await Product.findOne({
            _id: productId
        });

        if (!response) {
            return res.status(400).json({ message: "No product found" });
        }
        return res.status(200).json({ product: response });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }
});

app.get('/api/v1/my-product', async function (req, res) {
    try {
        const email = req.query.email

        console.log(email)

        const response = await Product.find({
            userEmail: email
        });

        if (!response) {
            return res.status(400).json({ message: "No products found" });
        }
        return res.status(200).json({ products: response });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }
});

app.put('/api/v1/product/:id', async function (req, res) {
    try {
        const { id } = req.params
        const updatedProduct = req.body;

        const response = await Product.findByIdAndUpdate(
            id,
            updatedProduct,
            {new: true}
        )

        if (!response) {
            return res.status(404).json({ message: "Product not found" });
        }

        return res.status(200).json({
            message: "Product updated successfully",
            product: response
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }
});

app.delete('/api/v1/product/:id', async function (req, res) {
    try {
        const { id } = req.params

        const response = await Product.findByIdAndDelete(id);

        if(response){
            return res.status(200).json({message: "Deleted Product Successfully"});
        }

        return res.status(400).json({message: "No Product Found"}); 
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }
});

app.get('/api/v1/categories', async function (req, res) {
    try {
        const response = await Product.distinct('categoryName')

        console.log(response)

        if (response && response.length > 0) {
            return res.status(200).json({ categories: response });
        }

        return res.status(400).json({ message: "No categories found" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }
});

app.listen(port, () => console.log(`Server is running at http://localhost:${port}`))
