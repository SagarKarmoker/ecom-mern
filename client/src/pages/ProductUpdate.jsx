import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet';

export default function ProductUpdate() {
    const product = useLoaderData();
    const {
        _id,
        imageUrl,
        itemName,
        categoryName,
        description,
        price,
        rating,
        customization,
        processingTime,
        stockStatus,
        userEmail,
        userName,
        createdAt,
        updatedAt
    } = product.product;

    // State to handle form fields and edit mode
    const [formData, setFormData] = useState({
        imageUrl,
        itemName,
        categoryName,
        description,
        price,
        rating,
        customization,
        processingTime,
        stockStatus,
        userEmail,
        userName
    });

    const [isEditing, setIsEditing] = useState(false); // Whether the form is in edit mode

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    // Handle form submission (update)
    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(
                `http://localhost:5000/api/v1/product/${_id}`,
                formData
            );

            if (response.status === 200) {
                toast.success("Product updated successfully!", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
                setIsEditing(false);
            }
        } catch (error) {
            console.error(error);
            toast.error("An error occurred while updating the product.", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
    };

    return (
        <>
            <Helmet>
                <title>Details Update | EquiSports</title>
                <meta name="Details Update" content="EquiSports | Details Update" />
            </Helmet>

            <div className="max-w-4xl lg:mx-auto mx-4 mt-10 p-6 bg-white rounded-lg shadow-md border my-10">
                <h2 className="text-3xl font-bold text-center mb-6">Update Product</h2>

                <form onSubmit={handleUpdate} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Image URL</label>
                        <input
                            type="text"
                            name="imageUrl"
                            value={formData.imageUrl}
                            onChange={handleChange}
                            disabled={!isEditing}
                            className="mt-2 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Item Name</label>
                        <input
                            type="text"
                            name="itemName"
                            value={formData.itemName}
                            onChange={handleChange}
                            disabled={!isEditing}
                            className="mt-2 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Category Name</label>
                        <input
                            type="text"
                            name="categoryName"
                            value={formData.categoryName}
                            onChange={handleChange}
                            disabled={!isEditing}
                            className="mt-2 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Description</label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            disabled={!isEditing}
                            className="mt-2 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Price</label>
                        <input
                            type="number"
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                            disabled={!isEditing}
                            className="mt-2 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Rating</label>
                        <input
                            type="number"
                            name="rating"
                            value={formData.rating}
                            onChange={handleChange}
                            disabled={!isEditing}
                            min="0"
                            max="5"
                            step="0.1"
                            className="mt-2 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Customization</label>
                        <input
                            type="text"
                            name="customization"
                            value={formData.customization}
                            onChange={handleChange}
                            disabled={!isEditing}
                            className="mt-2 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Processing Time</label>
                        <input
                            type="text"
                            name="processingTime"
                            value={formData.processingTime}
                            onChange={handleChange}
                            disabled={!isEditing}
                            className="mt-2 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Stock Status</label>
                        <select
                            name="stockStatus"
                            value={formData.stockStatus}
                            onChange={handleChange}
                            disabled={!isEditing}
                            className="mt-2 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        >
                            <option value="available">Available</option>
                            <option value="out-of-stock">Out of Stock</option>
                        </select>
                    </div>

                    {/* Show Email and Username as readonly */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">User Email</label>
                        <input
                            type="email"
                            name="userEmail"
                            value={formData.userEmail}
                            disabled
                            className="mt-2 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">User Name</label>
                        <input
                            type="text"
                            name="userName"
                            value={formData.userName}
                            disabled
                            className="mt-2 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    <div className="flex justify-between items-center">
                        <button
                            type="button"
                            onClick={() => setIsEditing((prev) => !prev)}
                            className="py-2 px-4 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors"
                        >
                            {isEditing ? 'Cancel' : 'Edit'}
                        </button>
                        {isEditing && (
                            <button
                                type="submit"
                                className="py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                            >
                                Save Changes
                            </button>
                        )}
                    </div>
                </form>
            </div>
        </>
    );
}
