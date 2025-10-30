import React from "react";
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/Home_Page.jsx";
import WelcomePage from "./pages/Welcome_Page.jsx";

const App = () => {
  return <div className='px-4 sm:px-[5vw] md:px[7vw] lg:px-[9vw]'>
<Routes>
  <Route path='/welcome' element={<WelcomePage />} />
  <Route path='/' element={<HomePage />} />


</Routes>

  </div>;
};

export default App;
