import { useState, useEffect } from 'react';
import { imageMap } from '../assets';

const ProductImage = ({ productID, alt }) => {
  const [imageSrc, setImageSrc] = useState('');
  const [imageError, setImageError] = useState(false);

  //console.log("productID in ProductImage: ", productID);
  //console.log("productImages in ProductImage: ", productImages);

  useEffect(() => {
    const loadImage = () => {
      if (imageMap[productID]) {
        setImageSrc(imageMap[productID]);
      } else {
        console.error('Error loading image for productID:', productID);
        setImageError(true);
      }
    };

    loadImage();
  }, [productID]);

  const handleImageError = () => {
    console.log("Image failed to load, setting imageError to true");
    setImageError(true);
  };

  if (imageError) {
    return <p>Product image not availableasas</p>;
  }

  return (<div><img src={imageSrc} alt={alt} onError={handleImageError} /></div>);
};

export default ProductImage;