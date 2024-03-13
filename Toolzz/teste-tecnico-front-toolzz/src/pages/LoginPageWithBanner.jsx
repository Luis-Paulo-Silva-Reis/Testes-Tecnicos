import "../styles/LoginPageWithBanner.css";
import { useState } from "react";
import ButtonWithHover from "../components/ButtonWithHover";
import tz from "../assets/icons/TZ.svg";
import tzHover from "../assets/icons/Tzhover.svg";
import Fb from "../assets/icons/FB.svg";
import FbHover from "../assets/icons/FbHover.svg";
import Apple from "../assets/icons/Apple.svg";
import AppleHover from "../assets/icons/AppleHover.svg";
import Twitter from "../assets/icons/Twitter.svg";
import TwitterHover from "../assets/icons/TwitterHover.svg";
import TzLogo from "../assets/icons/TZ-Logo.svg";
import hoverArrowLeft from "../assets/icons/arrow-left-hover.svg";
import normalArrowLeft from "../assets/icons/arrow-left.svg";
import signInIcon from "../assets/icons/signInIcon.svg";

import lock from "../assets/icons/lock.svg";
import user from "../assets/icons/user.svg";

import Carousel from "../components/Carousel";

import { handleLogin } from "../services/handleLogin";

function LoginPageWithBanner() {
  const [email, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Remember Me:", rememberMe);
    await handleLogin(email, password, setMessage);
  };

  const carouselItems = [
    {
      title: "Cursos",
      subtitle: "Plataforma de cursos completa",
      description:
        "Lorem ipsum nisl etiam himenaeos ligula augue vehicula gravida tincidunt, etiam magna sapien gravida sodales sed vel pulvinar suspendisse, morbi mi proin urna ornare posuere donec aptent. orci vivamus primis fusce lacinia libero nostra aliquam vestibulum",
    },
    {
      title: "Livros",
      subtitle: "Plataforma de cursos completa",
      description:
        "Lorem ipsum nisl etiam himenaeos ligula augue vehicula gravida tincidunt, etiam magna sapien gravida sodales sed vel pulvinar suspendisse, morbi mi proin urna ornare posuere donec aptent. orci vivamus primis fusce lacinia libero nostra aliquam vestibulum",
    },
    {
      title: "Cases",
      subtitle: "Plataforma de cursos completa",
      description:
        "Lorem ipsum nisl etiam himenaeos ligula augue vehicula gravida tincidunt, etiam magna sapien gravida sodales sed vel pulvinar suspendisse, morbi mi proin urna ornare posuere donec aptent. orci vivamus primis fusce lacinia libero nostra aliquam vestibulum",
    },
  ];
  return (
    <>
      <div className="LoginPageWithBanner-container">
        <div className="LoginPageWithBanner-banner">
          <ButtonWithHover
            defaultImage={normalArrowLeft}
            hoverImage={hoverArrowLeft}
            class1={"LoginPageWithBanner-banner-button"}
            class2={"LoginPageWithBanner-banner-arrow-img"}
            href="/"
          />

          <Carousel items={carouselItems} />
        </div>
        <div className="container-master">
          <div className="LoginPageWithBanner-form">
            <div className="LoginPageWithBanner-logo-login-account">
              <div>
                <a href="">
                  <img src={TzLogo} alt="" />
                </a>
              </div>
              <div>
                <a href="">Criar conta</a>
              </div>
            </div>
            <div className="LoginPageWithBanner-wellcome">
              <h2>Boas-vindas!</h2>

              <h5>Entre utilizando uma das opções abaixo</h5>
            </div>

            <div className="LoginPageWithBanner-social-login">
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

            <div className="LoginPageWithBanner-or-div">
              <hr className="horizontal-line" />
              <p>ou</p>
              <hr className="horizontal-line" />
            </div>

            <form
              onSubmit={handleSubmit}
              className="LoginPageWithBanner-form-theForm"
            >
              <div>
                <label htmlFor="">Usuário</label>
                <img
                  src={user}
                  alt=""
                  className="LoginPageWithBanner-form-theForm-userIcon"
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
                  className="LoginPageWithBanner-form-theForm-lockIcon"
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
                data-theme="dark"
                data-error-callback="onError"
              ></div>

              <div>
                <button type="submit">
                  <img src={signInIcon} alt="" />
                  <h5>Entrar</h5>
                </button>
              </div>
            </form>

            <div>{message}</div>

            <div className="LoginPageWithBanner-form-forgot-password">
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

export default LoginPageWithBanner;
