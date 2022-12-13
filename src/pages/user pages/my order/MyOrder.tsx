import { useEffect, useState } from "react";
import useFirebase from "../../../Hooks/useFirebase";

const MyOrder = () => {
  const [orders, setOrder] = useState<Order[] | null>(null);
  const [update, setUpdate] = useState(false);
  const firebase = useFirebase();

  useEffect(() => {
    fetch(
      `https://myserver-production-ddf8.up.railway.app/appartment/orders/${firebase?.user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, [update, firebase?.user?.email]);

  function updateStatus(id: string, status: string) {
    const confirm = window.confirm("Are you Sure to Cancel?");

    if (confirm) {
      fetch(
        `https://myserver-production-ddf8.up.railway.app/appartment/orders/${id}`,
        {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ status }),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount > 0) {
            alert("order status updated");
            if (update) setUpdate(false);
            else setUpdate(true);
          }
        });
    }
  }

  return (
    <div className='my-order'>
      <div className='item text-center font-medium'>
        <p className='col-span-3'>Product Details</p>
        <p>Status</p>
      </div>
      {orders?.map((item) => {
        return (
          <div key={item._id} className='item border-t'>
            <div className='col-span-3 grid grid-cols-3 gap-3'>
              <img
                className='h-32 w-full object-cover'
                src={item.product.imgUrl}
                alt=''
              />
              <div className='col-span-2'>
                <p>
                  <span className='font-medium mr-2'>Name:</span>
                  {item.product.name}
                </p>
                <p>
                  <span className='font-medium mr-2'>Price:</span>
                  {item.product.price}
                </p>
                <p>
                  <span className='font-medium mr-2'>Location:</span>
                  {item.product.location}
                </p>

                <div className='grid grid-cols-3 mt-3'>
                  <p>{item.product.room} Rooms</p>
                  <p>
                    <i className='fa fa-bed mr-2 text-gray-400' />
                    {item.product.bed} beds
                  </p>
                  <p>
                    <i
                      className='fa mr-1 fa-square text-gray-400'
                      aria-hidden='true'
                    />
                    {item.product.area}
                  </p>
                </div>
              </div>
            </div>

            <div className='text-center flex flex-col justify-center'>
              <p>{item.status !== "Cancel" ? item.status : null}</p>
              {item.status === "Cancel" ? (
                <p>Canceled</p>
              ) : (
                <button
                  onClick={() => updateStatus(item._id!, "Cancel")}
                  className='btn'
                >
                  Cancel
                </button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MyOrder;
