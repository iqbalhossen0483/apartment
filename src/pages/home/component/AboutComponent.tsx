import { useState, useEffect } from "react";
import Count from "./Count";
import { useInView } from "react-intersection-observer";

const AboutComponent = () => {
  const [rightAnimate, setRightAnimate] = useState(false);
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && !rightAnimate) {
      setRightAnimate(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <div className='about overflow-hidden'>
      <img className='z-0 h-full object-cover' src='/about.jpg' alt='' />
      <div>
        <h1 className='mt-5 md:mt-0'>Something About Our Company</h1>
        <p className='text-lg text-justify mt-5'>
          This splendid 170 sq m apartment that we offer for rent in the heart
          of Milan, in Corso Buenos Aires, is located on the third floor of a
          building with caretaker and lift, a stone’s throw from the Lima and
          Porta Venezia metro stops, in one of the most famous Milanese shopping
          streets.
        </p>
        <div className='grid grid-cols-3 gap-1 text-center my-14'>
          <div>
            <div className='text-4xl font-medium flex gap-2 justify-center'>
              <Count amount={15} />
              <p>+</p>
            </div>
            <p className='text-sm'>Years of Expirience</p>
          </div>
          <div>
            <h2 className='text-4xl'>
              <Count amount={23} />
            </h2>
            <p className='text-sm'>Qualificated Realtors</p>
          </div>
          <div>
            <h2 className='text-4xl'>
              <Count amount={895} />
            </h2>
            <p className='text-sm'>Best Propertys</p>
          </div>
        </div>
        <img
          ref={ref}
          className={`${rightAnimate && "right-animate"}`}
          src='/about1.jpg'
          alt=''
        />
      </div>
    </div>
  );
};

export default AboutComponent;
