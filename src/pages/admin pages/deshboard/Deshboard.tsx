import React, { useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import useFirebase from "../../../Hooks/useFirebase";

const Deshboard = () => {
  const [menu, setMenu] = useState(true);
  const location = useLocation();
  const firebase = useFirebase();

  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) setMenu(true);
    else setMenu(false);
  });

  return (
    <div className='deshboard relative min-h-[79vh]'>
      <i
        onClick={() => setMenu((prev) => !prev)}
        className={`fas fa-angle-right arrow-icon ${
          menu ? "left-[236px] rotate-180 text-white" : "left-0 text-primary"
        }`}
      />
      <div className={`menus-wrapper ${menu ? "block" : "hidden"}`}>
        <div className='menus'>
          <NavLink to='addproperty'>ADD PROPERTY</NavLink>
          <NavLink to='manageproperty'>MANAGE PROPERTY</NavLink>
          <NavLink to='manageorder'>MANAGE ORDER</NavLink>

          {firebase?.user &&
            firebase?.userFromDb &&
            firebase.userFromDb?.role === "admin" && (
              <NavLink to='manageuser'>MANAGE USER</NavLink>
            )}
        </div>
      </div>
      <div className='w-full lg:pl-[260px]'>
        {location.pathname === "/deshboard" ? (
          <div className='front-page'>
            <p>Deshboard</p>
          </div>
        ) : (
          <Outlet />
        )}
      </div>
    </div>
  );
};

export default Deshboard;
