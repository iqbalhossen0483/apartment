import React, { useEffect, useState } from 'react'
import useFirebase from '../../../Hooks/useFirebase';

const MyOrder = () => {
  const [orders, setOrder] = useState<Order[] | null>(null);
  const firebase = useFirebase();

  useEffect(() => {
    fetch(`http://localhost:5000/orders/${firebase?.user?.email}`)
      .then(res => res.json())
      .then(data => setOrder(data));
  }, []);

  return (
    <div className='my-order'>
      <div className='item text-center font-medium'>
        <p className='col-span-3'>Product Details</p>
        <p>Status</p>
      </div>
      {
        orders?.map(item => {
          return (
            <div
              key={item._id}
              className='item border-t'
            >
              <div className='col-span-3 grid grid-cols-3 gap-3'>
                <img
                  className='h-32 w-full object-cover'
                  src={item.product.imgUrl}
                  alt=""
                />
                <div className='col-span-2'>
                  <p>
                    <span className="font-medium mr-2">Name:</span>
                    {item.product.name}
                  </p>
                  <p>
                    <span className="font-medium mr-2">Price:</span>
                    {item.product.price}
                  </p>
                  <p>
                    <span className="font-medium mr-2">Location:</span>
                    {item.product.location}
                  </p>

                  <div className='grid grid-cols-3 text-gray mt-3'>
                    <p>{item.product.room} Rooms</p>
                    <p>
                      <i className="fa fa-bed mr-2" />
                      {item.product.bed} beds
                    </p>
                    <p>
                      <i className="fa-regular mr-1 fa-square"
                        aria-hidden="true" />
                      {item.product.area}
                    </p>
                  </div>

                </div>
              </div>

              <div className='text-center'>
                <p>{item.status}</p>
              </div>
            </div>
          )
        })
      }
    </div>
  );
}

export default MyOrder