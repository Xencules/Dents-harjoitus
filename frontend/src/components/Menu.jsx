/* eslint-disable react/prop-types */
import { useAuth } from '../context/AuthContext';


function Menu({ onSelectComponent }) {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    window.location.href = '/login';
  };

  return (
    <nav className="menu">
      <ul className="menu-list">
        <li>
          <button 
            className="button is-link is-light w-full mb-2"
            onClick={() => onSelectComponent('ProductQuery')}
            >
              TUOTEKYSELY
            </button>
        </li>
        <li>
          <button 
          className="button is-link is-light w-full mb-2"
          onClick={() => onSelectComponent('ProductBrowse')}
          >
            TUOTTEIDEN SELAILU
          </button>
        </li>
        <li>
          <button 
            className="button is-danger is-light w-full"
            onClick={handleLogout}
            >
              KIRJAUDU ULOS
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;