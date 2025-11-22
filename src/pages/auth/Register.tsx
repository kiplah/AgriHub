import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, ShoppingCart, Store } from 'lucide-react';
export function Register() {
  const navigate = useNavigate();
  const [userType, setUserType] = useState<'buyer' | 'seller'>('buyer');
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    // Redirect to email verification
    navigate('/auth/verify-email', {
      state: {
        email: formData.email
      }
    });
  };
  return <div className="min-h-screen flex items-center justify-center px-4 py-8 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0" style={{
      backgroundImage: 'url("https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1920")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      filter: 'blur(8px)'
    }} />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-green-900/60 z-0" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-md">
        {/* User Type Toggle */}
        <div className="flex gap-3 justify-center mb-6">
          <button type="button" onClick={() => setUserType('buyer')} className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-medium transition-all ${userType === 'buyer' ? 'bg-green-500 text-white shadow-lg' : 'bg-white/20 text-white hover:bg-white/30'}`}>
            <ShoppingCart className="w-5 h-5" />
            Buyer
          </button>
          <button type="button" onClick={() => setUserType('seller')} className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-medium transition-all ${userType === 'seller' ? 'bg-green-500 text-white shadow-lg' : 'bg-white/20 text-white hover:bg-white/30'}`}>
            <Store className="w-5 h-5" />
            Seller
          </button>
        </div>

        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 shadow-2xl">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-green-400 mb-3">
              Join as a {userType === 'buyer' ? 'Buyer' : 'Seller'}
            </h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-white font-medium mb-2">
                User Name
              </label>
              <input type="text" value={formData.name} onChange={e => setFormData({
              ...formData,
              name: e.target.value
            })} className="w-full bg-transparent border-b-2 border-white/40 text-white placeholder-white/50 py-2 px-1 focus:outline-none focus:border-green-400 transition-colors" placeholder="Enter your name" required />
            </div>

            <div>
              <label className="block text-white font-medium mb-2">
                Email Address
              </label>
              <input type="email" value={formData.email} onChange={e => setFormData({
              ...formData,
              email: e.target.value
            })} className="w-full bg-transparent border-b-2 border-white/40 text-white placeholder-white/50 py-2 px-1 focus:outline-none focus:border-green-400 transition-colors" placeholder="Enter your email" required />
            </div>

            <div>
              <label className="block text-white font-medium mb-2">
                Password
              </label>
              <div className="relative">
                <input type={showPassword ? 'text' : 'password'} value={formData.password} onChange={e => setFormData({
                ...formData,
                password: e.target.value
              })} className="w-full bg-transparent border-b-2 border-white/40 text-white placeholder-white/50 py-2 px-1 pr-10 focus:outline-none focus:border-green-400 transition-colors" placeholder="Enter your password" required />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-2 top-1/2 -translate-y-1/2 text-white/70 hover:text-white">
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div>
              <label className="block text-white font-medium mb-2">
                Confirm Password
              </label>
              <input type="password" value={formData.confirmPassword} onChange={e => setFormData({
              ...formData,
              confirmPassword: e.target.value
            })} className="w-full bg-transparent border-b-2 border-white/40 text-white placeholder-white/50 py-2 px-1 focus:outline-none focus:border-green-400 transition-colors" placeholder="Confirm your password" required />
            </div>

            <button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition-colors text-lg mt-6">
              Sign Up as {userType === 'buyer' ? 'Buyer' : 'Seller'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-white/90 text-sm">
              Already have an account?{' '}
              <Link to="/auth/login" className="text-green-300 hover:text-green-200 font-medium">
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>;
}