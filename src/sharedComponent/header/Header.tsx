import { useState } from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';

const Header: () => JSX.Element = () => {
    const [stiky, setStiky] = useState<boolean>(false);
    const firebase = useFirebase();

    function stikyHandler(): void {
        if (window.scrollY > 60) {
            setStiky(true);
        }
        else {
            setStiky(false);
        }
    }
    window.addEventListener("scroll", stikyHandler);

    return (
        <header className={`header ${stiky && "shadow-xl"}`}>
            <div className='mr-auto'>
                <Link to="/">
                    <h2>ECOSTAY</h2>
                </Link>
            </div>
            <div className='menus col-span-2 mx-auto'>
                <Link to="/property">
                    PROPERTY
                </Link>
                <Link to="/about">
                    ABOUT
                </Link>
                <Link to="/">
                    BLOG
                </Link>
                <Link to="/">
                    CONTACT
                </Link>
            </div>
            <div className='menus col-span-2 flex items-center'>
                {firebase?.user && 
                    <Link to="/myaccount">
                        ACCOUNT
                    </Link>
                }
                {
                    firebase?.user &&
                    firebase?.userFromDb &&
                    firebase.userFromDb?.role !== "user" &&
                    <Link to="/deshboard">
                        DESHBOARD
                    </Link>
                }
                <button>
                    WISHLIST
                </button>
                {!firebase?.user &&
                    <Link to="/login">
                        LOGIN/REGISTER
                    </Link>
                }
                {firebase?.user?.photoURL ?
                    <img
                        className='h-10 w-10 rounded-full'
                        src={firebase.user.photoURL!}
                        alt=""
                    />
                    :
                    <p className='font-medium'>
                        {firebase?.user?.displayName?.split(" ")[0]}
                    </p>
                }
                {firebase?.user &&
                    <i onClick={firebase.logOut}
                        className="fa fa-sign-out ml-2"
                        aria-hidden="true"
                    />
                }
            </div>
        </header>
    );
}

export default Header