import { useState } from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';

const Header: () => JSX.Element = () => {
    const [stiky, setStiky] = useState<boolean>(false);
    const { user, logOut } = useFirebase();


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
                {user && <>
                    <Link to="/myaccount">
                        ACCOUNT
                    </Link>
                    <Link to="/deshboard">
                        DESHBOARD
                    </Link>
                </>}
                <button>
                    WISHLIST
                </button>
                {!user &&
                    <Link to="/login">
                        LOGIN/REGISTER
                    </Link>
                }
                {user?.photoURL ?
                    <img
                        className='h-10 w-10 rounded-full'
                        src={user.photoURL!}
                        alt=""
                    />
                    :
                    <p className='font-medium'>
                        {user?.displayName?.split(" ")[0]}
                    </p>
                }
                {user &&
                    <i onClick={logOut}
                        className="fa fa-sign-out ml-2"
                        aria-hidden="true"
                    />
                }
            </div>
        </header>
    );
}

export default Header