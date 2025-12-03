import { Product, Livestock, Crop, Order } from '../types';
export const mockProducts: Product[] = [{
  id: '1',
  name: 'Organic Tomatoes',
  description: 'Fresh organic tomatoes from local farms',
  price: 250,
  image: 'https://images.unsplash.com/photo-1546470427-227e8e7f0f6a?w=400',
  category: 'Vegetables',
  vendor: {
    id: 'v1',
    name: 'Green Valley Farm',
    rating: 4.8
  },
  stock: 150,
  unit: 'kg'
}, {
  id: '2',
  name: 'Fresh Milk',
  description: 'Pure cow milk, delivered daily',
  price: 120,
  image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400',
  category: 'Dairy',
  vendor: {
    id: 'v2',
    name: 'Dairy Fresh Co.',
    rating: 4.9
  },
  stock: 80,
  unit: 'liter'
}, {
  id: '3',
  name: 'Free Range Eggs',
  description: 'Farm fresh eggs from free-range chickens',
  price: 350,
  image: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=400',
  category: 'Poultry',
  vendor: {
    id: 'v3',
    name: 'Happy Hens Farm',
    rating: 4.7
  },
  stock: 200,
  unit: 'tray'
}, {
  id: '4',
  name: 'Organic Maize',
  description: 'Premium quality organic maize',
  price: 80,
  image: 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?w=400',
  category: 'Grains',
  vendor: {
    id: 'v1',
    name: 'Green Valley Farm',
    rating: 4.8
  },
  stock: 500,
  unit: 'kg'
}];
export const mockLivestock: Livestock[] = [{
  id: 'l1',
  name: 'Bessie',
  type: 'Cattle',
  breed: 'Friesian',
  age: 3,
  weight: 450,
  healthStatus: 'healthy',
  lastFed: '2024-01-15T08:00:00Z',
  tagNumber: 'C-001',
  image: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?w=400'
}, {
  id: 'l2',
  name: 'Daisy',
  type: 'Cattle',
  breed: 'Ayrshire',
  age: 2,
  weight: 380,
  healthStatus: 'healthy',
  lastFed: '2024-01-15T08:00:00Z',
  tagNumber: 'C-002',
  image: 'https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=400'
}, {
  id: 'l3',
  name: 'Clucky',
  type: 'Poultry',
  breed: 'Rhode Island Red',
  age: 1,
  weight: 2.5,
  healthStatus: 'monitoring',
  lastFed: '2024-01-15T07:30:00Z',
  tagNumber: 'P-015'
}];
export const mockCrops: Crop[] = [{
  id: 'c1',
  name: 'Maize Field A',
  type: 'Maize',
  plantedDate: '2023-11-01',
  expectedHarvest: '2024-03-15',
  growthStage: 'Flowering',
  fieldSize: 2.5,
  soilCondition: {
    ph: 6.5,
    nitrogen: 45,
    phosphorus: 38,
    potassium: 42
  },
  image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=400'
}, {
  id: 'c2',
  name: 'Tomato Greenhouse',
  type: 'Tomatoes',
  plantedDate: '2023-12-15',
  expectedHarvest: '2024-02-28',
  growthStage: 'Fruiting',
  fieldSize: 0.5,
  soilCondition: {
    ph: 6.8,
    nitrogen: 52,
    phosphorus: 45,
    potassium: 48
  },
  image: 'https://images.unsplash.com/photo-1592841200221-a6898f307baa?w=400'
}];
export const mockOrders: Order[] = [{
  id: 'o1',
  items: [{
    product: mockProducts[0],
    quantity: 5
  }, {
    product: mockProducts[1],
    quantity: 2
  }],
  total: 1490,
  status: 'delivered',
  createdAt: '2024-01-10T10:30:00Z',
  deliveryAddress: '123 Farm Road, Nairobi'
}, {
  id: 'o2',
  items: [{
    product: mockProducts[2],
    quantity: 3
  }],
  total: 1050,
  status: 'shipped',
  createdAt: '2024-01-14T14:20:00Z',
  deliveryAddress: '456 Green Street, Nakuru'
}];