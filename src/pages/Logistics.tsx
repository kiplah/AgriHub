import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Truck, Package, MapPin, Clock } from "lucide-react";

export function Logistics() {
  const deliveries = [
    {
      id: "DEL-001",
      product: "Premium Dairy Milk - 100L",
      destination: "Nairobi Central Market",
      status: "in-transit",
      rider: "John Kamau",
      estimatedTime: "2 hours",
    },
    {
      id: "DEL-002",
      product: "Organic Eggs - 200 units",
      destination: "Westlands Store",
      status: "pending",
      rider: "Not assigned",
      estimatedTime: "Pending",
    },
    {
      id: "DEL-003",
      product: "Fresh Tomatoes - 50kg",
      destination: "Karen Supermarket",
      status: "delivered",
      rider: "Mary Wanjiku",
      estimatedTime: "Delivered",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "delivered":
        return "bg-success text-success-foreground";
      case "in-transit":
        return "bg-warning text-warning-foreground";
      case "pending":
        return "bg-secondary text-secondary-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Logistics & Delivery</h1>
          <p className="text-muted-foreground">Track and manage deliveries</p>
        </div>
        <Button>
          <Truck className="h-4 w-4 mr-2" />
          New Delivery Request
        </Button>
      </div>

      <div className="grid gap-4">
        {deliveries.map((delivery) => (
          <Card key={delivery.id}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{delivery.id}</CardTitle>
                <Badge className={getStatusColor(delivery.status)}>
                  {delivery.status.replace("-", " ").toUpperCase()}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="flex items-start gap-3">
                  <Package className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Product</p>
                    <p className="font-medium">{delivery.product}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Destination</p>
                    <p className="font-medium">{delivery.destination}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Truck className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Rider</p>
                    <p className="font-medium">{delivery.rider}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">ETA</p>
                    <p className="font-medium">{delivery.estimatedTime}</p>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex gap-2">
                <Button variant="outline" size="sm">
                  Track on Map
                </Button>
                <Button variant="outline" size="sm">
                  Contact Rider
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Delivery Map</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">Interactive map will be displayed here</p>
              <p className="text-sm text-muted-foreground mt-1">Showing real-time delivery locations</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};


