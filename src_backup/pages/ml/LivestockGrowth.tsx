import React, { useState } from 'react';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Card } from '../../components/ui/Card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
export function LivestockGrowth() {
  const [formData, setFormData] = useState({
    animalType: 'Cattle',
    breed: '',
    currentAge: '',
    currentWeight: '',
    feedType: 'Standard'
  });
  const [prediction, setPrediction] = useState<any>(null);
  const handlePredict = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate prediction
    setPrediction({
      expectedWeight: 520,
      timeToMaturity: 18,
      growthRate: 2.3,
      timeline: [{
        month: 'Current',
        weight: parseInt(formData.currentWeight)
      }, {
        month: '3 months',
        weight: parseInt(formData.currentWeight) + 30
      }, {
        month: '6 months',
        weight: parseInt(formData.currentWeight) + 65
      }, {
        month: '9 months',
        weight: parseInt(formData.currentWeight) + 95
      }, {
        month: '12 months',
        weight: parseInt(formData.currentWeight) + 120
      }]
    });
  };
  return <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">
          Livestock Growth Prediction
        </h1>
        <p className="text-gray-600 mt-1">
          Predict growth patterns and optimal harvest time
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Input Form */}
        <Card>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Animal Information
          </h2>

          <form onSubmit={handlePredict} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Animal Type
              </label>
              <select value={formData.animalType} onChange={e => setFormData({
              ...formData,
              animalType: e.target.value
            })} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none">
                <option>Cattle</option>
                <option>Goat</option>
                <option>Sheep</option>
                <option>Pig</option>
              </select>
            </div>

            <Input label="Breed" value={formData.breed} onChange={e => setFormData({
            ...formData,
            breed: e.target.value
          })} placeholder="e.g., Friesian" required />

            <Input label="Current Age (months)" type="number" value={formData.currentAge} onChange={e => setFormData({
            ...formData,
            currentAge: e.target.value
          })} required />

            <Input label="Current Weight (kg)" type="number" value={formData.currentWeight} onChange={e => setFormData({
            ...formData,
            currentWeight: e.target.value
          })} required />

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Feed Type
              </label>
              <select value={formData.feedType} onChange={e => setFormData({
              ...formData,
              feedType: e.target.value
            })} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none">
                <option>Standard</option>
                <option>Premium</option>
                <option>Organic</option>
              </select>
            </div>

            <Button type="submit" className="w-full" size="lg">
              Generate Prediction
            </Button>
          </form>
        </Card>

        {/* Prediction Results */}
        <Card>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Growth Prediction
          </h2>

          {!prediction ? <div className="text-center py-12 text-gray-500">
              Fill in the form to see predictions
            </div> : <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-emerald-50 rounded-lg">
                  <p className="text-sm text-gray-600">Expected Weight</p>
                  <p className="text-2xl font-semibold text-gray-900">
                    {prediction.expectedWeight} kg
                  </p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-gray-600">Time to Maturity</p>
                  <p className="text-2xl font-semibold text-gray-900">
                    {prediction.timeToMaturity} months
                  </p>
                </div>
              </div>

              <div>
                <h3 className="font-medium text-gray-900 mb-3">
                  Growth Timeline
                </h3>
                <ResponsiveContainer width="100%" height={200}>
                  <LineChart data={prediction.timeline}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="weight" stroke="#10b981" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600 mb-2">
                  Average Growth Rate
                </p>
                <p className="text-lg font-semibold text-gray-900">
                  {prediction.growthRate} kg/month
                </p>
              </div>
            </div>}
        </Card>
      </div>
    </div>;
}