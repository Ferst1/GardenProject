export const formatPrice = (price) => {
    return price.toLocaleString('en-US', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
  };
  
  export const formatPriceWithComma = (price) => {
    return price.toLocaleString('de-DE', { 
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };
  
  export const calculateDiscount = (price, discountPrice) => {
    if (!price || !discountPrice) return null;
    return Math.round(((price - discountPrice) / price) * 100);
};

export const calculateTotalPrice = (price, discountPrice, count) => {
    if (!price || count < 0) return 0;
    const finalPrice = discountPrice || price;
    return finalPrice * count;
};



export const sortProducts = (products, sortBy) => {
  const sortedProducts = [...products];
  switch (sortBy) {
    case 'newest':
      sortedProducts.sort((a, b) => b.id - a.id);
      break;
    case 'price-high-low':
      sortedProducts.sort((a, b) => (b.discont_price ?? b.price) - (a.discont_price ?? a.price));
      break;
    case 'price-low-high':
      sortedProducts.sort((a, b) => (a.discont_price ?? a.price) - (b.discont_price ?? b.price));
      break;
    default:
      break;
  }
  return sortedProducts;
};