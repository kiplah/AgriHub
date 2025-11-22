import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { PlusIcon, SearchIcon } from 'lucide-react';
import { mockCrops } from '../../utils/mockData';
export function CropsList() {
  const [searchQuery, setSearchQuery] = useState('');
  const filteredCrops = mockCrops.filter(crop => crop.name.toLowerCase().includes(searchQuery.toLowerCase()) || crop.type.toLowerCase().includes(searchQuery.toLowerCase()));
  return <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">
            Crop Management
          </h1>
          <p className="text-gray-600 mt-1">
            Monitor your crops and farming activities
          </p>
        </div>
        <Link to="/crops/add">
          <Button>
            <PlusIcon className="w-4 h-4 mr-2" />
            Add Crop
          </Button>
        </Link>
      </div>

      {/* Search */}
      <div className="relative">
        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input type="text" placeholder="Search crops..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none" />
      </div>

      {/* Crops Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCrops.map(crop => <Link key={crop.id} to={`/crops/${crop.id}`}>
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              {crop.image && <div className="aspect-video rounded-lg overflow-hidden mb-4 bg-gray-100">
                  <img src={crop.image} alt={crop.name} className="w-full h-full object-cover" />
                </div>}

              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-semibold text-gray-900">{crop.name}</h3>
                  <p className="text-sm text-gray-600">{crop.type}</p>
                </div>
                <Badge variant="info">{crop.growthStage}</Badge>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-600">Field Size</p>
                  <p className="font-medium text-gray-900">
                    {crop.fieldSize} acres
                  </p>
                </div>
                <div>
                  <p className="text-gray-600">Planted</p>
                  <p className="font-medium text-gray-900">
                    {new Date(crop.plantedDate).toLocaleDateString()}
                  </p>
                </div>
                <div className="col-span-2">
                  <p className="text-gray-600">Expected Harvest</p>
                  <p className="font-medium text-gray-900">
                    {new Date(crop.expectedHarvest).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </Card>
          </Link>)}
      </div>

      {filteredCrops.length === 0 && <div className="text-center py-12">
          <p className="text-gray-600">No crops found</p>
        </div>}
    </div>;
}