export interface User {
  id: string;
  name: string;
  email: string;
  role: 'farmer' | 'vendor' | 'rider' | 'admin';
  avatar?: string;
  phone?: string;
}
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  vendor: {
    id: string;
    name: string;
    rating: number;
  };
  stock: number;
  unit: string;
}
export interface Livestock {
  id: string;
  name: string;
  type: string;
  breed: string;
  age: number;
  weight: number;
  healthStatus: 'healthy' | 'sick' | 'monitoring';
  lastFed: string;
  image?: string;
  tagNumber: string;
}
export interface Crop {
  id: string;
  name: string;
  type: string;
  plantedDate: string;
  expectedHarvest: string;
  growthStage: string;
  fieldSize: number;
  soilCondition: {
    ph: number;
    nitrogen: number;
    phosphorus: number;
    potassium: number;
  };
  image?: string;
}
export interface Order {
  id: string;
  items: Array<{
    product: Product;
    quantity: number;
  }>;
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  createdAt: string;
  deliveryAddress: string;
}
export interface CartItem {
  product: Product;
  quantity: number;
}
export interface MLPrediction {
  confidence: number;
  result: string;
  recommendations: string[];
  timestamp: string;
}