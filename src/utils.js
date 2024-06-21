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
  
  