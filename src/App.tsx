import { Route, Routes } from "react-router-dom";
import About from "./pages/about/About";
import Home from "./pages/home/Home";
import LoginRegister from "./pages/loginRegister/LoginRegister";
import Property from "./pages/property/Property";
import Footer from "./sharedComponent/footer/Footer";
import Header from "./sharedComponent/header/Header";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/property" element={<Property />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<LoginRegister />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
