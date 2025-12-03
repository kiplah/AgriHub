import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Card } from '../../components/ui/Card';
import { ArrowLeftIcon, UploadIcon } from 'lucide-react';
export function AddCrop() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    type: 'Maize',
    plantedDate: '',
    expectedHarvest: '',
    fieldSize: '',
    growthStage: 'Germination'
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/crops');
  };
  return <div className="max-w-2xl mx-auto space-y-6">
      <button onClick={() => navigate('/crops')} className="flex items-center text-gray-600 hover:text-gray-900">
        <ArrowLeftIcon className="w-4 h-4 mr-2" />
        Back to Crops
      </button>

      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Add New Crop</h1>
        <p className="text-gray-600 mt-1">Register a new crop field</p>
      </div>

      <Card>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Image Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Field Photo (Optional)
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
            <Input label="Field Name" value={formData.name} onChange={e => setFormData({
            ...formData,
            name: e.target.value
          })} placeholder="e.g., Maize Field A" required />

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Crop Type
              </label>
              <select value={formData.type} onChange={e => setFormData({
              ...formData,
              type: e.target.value
            })} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none">
                <option>Maize</option>
                <option>Tomatoes</option>
                <option>Wheat</option>
                <option>Rice</option>
                <option>Beans</option>
                <option>Potatoes</option>
              </select>
            </div>

            <Input label="Planted Date" type="date" value={formData.plantedDate} onChange={e => setFormData({
            ...formData,
            plantedDate: e.target.value
          })} required />

            <Input label="Expected Harvest Date" type="date" value={formData.expectedHarvest} onChange={e => setFormData({
            ...formData,
            expectedHarvest: e.target.value
          })} required />

            <Input label="Field Size (acres)" type="number" step="0.1" value={formData.fieldSize} onChange={e => setFormData({
            ...formData,
            fieldSize: e.target.value
          })} placeholder="0" required />

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Growth Stage
              </label>
              <select value={formData.growthStage} onChange={e => setFormData({
              ...formData,
              growthStage: e.target.value
            })} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none">
                <option>Germination</option>
                <option>Vegetative</option>
                <option>Flowering</option>
                <option>Fruiting</option>
                <option>Maturity</option>
              </select>
            </div>
          </div>

          <div className="flex gap-3">
            <Button type="submit" className="flex-1">
              Add Crop
            </Button>
            <Button type="button" variant="outline" onClick={() => navigate('/crops')}>
              Cancel
            </Button>
          </div>
        </form>
      </Card>
    </div>;
}