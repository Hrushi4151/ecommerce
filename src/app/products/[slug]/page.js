'use client';
import { motion } from 'framer-motion';
import Loader from '@/app/components/Loader';
import { Productsdata } from '@/app/components/Providers';
import { useContext, useEffect, useState } from 'react';
import { FaHeart, FaTruck, FaShieldAlt, FaExchangeAlt } from 'react-icons/fa';
import { toast } from 'react-hot-toast';

const ProductInfo = ({ params }) => {
  const { data, setFav, fav } = useContext(Productsdata);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState('');
  const [selectedVariant, setSelectedVariant] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [isZoomed, setIsZoomed] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const fetchProduct = () => {
      const foundProduct = data.find((item) => item._id === params.slug);
      if (foundProduct) {
        setProduct(foundProduct);
        setSelectedImage(foundProduct.images[0]);
        setSelectedVariant(foundProduct.variants?.[0] || '');
        
        // Check if product is in favorites
        const storedFav = JSON.parse(localStorage.getItem('fav') || '[]');
        const isInFavorites = storedFav.some(item => item._id === foundProduct._id);
        setIsFavorite(isInFavorites);
        setFav(storedFav); // Update context with stored favorites
        
        setLoading(false);
      }
    };
    
    if (data.length > 0) {
      fetchProduct();
    }
  }, [data, params.slug, setFav]);

  const handleAddToFavorites = () => {
    if (!product) return;

    let updatedFav = [...(fav || [])];
    
    if (isFavorite) {
      // Remove from favorites
      updatedFav = updatedFav.filter(item => item._id !== product._id);
      toast.success('Removed from favorites!');
    } else {
      // Add to favorites
      if (!updatedFav.some(item => item._id === product._id)) {
        updatedFav.push(product);
      }
      toast.success('Added to favorites!');
    }

    // Update localStorage and context
    localStorage.setItem('fav', JSON.stringify(updatedFav));
    setFav(updatedFav);
    setIsFavorite(!isFavorite);
  };

  if (loading || !product) {
    return (
      <div className="h-[calc(100vh-2.5rem)] m-5">
        <div className="h-full flex items-center justify-center bg-white rounded-xl dropshadowbtn">
          <Loader />
        </div>
      </div>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.5,
        staggerChildren: 0.1 
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="h-[calc(100vh-2.5rem)] m-5">
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="h-full bg-gray-50 rounded-xl dropshadowbtn overflow-auto hide-scrollbar text-black"
      >
        <div className="p-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Left Column - Image Gallery */}
              <motion.div 
                variants={itemVariants}
                className="w-full lg:w-1/2 space-y-4"
              >
                {/* Main Image */}
                <div 
                  className="relative aspect-square rounded-lg overflow-hidden bg-white shadow-lg border border-gray-300"
                  onMouseEnter={() => setIsZoomed(true)}
                  onMouseLeave={() => setIsZoomed(false)}
                >
                  <motion.img
                    src={selectedImage}
                    alt={product.name}
                    className="w-full h-full object-contain"
                    initial={false}
                    animate={isZoomed ? { scale: 1.1 } : { scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                {/* Thumbnail Gallery */}
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {product.images.map((image, idx) => (
                    <motion.button
                      key={idx}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex-shrink-0 w-20 h-20 rounded-md overflow-hidden border-2 
                        ${selectedImage === image ? 'border-pink-500' : 'border-gray-300'}`}
                      onClick={() => setSelectedImage(image)}
                    >
                      <img
                        src={image}
                        alt={`${product.name} view ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </motion.button>
                  ))}
                </div>
              </motion.div>

              {/* Right Column - Product Details */}
              <motion.div 
                variants={itemVariants}
                className="w-full lg:w-1/2 space-y-6"
              >
                {/* Product Header */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-1 text-sm bg-green-100 text-green-700 rounded-full font-semibold">
                      In Stock
                    </span>
                    <span className="text-black font-semibold">SKU: {product._id}</span>
                  </div>
                  <h1 className="text-3xl font-bold text-black">{product.name}</h1>
                  <div className="flex items-center gap-2">
                    <div className="flex text-yellow-500">
                      {'★'.repeat(5)}
                    </div>
                    <span className="text-black font-medium">({product.reviews || 0} Reviews)</span>
                  </div>
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-4">
                  <span className="text-4xl font-bold text-black">
                    Rs.{product.price.toLocaleString()}0
                  </span>
                  {product.oldPrice && (
                    <span className="text-xl font-medium text-black/75 line-through">
                      ₹{product.oldPrice.toLocaleString()}
                    </span>
                  )}
                </div>

                {/* Product Description */}
                <p className="text-black font-medium leading-relaxed">
                  {product.description || 'Experience premium quality and exceptional performance with this amazing product.'}
                </p>

                {/* Variants Selection */}
                {product.variants && (
                  <div className="space-y-4">
                    <h3 className="font-semibold text-black">Available Variants</h3>
                    <div className="flex flex-wrap gap-2">
                      {product.variants.map((variant, idx) => (
                        <motion.button
                          key={idx}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className={`px-4 py-2 rounded-md border-2 transition-colors font-medium
                            ${selectedVariant === variant 
                              ? 'border-pink-500 bg-pink-50 text-pink-700' 
                              : 'border-gray-300 text-black hover:border-pink-200'}`}
                          onClick={() => setSelectedVariant(variant)}
                        >
                          {variant}
                        </motion.button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Quantity and Actions */}
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center border-2 border-gray-300 rounded-md">
                    <button
                      className="px-4 py-2 text-black hover:text-pink-500 font-medium"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    >
                      -
                    </button>
                    <input
                      type="number"
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-16 text-center border-x-2 border-gray-300 py-2 text-black bg-transparent font-medium"
                      min="1"
                    />
                    <button
                      className="px-4 py-2 text-black hover:text-pink-500 font-medium"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`flex items-center justify-center gap-2 py-3 px-6 rounded-md transition-all font-medium
                      ${isFavorite 
                        ? 'bg-pink-600 text-white hover:bg-pink-700' 
                        : 'border-2 border-gray-300 text-black hover:border-pink-200 hover:text-pink-500'}`}
                    onClick={handleAddToFavorites}
                  >
                    <FaHeart className={isFavorite ? 'text-white' : 'text-pink-500'} />
                    {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
                  </motion.button>
                </div>

                {/* Features */}
                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-300">
                  <div className="flex items-center gap-2">
                    <FaTruck className="text-pink-500" />
                    <span className="text-black font-semibold">Free Shipping</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaShieldAlt className="text-pink-500" />
                    <span className="text-black font-semibold">2 Year Warranty</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaExchangeAlt className="text-pink-500" />
                    <span className="text-black font-semibold">30-Day Returns</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaShieldAlt className="text-pink-500" />
                    <span className="text-black font-semibold">Secure Payment</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Product Details Tabs */}
            <motion.div 
              variants={itemVariants}
              className="mt-12 border-t border-gray-300 pt-8"
            >
              <div className="grid md:grid-cols-3 gap-8">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-black">Specifications</h3>
                  <ul className="space-y-2">
                    {Object.entries(product.specifications || {}).map(([key, value], idx) => (
                      <li key={idx} className="flex justify-between">
                        <span className="text-black font-semibold">{key}:</span>
                        <span className="text-black">{value}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-black">Features</h3>
                  <ul className="space-y-2">
                    {(product.features || []).map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="text-pink-500">•</span>
                        <span className="text-black font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-black">Shipping Information</h3>
                  <div className="space-y-2">
                    <p className="text-black font-medium">• Free shipping on orders above ₹500</p>
                    <p className="text-black font-medium">• Delivery within 3-5 business days</p>
                    <p className="text-black font-medium">• Express delivery available</p>
                    <p className="text-black font-medium">• Track your order 24/7</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProductInfo;
