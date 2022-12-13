import { useEffect, useState } from "react";

const ManageOrder = () => {
  const [orders, setOrder] = useState<Order[] | undefined>(undefined);
  const [form, setForm] = useState<number>(-1);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    fetch("https://myserver-production-ddf8.up.railway.app/appartment/orders")
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, [update]);

  function updateStatus(id: string, status: string) {
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
          setForm(-1);
          if (update) setUpdate(false);
          else setUpdate(true);
        }
      });
  }

  function filterOrder(text: string) {
    if (text) {
      fetch(
        `https://myserver-production-ddf8.up.railway.app/appartment/orders/filter/${text}`
      )
        .then((res) => res.json())
        .then((data) => setOrder(data));
    } else {
      if (update) setUpdate(false);
      else setUpdate(true);
    }
  }

  function handleForm(index: number) {
    if (index === form) {
      setForm(-1);
    } else {
      setForm(index);
    }
  }

  return (
    <div className='overflow-auto'>
      <table className='manage-order'>
        <thead>
          <tr>
            <th colSpan={2}>Product details</th>
            <th>Cutomer details</th>
            <th>
              <select
                onChange={(e) => filterOrder(e.target.value)}
                className='border rounded px-2'
              >
                <option value=''> All </option>
                <option value='Pending'>Pending </option>
                <option value='Approved'> Approved</option>
                <option value='Cancel'> Cancel</option>
              </select>
            </th>
          </tr>
        </thead>
        <tbody>
          {orders?.map((item, index) => {
            return (
              <tr key={item._id} onClick={() => setForm(-1)}>
                <td colSpan={2}>
                  <div className='flex gap-1 text-left'>
                    <img
                      className='h-32 object-cover mr-2'
                      src={item.product.imgUrl}
                      alt=''
                    />
                    <div>
                      <p className='text-sm'>
                        <span className='text-xl font-medium mr-2'>ID:</span>
                        {item.product._id}
                      </p>
                      <p>
                        <span className='font-medium mr-2'>Name:</span>
                        {item.product.name}
                      </p>
                      <p>
                        <span className='font-medium mr-2'>Location:</span>
                        {item.product.location}
                      </p>
                    </div>
                  </div>
                </td>

                <td className='text-left'>
                  <p>
                    <span className='font-medium mr-2'>Email:</span>
                    {item.email}
                  </p>
                  <p>
                    <span className='font-medium mr-2'>Current Address:</span>
                    {item.currentAddress}
                  </p>
                  <p>
                    <span className='font-medium mr-2'>Permanent Address:</span>
                    {item.permanentAddress}
                  </p>
                </td>

                <td className='relative' onClick={(e) => e.stopPropagation()}>
                  <p className='text-primary'>{item.status}</p>
                  <button onClick={() => handleForm(index)} className='btn'>
                    update status
                  </button>
                  <div
                    onClick={(e) => e.stopPropagation()}
                    className={`menu ${form === index ? "block" : "hidden"}`}
                  >
                    <button
                      className='btn rounded-none'
                      onClick={() => updateStatus(item._id, "Pending")}
                    >
                      Pending
                    </button>
                    <button
                      className='btn rounded-none'
                      onClick={() => updateStatus(item._id, "Approved")}
                    >
                      Approved
                    </button>
                    <button
                      className='btn rounded-none'
                      onClick={() => updateStatus(item._id, "Cancel")}
                    >
                      Cancel
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ManageOrder;
