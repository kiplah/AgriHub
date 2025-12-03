import React, { useState } from 'react';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { CheckCircleIcon, AlertCircleIcon } from 'lucide-react';
export function SoilAnalysis() {
  const [formData, setFormData] = useState({
    nitrogen: '',
    phosphorus: '',
    potassium: '',
    ph: '',
    moisture: ''
  });
  const [analysis, setAnalysis] = useState<any>(null);
  const handleAnalyze = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate analysis
    setAnalysis({
      soilQuality: 'Good',
      suitableCrops: [{
        name: 'Maize',
        suitability: 95
      }, {
        name: 'Beans',
        suitability: 88
      }, {
        name: 'Tomatoes',
        suitability: 82
      }, {
        name: 'Potatoes',
        suitability: 78
      }],
      improvements: ['Add organic matter to improve soil structure', 'Consider lime application to adjust pH', 'Maintain consistent moisture levels'],
      npkStatus: {
        nitrogen: 'Adequate',
        phosphorus: 'Good',
        potassium: 'Excellent'
      }
    });
  };
  return <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">
          Soil Analysis & Crop Recommendation
        </h1>
        <p className="text-gray-600 mt-1">
          Analyze soil conditions and get crop recommendations
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Input Form */}
        <Card>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Soil Parameters
          </h2>

          <form onSubmit={handleAnalyze} className="space-y-4">
            <Input label="Nitrogen (N) - ppm" type="number" value={formData.nitrogen} onChange={e => setFormData({
            ...formData,
            nitrogen: e.target.value
          })} placeholder="0-100" required />

            <Input label="Phosphorus (P) - ppm" type="number" value={formData.phosphorus} onChange={e => setFormData({
            ...formData,
            phosphorus: e.target.value
          })} placeholder="0-100" required />

            <Input label="Potassium (K) - ppm" type="number" value={formData.potassium} onChange={e => setFormData({
            ...formData,
            potassium: e.target.value
          })} placeholder="0-100" required />

            <Input label="pH Level" type="number" step="0.1" value={formData.ph} onChange={e => setFormData({
            ...formData,
            ph: e.target.value
          })} placeholder="0-14" required />

            <Input label="Moisture Content (%)" type="number" value={formData.moisture} onChange={e => setFormData({
            ...formData,
            moisture: e.target.value
          })} placeholder="0-100" required />

            <Button type="submit" className="w-full" size="lg">
              Analyze Soil
            </Button>
          </form>
        </Card>

        {/* Analysis Results */}
        <Card>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Analysis Results
          </h2>

          {!analysis ? <div className="text-center py-12 text-gray-500">
              Enter soil parameters to see analysis
            </div> : <div className="space-y-6">
              <div className="flex items-center justify-between p-4 bg-emerald-50 rounded-lg">
                <div>
                  <p className="text-sm text-gray-600">Soil Quality</p>
                  <p className="text-xl font-semibold text-gray-900">
                    {analysis.soilQuality}
                  </p>
                </div>
                <CheckCircleIcon className="w-8 h-8 text-emerald-600" />
              </div>

              <div>
                <h3 className="font-medium text-gray-900 mb-3">NPK Status</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Nitrogen</span>
                    <Badge variant="success">
                      {analysis.npkStatus.nitrogen}
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Phosphorus</span>
                    <Badge variant="success">
                      {analysis.npkStatus.phosphorus}
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Potassium</span>
                    <Badge variant="success">
                      {analysis.npkStatus.potassium}
                    </Badge>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-medium text-gray-900 mb-3">
                  Recommended Crops
                </h3>
                <div className="space-y-2">
                  {analysis.suitableCrops.map((crop: any, i: number) => <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium text-gray-900">
                        {crop.name}
                      </span>
                      <div className="flex items-center gap-2">
                        <div className="w-24 bg-gray-200 rounded-full h-2">
                          <div className="bg-emerald-600 h-2 rounded-full" style={{
                      width: `${crop.suitability}%`
                    }} />
                        </div>
                        <span className="text-sm text-gray-600">
                          {crop.suitability}%
                        </span>
                      </div>
                    </div>)}
                </div>
              </div>

              <div>
                <h3 className="font-medium text-gray-900 mb-2 flex items-center">
                  <AlertCircleIcon className="w-4 h-4 mr-2 text-blue-600" />
                  Improvement Suggestions
                </h3>
                <ul className="space-y-2">
                  {analysis.improvements.map((improvement: string, i: number) => <li key={i} className="text-sm text-gray-700 flex items-start">
                        <span className="text-emerald-600 mr-2">•</span>
                        {improvement}
                      </li>)}
                </ul>
              </div>
            </div>}
        </Card>
      </div>
    </div>;
}