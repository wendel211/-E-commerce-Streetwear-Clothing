import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../utils/fakeData';
import { ProductCard } from '../components/ProductCard';

export const Home: React.FC = () => {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section 
        className="h-screen bg-cover bg-center relative"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="container mx-auto px-4 h-full flex items-center relative">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Elevate Your Style
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Discover the latest in streetwear fashion. Bold designs for those who dare to stand out.
            </p>
            <Link
              to="/catalog"
              className="bg-white text-black px-8 py-4 rounded-md font-bold hover:bg-gray-200 transition duration-300"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/catalog"
              className="inline-block border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-black transition duration-300"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Shop by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {['T-Shirts', 'Hoodies', 'Pants', 'Accessories'].map((category) => (
              <Link
                key={category}
                to={`/catalog?category=${category}`}
                className="relative group overflow-hidden rounded-lg aspect-square"
              >
                <img
                  src={`https://images.unsplash.com/photo-${
                    category === 'T-Shirts' ? '1523398002811-999ca8dec234' :
                    category === 'Hoodies' ? '1512794268216-8da68193c275' :
                    category === 'Pants' ? '1542272201-b8000e69840a' :
                    '1523398002811-999ca8dec234'
                  }?auto=format&fit=crop&q=80`}
                  alt={category}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white">{category}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};