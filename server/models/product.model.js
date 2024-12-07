const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
    imageUrl: {
        type: String,
        required: true,
    },
    itemName: {
        type: String,
        required: true,
    },
    categoryName: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        min: 0,
    },
    rating: {
        type: Number,
        required: true,
        min: 0,
        max: 5,
    },
    customization: {
        type: String
    },
    processingTime: {
        type: String
    },
    stockStatus: {
        type: String,
        enum: ['available', 'not_available'],
        required: true,
    },
    userEmail: {
        type: String,
        required: true,
        immutable: true,
    },
    userName: {
        type: String,
        required: true,
        immutable: true,
    },
}, { timestamps: true });


const Product = mongoose.model("Product", productSchema);
module.exports = Product;
