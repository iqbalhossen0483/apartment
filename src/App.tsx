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
import PropertyDetails from "./pages/propertyDetails/PropertyDetails";
import PlaceOrder from "./pages/placeOrder/PlaceOrder";
import MyAccount from "./pages/user pages/my account/MyAccount";
import MyOrder from "./pages/user pages/my order/MyOrder";
import MyProfile from "./pages/user pages/my profile/MyProfile";
import Wishlist from "./pages/user pages/wishlist/Wishlist";
import PrivateRouter from "./authenticate/PrivateRouter";
import AdminRoute from "./authenticate/AdminRoute";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        {/* public router */}
        <Route path="/" element={<Home />} />
        <Route path="/property" element={<Property />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<LoginRegister />} />
        <Route path="/order/:id" element={<PrivateRouter element={<PlaceOrder />} />} />

        {/* user router */}
        <Route path="/myaccount" element={<PrivateRouter element={<MyAccount />}/>}>
          <Route path="profile" element={<PrivateRouter element={<MyProfile />}/>} />
          <Route path="myorder" element={<PrivateRouter element={<MyOrder />} />} />
          <Route path="wishlist" element={<PrivateRouter element={<Wishlist />} />} />
        </Route>

        {/* admin router */}
        <Route path="/deshboard" element={<AdminRoute element={<Deshboard />} />}>
          <Route path="addproperty" element={<AdminRoute element={<AddProperty />} />} />
          <Route path="updateproperty/:id" element={<AdminRoute element={<UpdateProper />} />} />
          <Route path="manageproperty" element={<AdminRoute element={<ManageProperty />} />} />
          <Route path="manageorder" element={<AdminRoute element={<ManageOrder />} />} />
          <Route path="manageuser" element={<AdminRoute element={<ManageUser />} />} />
        </Route>

        {/* not found route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
