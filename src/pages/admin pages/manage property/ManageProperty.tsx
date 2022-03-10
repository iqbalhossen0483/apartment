import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const ManageProperty = () => {
  const [property, setProperty] = useState<Property[] | undefined>(undefined);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(" https://apartment-sales.herokuapp.com/property")
      .then(res => res.json())
      .then(data => setProperty(data));
  }, []);

  function deleteProperty(id: string, imgId: string) {
    const confirm = window.confirm("Are you sure to delete?");
    if (confirm) {
      fetch(` https://apartment-sales.herokuapp.com/property/${id}`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify({imgId})
      })
        .then(res => res.json())
        .then(data => {
          if (data.deletedCount > 0) {
            alert("property deleted");
            const exist = property?.filter(item => item._id !== id);
            setProperty(exist);
          }
        });
    }
  }

  return (
    <div className='manage-property'>
      <div className='manage-header'>
        <p>Product Images</p>
        <p>Product Details</p>
        <div>
          <button
            onClick={()=>navigate(`/deshboard/addproperty`)}
            className='btn mt-0'>
            ADD +
          </button>
        </div>
      </div>

      {
        property?.map(item => {
          return (
            <div
              key={item._id}
              className="manage-property-item"
            >
              <img
                className='h-32 w-3/4 mx-auto object-cover'
                src={item.imgUrl}
                alt=""
              />

              <div className='col-span-2'>
                <p>{item.name}</p>
                <p>Price: {item.price}</p>
                <p className='text-xl text-gray'>
                  <i
                    className="fa fa-map-marker text-primary mr-2"
                    aria-hidden="true"
                  />
                  {item.location}
                </p>
                <div className='grid grid-cols-3 text-gray'>
                  <p>{item.room} Rooms</p>
                  <p>
                    <i className="fa fa-bed mr-2" />
                    {item.bed} beds
                  </p>
                  <p>
                    <i className="fa-regular mr-1 fa-square"
                      aria-hidden="true" />
                    {item.area}
                  </p>
                </div>
              </div>

              <div>
                <button
                  onClick={()=>deleteProperty(item._id, item.imgId!)}
                  className='btn manage-property-btn mt-0'>
                  DELETE
                </button>
                <button
                  onClick={()=>navigate(`/deshboard/updateproperty/${item._id}`)}
                  className='btn manage-property-btn'>
                  UPDATE
                </button>
              </div>
            </div>
          )
        })
      }
    </div>
  );
}

export default ManageProperty