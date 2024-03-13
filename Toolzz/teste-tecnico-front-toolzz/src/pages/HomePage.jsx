import "../styles/HomePage.css";
import { useState } from "react";

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
        <button>
          <a href="/WithBanner" className="link">
            Página de login com banner lateral esquerdo
          </a>
        </button>
        <button>
          <a href="/WithoutBanner" className="link">
            Página de login sem banner
          </a>
        </button>
        <button>
          <a href="/WithBannerDarkMode" className="link">
            Página de login com banner lateral esquerdo dark mode
          </a>
        </button>
        <button>
          <a href="/WithoutBannerDarkMode" className="link">
            Página de login sem banner dark mode
          </a>
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
