import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import useFirebase from "../../../Hooks/useFirebase";

interface Props {
  data: Property | null;
}

const OrderPart: FC<Props> = ({ data: property }) => {
  const { handleSubmit, register, reset } = useForm<Order>();
  const [loading, setLoading] = useState<boolean>(false);
  const firebase = useFirebase();
  const navigate = useNavigate();

  function onSubmit(data: Order) {
    setLoading(true);
    data.email = firebase?.user?.email!;
    data.product = property!;
    data.status = "pending";

    fetch("https://myserver-production-ddf8.up.railway.app/appartment/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Thanks for ordering");
          reset();
          navigate("/");
          setLoading(false);
        }
      })
      .catch((err) => setLoading(false));
  }
  return (
    <form className='my-0' onSubmit={handleSubmit(onSubmit)}>
      <h2>Confirm Your Order</h2>
      <p>Phone Number:</p>
      <input
        {...register("number", { required: true })}
        type='number'
        placeholder='Your phone number'
      />
      <p>Current Address:</p>
      <input
        {...register("currentAddress", { required: true })}
        type='text'
        placeholder='Your Current address'
      />
      <p className='text-base'>Permanent Address:</p>
      <input
        {...register("permanentAddress", { required: true })}
        type='text'
        placeholder='Your permanent address'
      />
      <button disabled={loading} type='submit' className='btn mt-10'>
        CONFIRM
      </button>
    </form>
  );
};

export default OrderPart;
