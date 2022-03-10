import { useEffect, useState } from 'react';
import AboutComponent from './component/AboutComponent';
import Approach from './component/Approach';
import Banner from './component/Banner';
import PropertyComponent from './component/PropertyComponent';
import "./Home.css"

const Home = () => {
    const [property, setProperty] = useState<Property[] | null>(null);

    useEffect(() => {
        fetch(" https://apartment-sales.herokuapp.com/property/home")
            .then(res => res.json())
            .then(data => setProperty(data));
    },[])

    return (
        <div className='mx-5 lg:mx-16'>
            <Banner />
            <AboutComponent />
            <PropertyComponent
                header='Property Highlights'
                data={property}
            />
            <Approach />
        </div>
    );
}

export default Home