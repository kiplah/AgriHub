import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
export function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };
  return <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center px-4">
    <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-green-600 mb-2">
          Reset Password
        </h1>
        <p className="text-gray-600">
          {submitted ? 'Check your email for reset instructions' : 'Enter your email to receive reset instructions'}
        </p>
      </div>

      {!submitted ? <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="you@example.com"
            required
          />
        </div>

        <Button type="submit" className="w-full">
          Send Reset Link
        </Button>
      </form> : <div className="text-center py-4">
        <p className="text-green-600 mb-4">✓ Email sent successfully!</p>
      </div>}

      <p className="mt-6 text-center text-sm text-gray-600">
        <Link to="/auth/login" className="text-green-600 hover:text-green-700 font-medium">
          Back to sign in
        </Link>
      </p>
    </div>
  </div>;
}