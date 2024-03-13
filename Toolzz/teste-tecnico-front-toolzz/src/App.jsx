import "./App.css";
import LoginPageWithBanner from "./pages/LoginPageWithBanner";
import LoginPageWithoutBanner from "./pages/LoginPageWithoutBanner";
import LoginPageWithBannerDark from "./pages/LoginPageWithBannerDark";
import LoginPageWithoutBannerDark from "./pages/LoginPageWithoutBannerDark";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <Router>
        <Routes>
        <Route>
            <Route index element={<HomePage />} />
            <Route path="/WithBanner" element={<LoginPageWithBanner />} />
            <Route path="/WithoutBanner" element={<LoginPageWithoutBanner />} />
            <Route
              path="/WithBannerDarkMode"
              element={<LoginPageWithBannerDark />}
            />
            <Route
              path="/WithoutBannerDarkMode"
              element={<LoginPageWithoutBannerDark />}
            />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
