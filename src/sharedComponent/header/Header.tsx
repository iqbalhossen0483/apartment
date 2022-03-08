import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header: () => JSX.Element = () => {
    const [stiky, setStiky] = useState<boolean>(false);


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
                <Link to="/myaccount">
                    ACCOUNT
                </Link>
                <Link to="/deshboard">
                    DESHBOARD
                </Link>
                <button className='mb-5'>
                    <i className="fa fa-shopping-bag" aria-hidden="true"/>
                    WISHLIST
                </button>
                <Link to="/login">
                    LOGIN/REGISTER
                </Link>
            </div>
        </header>
    );
}

export default Header