import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import OrderPart from './component/OrderPart';
import ProductPart from './component/ProductPart';

const PlaceOrder = () => {
    const [property, setProperty] = useState<Property | null>(null);
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/property/${id}`)
            .then(res => res.json())
            .then(data => setProperty(data));
    }, []);
    return (
        <div className='grid grid-cols-2 px-20 my-20'>
            <ProductPart data={property} />
            <OrderPart data={property} />
        </div>
    );
}

export default PlaceOrder