import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  const { imageUrl, itemName, description, price, rating, stockStatus } = product;

  return (
    <div className="card card-compact bg-base-100 shadow-xl border h-[500px]">
      <figure>
        <img
          src={imageUrl}
          alt={itemName}
          className="w-full h-64 object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{itemName}</h2>
        <p>{description}</p>
        <div className="flex items-center">
          <span className="text-yellow-500">
            {'★'.repeat(rating)}{'☆'.repeat(5 - rating)}
          </span>
          <span className="ml-2 text-sm text-gray-500">({rating})</span>
        </div>
        <div className="mt-2 flex justify-between items-center">
          <span className="text-xl font-bold">৳{price}</span>
          <span className={`badge ${stockStatus === 'available' ? 'badge-success' : 'badge-error'}`}>
            {stockStatus}
          </span>
        </div>
        <div className="card-actions justify-end mt-3">
          <Link to={`/product/${product._id}`} className='btn btn-primary w-full'>View Details</Link>
        </div>
      </div>
    </div>
  );
}
