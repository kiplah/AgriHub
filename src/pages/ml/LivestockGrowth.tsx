import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const LivestockGrowth = () => {
  const [prediction, setPrediction] = useState<any>(null);

  const handlePredict = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate prediction
    setPrediction({
      currentWeight: 450,
      predictedWeights: [
        { month: "Current", weight: 450 },
        { month: "Month 1", weight: 475 },
        { month: "Month 2", weight: 500 },
        { month: "Month 3", weight: 525 },
        { month: "Month 4", weight: 550 },
        { month: "Month 5", weight: 570 },
        { month: "Month 6", weight: 590 },
      ],
      timeToMaturity: "6 months",
      expectedFinalWeight: "590kg",
      confidence: 92,
    });
  };

  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Livestock Growth Prediction</h1>
        <p className="text-muted-foreground">Predict growth trajectory and time to maturity using AI</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Input Information</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handlePredict} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="animalType">Animal Type</Label>
                <Select required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cow">Dairy Cow</SelectItem>
                    <SelectItem value="chicken">Chicken</SelectItem>
                    <SelectItem value="goat">Goat</SelectItem>
                    <SelectItem value="sheep">Sheep</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="breed">Breed</Label>
                <Input id="breed" placeholder="e.g., Holstein Friesian" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="age">Current Age (months)</Label>
                <Input id="age" type="number" placeholder="24" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="currentWeight">Current Weight (kg)</Label>
                <Input id="currentWeight" type="number" placeholder="450" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="feedType">Feed Type</Label>
                <Select required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select feed" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="premium">Premium Feed</SelectItem>
                    <SelectItem value="standard">Standard Feed</SelectItem>
                    <SelectItem value="organic">Organic Feed</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button type="submit" className="w-full">
                <TrendingUp className="h-4 w-4 mr-2" />
                Generate Prediction
              </Button>
            </form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Growth Prediction</CardTitle>
          </CardHeader>
          <CardContent>
            {!prediction ? (
              <div className="text-center py-12 text-muted-foreground">
                <p>Fill in the form to generate growth predictions</p>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-muted rounded-lg">
                    <p className="text-sm text-muted-foreground mb-1">Time to Maturity</p>
                    <p className="text-2xl font-bold">{prediction.timeToMaturity}</p>
                  </div>
                  <div className="p-4 bg-muted rounded-lg">
                    <p className="text-sm text-muted-foreground mb-1">Expected Weight</p>
                    <p className="text-2xl font-bold text-primary">{prediction.expectedFinalWeight}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Badge>Confidence: {prediction.confidence}%</Badge>
                </div>

                <div>
                  <h3 className="font-semibold mb-4">Expected Growth Timeline</h3>
                  <ResponsiveContainer width="100%" height={250}>
                    <LineChart data={prediction.predictedWeights}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis label={{ value: 'Weight (kg)', angle: -90, position: 'insideLeft' }} />
                      <Tooltip />
                      <Legend />
                      <Line 
                        type="monotone" 
                        dataKey="weight" 
                        stroke="hsl(var(--primary))" 
                        strokeWidth={2}
                        name="Predicted Weight"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LivestockGrowth;
