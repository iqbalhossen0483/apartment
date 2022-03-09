import React, { FC } from 'react';

interface Props{
    data: Property | null;
}

const ProductPart:FC<Props> = ({data}) => {
    return (
        <div className='w-3/4 mx-auto'>
            <img
                className='h-52 w-full rounded object-cover'
                src={data?.imgUrl}
                alt=""
            />
            <p className='text-2xl my-2 font-semibold'>
                Price: <span className='text-primary'>{data?.price}</span>
            </p>
            <p>
                <i
                    className="fa fa-map-marker text-primary mr-2"
                    aria-hidden="true"
                />
                {data?.location}
            </p>
            <div className='grid grid-cols-3 my-2'>
                <p>{data?.room} Rooms</p>
                <p>
                    <i className="fa fa-bed mr-2" />
                    {data?.bed} beds
                </p>
                <p>
                    <i className="fa-regular mr-1 fa-square"
                        aria-hidden="true" />
                    {data?.area}
                </p>
            </div>
        </div>
    );
}

export default ProductPart