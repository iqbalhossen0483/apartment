import React from 'react'
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='min-h-set flex justify-center items-center text-xl font-medium'>
            <div>
                <p>404, NotFound</p>
                <Link to="/">Go Home</Link>
            </div>
        </div>
    );
}

export default NotFound