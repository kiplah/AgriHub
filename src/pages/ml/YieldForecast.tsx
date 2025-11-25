import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { TrendingUp } from "lucide-react";

const YieldForecast = () => {
  const [forecast, setForecast] = useState<any>(null);

  const handleForecast = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate forecast
    setForecast({
      estimatedYield: "2,850 kg",
      yieldPerAcre: "570 kg/acre",
      confidence: 89,
      timeline: [
        { stage: "Current", yield: 0 },
        { stage: "Flowering", yield: 500 },
        { stage: "Grain Fill", yield: 1800 },
        { stage: "Maturity", yield: 2850 },
      ],
      factors: [
        { name: "Soil Quality", impact: "Positive", value: "+15%" },
        { name: "Weather", impact: "Neutral", value: "0%" },
        { name: "Irrigation", impact: "Positive", value: "+10%" },
        { name: "Pest Risk", impact: "Negative", value: "-5%" },
      ],
    });
  };

  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Crop Yield Forecast</h1>
        <p className="text-muted-foreground">Predict harvest yield based on farm conditions</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Farm Information</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleForecast} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="cropType">Crop Type</Label>
                <Select required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select crop" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="wheat">Wheat</SelectItem>
                    <SelectItem value="maize">Maize</SelectItem>
                    <SelectItem value="rice">Rice</SelectItem>
                    <SelectItem value="soybeans">Soybeans</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="farmSize">Farm Size (acres)</Label>
                <Input id="farmSize" type="number" step="0.1" placeholder="5.0" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="growthStage">Current Growth Stage</Label>
                <Select required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select stage" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="seedling">Seedling</SelectItem>
                    <SelectItem value="vegetative">Vegetative</SelectItem>
                    <SelectItem value="flowering">Flowering</SelectItem>
                    <SelectItem value="fruiting">Fruiting</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="soilCondition">Soil Condition</Label>
                <Select required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select condition" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="excellent">Excellent</SelectItem>
                    <SelectItem value="good">Good</SelectItem>
                    <SelectItem value="fair">Fair</SelectItem>
                    <SelectItem value="poor">Poor</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="irrigation">Irrigation System</Label>
                <Select required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select system" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="drip">Drip Irrigation</SelectItem>
                    <SelectItem value="sprinkler">Sprinkler</SelectItem>
                    <SelectItem value="flood">Flood Irrigation</SelectItem>
                    <SelectItem value="rainfed">Rain-fed</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button type="submit" className="w-full">
                <TrendingUp className="h-4 w-4 mr-2" />
                Generate Forecast
              </Button>
            </form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Yield Forecast</CardTitle>
          </CardHeader>
          <CardContent>
            {!forecast ? (
              <div className="text-center py-12 text-muted-foreground">
                <p>Fill in farm details to generate yield forecast</p>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-muted rounded-lg">
                    <p className="text-sm text-muted-foreground mb-1">Estimated Yield</p>
                    <p className="text-2xl font-bold text-primary">{forecast.estimatedYield}</p>
                  </div>
                  <div className="p-4 bg-muted rounded-lg">
                    <p className="text-sm text-muted-foreground mb-1">Per Acre</p>
                    <p className="text-2xl font-bold">{forecast.yieldPerAcre}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Badge>Confidence: {forecast.confidence}%</Badge>
                </div>

                <div>
                  <h3 className="font-semibold mb-4">Yield Timeline</h3>
                  <ResponsiveContainer width="100%" height={200}>
                    <BarChart data={forecast.timeline}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="stage" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="yield" fill="hsl(var(--primary))" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Impact Factors</h3>
                  <div className="space-y-2">
                    {forecast.factors.map((factor: any, index: number) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                        <span className="font-medium">{factor.name}</span>
                        <div className="flex items-center gap-2">
                          <Badge
                            variant={
                              factor.impact === "Positive"
                                ? "default"
                                : factor.impact === "Negative"
                                ? "destructive"
                                : "secondary"
                            }
                          >
                            {factor.value}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default YieldForecast;
