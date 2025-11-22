import React from 'react';
import { Button } from '../../src/components/ui/Button';
export function SoilAnalysis() {
  return <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Soil Analysis</h1>
        <p className="text-gray-600 mt-1">
          AI-powered soil health assessment and recommendations
        </p>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <h3 className="font-semibold mb-3">Soil Parameters</h3>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">pH Level</span>
                  <span className="text-sm font-medium">6.5</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{
                  width: '65%'
                }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Nitrogen</span>
                  <span className="text-sm font-medium">High</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{
                  width: '80%'
                }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Phosphorus</span>
                  <span className="text-sm font-medium">Medium</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-yellow-500 h-2 rounded-full" style={{
                  width: '50%'
                }}></div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Recommendations</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Add phosphorus-rich fertilizer</li>
              <li>• Maintain current pH levels</li>
              <li>• Consider crop rotation</li>
              <li>• Monitor moisture levels</li>
            </ul>
          </div>
        </div>

        <Button>Request New Analysis</Button>
      </div>
    </div>;
}