import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ManageProperty = () => {
  const [property, setProperty] = useState<Property[] | undefined>(undefined);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://server.switchcafebd.com/appartment/property")
      .then((res) => res.json())
      .then((data) => setProperty(data));
  }, []);

  function deleteProperty(id: string, imgId: string) {
    const confirm = window.confirm("Are you sure to delete?");
    if (confirm) {
      fetch(`https://server.switchcafebd.com/appartment/property/${id}`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ imgId }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("property deleted");
            const exist = property?.filter((item) => item._id !== id);
            setProperty(exist);
          }
        });
    }
  }

  return (
    <div className='overflow-auto'>
      <table className='manage-property'>
        <thead>
          <th>Product Images</th>
          <th>Product Details</th>
          <th>
            <button
              onClick={() => navigate(`/deshboard/addproperty`)}
              className='btn mt-0'
            >
              Add +
            </button>
          </th>
        </thead>

        <tbody>
          {property?.map((item) => {
            return (
              <tr key={item._id}>
                <td>
                  <img
                    className='h-20 w-32 mx-auto object-cover'
                    src={item.imgUrl}
                    alt=''
                  />
                </td>

                <td>
                  <p className='font-medium'>{item.name}</p>
                  <p className='font-medium'>
                    Price: <span className='text-primary'>{item.price}</span>
                  </p>
                  <p className='text-sm'>
                    <i
                      className='fa fa-map-marker text-primary mr-2'
                      aria-hidden='true'
                    />
                    {item.location}
                  </p>
                  <div className='grid grid-cols-3'>
                    <p>{item.room} Rooms</p>
                    <p>
                      <i className='fa fa-bed mr-2 text-gray-400' />
                      {item.bed} beds
                    </p>
                    <p>
                      <i
                        className='fa mr-1 fa-square text-gray-400'
                        aria-hidden='true'
                      />
                      {item.area}
                    </p>
                  </div>
                </td>

                <td>
                  <button
                    onClick={() => deleteProperty(item._id, item.imgId!)}
                    className='btn'
                  >
                    <i className='fas fa-trash' />
                  </button>
                  <button
                    onClick={() =>
                      navigate(`/deshboard/updateproperty/${item._id}`)
                    }
                    className='btn'
                  >
                    <i className='fas fa-edit' />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ManageProperty;
