import { useEffect, useState } from "react";

const ManageOrder = () => {
  const [orders, setOrder] = useState<Order[] | null>(null);
  const [form, setForm] = useState<number>(-1);

  useEffect(() => {
    fetch("http://localhost:5000/orders")
      .then(res => res.json())
      .then(data => setOrder(data));
  }, []);


  function handleForm(index: number) {
    if (index === form) {
      setForm(-1);
    }
    else {
      setForm(index);
    }
    console.log(form);
  }

  return (
    <div className="manage-order">
      <div className="item font-medium pb-5 text-center">
        <p>Product details</p>
        <p>Cutomer details</p>
        <p></p>
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
                  className='border rounded px-2 ml-4'
                >
                  update status
                </button>
              </div>

              <div
                onClick={(e)=>e.stopPropagation()}
                className={`menu ${form === index ? "block" : "hidden"}`}
              >
                  <button>pending</button>
                  <button>approved</button>
                  <button>cancel</button>
              </div>
            </div>
          )
        })
      }
    </div>
  );
}

export default ManageOrder