import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Eye } from 'lucide-react';
export function VerifyEmail() {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || 'your email';
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const handleChange = (index: number, value: string) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);
      // Auto-focus next input
      if (value && index < 5) {
        const nextInput = document.getElementById(`code-${index + 1}`);
        nextInput?.focus();
      }
    }
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const verificationCode = code.join('');
    if (verificationCode.length === 6) {
      // Store token and redirect to dashboard
      localStorage.setItem('token', 'demo-token');
      localStorage.setItem('user', JSON.stringify({
        email,
        verified: true
      }));
      navigate('/dashboard');
    }
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
              Verify Your Email
            </h1>
            <p className="text-white/90 text-lg">
              We've sent a 6-digit code to
            </p>
            <p className="text-green-300 font-medium mt-1">{email}</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-white font-medium mb-3 text-center">
                Enter Verification Code
              </label>
              <div className="flex gap-2 justify-center">
                {code.map((digit, index) => <input key={index} id={`code-${index}`} type="text" maxLength={1} value={digit} onChange={e => handleChange(index, e.target.value)} className="w-12 h-14 text-center text-2xl font-bold bg-white/20 border-b-2 border-white/40 text-white rounded-lg focus:outline-none focus:border-green-400 focus:bg-white/30 transition-all" required />)}
              </div>
            </div>

            <button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition-colors text-lg">
              Verify Email
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-white/80 text-sm">
              Didn't receive the code?{' '}
              <button className="text-green-300 hover:text-green-200 font-medium">
                Resend Code
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>;
}