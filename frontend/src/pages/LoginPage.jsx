 
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      //const response = await axios.get(`http://localhost:8080/api/login?username=${username}&password=${password}`);
      const response = await axios.post('http://localhost:8080/api/login', {
        username,
        password,
      });
      console.log("Response: ", response);
      console.log("Response.status: ", response.data);
      
      if (response.status === 200 && response.data === true) {
        login();
        console.log("Login successful");
        navigate('/landing');
      }  else {
        console.error('Login failed: Invalid credentials');
        alert('Invalid credentials');
      }
    } catch (error) {
      console.log("Error: ", error);
      alert('Invalid server response. Please try again.');
      setUsername('');
      setPassword('');
    }
  };

  return (
    <div className="container mt-5">
      <div className="columns is-centered">
        <div className="column">
          <div className="box">
            <h2 className="title is-4 has-text-centered">Kirjautuminen</h2>
            <form onSubmit={handleLogin}>
              <div className="field">
                <label className="label">Käyttäjänimi:</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter your username"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Salasana:</label>
                <div className="control">
                  <input
                    className="input"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                  />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <button className="button is-primary is-fullwidth" type="submit">
                    Kirjaudu
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;