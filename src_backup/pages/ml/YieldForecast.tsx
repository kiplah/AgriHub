import React, { useState } from 'react';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Card } from '../../components/ui/Card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
export function YieldForecast() {
  const [formData, setFormData] = useState({
    cropType: 'Maize',
    fieldSize: '',
    growthStage: 'Flowering',
    soilQuality: 'Good',
    rainfall: ''
  });
  const [forecast, setForecast] = useState<any>(null);
  const handleForecast = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate forecast
    setForecast({
      estimatedYield: 4.2,
      confidence: 85,
      yieldRange: {
        min: 3.8,
        max: 4.6
      },
      comparison: [{
        category: 'Your Field',
        yield: 4.2
      }, {
        category: 'Regional Avg',
        yield: 3.5
      }, {
        category: 'Best Practice',
        yield: 5.0
      }],
      factors: [{
        name: 'Soil Quality',
        impact: 'Positive',
        score: 85
      }, {
        name: 'Weather Conditions',
        impact: 'Positive',
        score: 78
      }, {
        name: 'Growth Stage',
        impact: 'Neutral',
        score: 70
      }, {
        name: 'Field Management',
        impact: 'Positive',
        score: 82
      }]
    });
  };
  return <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">
          Crop Yield Forecast
        </h1>
        <p className="text-gray-600 mt-1">
          Predict harvest yield based on current conditions
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Input Form */}
        <Card>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Field Information
          </h2>

          <form onSubmit={handleForecast} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Crop Type
              </label>
              <select value={formData.cropType} onChange={e => setFormData({
              ...formData,
              cropType: e.target.value
            })} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none">
                <option>Maize</option>
                <option>Wheat</option>
                <option>Rice</option>
                <option>Beans</option>
                <option>Tomatoes</option>
              </select>
            </div>

            <Input label="Field Size (acres)" type="number" step="0.1" value={formData.fieldSize} onChange={e => setFormData({
            ...formData,
            fieldSize: e.target.value
          })} required />

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Current Growth Stage
              </label>
              <select value={formData.growthStage} onChange={e => setFormData({
              ...formData,
              growthStage: e.target.value
            })} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none">
                <option>Germination</option>
                <option>Vegetative</option>
                <option>Flowering</option>
                <option>Fruiting</option>
                <option>Maturity</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Soil Quality
              </label>
              <select value={formData.soilQuality} onChange={e => setFormData({
              ...formData,
              soilQuality: e.target.value
            })} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none">
                <option>Excellent</option>
                <option>Good</option>
                <option>Fair</option>
                <option>Poor</option>
              </select>
            </div>

            <Input label="Average Rainfall (mm/month)" type="number" value={formData.rainfall} onChange={e => setFormData({
            ...formData,
            rainfall: e.target.value
          })} required />

            <Button type="submit" className="w-full" size="lg">
              Generate Forecast
            </Button>
          </form>
        </Card>

        {/* Forecast Results */}
        <Card>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Yield Forecast
          </h2>

          {!forecast ? <div className="text-center py-12 text-gray-500">
              Fill in the form to see forecast
            </div> : <div className="space-y-6">
              <div className="p-6 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">Estimated Yield</p>
                <p className="text-4xl font-bold text-gray-900">
                  {forecast.estimatedYield}
                </p>
                <p className="text-gray-700 mt-1">tons per acre</p>
                <p className="text-sm text-gray-600 mt-3">
                  Range: {forecast.yieldRange.min} - {forecast.yieldRange.max}{' '}
                  tons/acre
                </p>
                <p className="text-sm text-emerald-700 font-medium mt-2">
                  {forecast.confidence}% confidence
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900 mb-3">
                  Yield Comparison
                </h3>
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart data={forecast.comparison}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="category" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="yield" fill="#10b981" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div>
                <h3 className="font-medium text-gray-900 mb-3">
                  Contributing Factors
                </h3>
                <div className="space-y-3">
                  {forecast.factors.map((factor: any, i: number) => <div key={i} className="flex items-center justify-between">
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900">
                          {factor.name}
                        </p>
                        <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                          <div className="bg-emerald-600 h-2 rounded-full" style={{
                      width: `${factor.score}%`
                    }} />
                        </div>
                      </div>
                      <span className={`ml-4 text-xs font-medium ${factor.impact === 'Positive' ? 'text-green-600' : factor.impact === 'Negative' ? 'text-red-600' : 'text-gray-600'}`}>
                        {factor.impact}
                      </span>
                    </div>)}
                </div>
              </div>
            </div>}
        </Card>
      </div>
    </div>;
}