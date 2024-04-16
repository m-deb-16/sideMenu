import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import Burger from "./components/Burger";
import SideMenu from "./components/sideMenu";
import Home from "./pages/Home";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function App() {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <BrowserRouter>
        <SideMenu isActive={isActive} setIsActive={setIsActive} />
        <div className="main_page">
          <Burger setIsActive={setIsActive} />
          <Routes>
            <Route
              exact
              path="/"
              element={<Home setIsActive={setIsActive} />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
