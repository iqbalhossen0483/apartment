import { FC } from 'react';
import { useForm } from 'react-hook-form';

interface Props{
  propertyData?: Property | null;
  action(data: Property): void
}

const PropertyForm:FC<Props> = ({propertyData = null, action}) => {
  const { handleSubmit, register, reset } = useForm<Property>();

  function onSubmit(data:Property) {
    action(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Add Property</h2>
      <p>Name:</p>
      <input
        {...register("name", { required: true })}
        placeholder="property name"
        type="text"
      />

      <p>Price:</p>
      <input
        {...register("price", { required: true })}
        placeholder="property price"
        type="number"
      />

      <p>Location:</p>
      <input
        {...register("location", { required: true })}
        placeholder="property location"
        type="text"
      />

      <p>Room:</p>
      <input
        {...register("room", { required: true })}
        placeholder="property room"
        type="number"
      />

      <p>Bed:</p>
      <input
        {...register("bed", { required: true })}
        placeholder="property bed"
        type="number"
      />

      <p>Area:</p>
      <input
        {...register("area", { required: true })}
        placeholder="property area"
        type="text"
      />
      <p>Image:</p>
      <input
        {...register("img", { required: true })}
        placeholder="property image"
        type="file"
      />
      <textarea
        className='col-span-3'
        {...register("description", { required: true })}
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