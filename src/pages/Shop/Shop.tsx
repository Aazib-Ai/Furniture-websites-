import React, { useState, useMemo } from 'react';
import { ProductCard } from '../../components/ui/ProductCard';
import { SearchBar } from '../../components/common/SearchBar';
import { Breadcrumb } from '../../components/common/Breadcrumb';
import Container from '../../components/layout/Container';
import Grid from '../../components/layout/Grid';
import Flex from '../../components/layout/Flex';
import Button from '../../components/ui/Button';
import { Icon } from '../../components/common/Icon';
import { products } from '../../data/products';

const Shop: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 2000 });
  const [sortBy, setSortBy] = useState('popularity');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // Filter products based on search and filters
  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Category filter
    if (selectedCategory) {
      filtered = filtered.filter(product => 
        product.category === selectedCategory
      );
    }

    // Price filter
    filtered = filtered.filter(product => 
      product.price >= priceRange.min && 
      product.price <= priceRange.max
    );

    // Sorting
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        filtered.sort((a, b) => b.id - a.id);
        break;
      case 'popularity':
      default:
        filtered.sort((a, b) => b.rating - a.rating);
        break;
    }

    return filtered;
  }, [searchQuery, selectedCategory, priceRange, sortBy]);

  // Pagination
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  // Get unique categories
  const categories = [...new Set(products.map(p => p.category))];

  const handleClearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('');
    setPriceRange({ min: 0, max: 2000 });
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Container className="py-8">
        <Breadcrumb 
          items={[
            { label: 'Home', href: '/' },
            { label: 'Shop', href: '/shop' }
          ]} 
        />
        
        <div className="mt-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Shop All Products</h1>
          
          {/* Search and Controls */}
          <Flex className="mb-6 flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            <div className="w-full md:w-96">
              <SearchBar 
                value={searchQuery}
                onSearch={setSearchQuery}
                placeholder="Search products..."
                className="w-full"
              />
            </div>
            
            <Flex className="gap-4 items-center">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="popularity">Most Popular</option>
                <option value="newest">Newest First</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
              
              <Flex className="gap-2">
                <Button
                  variant={viewMode === 'grid' ? 'primary' : 'secondary'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                  className="p-2"
                >
                  <Icon name="Grid" size={20} />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'primary' : 'secondary'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                  className="p-2"
                >
                  <Icon name="List" size={20} />
                </Button>
              </Flex>
            </Flex>
          </Flex>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filter Sidebar */}
            <aside className="w-full lg:w-64 flex-shrink-0">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold mb-4">Filters</h3>
                
                {/* Category Filter */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium mb-2">Category</h4>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  >
                    <option value="">All Categories</option>
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>

                {/* Price Range */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium mb-2">Price Range</h4>
                  <div className="space-y-2">
                    <input
                      type="range"
                      min="0"
                      max="2000"
                      value={priceRange.max}
                      onChange={(e) => setPriceRange({ ...priceRange, max: Number(e.target.value) })}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>${priceRange.min}</span>
                      <span>${priceRange.max}</span>
                    </div>
                  </div>
                </div>

                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleClearFilters}
                  className="w-full text-sm"
                >
                  Clear all filters
                </Button>
              </div>
            </aside>

            {/* Products Section */}
            <div className="flex-1">
              {/* Results Count */}
              <div className="mb-4 flex items-center justify-between">
                <p className="text-gray-600">
                  Showing {currentProducts.length} of {filteredProducts.length} products
                </p>
              </div>

              {/* Products Grid */}
              {currentProducts.length > 0 ? (
                <>
                  <Grid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {currentProducts.map(product => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </Grid>

                  {/* Pagination */}
                  {totalPages > 1 && (
                    <Flex className="mt-8 justify-center">
                      <nav className="flex gap-2">
                        <Button
                          variant="secondary"
                          size="sm"
                          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                          disabled={currentPage === 1}
                        >
                          Previous
                        </Button>
                        
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                          <Button
                            key={page}
                            variant={currentPage === page ? 'primary' : 'secondary'}
                            size="sm"
                            onClick={() => setCurrentPage(page)}
                          >
                            {page}
                          </Button>
                        ))}
                        
                        <Button
                          variant="secondary"
                          size="sm"
                          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                          disabled={currentPage === totalPages}
                        >
                          Next
                        </Button>
                      </nav>
                    </Flex>
                  )}
                </>
              ) : (
                <div className="text-center py-12">
                  <Icon name="Search" size={48} className="mx-auto mb-4 text-gray-400" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
                  <p className="text-gray-600 mb-4">Try adjusting your filters or search terms</p>
                  <Button onClick={handleClearFilters}>
                    Clear all filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Shop;