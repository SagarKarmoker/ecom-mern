import React, { useContext, useState } from 'react'
import { AuthContext } from '../providers/AuthProvider';
import axios from 'axios'
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet';

export default function AddEquipment() {
    const { user } = useContext(AuthContext);

    const [formData, setFormData] = useState({
        imageUrl: '',
        itemName: '',
        categoryName: '',
        description: '',
        price: '',
        rating: '',
        customization: '',
        processingTime: '',
        stockStatus: '',
        userEmail: user.email || '',  // Read-only
        userName: user.displayName || '',    // Read-only
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/v1/product', {
                product: formData
            })

            console.log(response)

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

                setFormData({
                    imageUrl: '',
                    itemName: '',
                    categoryName: '',
                    description: '',
                    price: '',
                    rating: '',
                    customization: '',
                    processingTime: '',
                    stockStatus: '',
                    userEmail: user.email || '',  // Read-only
                    userName: user.displayName || '',    // Read-only
                });
            }

            if (response.status === 400) {
                toast.error(response.data.message, {
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

        } catch (error) {
            console.log(error)
        }
    };

    return (
        <>
            <Helmet>
                <title> Add Equipment | EquiSports</title>
                <meta name="Add Equipment" content="Add Equipment" />
            </Helmet>

            <div data-theme="light" className="max-w-4xl lg:mx-auto mx-4 p-6 shadow-lg rounded-lg mt-8 border my-10">
                <h2 className="text-3xl font-semibold text-center mb-8 text-gray-800">Add New Product</h2>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 gap-6">
                        <div>
                            <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700">Image URL:</label>
                            <input
                                type="text"
                                id="imageUrl"
                                name="imageUrl"
                                value={formData.imageUrl}
                                onChange={handleChange}
                                className="mt-2 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="itemName" className="block text-sm font-medium text-gray-700">Item Name:</label>
                            <input
                                type="text"
                                id="itemName"
                                name="itemName"
                                value={formData.itemName}
                                onChange={handleChange}
                                className="mt-2 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="categoryName" className="block text-sm font-medium text-gray-700">Category Name:</label>
                            <input
                                type="text"
                                id="categoryName"
                                name="categoryName"
                                value={formData.categoryName}
                                onChange={handleChange}
                                className="mt-2 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description:</label>
                            <textarea
                                id="description"
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                className="mt-2 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price:</label>
                            <input
                                type="number"
                                id="price"
                                name="price"
                                value={formData.price}
                                onChange={handleChange}
                                className="mt-2 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="rating" className="block text-sm font-medium text-gray-700">Rating:</label>
                            <input
                                type="number"
                                id="rating"
                                name="rating"
                                value={formData.rating}
                                onChange={handleChange}
                                min="0"
                                max="5"
                                step="0.1"
                                className="mt-2 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="customization" className="block text-sm font-medium text-gray-700">Customization:</label>
                            <input
                                type="text"
                                id="customization"
                                name="customization"
                                value={formData.customization}
                                onChange={handleChange}
                                className="mt-2 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="processingTime" className="block text-sm font-medium text-gray-700">Processing Time (Delivery Time):</label>
                            <input
                                type="text"
                                id="processingTime"
                                name="processingTime"
                                value={formData.processingTime}
                                onChange={handleChange}
                                className="mt-2 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="stockStatus" className="block text-sm font-medium text-gray-700">Stock Status:</label>
                            <select
                                id="stockStatus"
                                name="stockStatus"
                                value={formData.stockStatus}
                                onChange={handleChange}
                                className="mt-2 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                required
                            >
                                <option value="">Select Availability</option>
                                <option value="available">Available</option>
                                <option value="not_available">Not Available</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="userEmail" className="block text-sm font-medium text-gray-700">User Email:</label>
                            <input
                                type="email"
                                id="userEmail"
                                name="userEmail"
                                value={formData.userEmail}
                                readOnly
                                className="mt-2 p-3 w-full border border-gray-300 rounded-md shadow-sm bg-gray-100"
                            />
                        </div>
                        <div>
                            <label htmlFor="userName" className="block text-sm font-medium text-gray-700">User Name:</label>
                            <input
                                type="text"
                                id="userName"
                                name="userName"
                                value={formData.userName}
                                readOnly
                                className="mt-2 p-3 w-full border border-gray-300 rounded-md shadow-sm bg-gray-100"
                            />
                        </div>
                        <div className="mt-6">
                            <button type="submit" className="w-full py-3 px-4 bg-blue-600 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}
