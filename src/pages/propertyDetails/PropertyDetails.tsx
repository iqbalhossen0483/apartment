import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import "./PropertyDetails.css";

const PropertyDetails = () => {
    const [property, setProperty] = useState<Property | null>(null);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:5000/property/${id}`)
            .then(res => res.json())
            .then(data => setProperty(data));
    }, []);

    return (
        <div className='property-details-container'>
            <div className='overflow-hidden rounded'>
                <img
                    className='property-img-details'
                    src={property?.imgUrl}
                    alt=""
                />
            </div>
            <div>
                <p className='text-3xl font-semibold'>
                    {property?.name}
                </p>
                <p className='text-2xl text-primary font-semibold mt-3'>
                    {property?.price} BDT
                </p>
                <p>
                    <i
                        className="fa fa-map-marker text-primary mr-2"
                        aria-hidden="true"
                    />
                    {property?.location}
                </p>
                <div className='grid grid-cols-3 my-2'>
                    <p>{property?.room} Rooms</p>
                    <p>
                        <i className="fa fa-bed mr-2" />
                        {property?.bed} beds
                    </p>
                    <p>
                        <i className="fa-regular mr-1 fa-square"
                            aria-hidden="true" />
                        {property?.area}
                    </p>
                </div>
                <button onClick={()=>navigate(`/order/${property?._id}`)}
                    className='btn mt-10'>
                    BUY NOW
                </button>
            </div>
            <div className='col-span-2 border rounded p-4 text-justify mt-16'>
                <p>
                    {property?.description}
                </p>
            </div>
        </div>
    );
}

export default PropertyDetails