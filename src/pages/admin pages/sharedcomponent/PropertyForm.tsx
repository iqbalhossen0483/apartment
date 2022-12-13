import { FC, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

interface Props {
  propertyData?: Property | null;
  action(data: Property): void;
  header: string;
}

const PropertyForm: FC<Props> = ({ propertyData = null, action, header }) => {
  const { handleSubmit, register } = useForm<Property>();
  const [isRequired, setIsRequired] = useState<boolean>(true);

  useEffect(() => {
    if (header === "Add Property") {
      setIsRequired(true);
    } else {
      setIsRequired(false);
    }
  }, [header]);

  function onSubmit(data: Property) {
    action(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>{header}</h2>
      <p>Name:</p>
      <input
        {...register("name", { required: isRequired })}
        defaultValue={propertyData?.name}
        required={isRequired}
        placeholder='property name'
        type='text'
      />

      <p>Price:</p>
      <input
        {...register("price", { required: isRequired })}
        required={isRequired}
        placeholder='property price'
        defaultValue={propertyData?.price}
        type='number'
      />

      <p>Location:</p>
      <input
        {...register("location", { required: isRequired })}
        defaultValue={propertyData?.location}
        required={isRequired}
        placeholder='property location'
        type='text'
      />

      <p>Room:</p>
      <input
        {...register("room", { required: isRequired })}
        defaultValue={propertyData?.room}
        required={isRequired}
        placeholder='property room'
        type='number'
      />

      <p>Bed:</p>
      <input
        {...register("bed", { required: isRequired })}
        defaultValue={propertyData?.bed}
        required={isRequired}
        placeholder='property bed'
        type='number'
      />

      <p>Area:</p>
      <input
        {...register("area", { required: isRequired })}
        defaultValue={propertyData?.area}
        required={isRequired}
        placeholder='property area'
        type='text'
      />
      <p>Image:</p>
      <input
        type='file'
        className='input-img'
        {...register("img", { required: isRequired })}
        required={isRequired}
        placeholder='property image'
      />
      <textarea
        className='col-span-3'
        {...register("description", { required: isRequired })}
        defaultValue={propertyData?.description}
        required={isRequired}
        cols={50}
        rows={10}
        placeholder='Some description'
      />
      <button className='btn'>SUBMIT</button>
    </form>
  );
};

export default PropertyForm;
