import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Droplets, Calendar, Activity } from "lucide-react";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const growthData = [
  { week: "Week 1", height: 5 },
  { week: "Week 2", height: 12 },
  { week: "Week 3", height: 22 },
  { week: "Week 4", height: 35 },
  { week: "Week 5", height: 48 },
  { week: "Week 6", height: 62 },
];

const soilData = [
  { metric: "N", value: 45 },
  { metric: "P", value: 32 },
  { metric: "K", value: 28 },
];

export function CropDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const crop = {
    id: id,
    name: "Wheat Farm",
    type: "Wheat",
    area: "5 acres",
    stage: "Vegetative",
    health: "Good",
    plantedDate: "2023-12-01",
    soilType: "Loamy",
    irrigation: "Drip Irrigation",
    image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80",
  };

  const activities = [
    { date: "2024-01-18", activity: "Irrigation", notes: "Completed 2-hour cycle" },
    { date: "2024-01-15", activity: "Fertilizer Application", notes: "NPK 20-10-10 applied" },
    { date: "2024-01-10", activity: "Pest Control", notes: "Organic pesticide sprayed" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <Button variant="ghost" onClick={() => navigate("/crops")} className="mb-4">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Crops
        </Button>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">{crop.name}</h1>
            <p className="text-muted-foreground">ID: {crop.id}</p>
          </div>
          <Badge className="text-base px-4 py-1">
            {crop.health}
          </Badge>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <Card>
            <CardContent className="p-0">
              <img
                src={crop.image}
                alt={crop.name}
                className="w-full aspect-square object-cover rounded-t-lg"
              />
              <div className="p-6 space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Crop Type</span>
                  <span className="font-medium">{crop.type}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Area</span>
                  <span className="font-medium">{crop.area}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Stage</span>
                  <span className="font-medium">{crop.stage}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Planted</span>
                  <span className="font-medium">{new Date(crop.plantedDate).toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Soil Type</span>
                  <span className="font-medium">{crop.soilType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Irrigation</span>
                  <span className="font-medium">{crop.irrigation}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5" />
                Growth Progress
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={growthData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="week" />
                  <YAxis label={{ value: 'Height (cm)', angle: -90, position: 'insideLeft' }} />
                  <Tooltip />
                  <Line type="monotone" dataKey="height" stroke="hsl(var(--primary))" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Droplets className="h-5 w-5" />
                Soil NPK Levels
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={soilData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="metric" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="value" fill="hsl(var(--accent))" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-6">
                <Calendar className="h-5 w-5" />
                <h3 className="font-semibold text-lg">Farming Activities</h3>
              </div>
              <div className="space-y-4">
                {activities.map((activity, index) => (
                  <div key={index} className="pb-4 border-b last:border-0">
                    <div className="flex justify-between items-start mb-2">
                      <p className="font-medium">{activity.activity}</p>
                      <span className="text-sm text-muted-foreground">{activity.date}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{activity.notes}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};


