import PropertyForm from "../sharedcomponent/PropertyForm";


const AddProperty = () => {
  
  function addProperty(data: Property) {
    console.log("data from add", data)
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