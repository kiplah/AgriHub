import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { PlusIcon, SearchIcon } from 'lucide-react';
import { mockLivestock } from '../../utils/mockData';
export function LivestockList() {
  const [searchQuery, setSearchQuery] = useState('');
  const filteredLivestock = mockLivestock.filter(animal => animal.name.toLowerCase().includes(searchQuery.toLowerCase()) || animal.type.toLowerCase().includes(searchQuery.toLowerCase()));
  return <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">
            Livestock Management
          </h1>
          <p className="text-gray-600 mt-1">Track and manage your animals</p>
        </div>
        <Link to="/livestock/add">
          <Button>
            <PlusIcon className="w-4 h-4 mr-2" />
            Add Livestock
          </Button>
        </Link>
      </div>

      {/* Search */}
      <div className="relative">
        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input type="text" placeholder="Search livestock..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none" />
      </div>

      {/* Livestock Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredLivestock.map(animal => <Link key={animal.id} to={`/livestock/${animal.id}`}>
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              {animal.image && <div className="aspect-video rounded-lg overflow-hidden mb-4 bg-gray-100">
                  <img src={animal.image} alt={animal.name} className="w-full h-full object-cover" />
                </div>}

              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-semibold text-gray-900">{animal.name}</h3>
                  <p className="text-sm text-gray-600">{animal.breed}</p>
                </div>
                <Badge variant={animal.healthStatus === 'healthy' ? 'success' : animal.healthStatus === 'sick' ? 'error' : 'warning'}>
                  {animal.healthStatus}
                </Badge>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-600">Type</p>
                  <p className="font-medium text-gray-900">{animal.type}</p>
                </div>
                <div>
                  <p className="text-gray-600">Age</p>
                  <p className="font-medium text-gray-900">
                    {animal.age} years
                  </p>
                </div>
                <div>
                  <p className="text-gray-600">Weight</p>
                  <p className="font-medium text-gray-900">
                    {animal.weight} kg
                  </p>
                </div>
                <div>
                  <p className="text-gray-600">Tag</p>
                  <p className="font-medium text-gray-900">
                    {animal.tagNumber}
                  </p>
                </div>
              </div>
            </Card>
          </Link>)}
      </div>

      {filteredLivestock.length === 0 && <div className="text-center py-12">
          <p className="text-gray-600">No livestock found</p>
        </div>}
    </div>;
}