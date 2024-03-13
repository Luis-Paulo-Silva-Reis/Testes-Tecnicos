import "../styles/HomePage.css";
import { useState } from "react";
import { Link } from "react-router-dom";

import { registerUser } from "../services/registerUser";

function HomePage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await registerUser(email, password, setMessage);
  };

  return (
    <div className="HomePage">
      <h1 className="title">Desafio Toolzz</h1>
      <div className="links">
        {/* Substitua as tags <a> por <Link> */}
        <button>
          <Link to="/WithBanner" className="link">
            Página de login com banner lateral esquerdo
          </Link>
        </button>
        <button>
          <Link to="/WithoutBanner" className="link">
            Página de login sem banner
          </Link>
        </button>
        <button>
          <Link to="/WithBannerDarkMode" className="link">
            Página de login com banner lateral esquerdo dark mode
          </Link>
        </button>
        <button>
          <Link to="/WithoutBannerDarkMode" className="link">
            Página de login sem banner dark mode
          </Link>
        </button>
      </div>

      <div className="container">
        <div className="form-container">
          <h2>Cadastro de Usuário</h2>
          <form className="user-form" onSubmit={handleSubmit}>
            <div>
              <label>Email:</label>
              <input
                className="user-input"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Senha:</label>
              <input
                className="user-input"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button className="submit-button" type="submit">
              Registrar
            </button>
          </form>
          {message && <p className="form-message">{message}</p>}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
