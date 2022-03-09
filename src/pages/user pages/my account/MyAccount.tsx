import { Link, useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import useFirebase from '../../../Hooks/useFirebase';

const MyAccount = () => {
  const firebase = useFirebase()
    const location = useLocation();
    return (
        <div className='my-account-container'>
            <div className='menus'>
                <Link to="profile">PROFILE</Link>
                <Link to="myorder">MY ORDER</Link>
                <Link to="wishlist">WISHLIST</Link>
            </div>
            <div className='col-span-5'>
                {location.pathname === "/myaccount" ?
                    <div className='front-page'>
                        <h2>Welcome! { firebase?.user?.displayName }</h2>
                    </div>
                    :
                    <Outlet />
                }
            </div>
        </div>
    );
}

export default MyAccount