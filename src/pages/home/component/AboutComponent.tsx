import { useState } from "react";

const AboutComponent = () => {
    const [rightAnimate, setRightAnimate] = useState(false);
    const item1 = document.querySelector(".about-img");
    const observer = new IntersectionObserver((e) => {
        if (e[0]) {
            if (e[0].isIntersecting) {
                setRightAnimate(true);
            }
            else {
                setRightAnimate(false);
            }
        }
    });
    
    if (item1) {
        observer.observe(item1);
    };

    return (
        <div className='about overflow-hidden'>
            <img
                className="z-0 h-full object-cover"
                src="https://i.ibb.co/tx9SCq6/shutterstock-169987028-720x400.jpg"
                alt=""
            />
            <div className='text-xl'>
                <h1 className='mt-5 md:mt-0'>
                    Something About Our Company
                </h1>
                <p className='text-justify mt-5'>
                    This splendid 170 sq m apartment that we offer for rent in the heart of Milan, in Corso Buenos Aires, is located on the third floor of a building with caretaker and lift, a stone’s throw from the Lima and Porta Venezia metro stops, in one of the most famous Milanese shopping streets.
                </p>
                <div className='grid grid-cols-3 gap-1 text-center my-14'>
                    <div>
                        <h2 className='text-6xl'>15+</h2>
                        <p>Years of Expirience</p>
                    </div>
                    <div>
                        <h2 className='text-6xl'>23</h2>
                        <p>Qualificated Realtors</p>
                    </div>
                    <div>
                        <h2 className='text-6xl'>849</h2>
                        <p>Best Propertys</p>
                    </div>
                </div>
                <img
                    className={`about-img ${rightAnimate && "right-animate"}`}
                    src="https://i.ibb.co/P6n1250/2014-08-12-00022-720x400.jpg"
                    alt=""
                />
            </div>
        </div>
    );
}

export default AboutComponent