import "../styles/LoginPageWithoutBannerDark.css";
import { useState } from "react";
import ButtonWithHover from "../components/ButtonWithHover";
import tz from "../assets/icons/TZDark.svg";
import tzHover from "../assets/icons/Tzhover.svg";
import Fb from "../assets/icons/FBDark.svg";
import FbHover from "../assets/icons/FbHover.svg";
import Apple from "../assets/icons/AppleDark.svg";
import AppleHover from "../assets/icons/AppleHover.svg";
import Twitter from "../assets/icons/TwitterDark.svg";
import TwitterHover from "../assets/icons/TwitterHover.svg";
import TzLogo from "../assets/icons/TZ-LogoForDarkVersion.svg";
import hoverArrowLeft from "../assets/icons/arrow-left-hover.svg";
import mobilelArrowLeft from "../assets/icons/mobileArrow-left.svg";
import signInIcon from "../assets/icons/signInIcon.svg";
import lock from "../assets/icons/lock.svg";
import user from "../assets/icons/user.svg";
import { handleLogin } from "../services/handleLogin";

function LoginPageWithoutBanner() {
  const [email, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para fazer a autenticação diretamente
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Remember Me:", rememberMe);
    // eslint-disable-next-line no-undef
    await handleLogin(email, password, setMessage);
  };

  return (
    <>
      <div className="LoginPageWithoutBanner-container-darkMode">
        <div className="LoginPageWithoutBanner-container-master-darkMode">
          <div className="LoginPageWithoutBanner-Navbar">
            <div>
              <ButtonWithHover
                defaultImage={mobilelArrowLeft}
                hoverImage={hoverArrowLeft}
                class1={"LoginPageWithoutBanner-banner-button"}
                class2={"LoginPageWithoutBanner-banner-arrow-img"}
                href="/"
              />
            </div>
            <div>
              <a href="">Criar conta</a>
            </div>
          </div>

          <div className="LoginPageWithoutBanner-form">
            <div className="LoginPageWithoutBanner-logo-login-account">
              <div>
                <a href="">
                  <img src={TzLogo} alt="" />
                </a>
              </div>
              <div className="useful-display-none">
                <a href="">Criar conta</a>
              </div>
            </div>
            <div className="LoginPageWithoutBanner-wellcome-darkMode">
              <h2>Boas-vindas!</h2>

              <h5>Entre utilizando uma das opções abaixo</h5>
            </div>

            <div className="LoginPageWithoutBanner-social-login-darkMode">
              <ButtonWithHover
                defaultImage={tz}
                hoverImage={tzHover}
                href="#"
              />
              <ButtonWithHover
                defaultImage={Fb}
                hoverImage={FbHover}
                href="#"
              />
              <ButtonWithHover
                defaultImage={Apple}
                hoverImage={AppleHover}
                href="#"
              />
              <ButtonWithHover
                defaultImage={Twitter}
                hoverImage={TwitterHover}
                href="#"
              />
            </div>

            <div className="LoginPageWithoutBanner-or-div-darkMode">
              <hr className="horizontal-line" />
              <p>ou</p>
              <hr className="horizontal-line" />
            </div>

            <form
              onSubmit={handleSubmit}
              className="LoginPageWithoutBanner-form-theForm-darkMode"
            >
              <div>
                <label htmlFor="">Usuário</label>
                <img
                  src={user}
                  alt=""
                  className="LoginPageWithoutBanner-form-theForm-userIcon"
                />
                <input
                  type="text"
                  placeholder="aluno290_1u"
                  value={email}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="">Senha</label>
                <img
                  src={lock}
                  alt=""
                  className="LoginPageWithoutBanner-form-theForm-lockIcon"
                />
                <input
                  type="password"
                  placeholder="********"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <label htmlFor="rememberMe">Manter Conectado</label>
              </div>

              <div
                className="h-captcha"
                data-sitekey="1873d84d-6b06-404f-b705-fb174f29aa4b"
              ></div>

              <div>
                <button type="submit">
                  <img src={signInIcon} alt="" />
                  <h5>Entrar</h5>
                </button>
              </div>
            </form>
            <div className="error-message">{message}</div>
            <div className="LoginPageWithoutBanner-form-forgot-password">
              <p>
                Esqueceu sua senha? <a href=""> Recuperar senha </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPageWithoutBanner;
