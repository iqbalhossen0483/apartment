import PropertyForm from "../sharedcomponent/PropertyForm";

const AddProperty = () => {
  async function addProperty(data: Property): Promise<{ message: string }> {
    const form = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      if (key === "img") form.append("img", data.img[0]);
      else form.append(key, value);
    });

    const res = await fetch(
      "https://myserver-production-ddf8.up.railway.app/appartment/property",
      {
        method: "POST",
        body: form,
      }
    );
    const json = await res.json();
    if (json.insertedId) {
      return { message: "property added" };
    } else return { message: "Unable to add, Try again" };
  }

  return (
    <div className='px-10'>
      <PropertyForm header='Add Property' action={addProperty} />
    </div>
  );
};

export default AddProperty;
