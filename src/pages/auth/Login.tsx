import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
export function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Store token and redirect to dashboard
    localStorage.setItem('token', 'demo-token');
    localStorage.setItem('user', JSON.stringify({
      email,
      verified: true
    }));
    window.location.href = '/dashboard';
  };
  return <div className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
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
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 shadow-2xl">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-green-400 mb-3">
              Welcome Back!
            </h1>
            <p className="text-white/90 text-lg">
              Log in to access your account.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-white font-medium mb-2">
                Email Address
              </label>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="w-full bg-transparent border-b-2 border-white/40 text-white placeholder-white/50 py-2 px-1 focus:outline-none focus:border-green-400 transition-colors" placeholder="Enter your email" required />
            </div>

            <div>
              <label className="block text-white font-medium mb-2">
                Password
              </label>
              <div className="relative">
                <input type={showPassword ? 'text' : 'password'} value={password} onChange={e => setPassword(e.target.value)} className="w-full bg-transparent border-b-2 border-white/40 text-white placeholder-white/50 py-2 px-1 pr-10 focus:outline-none focus:border-green-400 transition-colors" placeholder="Enter your password" required />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-2 top-1/2 -translate-y-1/2 text-white/70 hover:text-white">
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition-colors text-lg">
              Log In
            </button>
          </form>

          <div className="mt-6 flex items-center justify-between text-white/90 text-sm">
            <Link to="/auth/forgot-password" className="hover:text-green-300 transition-colors">
              Forgot Password?
            </Link>
            <Link to="/auth/register" className="hover:text-green-300 transition-colors">
              Create an Account
            </Link>
          </div>
        </div>
      </div>
    </div>;
}