import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Upload, AlertCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";

const DiseaseDetection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
        setResult(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAnalyze = () => {
    setAnalyzing(true);
    // Simulate AI processing
    setTimeout(() => {
      setResult({
        disease: "Foot-and-Mouth Disease",
        confidence: 87,
        severity: "Moderate",
        recommendations: [
          "Isolate the affected animal immediately",
          "Contact a veterinarian for confirmation",
          "Administer supportive care and hydration",
          "Monitor other animals for similar symptoms",
        ],
      });
      setAnalyzing(false);
    }, 2000);
  };

  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Animal Disease Detection</h1>
        <p className="text-muted-foreground">Upload an image to detect potential diseases using AI</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Upload Image</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border-2 border-dashed border-border rounded-lg p-8">
              <div className="flex flex-col items-center justify-center gap-4">
                {selectedImage ? (
                  <img src={selectedImage} alt="Selected" className="max-h-64 rounded-lg" />
                ) : (
                  <>
                    <Upload className="h-12 w-12 text-muted-foreground" />
                    <div className="text-center">
                      <p className="text-sm font-medium">Click to upload or drag and drop</p>
                      <p className="text-xs text-muted-foreground mt-1">JPG, PNG up to 10MB</p>
                    </div>
                  </>
                )}
                <Label htmlFor="image-upload" className="cursor-pointer">
                  <Button variant="outline" asChild>
                    <span>{selectedImage ? "Change Image" : "Select Image"}</span>
                  </Button>
                </Label>
                <input
                  id="image-upload"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageUpload}
                />
              </div>
            </div>
            <Button
              className="w-full"
              onClick={handleAnalyze}
              disabled={!selectedImage || analyzing}
            >
              {analyzing ? "Analyzing..." : "Analyze Image"}
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Detection Results</CardTitle>
          </CardHeader>
          <CardContent>
            {!result ? (
              <div className="text-center py-12 text-muted-foreground">
                <p>Upload and analyze an image to see results</p>
              </div>
            ) : (
              <div className="space-y-6">
                <Alert>
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>
                    AI-powered detection is for reference only. Always consult a veterinarian for diagnosis.
                  </AlertDescription>
                </Alert>

                <div>
                  <h3 className="font-semibold text-lg mb-2">Detected Disease</h3>
                  <p className="text-2xl font-bold text-destructive mb-2">{result.disease}</p>
                  <div className="flex items-center gap-2">
                    <Badge>Confidence: {result.confidence}%</Badge>
                    <Badge variant="secondary">Severity: {result.severity}</Badge>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Recommended Actions</h3>
                  <ul className="space-y-2">
                    {result.recommendations.map((rec: string, index: number) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-xs font-medium text-primary">{index + 1}</span>
                        </span>
                        <span className="text-sm">{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DiseaseDetection;
