import AboutComponent from './component/AboutComponent';
import Approach from './component/Approach';
import Banner from './component/Banner';
import PropertyComponent from './component/PropertyComponent';
import "./Home.css"

const Home = () => {
    return (
        <div>
            <Banner />
            <AboutComponent />
            <PropertyComponent header='Property Highlights' />
            <Approach />
        </div>
    );
}

export default Home