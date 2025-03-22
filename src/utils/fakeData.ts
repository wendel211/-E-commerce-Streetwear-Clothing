import { faker } from '@faker-js/faker';
import { Product } from '../types';

const categories = ['T-Shirts', 'Hoodies', 'Pants', 'Accessories'];
const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

export const generateProducts = (count: number): Product[] => {
  return Array.from({ length: count }, () => ({
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    price: parseFloat(faker.commerce.price({ min: 29, max: 299 })),
    description: faker.commerce.productDescription(),
    category: faker.helpers.arrayElement(categories),
    image: faker.image.urlLoremFlickr({ category: 'fashion', width: 800, height: 1000 }),
    sizes: faker.helpers.arrayElements(sizes, { min: 3, max: 6 }),
  }));
};

export const products = generateProducts(20);