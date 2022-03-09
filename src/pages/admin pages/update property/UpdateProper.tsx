import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import PropertyForm from '../sharedcomponent/PropertyForm'

const UpdateProper = () => {
  const [property, setProperty] = useState<Property | null>(null);
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/property/${id}`)
            .then(res => res.json())
            .then(data => setProperty(data));
    }, []);

  function updateProperty(data: Property) {
    console.log("data from update", data);
  }
  return (
    <div>
      <PropertyForm
        propertyData={property}
        action={updateProperty}
      />
    </div>
  );
}

export default UpdateProper