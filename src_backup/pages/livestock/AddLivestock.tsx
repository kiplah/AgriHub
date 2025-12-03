import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Card } from '../../components/ui/Card';
import { ArrowLeftIcon, UploadIcon } from 'lucide-react';
export function AddLivestock() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    type: 'Cattle',
    breed: '',
    age: '',
    weight: '',
    tagNumber: '',
    healthStatus: 'healthy'
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/livestock');
  };
  return <div className="max-w-2xl mx-auto space-y-6">
      <button onClick={() => navigate('/livestock')} className="flex items-center text-gray-600 hover:text-gray-900">
        <ArrowLeftIcon className="w-4 h-4 mr-2" />
        Back to Livestock
      </button>

      <div>
        <h1 className="text-2xl font-semibold text-gray-900">
          Add New Livestock
        </h1>
        <p className="text-gray-600 mt-1">Register a new animal to your farm</p>
      </div>

      <Card>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Image Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Animal Photo (Optional)
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-emerald-500 transition-colors cursor-pointer">
              <UploadIcon className="w-8 h-8 text-gray-400 mx-auto mb-2" />
              <p className="text-sm text-gray-600">
                Click to upload or drag and drop
              </p>
              <p className="text-xs text-gray-500 mt-1">PNG, JPG up to 5MB</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input label="Animal Name" value={formData.name} onChange={e => setFormData({
            ...formData,
            name: e.target.value
          })} placeholder="e.g., Bessie" required />

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Type
              </label>
              <select value={formData.type} onChange={e => setFormData({
              ...formData,
              type: e.target.value
            })} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none">
                <option>Cattle</option>
                <option>Poultry</option>
                <option>Goat</option>
                <option>Sheep</option>
                <option>Pig</option>
              </select>
            </div>

            <Input label="Breed" value={formData.breed} onChange={e => setFormData({
            ...formData,
            breed: e.target.value
          })} placeholder="e.g., Friesian" required />

            <Input label="Tag Number" value={formData.tagNumber} onChange={e => setFormData({
            ...formData,
            tagNumber: e.target.value
          })} placeholder="e.g., C-001" required />

            <Input label="Age (years)" type="number" value={formData.age} onChange={e => setFormData({
            ...formData,
            age: e.target.value
          })} placeholder="0" required />

            <Input label="Weight (kg)" type="number" value={formData.weight} onChange={e => setFormData({
            ...formData,
            weight: e.target.value
          })} placeholder="0" required />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Health Status
            </label>
            <select value={formData.healthStatus} onChange={e => setFormData({
            ...formData,
            healthStatus: e.target.value
          })} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none">
              <option value="healthy">Healthy</option>
              <option value="monitoring">Under Monitoring</option>
              <option value="sick">Sick</option>
            </select>
          </div>

          <div className="flex gap-3">
            <Button type="submit" className="flex-1">
              Add Livestock
            </Button>
            <Button type="button" variant="outline" onClick={() => navigate('/livestock')}>
              Cancel
            </Button>
          </div>
        </form>
      </Card>
    </div>;
}