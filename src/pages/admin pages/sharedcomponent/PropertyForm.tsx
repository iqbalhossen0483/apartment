import { FC, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

interface Props{
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
    }
    else {
      setIsRequired(false);
    }
  }, [header]);


  function onSubmit(data: Property) {
    action(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>{ header }</h2>
      <p>Name:</p>
      <input
        {...register("name", { required: isRequired })}
        defaultValue={propertyData?.name}
        placeholder="property name"
        type="text"
      />

      <p>Price:</p>
      <input
        {...register("price", { required: isRequired })}
        placeholder="property price"
        defaultValue={propertyData?.price}
        type="number"
      />

      <p>Location:</p>
      <input
        {...register("location", { required: isRequired })}
        defaultValue={propertyData?.location}
        placeholder="property location"
        type="text"
      />

      <p>Room:</p>
      <input
        {...register("room", { required: isRequired })}
        defaultValue={propertyData?.room}
        placeholder="property room"
        type="number"
      />

      <p>Bed:</p>
      <input
        {...register("bed", { required: isRequired })}
        defaultValue={propertyData?.bed}
        placeholder="property bed"
        type="number"
      />

      <p>Area:</p>
      <input
        {...register("area", { required: isRequired })}
        defaultValue={propertyData?.area}
        placeholder="property area"
        type="text"
      />
      <p>Image:</p>
      <input
        type="file"
        className='input-img'
        {...register("img")}
        placeholder="property image"
      />
      <textarea
        className='col-span-3'
        {...register("description", { required: isRequired })}
        defaultValue={propertyData?.description}
        cols={50}
        rows={10}
        placeholder="Some description"
      />
      <button>
          SUBMIT          
      </button>
    </form>
  );
}

export default PropertyForm