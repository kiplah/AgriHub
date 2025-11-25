import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, SlidersHorizontal } from "lucide-react";

// Placeholder data
const products = [
  {
    id: "1",
    name: "Premium Dairy Milk",
    price: 150,
    image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&q=80",
    category: "Dairy",
    vendor: "Green Valley Farm",
  },
  {
    id: "2",
    name: "Organic Free-Range Eggs",
    price: 350,
    image: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=400&q=80",
    category: "Poultry",
    vendor: "Happy Hens Co.",
  },
  {
    id: "3",
    name: "Fresh Tomatoes (1kg)",
    price: 120,
    image: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=400&q=80",
    category: "Vegetables",
    vendor: "Sunshine Farms",
  },
  {
    id: "4",
    name: "Premium Beef (1kg)",
    price: 800,
    image: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=400&q=80",
    category: "Meat",
    vendor: "Prime Livestock",
  },
  {
    id: "5",
    name: "Organic Honey (500g)",
    price: 650,
    image: "https://images.unsplash.com/photo-1587049352846-4a222e784ce4?w=400&q=80",
    category: "Honey",
    vendor: "Bee Happy Farms",
  },
  {
    id: "6",
    name: "Fresh Carrots (1kg)",
    price: 90,
    image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400&q=80",
    category: "Vegetables",
    vendor: "Garden Fresh",
  },
];

const Marketplace = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Marketplace</h1>
        <p className="text-muted-foreground">Browse and purchase agricultural products</p>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search products..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className="w-full sm:w-48">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="dairy">Dairy</SelectItem>
            <SelectItem value="poultry">Poultry</SelectItem>
            <SelectItem value="vegetables">Vegetables</SelectItem>
            <SelectItem value="meat">Meat</SelectItem>
            <SelectItem value="honey">Honey</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="outline" className="w-full sm:w-auto">
          <SlidersHorizontal className="h-4 w-4 mr-2" />
          Filters
        </Button>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default Marketplace;
