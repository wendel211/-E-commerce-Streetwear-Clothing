import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`} className="group">
      <div className="bg-gray-900 rounded-lg overflow-hidden transition-transform duration-300 group-hover:scale-105">
        <div className="aspect-[4/5] overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="p-4">
          <h3 className="text-white font-semibold truncate">{product.name}</h3>
          <p className="text-gray-400">{product.category}</p>
          <p className="text-white font-bold mt-2">${product.price.toFixed(2)}</p>
        </div>
      </div>
    </Link>
  );
};