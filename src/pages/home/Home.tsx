import { useEffect, useState } from 'react';
import AboutComponent from './component/AboutComponent';
import Approach from './component/Approach';
import Banner from './component/Banner';
import PropertyComponent from './component/PropertyComponent';
import "./Home.css"

const Home = () => {
    const [property, setProperty] = useState<Property[] | null>(null);

    useEffect(() => {
        fetch("http://localhost:5000/property/home")
            .then(res => res.json())
            .then(data => setProperty(data));
    },[])

    return (
        <div>
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