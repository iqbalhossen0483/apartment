import { FC, ReactNode } from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import useFirebase from '../Hooks/useFirebase'

interface Props{
    element: ReactNode
}

const PrivateRouter:FC<Props> = ({element}) => {

    const firebase = useFirebase();
    const location = useLocation();

    if (firebase?.loading) {
        return (
            <div className='spinner'>
                <p>Loading....</p>
            </div>
        );
    }
    return (
        <div>
            {firebase?.user ?
                element
                :
                <Navigate
                    to="/login"
                    state={{ from: location }}
                    replace
                />
            }
        </div>
    );
}

export default PrivateRouter