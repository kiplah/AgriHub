import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Activity, Scale, Calendar } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const weightData = [
  { month: "Jan", weight: 450 },
  { month: "Feb", weight: 470 },
  { month: "Mar", weight: 490 },
  { month: "Apr", weight: 510 },
  { month: "May", weight: 530 },
  { month: "Jun", weight: 550 },
];

const LivestockDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const animal = {
    id: id,
    type: "Dairy Cow",
    breed: "Holstein Friesian",
    age: "3 years",
    weight: "550kg",
    health: "Healthy",
    gender: "Female",
    image: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=800&q=80",
  };

  const feedingLog = [
    { date: "2024-01-20", feed: "Hay & Concentrate", amount: "25kg" },
    { date: "2024-01-19", feed: "Hay & Concentrate", amount: "25kg" },
    { date: "2024-01-18", feed: "Hay & Concentrate", amount: "25kg" },
  ];

  const healthRecords = [
    { date: "2024-01-15", event: "Routine Checkup", notes: "All vitals normal" },
    { date: "2024-01-01", event: "Vaccination", notes: "Annual vaccination completed" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <Button variant="ghost" onClick={() => navigate("/livestock")} className="mb-4">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Livestock
        </Button>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">{animal.type}</h1>
            <p className="text-muted-foreground">ID: {animal.id}</p>
          </div>
          <Badge variant={animal.health === "Healthy" ? "default" : "secondary"} className="text-base px-4 py-1">
            {animal.health}
          </Badge>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <Card>
            <CardContent className="p-0">
              <img
                src={animal.image}
                alt={animal.type}
                className="w-full aspect-square object-cover rounded-t-lg"
              />
              <div className="p-6 space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Breed</span>
                  <span className="font-medium">{animal.breed}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Age</span>
                  <span className="font-medium">{animal.age}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Gender</span>
                  <span className="font-medium">{animal.gender}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Current Weight</span>
                  <span className="font-medium">{animal.weight}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Scale className="h-5 w-5" />
                Weight Growth
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={weightData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="weight" stroke="hsl(var(--primary))" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <Tabs defaultValue="feeding">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="feeding">
                    <Activity className="h-4 w-4 mr-2" />
                    Feeding Log
                  </TabsTrigger>
                  <TabsTrigger value="health">
                    <Calendar className="h-4 w-4 mr-2" />
                    Health Records
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="feeding" className="mt-6">
                  <div className="space-y-4">
                    {feedingLog.map((entry, index) => (
                      <div key={index} className="flex justify-between items-start pb-4 border-b last:border-0">
                        <div>
                          <p className="font-medium">{entry.feed}</p>
                          <p className="text-sm text-muted-foreground">{entry.date}</p>
                        </div>
                        <Badge variant="outline">{entry.amount}</Badge>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="health" className="mt-6">
                  <div className="space-y-4">
                    {healthRecords.map((record, index) => (
                      <div key={index} className="pb-4 border-b last:border-0">
                        <div className="flex justify-between items-start mb-2">
                          <p className="font-medium">{record.event}</p>
                          <span className="text-sm text-muted-foreground">{record.date}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{record.notes}</p>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LivestockDetails;
