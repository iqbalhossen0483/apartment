import { useState } from "react";
import PropertyForm from "../sharedcomponent/PropertyForm";


const AddProperty = () => {
  
  function addProperty(data: Property) {
    const form = new FormData();

    form.append("name", data.name);
    form.append("price", data.price.toString());
    form.append("location", data.location);
    form.append("room", data.room.toString());
    form.append("bed", data.bed.toString());
    form.append("area", data.area);
    if (data.img) {
      form.append("img", data.img[0]);
    }
    else {
      return alert("image is required");
    };
    fetch("http://localhost:5000/property", {
      method: "POST",
      body: form
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.insertedId) {
          alert("property added");
        }
      })
      .catch(err => {
      })
  }
  
  return (
    <div className='px-10'>
      <PropertyForm
        action={addProperty}
      />
    </div>
  );
}

export default AddProperty