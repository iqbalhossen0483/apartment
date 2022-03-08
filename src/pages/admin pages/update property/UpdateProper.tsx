import React from 'react'
import PropertyForm from '../sharedcomponent/PropertyForm'

const UpdateProper = () => {

  function updateProperty(data: Property) {
    console.log("data from update", data);
  }
  return (
    <div>
      <PropertyForm
        action={updateProperty}
      />
    </div>
  );
}

export default UpdateProper