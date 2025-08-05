import React, { useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log('Login attempt:', { email, password });
    // You can replace this with your navigation logic
    alert('Login functionality would redirect to dashboard');
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2086&q=80')"
        }}
      ></div>
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-blue-950/60"></div>
      
      {/* Animated Smoke/Blur Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-50">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-300/30 rounded-full filter blur-3xl opacity-40 animate-pulse"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/20 rounded-full filter blur-3xl opacity-30 animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/30 rounded-full filter blur-3xl opacity-40 animate-pulse animation-delay-4000"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200/30 rounded-full filter blur-3xl opacity-30 animate-pulse animation-delay-1000"></div>
        </div>
        
        {/* Additional floating smoke effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-white/15 rounded-full filter blur-2xl opacity-25 animate-bounce"></div>
          <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-blue-300/20 rounded-full filter blur-2xl opacity-20 animate-bounce animation-delay-3000"></div>
          <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-blue-200/25 rounded-full filter blur-xl opacity-30 animate-pulse animation-delay-1500"></div>
          <div className="absolute top-1/3 right-1/3 w-40 h-40 bg-white/10 rounded-full filter blur-xl opacity-20 animate-pulse animation-delay-2500"></div>
        </div>
        
        {/* Moving smoke particles */}
        <div className="absolute inset-0">
          <div className="absolute top-1/6 left-1/5 w-24 h-24 bg-blue-100/20 rounded-full filter blur-lg opacity-40 animate-ping"></div>
          <div className="absolute top-2/3 right-1/6 w-20 h-20 bg-white/15 rounded-full filter blur-lg opacity-30 animate-ping animation-delay-1000"></div>
          <div className="absolute top-1/2 left-2/3 w-16 h-16 bg-blue-200/25 rounded-full filter blur-md opacity-35 animate-ping animation-delay-2000"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-md px-6">
        {/* Welcome Message */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-white mb-2 tracking-wide">
            Groupe scolaire
          </h1>
          <h2 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-white to-blue-400 mb-4">
            Marcel Arnaud
          </h2>
          <p className="text-blue-100 text-lg font-medium">
             parcours d'excellence
          </p>
        </div>

        {/* Login Form */}
        <div className="backdrop-blur-lg bg-white/15 rounded-2xl border border-blue-200/30 shadow-2xl p-8">
          <div className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-blue-100 mb-2">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full px-4 py-3 bg-white/20 border border-blue-200/40 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm transition-all duration-300"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-blue-100 mb-2">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                className="w-full px-4 py-3 bg-white/20 border border-blue-200/40 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm transition-all duration-300"
              />
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-blue-400 bg-white/20 border-blue-200/40 rounded focus:ring-blue-400 focus:ring-2"
                />
                <span className="ml-2 text-sm text-blue-100">Remember me</span>
              </label>
              <a href="#" className="text-sm text-blue-300 hover:text-white transition-colors">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              onClick={handleSubmit}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-transparent shadow-lg"
            >
              Sign In
            </button>
          </div>

          {/* Additional Links */}
          <div className="mt-6 text-center">
            <p className="text-blue-200 text-sm">
              Don't have an account?{' '}
              <a href="#" className="text-blue-300 hover:text-white font-medium transition-colors">
                Contact Administration
              </a>
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-blue-300 text-sm">
            © 2024 GS Marcel School. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}