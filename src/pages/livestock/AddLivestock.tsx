import React from 'react';
import { Button } from '../../src/components/ui/Button';
import { Input } from '../../src/components/ui/Input';
export function AddLivestock() {
  return <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Add Livestock</h1>

      <div className="bg-white rounded-lg shadow p-6 max-w-2xl">
        <form className="space-y-4">
          <Input label="Type" type="text" placeholder="e.g., Cow, Buffalo, Goat" required />
          <Input label="Breed" type="text" required />
          <Input label="Age" type="text" required />
          <Input label="Weight (kg)" type="number" required />
          <Input label="Health Status" type="text" required />

          <div className="flex gap-4">
            <Button type="submit" className="flex-1">
              Add Livestock
            </Button>
            <Button type="button" className="flex-1 bg-gray-200 text-gray-700 hover:bg-gray-300">
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>;
}