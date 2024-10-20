import { useState, useEffect } from 'react';
import { fetchProducts } from '../utils/api';
import { useAuth } from '../context/AuthContext';


function ProductBrowse({ onViewProduct }) {
  
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [energyFilter, setEnergyFilter] = useState('');
  const [energyFilterType, setEnergyFilterType] = useState('over');
  const [sortOrder, setSortOrder] = useState('asc');
  const { isLoggedIn } = useAuth();
  
  useEffect(() => {
    const loadProducts = async () => {
      try {
        const products = await fetchProducts();
        setProducts(products);
      } catch (error) {
        console.log("Error fetching products: ", error);
      }
    };

    loadProducts();
  }, []);

  const handleViewProduct = (product) => {
    if (isLoggedIn) {
      onViewProduct(product);
    } else {
      alert('Please log in to view product details.');
    }
  };

  const handleSort = () => {
    const newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
    setSortOrder(newSortOrder);
  };

  const sortedProducts = [...products].sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.productEnergy - b.productEnergy;
    } else {
      return b.productEnergy - a.productEnergy;
    }
  });

  const filteredProducts = sortedProducts.filter(product => 
    product.productName.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (energyFilterType === 'over' ? product.productEnergy >= energyFilter : product.productEnergy <= energyFilter)
  );

  return (
    <div className="container mt-5">
      <h2 className="title is-4">Tuotteiden selailu</h2>
      <div className="field">
        <div className="control">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Hae tuotetta nimellä"
          />
        </div>
      </div>
      <div className="field is-grouped">
        <div className="control">
          <input
            type="number"
            value={energyFilter}
            onChange={(e) => setEnergyFilter(e.target.value)}
            placeholder="Hae energian mukaan"
          />
        </div>
        <div className="control">  
          <div className="select">
            <select
              value={energyFilterType}
              onChange={(e) => setEnergyFilterType(e.target.value)}
              style={{ marginLeft: '10px' }}
            >
              <option value="over">Yli</option>
              <option value="under">Alle</option>
            </select>
            </div>
          </div>
      </div>
      <table className="table is-fullwidth is-striped mt-4">
        <thead>
          <tr>
            <th>Tuotenimi</th>
            <th>Paino</th>
            <th onClick={handleSort} style={{ cursor: 'pointer' }}>
              Energia {sortOrder === 'asc' ? '↑' : '↓'}
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
        {filteredProducts.map((product) => (
            <tr key={product.productID}>
              <td>{product.productName}</td>
              <td>{product.productWeight}g</td>
              <td>{product.productEnergy} kcal</td>
              <td>
                <button className="button is-primary" onClick={() => handleViewProduct(product)}>Lisätietoja</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductBrowse;