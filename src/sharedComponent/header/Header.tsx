/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import useFirebase from "../../Hooks/useFirebase";

const Header: () => JSX.Element = () => {
  const [stiky, setStiky] = useState<boolean>(false);
  const [menu, setMenu] = useState<boolean>(true);
  const firebase = useFirebase();

  function stikyHandler(): void {
    if (window.scrollY > 60) {
      setStiky(true);
    } else {
      setStiky(false);
    }
  }
  window.addEventListener("scroll", stikyHandler);
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) setMenu(true);
    else setMenu(false);
  });

  return (
    <header className={`header ${stiky && "shadow-xl"}`}>
      <div className='text-primary'>
        <Link to='/'>
          <h2>ECOSTAY</h2>
        </Link>
      </div>
      {/* for mobile view */}
      <div className='text-right mr-4 text-2xl lg:hidden'>
        <li
          onClick={() => setMenu((prev) => !prev)}
          className='fas fa-bars text-primary'
        />
      </div>

      <div className={`menu-container ${menu ? "flex" : "hidden"}`}>
        {/* for mobile and teblet */}
        <i onClick={() => setMenu(false)} className='closebtn fas fa-times' />
        <div className='menus'>
          <NavLink to='/property'>PROPERTY</NavLink>
          <NavLink to='/about'>ABOUT</NavLink>
          <a href='#'>BLOG</a>
          <a href='#'>CONTACT</a>
        </div>
        <div className='menus'>
          {firebase?.user && <NavLink to='/myaccount'>ACCOUNT</NavLink>}
          {firebase?.user &&
            firebase?.userFromDb &&
            firebase.userFromDb?.role !== "user" && (
              <NavLink to='/deshboard'>DESHBOARD</NavLink>
            )}
          <div className='right-menus'>
            <button>WISHLIST</button>
            {!firebase?.user && <NavLink to='/login'>ACCOUNT</NavLink>}
            {firebase?.user?.photoURL ? (
              <img
                className='h-10 w-10 ml-3 rounded-full'
                src={firebase.user.photoURL!}
                alt=''
              />
            ) : (
              <p className='font-medium'>
                {firebase?.user?.displayName?.split(" ")[0]}
              </p>
            )}
            {firebase?.user && (
              <i
                onClick={firebase.logOut}
                className='fa fa-sign-out ml-3'
                aria-hidden='true'
              />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
