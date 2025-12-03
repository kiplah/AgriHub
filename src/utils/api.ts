import axios from 'axios';
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Request interceptor for auth token
api.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Auth API
export const authAPI = {
  login: (email: string, password: string) => api.post('/auth/login', {
    email,
    password
  }),
  register: (data: any) => api.post('/auth/register', data),
  forgotPassword: (email: string) => api.post('/auth/forgot-password', {
    email
  })
};

// Marketplace API
export const marketplaceAPI = {
  getProducts: (params?: any) => api.get('/products', {
    params
  }),
  getProduct: (id: string) => api.get(`/products/${id}`),
  searchProducts: (query: string) => api.get('/products/search', {
    params: {
      q: query
    }
  })
};

// Livestock API
export const livestockAPI = {
  getAll: () => api.get('/livestock'),
  getById: (id: string) => api.get(`/livestock/${id}`),
  create: (data: any) => api.post('/livestock', data),
  update: (id: string, data: any) => api.put(`/livestock/${id}`, data),
  delete: (id: string) => api.delete(`/livestock/${id}`),
  addFeedingLog: (id: string, data: any) => api.post(`/livestock/${id}/feeding`, data)
};

// Crops API
export const cropsAPI = {
  getAll: () => api.get('/crops'),
  getById: (id: string) => api.get(`/crops/${id}`),
  create: (data: any) => api.post('/crops', data),
  update: (id: string, data: any) => api.put(`/crops/${id}`, data),
  delete: (id: string) => api.delete(`/crops/${id}`),
  addActivity: (id: string, data: any) => api.post(`/crops/${id}/activities`, data)
};

// ML API
export const mlAPI = {
  detectDisease: (formData: FormData) => api.post('/ml/disease-detection', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  }),
  predictGrowth: (data: any) => api.post('/ml/growth-prediction', data),
  analyzeSoil: (data: any) => api.post('/ml/soil-analysis', data),
  forecastYield: (data: any) => api.post('/ml/yield-forecast', data)
};

// Orders API
export const ordersAPI = {
  getAll: () => api.get('/orders'),
  getById: (id: string) => api.get(`/orders/${id}`),
  create: (data: any) => api.post('/orders', data),
  track: (id: string) => api.get(`/orders/${id}/track`)
};

// Logistics API
export const logisticsAPI = {
  createDelivery: (data: any) => api.post('/logistics/deliveries', data),
  getDeliveries: () => api.get('/logistics/deliveries'),
  trackParcel: (id: string) => api.get(`/logistics/track/${id}`)
};
export default api;