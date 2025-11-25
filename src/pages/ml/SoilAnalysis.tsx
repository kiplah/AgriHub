import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Lightbulb, Leaf } from "lucide-react";

const SoilAnalysis = () => {
  const [result, setResult] = useState<any>(null);

  const handleAnalyze = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate analysis
    setResult({
      suitableCrops: [
        { name: "Maize", suitability: 95 },
        { name: "Wheat", suitability: 88 },
        { name: "Soybeans", suitability: 82 },
      ],
      soilHealth: "Good",
      improvements: [
        "Increase Nitrogen levels by 5-10 units",
        "Consider adding organic compost to improve soil structure",
        "pH level is optimal for most crops",
        "Maintain current potassium levels",
      ],
    });
  };

  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Soil Analysis & Crop Recommendation</h1>
        <p className="text-muted-foreground">Analyze soil metrics to get crop recommendations</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Soil Parameters</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleAnalyze} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="nitrogen">Nitrogen (N) Level</Label>
                <Input id="nitrogen" type="number" placeholder="45" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phosphorus">Phosphorus (P) Level</Label>
                <Input id="phosphorus" type="number" placeholder="32" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="potassium">Potassium (K) Level</Label>
                <Input id="potassium" type="number" placeholder="28" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="ph">pH Level</Label>
                <Input id="ph" type="number" step="0.1" placeholder="6.5" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="moisture">Moisture Content (%)</Label>
                <Input id="moisture" type="number" placeholder="35" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="temperature">Soil Temperature (°C)</Label>
                <Input id="temperature" type="number" placeholder="22" required />
              </div>

              <Button type="submit" className="w-full">
                <Leaf className="h-4 w-4 mr-2" />
                Analyze Soil
              </Button>
            </form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Analysis Results</CardTitle>
          </CardHeader>
          <CardContent>
            {!result ? (
              <div className="text-center py-12 text-muted-foreground">
                <p>Enter soil parameters to get recommendations</p>
              </div>
            ) : (
              <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold">Soil Health Status</h3>
                    <Badge className="bg-success">{result.soilHealth}</Badge>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Suitable Crops</h3>
                  <div className="space-y-3">
                    {result.suitableCrops.map((crop: any, index: number) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                            <Leaf className="h-5 w-5 text-primary" />
                          </div>
                          <span className="font-medium">{crop.name}</span>
                        </div>
                        <Badge variant="outline">{crop.suitability}% match</Badge>
                      </div>
                    ))}
                  </div>
                </div>

                <Alert>
                  <Lightbulb className="h-4 w-4" />
                  <AlertDescription>
                    <p className="font-semibold mb-2">Soil Improvement Suggestions</p>
                  </AlertDescription>
                </Alert>

                <ul className="space-y-2">
                  {result.improvements.map((suggestion: string, index: number) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-medium text-primary">{index + 1}</span>
                      </span>
                      <span className="text-sm">{suggestion}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SoilAnalysis;
