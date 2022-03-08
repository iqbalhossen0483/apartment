import { bannerIamges } from '../services/services';
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner: () => JSX.Element = () => {

    const settings = {
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        fade: true,
    };

    return (
        <div className='banner'>
            <Slider {...settings}>
                {
                    bannerIamges.map((item: string, index: number) => <img
                        key={index}
                        src={item}
                    />)
                }
            </Slider>

            <div className='caption-wrapper'>
                <p></p>
                <div className='col-span-3'>
                    <p className='text-7xl font-semibold'>
                        Apartments For Life
                    </p>
                    <p className='my-10 text-xl'>
                        the heart of Brooklyn, in a vibrant neighborhood just east of Prospect Park,stands an eight-story, full-service, strikingly beautiful apartment building
                    </p>
                    <div className='text-3xl mt-20'>
                        <input
                            className='p-5 rounded-l outline-none'
                            type="text"
                            placeholder='Search...'
                        />
                        <button
                        className='bg-primary text-white p-5 rounded-r '>
                            - Search
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner