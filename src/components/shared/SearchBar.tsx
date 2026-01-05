import { useState, useEffect } from "react";
import { Search, Filter, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { products, categories } from "@/data/products";
import { cn } from "@/lib/utils";

interface SearchBarProps {
  onSearch: (query: string, filters: SearchFilters) => void;
  className?: string;
}

export interface SearchFilters {
  category: string;
  sortBy: 'name' | 'price-low' | 'price-high' | 'newest';
  inStock: boolean;
}

export const SearchBar = ({ onSearch, className }: SearchBarProps) => {
  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState<SearchFilters>({
    category: "All",
    sortBy: 'name',
    inStock: false,
  });
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    onSearch(query, filters);
  }, [query, filters, onSearch]);

  const clearFilters = () => {
    setFilters({
      category: "All",
      sortBy: 'name',
      inStock: false,
    });
    setQuery("");
  };

  const activeFiltersCount = [
    filters.category !== "All",
    filters.sortBy !== 'name',
    filters.inStock,
  ].filter(Boolean).length;

  return (
    <div className={cn("w-full max-w-4xl mx-auto", className)}>
      {/* Search Input */}
      <div className="relative mb-4">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search for spices, herbs, grains..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pl-12 pr-12 h-14 text-lg border-2 border-foreground/20 focus:border-foreground rounded-full"
        />
        {query && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setQuery("")}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0"
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>

      {/* Filter Toggle */}
      <div className="flex items-center justify-between">
        <Button
          variant="outline"
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-2"
        >
          <Filter className="h-4 w-4" />
          Filters
          {activeFiltersCount > 0 && (
            <Badge variant="secondary" className="ml-1">
              {activeFiltersCount}
            </Badge>
          )}
        </Button>

        {activeFiltersCount > 0 && (
          <Button variant="ghost" onClick={clearFilters} size="sm">
            Clear All
          </Button>
        )}
      </div>

      {/* Filters Panel */}
      {showFilters && (
        <div className="mt-3 sm:mt-4 p-4 sm:p-6 bg-secondary/50 rounded-lg border border-foreground/10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {/* Category Filter */}
            <div>
              <label className="font-display text-xs sm:text-sm uppercase tracking-widest mb-2 sm:mb-3 block">
                Category
              </label>
              <select
                value={filters.category}
                onChange={(e) => setFilters(prev => ({ ...prev, category: e.target.value }))}
                className="w-full p-2 text-sm border border-foreground/20 rounded-md bg-background"
              >
                <option value="All">All Categories</option>
                {categories.map((category) => (
                  <option key={category.name} value={category.name}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort By */}
            <div>
              <label className="font-display text-xs sm:text-sm uppercase tracking-widest mb-2 sm:mb-3 block">
                Sort By
              </label>
              <select
                value={filters.sortBy}
                onChange={(e) => setFilters(prev => ({ ...prev, sortBy: e.target.value as any }))}
                className="w-full p-2 text-sm border border-foreground/20 rounded-md bg-background"
              >
                <option value="name">Name (A-Z)</option>
                <option value="price-low">Price (Low to High)</option>
                <option value="price-high">Price (High to Low)</option>
                <option value="newest">Newest First</option>
              </select>
            </div>

            {/* In Stock Only */}
            <div>
              <label className="font-display text-xs sm:text-sm uppercase tracking-widest mb-2 sm:mb-3 block">
                Availability
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.inStock}
                  onChange={(e) => setFilters(prev => ({ ...prev, inStock: e.target.checked }))}
                  className="rounded border-foreground/20"
                />
                <span className="font-body text-xs sm:text-sm">In Stock Only</span>
              </label>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
