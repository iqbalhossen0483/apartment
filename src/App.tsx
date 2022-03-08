import ManageProperty from "./pages/admin pages/manage property/ManageProperty";
import UpdateProper from "./pages/admin pages/update property/UpdateProper";
import ManageOrder from "./pages/admin pages/manage order/ManageOrder";
import AddProperty from "./pages/admin pages/add property/AddProperty";
import ManageUser from "./pages/admin pages/manage user/ManageUser";
import Deshboard from "./pages/admin pages/deshboard/Deshboard";
import LoginRegister from "./pages/loginRegister/LoginRegister";
import Footer from "./sharedComponent/footer/Footer";
import Header from "./sharedComponent/header/Header";
import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/notFound/NotFound";
import Property from "./pages/property/Property";
import About from "./pages/about/About";
import Home from "./pages/home/Home";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        {/* user router */}
        <Route path="/" element={<Home />} />
        <Route path="/property" element={<Property />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<LoginRegister />} />

        {/* admin router */}
        <Route path="/deshboard" element={<Deshboard />}>
          <Route path="addproperty" element={<AddProperty />} />
          <Route path="updateproperty/:id" element={<UpdateProper />} />
          <Route path="manageproperty" element={<ManageProperty />} />
          <Route path="manageorder" element={<ManageOrder />} />
          <Route path="manageuser" element={<ManageUser />} />
        </Route>

        {/* not found route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
