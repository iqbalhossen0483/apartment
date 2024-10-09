import { useState } from "react";
import { DebounceInput } from "react-debounce-input";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { bannerIamges } from "../services/services";

const Banner: () => JSX.Element = () => {
  const [property, setProperty] = useState<Property[] | null>();
  const navigate = useNavigate();

  function handleSearch(text: string) {
    if (text.length === 0) return setProperty(null);

    fetch(`https://server.switchcafebd.com/appartment/property/search/${text}`)
      .then((res) => res.json())
      .then((data) => {
        setProperty(data);
      });
  }

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
        {bannerIamges.map((item: string, index: number) => (
          <img className='slider-img' key={index} src={item} alt='' />
        ))}
      </Slider>

      <div className='caption-wrapper'>
        <p></p>

        <div className='col-span-3'>
          <p className='text-3xl lg:text-7xl font-semibold text-primary'>
            Apartments For Life
          </p>
          <p className='my-10 text-xl text-justify text-gray-100'>
            the heart of Brooklyn, in a vibrant neighborhood just east of
            Prospect Park,stands an eight-story, full-service, strikingly
            beautiful apartment building
          </p>
          <div className='text-xl mt-20'>
            <div className='w-[347px] ml-auto relative'>
              <DebounceInput
                className='py-1 md:py-3 px-3 rounded-l outline-none'
                type='text'
                placeholder='Search...'
                minLength={3}
                debounceTimeout={700}
                onChange={(e) => handleSearch(e.target.value)}
              />
              <button className='bg-primary text-white py-1 md:py-3 px-3 rounded-r '>
                - Search
              </button>

              <div
                className={`search-wrapper ${property ? "block" : "hidden"}`}
              >
                {property?.length ? (
                  property?.map((item) => (
                    <div
                      onClick={() => navigate(`/property/${item._id}`)}
                      className='item'
                      key={item._id}
                    >
                      <img className='h-14 w-full' src={item.imgUrl} alt='' />
                      <p className='col-span-2'>{item.name}</p>
                    </div>
                  ))
                ) : (
                  <p className='py-5'>No search result</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
