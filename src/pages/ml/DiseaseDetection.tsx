import React from 'react';
import { Button } from '../../src/components/ui/Button';
import { Upload } from 'lucide-react';
export function DiseaseDetection() {
  return <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Disease Detection</h1>
        <p className="text-gray-600 mt-1">
          Upload plant images for AI-powered disease detection
        </p>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center">
          <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600 mb-4">
            Drag and drop plant images here, or click to browse
          </p>
          <Button>Upload Images</Button>
        </div>

        <div className="mt-6">
          <h3 className="font-semibold mb-2">Recent Scans</h3>
          <div className="space-y-2">
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
              <span>Wheat leaf scan</span>
              <span className="text-green-600">Healthy</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
              <span>Rice plant scan</span>
              <span className="text-red-600">Disease detected</span>
            </div>
          </div>
        </div>
      </div>
    </div>;
}