
import { useState , useEffect} from 'react';
import axios from 'axios';
import ProductImage from './ProductImage';

function ProductQuery({ product: initialProduct }) {
  const [gtin, setGtin] = useState('');
  const [product, setProduct] = useState(null);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    if (initialProduct) {
      if (initialProduct.image) {
        validateBase64Image(initialProduct.image);
      } else {
        setImageError(true);
      }
      setProduct(initialProduct);
      
    }
  }, [initialProduct]);
  

  const handleQuery = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/products/search/findByProductId?theProductId=${gtin}`);
      setProduct(response.data);
      if (response.data.image) {
        validateBase64Image(response.data.image);
      } else {
        setImageError(true);
      }

    } catch (error) {
      
      console.error('Error querying product:', error);
      alert('Tuotetta ei löytynyt');
      setProduct(null);
    }
  };

  // Tarkistus, että base64-koodattu kuva on oikeanlainen
  const validateBase64Image = (base64Image) => {
    const base64Pattern = /^data:image\/(jpeg|png|gif|bmp);base64,/;
    if (base64Pattern.test(base64Image)) {
      setImageError(false);
      console.log("Image validated");
    } else {
      setImageError(true);
      console.log("Image not validated");
    }
  }; 

  const handleImageError = () => {
    setImageError(true);
  };


  return (
    <div className="container mt-5">
      <h2 className="title is-4">Tuotekysely</h2>
      <div className="field">
        <div className="control">
          <input
            type="text"
            value={gtin}
            onChange={(e) => setGtin(e.target.value)}
            placeholder="Anna GTIN koodi"
          />
        </div>
      </div>
      <div className="control">
        <button className="button is-primary" onClick={handleQuery}>Hae</button>
      </div>
      {product && (
        <div className="card mt-5">
          <div className="card-content">
            <div className="media">
              <div className="media-left">
                {product.image && !imageError ? (
                  <figure className="image is-128x128">
                    <img
                      src={`data:image/jpeg;base64,${product.image}`}
                      alt={product.productName}
                      onError={handleImageError}
                    />
                  </figure>
                ) : (
                  <div>
                    {imageError && (
                      <div>
                        <ProductImage productID={product.productID} alt={product.productName} />
                      </div>
                    )}
                  </div>
                )}
              </div>
              <div className="media-content">
                <h3 className="title is-8">{product.productName}</h3>
                <p className="subtitle is-6 mt-5">Paino: {product.productWeight}g</p>
                <p className="subtitle is-6">Energia: {product.productEnergy} kcal</p>
                <p className="subtitle is-6">GTIN: {product.productID}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductQuery;