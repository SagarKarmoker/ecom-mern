import React from 'react'
import { Helmet } from 'react-helmet';
import { useLoaderData } from 'react-router-dom'

export default function ProductDetails() {
    const product = useLoaderData()
    console.log(product.product)

    if (!product || !product.product) {
        return <span className="loading loading-spinner loading-lg"></span>;
    }

    const { imageUrl, itemName, categoryName, description, price, rating, customization, processingTime, stockStatus, userEmail, userName } = product.product;

    return (
        <>
            <Helmet>
                <title>{itemName} Details | EquiSports</title>
                <meta name="Details" content="EquiSports | Details" />
            </Helmet>

            <div className="bg-gradient-to-r from-blue-50 to-blue-200 min-h-screen py-12 px-4">
                <div className="max-w-5xl mx-auto p-8 bg-white rounded-xl shadow-2xl flex flex-col md:flex-row">
                    {/* Left side: Product Image */}
                    <div className="md:w-1/2 mb-6 md:mb-0">
                        <img src={imageUrl} alt={itemName} className="w-full h-auto rounded-xl shadow-xl transform hover:scale-105 transition duration-500" />
                    </div>

                    {/* Right side: Product Details */}
                    <div className="md:w-1/2 pl-6">
                        <h1 className="text-4xl font-bold text-gray-800 hover:text-blue-600 transition duration-300">{itemName}</h1>
                        <h2 className="text-lg text-gray-600 mt-2">{categoryName}</h2>

                        {/* Rating */}
                        <div className="flex items-center mt-4">
                            <span className="text-yellow-400 text-xl">★</span>
                            <span className="text-gray-700 text-lg ml-2">{rating}</span>
                        </div>

                        <p className="text-gray-600 mt-4">{description}</p>

                        <div className="mt-4 space-y-3">
                            {/* Price */}
                            <p className="text-2xl font-semibold text-gray-800">৳{price}</p>

                            {/* Customization */}
                            <p className="text-sm text-gray-600">Customization: <span className="font-semibold">{customization}</span></p>

                            {/* Processing Time */}
                            <p className="text-sm text-gray-600">Processing Time: <span className="font-semibold">{processingTime}</span></p>

                            {/* Stock Status */}
                            <p className="text-sm text-gray-600">Stock Status: <span className="font-semibold">{stockStatus}</span></p>
                        </div>

                        <div className="mt-6 space-y-3">
                            {/* User Info */}
                            <p className="text-sm text-gray-500">Listed by: <span className="font-semibold text-gray-700">{userName}</span></p>
                            <p className="text-sm text-gray-500">Contact: <span className="font-semibold text-gray-700">{userEmail}</span></p>
                        </div>

                        {/* Buy Button */}
                        <button className="mt-8 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all">
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
