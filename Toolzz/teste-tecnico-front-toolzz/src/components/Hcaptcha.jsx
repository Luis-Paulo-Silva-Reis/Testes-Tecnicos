import useHCaptcha from "./useHCaptcha";

const Hcaptcha = () => {
  const captchaReady = useHCaptcha("1873d84d-6b06-404f-b705-fb174f29aa4b");

  if (!captchaReady) {
    return <div>Loading hCaptcha...</div>; // ou qualquer outra lógica de carregamento desejada
  }

  return (
    <div>
      {captchaReady}
      <div
        className="h-captcha"
        data-sitekey="1873d84d-6b06-404f-b705-fb174f29aa4b"
      ></div>
    </div>
  );
};

export default Hcaptcha;
