import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Menu from '../components/Menu';
import ProductQuery from '../components/ProductQuery';
import ProductBrowse from '../components/ProductBrowse';
import { useAuth } from '../context/AuthContext';


function LandingPage() {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const [selectedComponent, setSelectedComponent] = useState(() => {
    return localStorage.getItem('selectedComponent') || 'ProductQuery';
  });
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, [isLoggedIn, navigate]);

  useEffect(() => {
    localStorage.setItem('selectedComponent', selectedComponent);
  }, [selectedComponent]);

  const handleViewProduct = (product) => {
    setSelectedProduct(product);
    setSelectedComponent('ProductQuery');
  };

  const renderComponent = () => {

    if (!isLoggedIn) {
      return <p>Please log in to view this content.</p>;
    } 

    switch (selectedComponent) {
      case 'ProductQuery':
        return <ProductQuery product={selectedProduct}/>;
      case 'ProductBrowse':
        return <ProductBrowse onViewProduct={handleViewProduct}/>;
      default:
        return <ProductQuery onViewProduct={handleViewProduct}/>;
    }
  };

  return (
    <div className="container is-fluid">
      <div className="columns is-gapless">
        <div className="column has-background-light p-6">
          <Menu onSelectComponent={setSelectedComponent} />
        </div>
        <div className="column p-4 ml-4">
          {renderComponent()}
        </div>
      </div>
    </div>
  );
}

export default LandingPage;