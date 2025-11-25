import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Eye } from "lucide-react";

const LivestockList = () => {
  const livestock = [
    {
      id: "L001",
      type: "Dairy Cow",
      breed: "Holstein Friesian",
      age: "3 years",
      weight: "550kg",
      health: "Healthy",
      image: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=400&q=80",
    },
    {
      id: "L002",
      type: "Dairy Cow",
      breed: "Jersey",
      age: "2 years",
      weight: "450kg",
      health: "Healthy",
      image: "https://images.unsplash.com/photo-1560114928-40f1f1eb26a0?w=400&q=80",
    },
    {
      id: "L003",
      type: "Chicken",
      breed: "Rhode Island Red",
      age: "6 months",
      weight: "2.5kg",
      health: "Under Observation",
      image: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=400&q=80",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Livestock Management</h1>
          <p className="text-muted-foreground">Manage and monitor your livestock</p>
        </div>
        <Link to="/livestock/add">
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Add Livestock
          </Button>
        </Link>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {livestock.map((animal) => (
          <Card key={animal.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="aspect-video bg-muted overflow-hidden">
              <img
                src={animal.image}
                alt={animal.type}
                className="h-full w-full object-cover"
              />
            </div>
            <CardContent className="p-4">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-semibold text-lg">{animal.type}</h3>
                  <p className="text-sm text-muted-foreground">ID: {animal.id}</p>
                </div>
                <Badge variant={animal.health === "Healthy" ? "default" : "secondary"}>
                  {animal.health}
                </Badge>
              </div>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Breed:</span>
                  <span className="font-medium">{animal.breed}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Age:</span>
                  <span className="font-medium">{animal.age}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Weight:</span>
                  <span className="font-medium">{animal.weight}</span>
                </div>
              </div>
              <Link to={`/livestock/${animal.id}`}>
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

export default LivestockList;
