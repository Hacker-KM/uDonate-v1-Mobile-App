import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import SplashScreen from "./pages/SplashScreen";
import SignIn from "./pages/SignIn";
import UserDonate from "./pages/UserDonate";
import UserDonate1 from "./pages/UserDonate1";
import CharityAccount from "./pages/CharityAccount";
import UserAccount from "./pages/UserAccount";
import CharityAcceptDonation from "./pages/CharityAcceptDonation";
import CharityExplore from "./pages/CharityExplore";
import CharityHome from "./pages/CharityHome";
import UserHome from "./pages/UserHome";
import CharitySignUp from "./pages/CharitySignUp";
import UserSignUp from "./pages/UserSignUp";
import FrameComponent from "./pages/FrameComponent";
import SplashScreen2 from "./pages/SplashScreen2";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/sign-in":
        title = "";
        metaDescription = "";
        break;
      case "/user-donate":
        title = "";
        metaDescription = "";
        break;
      case "/user-donate1":
        title = "";
        metaDescription = "";
        break;
      case "/charity-account":
        title = "";
        metaDescription = "";
        break;
      case "/user-account":
        title = "";
        metaDescription = "";
        break;
      case "/charity-accept-donation":
        title = "";
        metaDescription = "";
        break;
      case "/charity-explore":
        title = "";
        metaDescription = "";
        break;
      case "/charity-home":
        title = "";
        metaDescription = "";
        break;
      case "/user-home":
        title = "";
        metaDescription = "";
        break;
      case "/charity-sign-up":
        title = "";
        metaDescription = "";
        break;
      case "/user-sign-up":
        title = "";
        metaDescription = "";
        break;
      case "/frame-103":
        title = "";
        metaDescription = "";
        break;
      case "/splash-screen-2":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<SplashScreen />} />

      <Route path="/sign-in" element={<SignIn />} />

      <Route path="/user-donate" element={<UserDonate />} />

      <Route path="/user-donate1" element={<UserDonate1 />} />

      <Route path="/charity-account" element={<CharityAccount />} />

      <Route path="/user-account" element={<UserAccount />} />

      <Route
        path="/charity-accept-donation"
        element={<CharityAcceptDonation />}
      />

      <Route path="/charity-explore" element={<CharityExplore />} />

      <Route path="/charity-home" element={<CharityHome />} />

      <Route path="/user-home" element={<UserHome />} />

      <Route path="/charity-sign-up" element={<CharitySignUp />} />

      <Route path="/user-sign-up" element={<UserSignUp />} />

      <Route path="/frame-103" element={<FrameComponent />} />

      <Route path="/splash-screen-2" element={<SplashScreen2 />} />
    </Routes>
  );
}
export default App;
