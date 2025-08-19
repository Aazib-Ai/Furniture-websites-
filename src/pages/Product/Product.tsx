import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '../../components/layout/Container';
import { H1, H3, P } from '../../components/ui/Typography';
import { ProductImageGallery } from '../../components/ui/ProductImageGallery';
import { RatingStars } from '../../components/ui/RatingStars';
import { Price } from '../../components/ui/Price';
import Button from '../../components/ui/Button';
import { Icon } from '../../components/common/Icon';
import { products } from '../../data/products';
import { reviews } from '../../data/reviews';
import { useCartStore } from '../../stores/cartStore';
import { useRecentlyViewedStore } from '../../stores/recentlyViewedStore';
import { ProductTabs } from '../../components/ui/ProductTabs';
import { RelatedProductsCarousel } from '../../components/ui/RelatedProductsCarousel';
import { RecentlyViewedProducts } from '../../components/ui/RecentlyViewedProducts';
import { StockIndicator } from '../../components/ui/StockIndicator';
import { ShippingInfo } from '../../components/ui/ShippingInfo';
import { SizeGuideModal } from '../../components/ui/SizeGuideModal';

const Product: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id.toString() === id);
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [selectedMaterial, setSelectedMaterial] = useState<string>('');
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [quantity, setQuantity] = useState(1);
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const [isInWishlist, setIsInWishlist] = useState(false);
  const [showAddedAnimation, setShowAddedAnimation] = useState(false);
  const [showSizeGuide, setShowSizeGuide] = useState(false);

  const addItem = useCartStore(state => state.addItem);
  const addRecentlyViewed = useRecentlyViewedStore(state => state.addRecentlyViewed);

  // Add product to recently viewed when component mounts
  useEffect(() => {
    if (product) {
      addRecentlyViewed(product);
    }
  }, [product, addRecentlyViewed]);

  if (!product) {
    return (
      <Container>
        <div className="py-12">
          <H1 className="mb-8">Product Not Found</H1>
          <P className="text-gray-600">
            The product you're looking for doesn't exist.
          </P>
        </div>
      </Container>
    );
  }

  // Mock specifications - in real app, this would come from product data
  const specifications: Record<string, string> = {
    dimensions: '120cm x 80cm x 75cm',
    materials: 'Solid Oak Wood, Premium Leather, Steel Frame',
    weight: '45kg',
    care: 'Wipe clean with damp cloth. Avoid harsh chemicals.',
    warranty: '2 years manufacturer warranty',
    assembly: 'Some assembly required (tools included)',
    origin: 'Handcrafted in Italy'
  };

  const colors = ['Natural Oak', 'Walnut', 'Black', 'White'];
  const materials = ['Leather', 'Fabric', 'Velvet', 'Linen'];
  const sizes = ['Small', 'Medium', 'Large', 'X-Large'];

  // Mock size guide measurements
  const sizeGuideData: Record<string, string> = {
    small: 'Width: 80cm, Height: 75cm, Depth: 60cm',
    medium: 'Width: 100cm, Height: 75cm, Depth: 70cm',
    large: 'Width: 120cm, Height: 75cm, Depth: 80cm',
    xLarge: 'Width: 140cm, Height: 75cm, Depth: 90cm'
  };

  // Get product reviews
  const productReviews = reviews
    .filter(review => review.productId === product?.id)
    .map(review => ({
      id: review.reviewId,
      author: `User ${review.userId}`,
      rating: review.rating,
      date: review.date,
      comment: review.comment,
      helpful: Math.floor(Math.random() * 50)
    }));

  // Get related products (same category)
  const relatedProducts = products
    .filter(p => p.category === product?.category && p.id !== product?.id)
    .slice(0, 8);

  // Mock stock level
  const stockLevel = Math.floor(Math.random() * 20);

  const handleAddToCart = async () => {
    setIsAddingToCart(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 800));
    
    addItem({
      product: product,
      quantity,
      selectedOptions: {
        color: selectedColor || colors[0],
        size: selectedSize || sizes[0],
        material: selectedMaterial || materials[0]
      }
    });
    
    setIsAddingToCart(false);
    setShowAddedAnimation(true);
    
    // Hide animation after 2 seconds
    setTimeout(() => setShowAddedAnimation(false), 2000);
  };

  const handleToggleWishlist = () => {
    setIsInWishlist(!isInWishlist);
  };

  const incrementQuantity = () => setQuantity(prev => Math.min(prev + 1, 10));
  const decrementQuantity = () => setQuantity(prev => Math.max(prev - 1, 1));

  return (
    <Container>
      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div>
            <ProductImageGallery
              images={[product.image, product.image, product.image]}
              alt={product.name}
              className="mb-6"
            />
          </div>

          {/* Product Information */}
          <div className="space-y-6">
            {/* Title and Rating */}
            <div>
              <H1 className="text-3xl font-bold mb-2">{product.name}</H1>
              <div className="flex items-center gap-4 mb-4">
                <RatingStars rating={product.rating} size="md" />
                <span className="text-sm text-gray-600">
                  {product.rating.toFixed(1)} out of 5
                </span>
                <span className="text-sm text-gray-500">
                  ({Math.floor(Math.random() * 100 + 50)} reviews)
                </span>
              </div>
              <Price price={product.price} originalPrice={product.price * 1.2} className="text-3xl" />
            </div>

            {/* Stock Indicator */}
            <StockIndicator stock={stockLevel} />

            {/* Description */}
            <div className="prose prose-sm max-w-none">
              <P className="text-gray-700 leading-relaxed">
                {product.description}
              </P>
              <P className="text-gray-600 mt-4">
                Experience the perfect blend of style and functionality with our premium furniture piece.
                Crafted with meticulous attention to detail, this item brings sophistication to any space
                while providing exceptional comfort and durability.
              </P>
            </div>

            {/* Color Selector */}
            <div>
              <H3 className="text-lg font-semibold mb-3">Color</H3>
              <div className="flex gap-2">
                {colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                      selectedColor === color
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Material Selector */}
            <div>
              <H3 className="text-lg font-semibold mb-3">Material</H3>
              <div className="flex gap-2 flex-wrap">
                {materials.map((material) => (
                  <button
                    key={material}
                    onClick={() => setSelectedMaterial(material)}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                      selectedMaterial === material
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {material}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selector */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <H3 className="text-lg font-semibold">Size</H3>
                <button
                  onClick={() => setShowSizeGuide(true)}
                  className="text-sm text-blue-600 hover:text-blue-700 flex items-center gap-1"
                >
                  <Icon name="Ruler" size={14} />
                  Size Guide
                </button>
              </div>
              <div className="flex gap-2 flex-wrap">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                      selectedSize === size
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selector */}
            <div>
              <H3 className="text-lg font-semibold mb-3">Quantity</H3>
              <div className="flex items-center gap-4">
                <button
                  onClick={decrementQuantity}
                  className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                >
                  <Icon name="Minus" size={16} />
                </button>
                <span className="text-lg font-medium w-12 text-center">{quantity}</span>
                <button
                  onClick={incrementQuantity}
                  className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                >
                  <Icon name="Plus" size={16} />
                </button>
              </div>
            </div>

            {/* Shipping Information */}
            <ShippingInfo
              shippingCost={product.price > 500 ? 0 : 25}
              estimatedDays={3}
              freeShippingThreshold={500}
            />

            {/* Action Buttons */}
            <div className="flex gap-4">
              <Button
                onClick={handleAddToCart}
                disabled={isAddingToCart || stockLevel === 0}
                className="flex-1"
                size="lg"
              >
                {stockLevel === 0 ? (
                  'Out of Stock'
                ) : isAddingToCart ? (
                  <div className="flex items-center gap-2">
                    <Icon name="Loader" className="animate-spin" size={16} />
                    Adding...
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Icon name="ShoppingCart" size={16} />
                    Add to Cart
                  </div>
                )}
              </Button>
              
              <Button
                onClick={handleToggleWishlist}
                variant="outline"
                size="lg"
                className="px-4"
              >
                <Icon
                  name={isInWishlist ? "Heart" : "Heart"}
                  size={20}
                  className={isInWishlist ? 'text-red-500 fill-red-500' : ''}
                />
              </Button>
            </div>

            {/* Add to Cart Animation */}
            <AnimatePresence>
              {showAddedAnimation && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-md"
                >
                  <div className="flex items-center gap-2">
                    <Icon name="CheckCircle" size={16} />
                    <span>Added to cart successfully!</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Product Tabs Section */}
        <div className="mt-12">
          <ProductTabs
            description={`${product.description}. Experience the perfect blend of style and functionality with our premium furniture piece. Crafted with meticulous attention to detail, this item brings sophistication to any space while providing exceptional comfort and durability.`}
            specifications={specifications}
            reviews={productReviews}
          />
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <RelatedProductsCarousel products={relatedProducts} />
        </div>

        {/* Recently Viewed Products */}
        <div className="mt-16">
          <RecentlyViewedProducts currentProductId={product.id} />
        </div>
      </div>

      {/* Size Guide Modal */}
      <AnimatePresence>
        {showSizeGuide && (
          <SizeGuideModal
            isOpen={showSizeGuide}
            onClose={() => setShowSizeGuide(false)}
            measurements={sizeGuideData}
          />
        )}
      </AnimatePresence>
    </Container>
  );
};

export default Product;