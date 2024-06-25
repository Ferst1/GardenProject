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