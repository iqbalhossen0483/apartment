import React, { useEffect, useState } from 'react'
import PropertyComponent from '../home/component/PropertyComponent'

const Property = () => {
  const [property, setProperty] = useState<Property[] | null>(null);

    useEffect(() => {
        fetch("http://localhost:5000/property")
            .then(res => res.json())
            .then(data => setProperty(data));
    },[])
  return (
      <div className='m-10'>
      <PropertyComponent
        data={property}
      />
      </div>
  )
}

export default Property