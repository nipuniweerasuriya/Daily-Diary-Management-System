import React from "react";
import {Route, Routes} from "react-router-dom";
import WelcomePage from "./pages/main/WelcomePage.jsx";
import AuthPage from "./pages/auth/AuthPage.jsx";
import HomePage from "./pages/main/HomePage.jsx";
import UserProfile from "./pages/sub/UserProfile.jsx";
import AboutPage from "./pages/sub/AboutPage.jsx";
import PrivacyPolicy from "./pages/sub/PrivacyPolicy.jsx";

const App = () => {
  return <div className='px-4 sm:px-[5vw] md:px[7vw] lg:px-[9vw]'>
<Routes>
  <Route path='/' element={<WelcomePage />} />
  <Route path='/AuthPage' element={<AuthPage />} />
  <Route path='/HomePage' element={<HomePage />} />
  <Route path='/UserProfile' element={<UserProfile />} />
  <Route path='/AboutPage' element={<AboutPage />} /> 
  <Route path='/PrivacyPolicy' element={<PrivacyPolicy />} />


</Routes>

  </div>;
};

export default App;
