import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({service}) => {
    const {id, pricing, image, serviceName, category, counselor} = service;
    return (
        <div className="flex relative">
        <Link
          to={`/service/${id}`}
          className="transition hover:scale-105 shadow-xl rounded-xl overflow-hidden"
        >
          <figure className="w-full h-48 overflow-hidden object-cover">
            <img src={image} alt="Shoes" />
          </figure>
          <div className="p-4 space-y-2">
            <h2 className="text-xl font-semibold">Service Name: {serviceName}</h2>
            <p className='font-medium'>Counselor Name: {counselor}</p>
            <p className='font-medium'>Category: {category}</p>
            <p className='font-medium mb-3'>Pricing: {pricing}</p>
            <button className='btn bg-gradient-to-r from-orange-400 to-orange-200 w-full'>Learn More</button>
          </div>
        </Link>
      </div>
    );
};

export default Card;