import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Sidebar } from './components/layout/Sidebar';
import { Footer } from './components/layout/Footer';
// Landing & Public Pages
import { Landing } from './pages/Landing';
import { Products } from './pages/Products';
import { Services } from './pages/Services';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
// Auth Pages
import { Login } from './pages/auth/Login';
import { Register } from './pages/auth/Register';
import { ForgotPassword } from './pages/auth/ForgotPassword';
import { VerifyEmail } from './pages/auth/VerifyEmail';
// Main Pages
import { Dashboard } from './pages/Dashboard';
import { Profile } from './pages/Profile';
import { Settings } from './pages/Settings';
import { Orders } from './pages/Orders';
// Marketplace Pages
import { Marketplace } from './pages/marketplace/Marketplace';
import { ProductDetails } from './pages/marketplace/ProductDetails';
import { Cart } from './pages/marketplace/Cart';
import { Checkout } from './pages/marketplace/Checkout';
// Livestock Pages
import { LivestockList } from './pages/livestock/LivestockList';
import { AddLivestock } from './pages/livestock/AddLivestock';
import { LivestockDetails } from './pages/livestock/LivestockDetails';
// Crops Pages
import { CropsList } from './pages/crops/CropsList';
import { AddCrop } from './pages/crops/AddCrop';
// ML Pages
import { DiseaseDetection } from './pages/ml/DiseaseDetection';
import { LivestockGrowth } from './pages/ml/LivestockGrowth';
import { SoilAnalysis } from './pages/ml/SoilAnalysis';
import { YieldForecast } from './pages/ml/YieldForecast';
// Logistics
import { Logistics } from './pages/Logistics';
export function App() {
  const isAuthenticated = localStorage.getItem('token');
  return <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Landing />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/auth/verify-email" element={<VerifyEmail />} />
        <Route path="/auth/forgot-password" element={<ForgotPassword />} />

        {/* Protected Routes - Require Authentication */}
        <Route path="/*" element={isAuthenticated ? <div className="min-h-screen bg-gray-50 flex flex-col">
                <Navbar />
                <div className="flex flex-1">
                  <Sidebar />
                  <main className="flex-1 lg:pl-64 pt-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                      <Routes>
                        {/* Dashboard */}
                        <Route path="/dashboard" element={<Dashboard />} />

                        {/* Marketplace */}
                        <Route path="/marketplace" element={<Marketplace />} />
                        <Route path="/marketplace/:id" element={<ProductDetails />} />
                        <Route path="/marketplace/cart" element={<Cart />} />
                        <Route path="/marketplace/checkout" element={<Checkout />} />

                        {/* Livestock */}
                        <Route path="/livestock" element={<LivestockList />} />
                        <Route path="/livestock/add" element={<AddLivestock />} />
                        <Route path="/livestock/:id" element={<LivestockDetails />} />

                        {/* Crops */}
                        <Route path="/crops" element={<CropsList />} />
                        <Route path="/crops/add" element={<AddCrop />} />

                        {/* ML Tools */}
                        <Route path="/ml/disease-detection" element={<DiseaseDetection />} />
                        <Route path="/ml/livestock-growth" element={<LivestockGrowth />} />
                        <Route path="/ml/soil-analysis" element={<SoilAnalysis />} />
                        <Route path="/ml/yield-forecast" element={<YieldForecast />} />

                        {/* Logistics & Orders */}
                        <Route path="/logistics" element={<Logistics />} />
                        <Route path="/orders" element={<Orders />} />

                        {/* Profile & Settings */}
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/settings" element={<Settings />} />

                        {/* Fallback */}
                        <Route path="*" element={<Navigate to="/dashboard" replace />} />
                      </Routes>
                    </div>
                    <Footer />
                  </main>
                </div>
              </div> : <Navigate to="/auth/login" replace />} />
      </Routes>
    </BrowserRouter>;
}