import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Approach = () => {
  const [doAnimate, setDoanimate] = useState(false);
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && !doAnimate) {
      setDoanimate(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <div ref={ref} className={`approach ${doAnimate && "approach-animate"}`}>
      <div className='images'>
        <img className='h-full' src='/approach.jpg' alt='' />
        <img className='float-img' src='/approach1.jpg' alt='' />
      </div>
      <div>
        <h1 className='mt-5 md:mt-0'>Apartment With Different Approach</h1>
        <p className='text-xl text-justify my-5 lg:my-16'>
          A perfect oasis for business executives and leisure travelers seeking
          both short- and long-term accommodation, our studio apartment is
          tastefully furnished and appointed to ensure ultimate comfort.From the
          rooftop terrace, down to the first floor gym, every detail of eight
          floors provides amenities filled with convenience, class
        </p>
        <button className='property-btn'>- Propertys</button>
      </div>
    </div>
  );
};

export default Approach;
