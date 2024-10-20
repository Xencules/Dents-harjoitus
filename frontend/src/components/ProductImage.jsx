import { useState, useEffect } from 'react';
import { imageMap } from '../assets';

const ProductImage = ({ productID, alt }) => {
  const [imageSrc, setImageSrc] = useState('');
  const [imageError, setImageError] = useState(false);

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
    return <p>Tuotekuva ei saatavilla</p>;
  };

  return (<div><img src={imageSrc} alt={alt} onError={handleImageError} /></div>);
};

export default ProductImage;