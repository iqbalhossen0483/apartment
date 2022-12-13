import { useLocation, NavLink, Outlet } from "react-router-dom";
import useFirebase from "../../../Hooks/useFirebase";

const MyAccount = () => {
  const firebase = useFirebase();
  const location = useLocation();
  return (
    <div className='my-account-container'>
      <div className='menus-wrapper text-white'>
        <div className='menus'>
          <NavLink to='profile'>PROFILE</NavLink>
          <NavLink to='myorder'>MY ORDER</NavLink>
          <NavLink to='wishlist'>WISHLIST</NavLink>
        </div>
      </div>
      <div className='col-span-6 md:col-span-5'>
        {location.pathname === "/myaccount" ? (
          <div className='front-page'>
            <p>Welcome! {firebase?.user?.displayName}</p>
          </div>
        ) : (
          <Outlet />
        )}
      </div>
    </div>
  );
};

export default MyAccount;
