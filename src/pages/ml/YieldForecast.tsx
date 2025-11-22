import React from 'react';
export function YieldForecast() {
  return <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Yield Forecast</h1>
        <p className="text-gray-600 mt-1">AI-powered crop yield predictions</p>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
          <p className="text-gray-500">Yield forecast chart</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-green-50 rounded-lg">
            <p className="text-sm text-gray-600">Wheat</p>
            <p className="text-2xl font-bold text-green-600">2.4 tons/acre</p>
            <p className="text-xs text-gray-500 mt-1">+12% vs last year</p>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-gray-600">Rice</p>
            <p className="text-2xl font-bold text-blue-600">3.1 tons/acre</p>
            <p className="text-xs text-gray-500 mt-1">+8% vs last year</p>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg">
            <p className="text-sm text-gray-600">Corn</p>
            <p className="text-2xl font-bold text-purple-600">4.2 tons/acre</p>
            <p className="text-xs text-gray-500 mt-1">+15% vs last year</p>
          </div>
        </div>
      </div>
    </div>;
}