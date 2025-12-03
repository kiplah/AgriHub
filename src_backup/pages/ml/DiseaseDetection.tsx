import React, { useState } from 'react';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { UploadIcon, AlertCircleIcon, CheckCircleIcon } from 'lucide-react';
export function DiseaseDetection() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string>('');
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState<any>(null);
  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setPreview(URL.createObjectURL(file));
      setResult(null);
    }
  };
  const handleAnalyze = () => {
    setAnalyzing(true);
    // Simulate API call
    setTimeout(() => {
      setResult({
        disease: 'Leaf Blight',
        confidence: 87,
        severity: 'Moderate',
        recommendations: ['Remove and destroy infected leaves immediately', 'Apply copper-based fungicide', 'Improve air circulation around plants', 'Avoid overhead watering', 'Monitor surrounding plants for spread'],
        preventiveMeasures: ['Maintain proper plant spacing', 'Use disease-resistant varieties', 'Practice crop rotation', 'Keep the area clean and free of debris']
      });
      setAnalyzing(false);
    }, 2000);
  };
  return <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">
          Animal Disease Detection
        </h1>
        <p className="text-gray-600 mt-1">
          Upload an image to detect potential diseases
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upload Section */}
        <Card>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Upload Image
          </h2>

          <div className="space-y-4">
            <label className="block">
              <input type="file" accept="image/*" onChange={handleFileSelect} className="hidden" />
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-emerald-500 transition-colors cursor-pointer">
                {preview ? <img src={preview} alt="Preview" className="max-h-64 mx-auto rounded-lg" /> : <>
                    <UploadIcon className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                    <p className="text-gray-600">
                      Click to upload or drag and drop
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      PNG, JPG up to 10MB
                    </p>
                  </>}
              </div>
            </label>

            <Button onClick={handleAnalyze} disabled={!selectedFile || analyzing} className="w-full" size="lg">
              {analyzing ? 'Analyzing...' : 'Analyze Image'}
            </Button>
          </div>
        </Card>

        {/* Results Section */}
        <Card>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Analysis Results
          </h2>

          {!result ? <div className="text-center py-12 text-gray-500">
              Upload an image to see results
            </div> : <div className="space-y-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {result.disease}
                  </h3>
                  <p className="text-gray-600 mt-1">
                    Confidence: {result.confidence}%
                  </p>
                </div>
                <Badge variant={result.severity === 'Moderate' ? 'warning' : 'error'}>
                  {result.severity}
                </Badge>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                  <AlertCircleIcon className="w-4 h-4 mr-2 text-orange-600" />
                  Immediate Actions
                </h4>
                <ul className="space-y-2">
                  {result.recommendations.map((rec: string, i: number) => <li key={i} className="text-sm text-gray-700 flex items-start">
                      <span className="text-emerald-600 mr-2">•</span>
                      {rec}
                    </li>)}
                </ul>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                  <CheckCircleIcon className="w-4 h-4 mr-2 text-emerald-600" />
                  Prevention Tips
                </h4>
                <ul className="space-y-2">
                  {result.preventiveMeasures.map((measure: string, i: number) => <li key={i} className="text-sm text-gray-700 flex items-start">
                        <span className="text-emerald-600 mr-2">•</span>
                        {measure}
                      </li>)}
                </ul>
              </div>
            </div>}
        </Card>
      </div>
    </div>;
}