import React from 'react';
import { useParams } from 'react-router-dom';
export function LivestockDetails() {
  const {
    id
  } = useParams();
  return <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Livestock Details</h1>

      <div className="bg-white rounded-lg shadow p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-xl font-semibold mb-4">Basic Information</h2>
            <div className="space-y-2">
              <p>
                <span className="font-medium">Type:</span> Cow
              </p>
              <p>
                <span className="font-medium">Breed:</span> Holstein
              </p>
              <p>
                <span className="font-medium">Age:</span> 3 years
              </p>
              <p>
                <span className="font-medium">Weight:</span> 450 kg
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Health Status</h2>
            <div className="space-y-2">
              <p>
                <span className="font-medium">Status:</span>{' '}
                <span className="text-green-600">Good</span>
              </p>
              <p>
                <span className="font-medium">Last Checkup:</span> 2024-01-15
              </p>
              <p>
                <span className="font-medium">Vaccinations:</span> Up to date
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>;
}