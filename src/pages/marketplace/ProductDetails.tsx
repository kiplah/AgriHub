import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ShoppingCart, Heart, Star, Truck, Shield, Award } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export function ProductDetails() {
  const { productId } = useParams();

  // Placeholder data
  const product = {
    id: productId,
    name: "Premium Dairy Milk",
    price: 150,
    image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=800&q=80",
    category: "Dairy",
    vendor: "Green Valley Farm",
    rating: 4.8,
    reviews: 256,
    inStock: true,
    description: "Fresh, organic dairy milk from grass-fed cows. Rich in nutrients and delivered fresh daily.",
    specifications: {
      "Volume": "1 Liter",
      "Fat Content": "3.5%",
      "Protein": "3.2g per 100ml",
      "Shelf Life": "7 days refrigerated",
    },
  };

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="space-y-4">
          <div className="aspect-square rounded-lg overflow-hidden bg-muted">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <Badge className="mb-2">{product.category}</Badge>
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <p className="text-muted-foreground">by {product.vendor}</p>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${i < Math.floor(product.rating)
                    ? "fill-warning text-warning"
                    : "text-muted"
                    }`}
                />
              ))}
            </div>
            <span className="font-medium">{product.rating}</span>
            <span className="text-muted-foreground">({product.reviews} reviews)</span>
          </div>

          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-bold text-primary">
              KSh {product.price.toLocaleString()}
            </span>
            <span className="text-muted-foreground">per unit</span>
          </div>

          {product.inStock ? (
            <Badge variant="outline" className="border-success text-success">
              In Stock
            </Badge>
          ) : (
            <Badge variant="destructive">Out of Stock</Badge>
          )}

          <Separator />

          <div className="space-y-4">
            <div className="flex gap-4">
              <Button className="flex-1" size="lg" disabled={!product.inStock}>
                <ShoppingCart className="h-5 w-5 mr-2" />
                Add to Cart
              </Button>
              <Button variant="outline" size="lg">
                <Heart className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-3 text-sm">
              <Truck className="h-5 w-5 text-muted-foreground" />
              <span>Free delivery on orders above KSh 2,000</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Shield className="h-5 w-5 text-muted-foreground" />
              <span>Quality guaranteed or money back</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Award className="h-5 w-5 text-muted-foreground" />
              <span>Certified organic product</span>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details Tabs */}
      <Card>
        <CardContent className="p-6">
          <Tabs defaultValue="description">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="mt-6">
              <p className="text-muted-foreground">{product.description}</p>
            </TabsContent>
            <TabsContent value="specifications" className="mt-6">
              <div className="space-y-3">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-2 border-b">
                    <span className="font-medium">{key}</span>
                    <span className="text-muted-foreground">{value}</span>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="reviews" className="mt-6">
              <p className="text-muted-foreground">Customer reviews will be displayed here.</p>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};


