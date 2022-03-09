import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom';
import useFirebase from '../../../Hooks/useFirebase';

const Deshboard = () => {
  const location = useLocation();
  const firebase = useFirebase();
  return (
    <div className='deshboard-container'>
      <div className='menus'>
        <Link to="addproperty">ADD PROPERTY</Link>
        <Link to="manageproperty">MANAGE PROPERTY</Link>
        <Link to="manageorder">MANAGE ORDER</Link>

        {
          firebase?.user &&
          firebase?.userFromDb &&
          firebase.userFromDb?.role === "admin" &&
          <Link to="manageuser">
            MANAGE USER
        </Link>
        }

      </div>
      <div className='col-span-5'>
        {location.pathname === "/deshboard" ?
          <div className='front-page'>
            <p>Deshboard</p>
          </div>
          :
          <Outlet />
        }
      </div>
    </div>
  );
}

export default Deshboard