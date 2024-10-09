import { useEffect, useState } from "react";
import PropertyComponent from "../home/component/PropertyComponent";

const Property = () => {
  const [property, setProperty] = useState<Property[] | null>(null);

  useEffect(() => {
    fetch("https://server.switchcafebd.com/appartment/property")
      .then((res) => res.json())
      .then((data) => setProperty(data));
  }, []);
  return (
    <div className='mx-5 lg:m-10'>
      <PropertyComponent data={property} />
    </div>
  );
};

export default Property;
