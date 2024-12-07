import axios from 'axios';
import React from 'react'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function MyProductCard({ product }) {
    const { _id, imageUrl, itemName, categoryName, price } = product;

    const handleDelete = async () => {
        try {
            const response = await axios.delete(`http://localhost:5000/api/v1/product/${_id}`)
            if (response.status === 200) {
                toast.done("Deleted Succesfully", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });

                document.getElementById('delete_modal').close()
            }
            else {
                toast.error("Something went wrong", {
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
            toast.info("Try Again", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        } finally {
            document.getElementById('delete_modal').close()
        }
    }

    return (
        <div className="border rounded-lg overflow-hidden shadow-lg bg-white transform hover:scale-105 transition duration-300">
            {/* Product Image */}
            <img src={imageUrl} alt={itemName} className="w-full h-48 object-cover" />

            <div className="p-4">
                {/* Product ID */}
                <p className="text-sm text-gray-500 mb-2">Product ID: <span className="text-blue-600">{_id}</span></p>

                {/* itme name */}
                <p className="text-md font-semibold text-gray-700 mb-2">Item: {itemName}</p>

                {/* Category */}
                <p className="text-md font-semibold text-gray-700 mb-2">Category: {categoryName}</p>

                {/* Price */}
                <p className="text-xl font-bold text-gray-900">৳{price}</p>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-between p-4">
                <Link
                    to={`/update/${_id}`}
                    className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
                >
                    Update
                </Link>
                <button
                    onClick={() => document.getElementById('delete_modal').showModal()}
                    className="px-4 py-2 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition"
                >
                    Delete
                </button>
            </div>

            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <dialog id="delete_modal" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Are you sure you want to delete this product?</h3>
                    <p className="py-4">This action cannot be undone. Press "Delete" to confirm or "Cancel" to abort.</p>
                    <div className="modal-action flex gap-4">
                        <button
                            className="btn btn-danger"
                            onClick={handleDelete} // Function to delete the product
                        >
                            Delete
                        </button>
                        {/* if there is a button in form, it will close the modal */}
                        <button onClick={() => document.getElementById('delete_modal').close()} className="btn">Cancel</button>
                    </div>
                </div>
            </dialog>
        </div>
    )
}
