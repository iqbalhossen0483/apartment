import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import useFirebase from '../../../Hooks/useFirebase';
import PropertyForm from '../sharedcomponent/PropertyForm'

const UpdateProper = () => {
  const [property, setProperty] = useState<Property | null>(null);
  const [update, setUpdate] = useState(false);
  const { id } = useParams();
  const firebase = useFirebase();
  const navigate = useNavigate();

    useEffect(() => {
        fetch(` https://apartment-sales.herokuapp.com/property/${id}`)
            .then(res => res.json())
            .then(data => setProperty(data));
    }, []);
  
  function makeFormData(data: Property): void | FormData {
    const form = new FormData();
    Object.keys(data).forEach((item) => {
      const value = data[item];
      if (value) {
        setUpdate(true);
      }

      if (item !== "img" && value) {
        form.append(item, value);
      }
    });

    if (data.img?.length) {
      setUpdate(true);
      form.append("img", data.img[0]);
      form.append("imgId", data.imgUrl!);
    };

    if (update) {
       return form;
    }
    else {
      return alert("You didn't update any field");
    }
  }

  function updateProperty(data: Property) {
    const updateData = makeFormData(data);
    if (updateData) {
      fetch(` https://apartment-sales.herokuapp.com/property/${id}`, {
        method: "PUT",
        body: updateData
      })
        .then(res => res.json())
        .then(data => {
          if (data.modifiedCount > 0) {
            alert("Update successfull");
            navigate("/deshboard/manageproperty");
          }
        });
    }
  }
  return (
    <div>
      <PropertyForm
        header='Update Property'
        propertyData={property}
        action={updateProperty}
      />
    </div>
  );
}

export default UpdateProper