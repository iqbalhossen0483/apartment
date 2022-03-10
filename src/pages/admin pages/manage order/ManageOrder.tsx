import { useEffect, useState } from "react";
import { DebounceInput } from "react-debounce-input";

const ManageOrder = () => {
  const [orders, setOrder] = useState<Order[] | undefined>(undefined);
  const [form, setForm] = useState<number>(-1);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    fetch(" https://apartment-sales.herokuapp.com/orders")
      .then(res => res.json())
      .then(data => setOrder(data));
  }, [update]);


  function updateStatus(id:string, status: string) {
    fetch(` https://apartment-sales.herokuapp.com/orders/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({status})
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0) {
          alert("order status updated");
          setForm(-1);
          if (update) setUpdate(false);
          else setUpdate(true);
        }
      })
  };

  function filterOrder(text: string) {
    if (text) {
      fetch(` https://apartment-sales.herokuapp.com/orders/filter/${text}`)
        .then(res => res.json())
        .then(data => setOrder(data));
    }
    else {
      if (update) setUpdate(false);
      else setUpdate(true);
    }
  }

  function handleForm(index: number) {
    if (index === form) {
      setForm(-1);
    }
    else {
      setForm(index);
    }
  }

  return (
    <div className="manage-order">
      <div className="item font-medium pb-5 text-center">
        <p>Product details</p>
        <p>Cutomer details</p>
        <div>
          <select
            onChange={(e)=>filterOrder(e.target.value)}
            className='border rounded px-2'
          >
            <option value=""> All </option>
            <option value="Pending">Pending </option>
            <option  value="Approved"> Approved</option>
            <option value="Cancel"> Cancel</option>
          </select>
        </div>
      </div>
      {
        orders?.map((item, index) => {
          return (
            <div
              key={item._id}
              className="order"
              onClick={()=>setForm(-1)}
            >
              <div className="flex col-span-2">
                <img
                  className='h-32 object-cover mr-2'
                  src={item.product.imgUrl}
                  alt=""
                />
                <div>
                  <p className="text-sm">
                    <span className="text-xl font-medium mr-2">ID:</span>
                    {item.product._id}
                  </p>
                  <p>
                    <span className="font-medium mr-2">Name:</span>
                    {item.product.name}
                  </p>
                  <p>
                    <span className="font-medium mr-2">Location:</span>
                    {item.product.location}
                  </p>
                </div>
              </div>

              <div className="col-span-2">
                <p>
                  <span className="font-medium mr-2">Email:</span>
                  {item.email}
                </p>
                <p>
                  <span className="font-medium mr-2">Current Address:</span>
                  {item.currentAddress}
                </p>
                <p>
                  <span className="font-medium mr-2">Permanent Address:</span>
                  {item.permanentAddress}
                </p>
              </div>

              <div
                onClick={(e)=>e.stopPropagation()}
                className="flex flex-col justify-center items-center"
              >
                <p className="text-primary">{item.status}</p>
                <button
                  onClick={()=>handleForm(index)}
                  className='border rounded px-2 ml-4 mt-2'
                >
                  update status
                </button>
              </div>

              <div
                onClick={(e)=>e.stopPropagation()}
                className={`menu ${form === index ? "block" : "hidden"}`}
              >
                <button
                  onClick={()=> updateStatus(item._id!, "Pending")}
                >
                  Pending
                </button>
                <button
                  onClick={()=> updateStatus(item._id!, "Approved")}
                >
                  Approved
                </button>
                <button
                  onClick={()=> updateStatus(item._id!, "Cancel")}
                >
                  Cancel
                </button>
              </div>
            </div>
          )
        })
      }
    </div>
  );
}

export default ManageOrder