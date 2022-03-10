import useFirebase from "../../../Hooks/useFirebase";
import PropertyForm from "../sharedcomponent/PropertyForm";


const AddProperty = () => {
  
  function addProperty(data: Property) {
    if (data.img?.length === 0) {
      return alert("Image is required");
    };
    const form = new FormData();

    form.append("name", data.name);
    form.append("price", data.price.toString());
    form.append("location", data.location);
    form.append("room", data.room.toString());
    form.append("bed", data.bed.toString());
    form.append("area", data.area);
    form.append("description", data.description);
    if (data.img) {
      form.append("img", data.img[0]);
    }
    else {
      return alert("image is required");
    };
    fetch(" https://apartment-sales.herokuapp.com/property", {
      method: "POST",
      body: form
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          alert("property added");
        }
      })
      .catch(err => {
        
      });
  }
  
  return (
    <div className='px-10'>
      <PropertyForm
        header="Add Property"
        action={addProperty}
      />
    </div>
  );
}

export default AddProperty