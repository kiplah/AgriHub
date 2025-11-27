import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Eye } from "lucide-react";

const CropsList = () => {
  const crops = [
    {
      id: "C001",
      name: "Wheat Farm",
      area: "5 acres",
      stage: "Vegetative",
      health: "Good",
      plantedDate: "2023-12-01",
      image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=400&q=80",
    },
    {
      id: "C002",
      name: "Maize Farm",
      area: "3 acres",
      stage: "Flowering",
      health: "Excellent",
      plantedDate: "2023-11-15",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&q=80",
    },
    {
      id: "C003",
      name: "Tomato Greenhouse",
      area: "1 acre",
      stage: "Fruiting",
      health: "Needs Attention",
      plantedDate: "2024-01-05",
      image: "https://images.unsplash.com/photo-1592841200221-a6898f307baa?w=400&q=80",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Crop Management</h1>
          <p className="text-muted-foreground">Monitor and manage your crops</p>
        </div>
        <Link to="/crops/add">
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Add Crop
          </Button>
        </Link>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {crops.map((crop) => (
          <Card key={crop.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="aspect-video bg-muted overflow-hidden">
              <img
                src={crop.image}
                alt={crop.name}
                className="h-full w-full object-cover"
              />
            </div>
            <CardContent className="p-4">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-semibold text-lg">{crop.name}</h3>
                  <p className="text-sm text-muted-foreground">ID: {crop.id}</p>
                </div>
                <Badge 
                  variant={
                    crop.health === "Excellent" || crop.health === "Good" 
                      ? "default" 
                      : "secondary"
                  }
                >
                  {crop.health}
                </Badge>
              </div>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Area:</span>
                  <span className="font-medium">{crop.area}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Stage:</span>
                  <span className="font-medium">{crop.stage}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Planted:</span>
                  <span className="font-medium">{new Date(crop.plantedDate).toLocaleDateString()}</span>
                </div>
              </div>
              <Link to={`/crops/${crop.id}`}>
                <Button variant="outline" className="w-full">
                  <Eye className="h-4 w-4 mr-2" />
                  View Details
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CropsList;
